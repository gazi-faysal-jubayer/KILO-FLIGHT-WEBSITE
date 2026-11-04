/**
 * Builds public/kiloflight-card-stack.html from the vendored ThreeUI "Koi Studies"
 * document (public/synthralos-halftone.html, SHA-256 32cf6493…).
 *
 * Only content is swapped: the three card images (embedded as data URIs, because the
 * stack reads canvas pixels inside a null-origin sandbox), card copy, names and stamps,
 * panel colours, and an auto-swap timer. Layout, CSS, shaders and interactions stay
 * as authored. Every swap asserts its anchor exists exactly once.
 *
 * Run: node scripts/build-card-stack.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const SOURCE = 'public/synthralos-halftone.html';
const OUTPUT = 'public/kiloflight-card-stack.html';
const SOURCE_SHA = '32cf6493414a209eb02c607a4b2383021f731411a9aa19a28e49673f84107e21';

const CARDS = [
  {
    authored: 'Kōhaku',
    name: 'PHOENIX',
    copy: ['Built to finish', 'what Alpha started.'],
    stamp: '২৬',
    image: 'public/images/formula_car_hero.jpg',
    panel: '#1a1030', ink: '#f4e6c8', accent: '#f47b5c',
  },
  {
    authored: 'Shūsui',
    name: 'ALPHA',
    copy: ['First through', 'the gate at', 'FSAE Japan.'],
    stamp: '২৩',
    image: 'public/images/formula_track_action.jpg',
    panel: '#150c28', ink: '#f4e6c8', accent: '#f9c74f',
  },
  {
    authored: 'Utsuri',
    name: 'JUTE',
    copy: ['Golden fibre,', 'carbon-free', 'strength.'],
    stamp: 'পাট',
    image: 'public/images/formula_workshop.jpg',
    panel: '#241548', ink: '#f4e6c8', accent: '#d9573b',
  },
];

const AUTO_SWAP = `
      /* KILOFLIGHT: auto-swap. Rests while the visitor is interacting, hovering,
         dragging, on a hidden tab, or prefers reduced motion. */
      let kfLastInput = 0;
      let kfHovering = false;
      ["pointerdown", "keydown", "wheel"].forEach(type =>
        window.addEventListener(type, () => { kfLastInput = performance.now(); }, { passive: true }));
      scene.addEventListener("pointerenter", () => { kfHovering = true; });
      scene.addEventListener("pointerleave", () => { kfHovering = false; });
      window.setInterval(() => {
        if (document.hidden || transitioning || activeDrag || kfHovering) return;
        if (reducedMotion.matches || performance.now() - kfLastInput < 7000) return;
        sendToBack(topCard(), 1, 0);
      }, 5500);
`;

const once = (text, anchor, label) => {
  const count = text.split(anchor).length - 1;
  if (count !== 1) throw new Error(`${label}: expected 1 match, found ${count}`);
};

const replaceOnce = (text, anchor, value, label) => {
  once(text, anchor, label);
  return text.replace(anchor, () => value);
};

const replaceRegexOnce = (text, pattern, value, label) => {
  const matches = text.match(new RegExp(pattern.source, pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`));
  if (!matches || matches.length !== 1) throw new Error(`${label}: expected 1 match, found ${matches?.length ?? 0}`);
  return text.replace(pattern, () => value);
};

const escapeHtml = (value) =>
  value.replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[ch]);

/* the authored per-word reveal markup, one line per copy line */
function copyMarkup(lines) {
  let index = 0;
  return lines
    .map((line) => line.split(' ')
      .map((word) => `<span class="word-reveal"><span class="reveal-word" style="--reveal-index: ${index++}">${escapeHtml(word)}</span></span>`)
      .join(' '))
    .join('<br>');
}

async function imageDataUri(path) {
  const jpeg = await sharp(path).resize(676, 644, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  return `data:image/jpeg;base64,${jpeg.toString('base64')}`;
}

const source = await readFile(SOURCE);
const sha = createHash('sha256').update(source).digest('hex');
if (sha !== SOURCE_SHA) throw new Error(`Unexpected source hash ${sha}`);
let html = source.toString('utf8');

// 1. images and videos
const images = await Promise.all(CARDS.map((card) => imageDataUri(card.image)));
html = replaceRegexOnce(html, /const IMAGE_DATA = \[[\s\S]*?\];/, `const IMAGE_DATA = ${JSON.stringify(images)};`, 'IMAGE_DATA');
// an empty clip fails to decode, so the authored error path keeps the halftone still
html = replaceRegexOnce(html, /const VIDEO_DATA = \[[\s\S]*?\];/, `const VIDEO_DATA = ${JSON.stringify(CARDS.map(() => 'data:video/mp4;base64,'))};`, 'VIDEO_DATA');

// 2. per-card content, edited inside each card's own markup segment
const segmentEnd = html.indexOf('<p class="interaction-hint"');
for (let id = 0; id < CARDS.length; id += 1) {
  const card = CARDS[id];
  const start = html.indexOf(`data-card-id="${id}"`);
  const end = id + 1 < CARDS.length ? html.indexOf(`data-card-id="${id + 1}"`) : segmentEnd;
  if (start < 0 || end < 0 || end <= start) throw new Error(`card ${id}: segment not found`);
  let segment = html.slice(start, end);
  const sentence = card.copy.join(' ');
  const words = sentence.split(' ').length;

  segment = replaceOnce(segment, `data-name="${card.authored}"`, `data-name="${card.name}"`, `card ${id} data-name`);
  segment = replaceRegexOnce(segment, new RegExp(`aria-label="${card.authored}: [^"]*"`), `aria-label="${card.name}: ${escapeHtml(sentence)} Drag left for next or right for previous."`, `card ${id} shell label`);
  segment = replaceRegexOnce(segment, /style="--panel: [^"]*"/, `style="--panel: ${card.panel}; --ink: ${card.ink}; --accent-card: ${card.accent};"`, `card ${id} colours`);
  segment = replaceRegexOnce(segment, /<section class="copy-panel" aria-label="[^"]*">/, `<section class="copy-panel" aria-label="${escapeHtml(sentence)}">`, `card ${id} copy label`);
  segment = replaceRegexOnce(segment, /<p class="copy" aria-hidden="true">[\s\S]*?<\/p>/, `<p class="copy" aria-hidden="true">${copyMarkup(card.copy)}</p>`, `card ${id} copy`);
  segment = replaceOnce(segment, `<div class="brand-lockup" aria-label="${card.authored}">`, `<div class="brand-lockup" aria-label="${card.name}">`, `card ${id} lockup`);
  segment = replaceRegexOnce(segment, new RegExp(`style="--reveal-index: \\d+">${card.authored}</span>`), `style="--reveal-index: ${words}">${card.name}</span>`, `card ${id} wordmark`);
  segment = replaceRegexOnce(segment, /style="--reveal-index: \d+" aria-hidden="true"><span lang="ja">[^<]*<\/span>/, `style="--reveal-index: ${words + 1}" aria-hidden="true"><span lang="bn">${card.stamp}</span>`, `card ${id} stamp`);

  html = html.slice(0, start) + segment + html.slice(end);
}

// 3. page field in the site's dusk colour instead of the authored near-black
html = replaceOnce(html, '--field: #10100e;', '--field: #0b0819;', 'field colour');

// the authored size assumes a full window; inside our ~600px frame the card would be ~160px wide
html = replaceOnce(html, 'width: min(26.40625vw, 46.94444vh);', 'width: min(44vw, 70vh);', 'stack size');

// 4. document labels
html = replaceRegexOnce(html, /<title>[^<]*<\/title>/, '<title>KILOFLIGHT — Machines Card Stack</title>', 'title');
html = replaceOnce(html, 'aria-label="Three interactive Japanese koi studies"', 'aria-label="Three interactive KILOFLIGHT cards: Phoenix, Alpha and jute composite"', 'scene label');

// 5. auto-swap, inside the authored IIFE so it can use its own stack controls
html = replaceOnce(html, 'scene.classList.add("reveal-enabled");\n      updateStack();', `scene.classList.add("reveal-enabled");\n      updateStack();${AUTO_SWAP}`, 'auto-swap anchor');

await writeFile(OUTPUT, html);
console.log(`${OUTPUT}: ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB`);

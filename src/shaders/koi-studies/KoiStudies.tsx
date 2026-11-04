import { useState, type CSSProperties } from "react";

const KOI_STUDIES_SOURCE_URL = "/synthralos-halftone.html";

export type KoiStudiesProps = {
  className?: string;
  style?: CSSProperties;
  /* KILOFLIGHT patch: point the frame at a derived document; defaults to the authored one */
  src?: string;
  title?: string;
  label?: string;
  /* our own same-origin document needs allow-same-origin to paint inside the frame */
  sandbox?: string;
  /* inline the document instead of navigating the frame (the same path the filmstrip uses) */
  srcDoc?: string;
};

export function KoiStudies({ className = "", style, src = KOI_STUDIES_SOURCE_URL, title = "Koi Studies — Interactive Card Stack", label = "Interactive stack of three Japanese koi studies", sandbox = "allow-scripts", srcDoc }: KoiStudiesProps) {
  const [ready, setReady] = useState(false);

  return (
    <div
      className={`threeui-background koi-studies${className ? ` ${className}` : ""}`}
      aria-label={label}
      data-state={ready ? "ready" : "loading"}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#10100e",
        pointerEvents: "auto",
        ...style,
      }}
    >
      <iframe
        title={title}
        src={srcDoc ? undefined : src}
        srcDoc={srcDoc}
        sandbox={sandbox}
        allow="autoplay"
        loading="eager"
        onLoad={() => setReady(true)}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#10100e",
        }}
      />
    </div>
  );
}

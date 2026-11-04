'use client';

import { usePathname, useRouter } from 'next/navigation';
import { AnimatedTopDock, type DockItem } from '@/shaders/animated-top-dock/AnimatedTopDock';

/* 7x7 pixel glyphs on whole units, matching the dock's own RETRO_ITEMS lattice */
const NAV_ITEMS: readonly DockItem[] = [
  {
    id: 'home', label: 'HOME', href: '/',
    icon: <><rect x="3" y="0" width="1" height="1" /><rect x="2" y="1" width="3" height="1" /><rect x="1" y="2" width="5" height="1" /><rect x="0" y="3" width="7" height="1" /><rect x="1" y="4" width="2" height="3" /><rect x="4" y="4" width="2" height="3" /></>,
  },
  {
    id: 'team', label: 'TEAM', href: '/team',
    icon: <><rect x="1" y="0" width="2" height="2" /><rect x="4" y="0" width="2" height="2" /><rect x="0" y="3" width="3" height="4" /><rect x="4" y="3" width="3" height="4" /></>,
  },
  {
    id: 'subteams', label: 'SUBTEAMS', href: '/subteams',
    icon: <><rect x="2" y="0" width="3" height="1" /><rect x="2" y="6" width="3" height="1" /><rect x="0" y="2" width="1" height="3" /><rect x="6" y="2" width="1" height="3" /><rect x="1" y="1" width="5" height="1" /><rect x="1" y="5" width="5" height="1" /><rect x="1" y="2" width="1" height="3" /><rect x="5" y="2" width="1" height="3" /><rect x="3" y="3" width="1" height="1" /></>,
  },
  {
    id: 'cars', label: 'CARS', href: '/cars',
    icon: <><rect x="2" y="1" width="3" height="1" /><rect x="1" y="2" width="5" height="1" /><rect x="0" y="3" width="7" height="2" /><rect x="1" y="5" width="2" height="2" /><rect x="4" y="5" width="2" height="2" /></>,
  },
  {
    id: 'sponsorship', label: 'SPONSORS', href: '/sponsorship',
    icon: <><rect x="3" y="0" width="1" height="2" /><rect x="0" y="2" width="7" height="1" /><rect x="1" y="3" width="5" height="1" /><rect x="2" y="4" width="3" height="1" /><rect x="1" y="5" width="2" height="2" /><rect x="4" y="5" width="2" height="2" /></>,
  },
  {
    id: 'contact', label: 'CONTACT', href: '/contact',
    icon: <><rect x="0" y="1" width="7" height="1" /><rect x="0" y="5" width="7" height="1" /><rect x="0" y="2" width="1" height="3" /><rect x="6" y="2" width="1" height="3" /><rect x="1" y="2" width="1" height="1" /><rect x="5" y="2" width="1" height="1" /><rect x="2" y="3" width="3" height="1" /></>,
  },
];

function activeIdFor(pathname: string) {
  if (pathname === '/') return 'home';
  return NAV_ITEMS.find((item) => item.href !== '/' && pathname.startsWith(item.href!))?.id ?? '';
}

export default function Navbar() {
  const pathname = usePathname() ?? '/';
  const router = useRouter();

  if (pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <div className="site-dock">
      <AnimatedTopDock
        variant="retro"
        pixelSize={4}
        levels={7}
        noise={1.0}
        scanlines={0.32}
        speed={1.0}
        proximity={132}
        widthGrowth={54}
        items={NAV_ITEMS}
        activeId={activeIdFor(pathname)}
        brand={<span className="site-dock__word">KILOFLIGHT<span className="site-dock__sub">//KUET</span></span>}
        cta={{ label: 'JOIN', href: '/join-us' }}
        onNavigate={(href) => router.push(href)}
      />
    </div>
  );
}

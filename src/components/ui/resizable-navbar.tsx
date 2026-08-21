'use client';

import { cn } from '@/lib/utils';
import { IconMenu2, IconX } from '@tabler/icons-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
  pathname?: string;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.header
      ref={ref}
      className={cn('resizable-nav-wrapper', className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.header>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(20px)' : 'blur(8px)',
        boxShadow: visible
          ? '4px 4px 0 #0F172A, 0 10px 30px rgba(0, 0, 0, 0.08)'
          : '3px 3px 0 #0F172A',
        width: visible ? '72%' : '100%',
        y: visible ? 16 : 8,
        borderColor: '#0F172A',
        background: visible ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
      }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 32,
      }}
      style={{
        maxWidth: '1200px',
        minHeight: '62px',
        padding: '8px 24px',
        borderRadius: '9999px',
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
      className={cn('resizable-desktop-body', className)}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick, pathname }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.nav
      onMouseLeave={() => setHovered(null)}
      className={cn('resizable-nav-items-container', className)}
    >
      {items.map((item, idx) => {
        const isActive = pathname === item.link;
        return (
          <Link
            key={`link-${idx}`}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onClick={onItemClick}
            className="resizable-nav-link"
            style={{
              color: isActive ? '#FF2A2A' : hovered === idx ? '#0F172A' : '#334155',
            }}
          >
            {hovered === idx && (
              <motion.div
                layoutId="nav-hover-pill"
                className="absolute inset-0 h-full w-full rounded-full"
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '9999px',
                  background: 'rgba(255, 42, 42, 0.1)',
                  border: '1.5px solid #FF2A2A',
                  boxShadow: '2px 2px 0 #0F172A',
                  zIndex: 0,
                }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span style={{ position: 'relative', zIndex: 10 }}>{item.name}</span>
          </Link>
        );
      })}
    </motion.nav>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(20px)' : 'blur(10px)',
        boxShadow: visible
          ? '4px 4px 0 #0F172A, 0 10px 25px rgba(0, 0, 0, 0.08)'
          : '3px 3px 0 #0F172A',
        width: visible ? '92%' : '100%',
        y: visible ? 12 : 8,
        borderColor: '#0F172A',
        background: visible ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.92)',
      }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 32,
      }}
      style={{
        padding: '10px 18px',
        borderRadius: '16px',
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
      className={cn('resizable-mobile-body', className)}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
      className={className}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle navigation menu"
      style={{
        background: 'transparent',
        border: 'none',
        color: '#0F172A',
        cursor: 'pointer',
        padding: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
    </button>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          style={{
            overflow: 'hidden',
            width: '100%',
            marginTop: '12px',
            borderTop: '2px solid #0F172A',
            paddingTop: '12px',
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const NavbarLogo = ({
  src = '/images/logo.png',
  alt = 'Team Kilo Flight',
  href = '/',
}: {
  src?: string;
  alt?: string;
  href?: string;
}) => {
  return (
    <Link
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        flexShrink: 0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={130}
        height={38}
        style={{
          height: '38px',
          width: 'auto',
          objectFit: 'contain',
          display: 'block',
          filter:
            'drop-shadow(1.5px 0 0 #0F172A) drop-shadow(-1.5px 0 0 #0F172A) drop-shadow(0 1.5px 0 #0F172A) drop-shadow(0 -1.5px 0 #0F172A) drop-shadow(1.5px 1.5px 0 #0F172A) drop-shadow(-1.5px -1.5px 0 #0F172A) drop-shadow(1.5px -1.5px 0 #0F172A) drop-shadow(-1.5px 1.5px 0 #0F172A) drop-shadow(2px 2px 4px rgba(0,0,0,0.35))',
        }}
        priority
      />
    </Link>
  );
};

export const NavbarButton = ({
  children,
  href,
  onClick,
  className,
  variant,
  style,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: string;
  style?: React.CSSProperties;
}) => {
  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={cn('resizable-btn', className)}
      style={{
        background: '#FF2A2A',
        color: '#FFFFFF',
        border: '2px solid #0F172A',
        boxShadow: '3px 3px 0 #0F172A',
        ...style,
      }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={{ background: 'none', border: 'none', padding: 0 }}
    >
      {content}
    </button>
  );
};

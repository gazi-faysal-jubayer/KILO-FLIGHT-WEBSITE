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
          ? '0 12px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(0, 229, 255, 0.18)'
          : '0 4px 15px rgba(0, 0, 0, 0.3)',
        width: visible ? '72%' : '100%',
        y: visible ? 16 : 8,
        borderColor: visible ? 'rgba(0, 229, 255, 0.35)' : 'rgba(255, 255, 255, 0.1)',
        background: visible ? 'rgba(10, 15, 29, 0.92)' : 'rgba(7, 11, 20, 0.7)',
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
        borderWidth: '1px',
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
              color: isActive ? '#00E5FF' : hovered === idx ? '#FFFFFF' : '#CBD5E1',
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
                  background: 'rgba(0, 229, 255, 0.14)',
                  border: '1px solid rgba(0, 229, 255, 0.35)',
                  boxShadow: '0 0 15px rgba(0, 229, 255, 0.25)',
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
          ? '0 12px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 229, 255, 0.15)'
          : '0 4px 15px rgba(0, 0, 0, 0.4)',
        width: visible ? '92%' : '100%',
        y: visible ? 12 : 8,
        borderColor: visible ? 'rgba(0, 229, 255, 0.35)' : 'rgba(255, 255, 255, 0.1)',
        background: visible ? 'rgba(10, 15, 29, 0.95)' : 'rgba(7, 11, 20, 0.85)',
      }}
      transition={{
        type: 'spring',
        stiffness: 240,
        damping: 32,
      }}
      style={{
        padding: '10px 18px',
        borderRadius: '16px',
        borderWidth: '1px',
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
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      className={className}
    >
      {children}
    </div>
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
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100%',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            overflow: 'hidden',
          }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
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
        color: '#00E5FF',
        cursor: 'pointer',
        padding: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {isOpen ? <IconX size={26} /> : <IconMenu2 size={26} />}
    </button>
  );
};

export const NavbarLogo = () => {
  return (
    <Link
      href="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        position: 'relative',
        zIndex: 20,
      }}
    >
      <Image
        src="/images/logo.png"
        alt="Team Kilo Flight"
        width={150}
        height={44}
        style={{
          width: 'auto',
          height: '40px',
          objectFit: 'contain',
          display: 'block',
        }}
        priority
      />
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  onClick,
  style,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient';
  onClick?: () => void;
  style?: React.CSSProperties;
} & (
  | React.ComponentPropsWithoutRef<'a'>
  | React.ComponentPropsWithoutRef<'button'>
)) => {
  const isPrimary = variant === 'primary';

  return (
    <Tag
      href={href || undefined}
      onClick={onClick}
      className={cn('resizable-btn', className)}
      style={{
        background: isPrimary ? 'var(--primary-red)' : 'transparent',
        color: '#FFFFFF',
        border: isPrimary ? '1px solid #FF5555' : '1px solid rgba(0, 229, 255, 0.4)',
        boxShadow: isPrimary
          ? '0 0 18px var(--primary-red-glow), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          : '0 0 10px var(--cyan-glow)',
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

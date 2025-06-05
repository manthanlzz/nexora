'use client';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';
import MenuButton from "@/components/marketing/MenuButton";
import Stairs from "@/components/marketing/Stairs";
import Menu from "@/components/marketing/Menu";
import styles from "@/components/marketing/navbar.module.scss";
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuIsOpen ? 'hidden' : '';
  }, [menuIsOpen]);

  return (
    <>
      <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-between px-6">
        {/* Logo */}
       <Link href="/" className="flex items-center gap-2 text-white font-semibold text-xl">
  <svg
    width="24"
    height="24"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="32" y1="4" x2="32" y2="60" />
      <line x1="4" y1="32" x2="60" y2="32" />
      <line x1="12" y1="12" x2="52" y2="52" />
      <line x1="52" y1="12" x2="12" y2="52" />
    </g>
  </svg>
  Nexora
</Link>

        {/* Remove desktop nav */}

        {/* Menu button (visible all screens) */}
        <MenuButton openMenu={() => setMenuIsOpen(true)} />
      </header>

      {/* Overlay menu + stairs */}
      <AnimatePresence mode="wait">
        {menuIsOpen && (
          <motion.div
            key="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.menuWrapper}
          >
            <Stairs />
            <Menu closeMenu={() => setMenuIsOpen(false)} links={NAV_LINKS} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

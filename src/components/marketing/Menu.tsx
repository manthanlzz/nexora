'use client';

import styles from './menu.module.scss';
import Link from 'next/link';

interface LinkItem {
  name: string;
  href: string;
}

interface MenuProps {
  closeMenu: () => void;
  links: LinkItem[];
}

export default function Menu({ closeMenu, links }: MenuProps) {
  return (
    <nav className={styles.menuContainer} aria-label="Main menu">
      <button
        aria-label="Close menu"
        className={styles.closeButton}
        onClick={closeMenu}
      >
        &times;
      </button>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={styles.menuLink}
          onClick={closeMenu}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

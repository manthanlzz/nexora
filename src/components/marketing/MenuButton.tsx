'use client';
import styles from './menuButton.module.scss';

interface MenuButtonProps {
  openMenu: () => void;
}

export default function MenuButton({ openMenu }: MenuButtonProps) {
  return (
    <button
      onClick={openMenu}
      className={styles.button}
      aria-label="Open menu"
      type="button"
    >
      <div className={styles.background}></div>
      <svg
        width="56"
        height="7"
        viewBox="0 0 56 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <line x1="56" y1="0.5" x2="0" y2="0.5" stroke="white" />
        <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="white" />
      </svg>
     
    </button>
  );
}

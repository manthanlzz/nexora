'use client';

import styles from './stairs.module.scss';
import { motion } from 'framer-motion';

const heightVariants = {
  initial: { height: 0 },
  enter: (i: number) => ({
    height: '100%',
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
  }),
  exit: (i: number) => ({
    height: 0,
    transition: { duration: 0.3, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

const backgroundVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 0.5,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

const mountAnim = { initial: 'initial', animate: 'enter', exit: 'exit' };

export default function Stairs() {
  return (
    <motion.div className={styles.stairs}>
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          variants={heightVariants}
          {...mountAnim}
          custom={4 - index}
          className={styles.stair}
        />
      ))}
      <motion.div
        variants={backgroundVariants}
        {...mountAnim}
        className={styles.background}
      />
    </motion.div>
  );
}

"use client";

import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.scss";

interface AnimatedTextProps {
  text: string;
  className?: string;
  id?: string;
  delay?: number;
  targetedElement?: "line" | "word";
  duration?: number;
  staggerDuration?: number;
  ease?: number[]; // framer-motion easing array
  opacity?: number;
  once?: boolean; // unused here, but kept for API consistency
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  id,
  delay = 0,
  targetedElement = "line",
  duration = 0.6,
  staggerDuration = 0.1,
  ease = [0.76, 0, 0.24, 1],
  opacity = 1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hiddenMeasureRef = useRef<HTMLDivElement>(null);

  const [renderedLines, setRenderedLines] = useState<string[][]>([]);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Wait for fonts to be ready before measuring
  useEffect(() => {
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  const rawLinesRef = useRef<string[][]>([]);

  useLayoutEffect(() => {
    if (!fontsLoaded || !hiddenMeasureRef.current) return;

    const words = text.split(" ");
    hiddenMeasureRef.current.innerHTML = words
      .map((word, index) => `<span class="${styles.word}" data-index="${index}">${word} </span>`)
      .join("");

    const wordElements = Array.from(hiddenMeasureRef.current.querySelectorAll(`.${styles.word}`));

    let currentLineTop: number | null = null;
    let line: string[] = [];
    const newLines: string[][] = [];

    wordElements.forEach((wordEl) => {
      const { top } = wordEl.getBoundingClientRect();
      if (currentLineTop === null) currentLineTop = top;
      if (top !== currentLineTop) {
        newLines.push(line);
        line = [];
        currentLineTop = top;
      }
      line.push(wordEl.textContent?.trim() || "");
    });
    if (line.length) newLines.push(line);

    // Only update if changed
    function arraysEqual(a: string[][], b: string[][]) {
      return (
        a.length === b.length &&
        a.every((line, i) => line.join(" ") === b[i].join(" "))
      );
    }

    if (!arraysEqual(newLines, rawLinesRef.current)) {
      rawLinesRef.current = newLines;
      setRenderedLines(newLines);
    }
  }, [text, fontsLoaded]);

  // Variants for framer-motion animations
  const lineVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration,
        delay: delay + i * staggerDuration,
        ease,
      },
    }),
  };

  const wordVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: duration * 0.7,
        delay: delay + i * staggerDuration,
        ease,
      },
    }),
  };

  return (
    <h1
      style={{ opacity, position: "relative" }}
      ref={containerRef}
      id={id}
      aria-label={text}
      className={className}
    >
      <span className={styles.text}>
        {renderedLines.map((lineWords, lineIndex) => {
          if (targetedElement === "word") {
            return (
              <span key={lineIndex} className={`${styles.line} ${styles.wrapper_overflow}`}>
                <motion.span
                  className={styles.line_wrapper}
                  initial="hidden"
                  animate="visible"
                  custom={lineIndex}
                  variants={lineVariant}
                >
                  {lineWords.map((word, wordIndex) => (
                    <motion.span
                      key={wordIndex}
                      className={styles.word_wrapper}
                      variants={wordVariant}
                      custom={wordIndex}
                      initial="hidden"
                      animate="visible"
                      style={{ display: "inline-block" }}
                    >
                      {word + (wordIndex < lineWords.length - 1 ? "\u00A0" : "")}
                    </motion.span>
                  ))}
                </motion.span>
              </span>
            );
          } else {
            // Animate by line
            return (
              <span key={lineIndex} className={`${styles.line} ${styles.wrapper_overflow}`}>
                <motion.span
                  className={styles.line_wrapper}
                  initial="hidden"
                  animate="visible"
                  custom={lineIndex}
                  variants={lineVariant}
                >
                  {lineWords.join(" ")}
                </motion.span>
              </span>
            );
          }
        })}
      </span>

      {/* Visually hidden placeholder for layout */}
      <span className={styles.placeholder} aria-hidden="true">
        {text}
      </span>

      {/* Offscreen measurement element */}
      <span ref={hiddenMeasureRef} className={styles.measure} aria-hidden="true" />
    </h1>
  );
};

export default AnimatedText;

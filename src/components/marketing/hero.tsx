"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import Container from "../global/container";

const Hero = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const imageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 0.95", "end start"], // 👈 kicks in right after slight scroll
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Hero Text */}
 <div className="min-h-screen px-6 mt-20 sm:px-12 md:px-24 lg:px-32 py-24 relative z-10">
  {/* Heading */}
  <div>
    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-left">
      Harness the full <span className="text-blue-500">power of AI</span> to drive <br />smarter decisions.<br />
       Deliver hyper-personalized<br /> experiences at scale.<br />
        
     
    </h1>
  </div>

  {/* Paragraph – slightly pushed down & right-aligned */}
  <div className="mt-40 flex justify-end">
  <p className="text-gray-400 text-right max-w-3xl text-sm md:text-base lg:text-2xl leading-relaxed">
  <span className="block sm:inline">
    AI is no longer a tool it's the strategist,
  </span>
  <span className="block sm:inline">
    the analyst, and the engine. It never sleeps.
  </span>
  <span className="block sm:inline">
    It never slows down. It learns, adapts, and scales.
  </span>
  <span className="block sm:inline">
    And it's here to build brands that don't just grow they dominate.
  </span>
</p>



  </div>
</div>






      {/* Image: hidden at first, appears on slight scroll */}
      <div
        ref={imageRef}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen mt-12"
      >
        <motion.div
          style={{ y, opacity, scale }}
          className="w-full h-full"
        >
          <Image
            src="/images/dashboard.png"
            alt="Dashboard"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

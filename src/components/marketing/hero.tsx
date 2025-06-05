"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";

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
    offset: ["start 0.95", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Hero Text */}
      <div className="px-6 sm:px-12 md:px-24 lg:px-32 pt-24 pb-10 relative z-10">
        <h1 className="text-4xl lg:pb-40 sm:text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-left">
          Harness the full <span className="text-blue-500">power of AI</span> <br />to drive 
          smarter decisions.<br />
          Deliver hyper-personalized<br /> experiences at scale.
        </h1>

        <div className="mt-10 flex justify-end">
          <p className="text-gray-400 text-right max-w-3xl text-sm md:text-base lg:pb-20 lg:text-2xl leading-relaxed">
            <span className="block sm:inline">
              AI is no longer a tool — it's the strategist,
            </span>
            <span className="block sm:inline">
              the analyst, and the engine. It never sleeps.
            </span>
            <span className="block sm:inline">
              It never slows down. It learns, adapts, and scales.
            </span>
            <span className="block sm:inline">
              And it's here to build brands that don't just grow — they dominate.
            </span>
          </p>
        </div>
      </div>

      {/* Dashboard Image with Glow & Backdrop */}
      <div ref={imageRef} className="relative w-full py-32 px-4 md:px-20 z-10">
        {/* Glow Behind */}
        <div
          className="absolute left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 opacity-30 blur-[5rem] z-0"
          style={{
            top: "10%",
            width: "80%",
            height: "40%",
          }}
        ></div>

        {/* Image Container */}
        <motion.div
          style={{ y, opacity, scale }}
          className="relative z-10 -m-2 rounded-xl p-2 ring-1 ring-inset ring-blue-500/30 bg-opacity-50 backdrop-blur-3xl"
        >
          <Image
            src="/images/dashboard.png"
            alt="Dashboard"
            width={1200}
            height={800}
            quality={100}
            className="rounded-md lg:rounded-xl bg-white/10 ring-1 ring-border w-full h-auto"
            priority
          />

          {/* Gradient bottom overlays */}
          <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-black z-20"></div>
          <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-black z-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

"use client"
import { useRef } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Features = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // ✅ Detect if desktop
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // ✅ Raw transform values
  const rawScaleHeader = useTransform(scrollYProgress, [0, 1], isDesktop ? [1, 0.8] : [1, 1]);
  const rawScaleGrid = useTransform(scrollYProgress, [0, 1], isDesktop ? [0.8, 1] : [1, 1]);

  // ✅ Smooth out the motion with spring physics
  const springConfig = { stiffness: 60, damping: 15, mass: 1 };
  const scaleHeader = useSpring(rawScaleHeader, springConfig);
  const scaleGrid = useSpring(rawScaleGrid, springConfig);

  return (
    <motion.div
      ref={container}
      className="relative flex flex-col items-center justify-center w-full py-12 px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* Section Header */}
      <motion.div
        className="flex flex-col items-center text-center max-w-2xl mx-auto"
        style={{ scale: scaleHeader }}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
          AI-Powered marketing <br /> made <span className="text-blue-500">simple</span>
        </h2>
        <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
          Transform your marketing with AI-powered automation. Create campaigns faster, generate better content, and make smarter decisions in minutes.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 relative overflow-visible px-4 sm:px-6 md:px-12 lg:px-20"
        style={{ scale: scaleGrid }}
      >
        {FEATURES.map((feature, index) => (
          <Container
            key={feature.title}
            delay={0.1 + index * 0.1}
            className={cn(
              "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors p-4 sm:p-6 lg:p-8"
            )}
          >
            <MagicCard
              gradientFrom="#38bdf8"
              gradientTo="#3b82f6"
              className="p-6 sm:p-8 lg:p-10 lg:rounded-3xl"
              gradientColor="rgba(59,130,246,0.1)"
            >
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <feature.icon className="size-5 text-primary" />
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
              <div className="mt-6 w-full bg-card/50 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </MagicCard>
          </Container>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Features;

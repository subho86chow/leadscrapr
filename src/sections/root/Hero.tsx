"use client";

import ArrorIcon from "@/assets/arrow-right.svg";
import dashboardImage from "@/assets/hero.webp";
import FeaturesPillLeft from "@/sections/root/Features-pill";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end','end start']
  });
  const translateY = useTransform(scrollYProgress,[1,0],[0,100])

  return (
    <section ref={sectionRef} className="inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(150%_150%_at_50%_10%,#eaeefe_40%,#183ec2_100%)] select-none">
      <div className=""></div>
      <div className="p-5 sm:p-5 md:py-20 md:px-28">
        <div className="mt-10 sm:mt-10 md:mt-30">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl py-2 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text">
            Get highly qualified leads
            <br /> in just few clicks
          </h1>
          <FeaturesPillLeft/>
          <p className="text-sm sm:text-sm md:text-xl font-bold text-center text-black/40 py-5 sm:py-5 md:py-5 px-5 sm:px-5 md:px-20">
            Say goodbye to tedious searches and hello to effortless growth with
            Leadscraper.
          </p>
          <div className="flex items-center justify-center">
            <button className="btn btn-primary gap-1 text-xs sm:text-xs md:text-base shadow-lg">
              Get Started
              <ArrorIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="overflow-visible">
          <motion.img src={dashboardImage.src} alt="cog image" className="rounded-lg shadow-lg -translate-y-[-100px] sm:-translate-y-[-100px] md:-translate-y-[-50px]" style={{translateY,}}/>
        </div>
      </div>
    </section>
  );
};

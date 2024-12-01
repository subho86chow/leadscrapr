"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ArrorIcon from "@/assets/arrow-right.svg";
import rocket from "@/assets/rocket.png";
import magnifyingGlass from "@/assets/magnifyingglass.png";
import { useRef } from "react";


export const Call_to_action = () => {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end','end center']
  });
  const translateY = useTransform(scrollYProgress,[1,0],[-200,200])

    return (
        <section ref={sectionRef} className="select-none inset-0 -z-10 h-full w-full [background:radial-gradient(180%_180%_at_50%_0%,#eaeefe_30%,#183ec2_100%)]">
        <div className="p-5 sm:p-5 md:py-20 md:px-28">
        <div className="hidden lg:block absolute">
          <motion.img src={magnifyingGlass.src} alt="magnifyingGlass" className="md:w-[9rem] lg:w-[13rem] relative md:left-[65vw] md:top-[14vw] lg:left-[75vw] lg:top-[8vw]" style={{translateY,}}/>
          <motion.img src={rocket.src} alt="rocket" className="md:w-[9rem] lg:w-[12rem] relative md:left-[-10vw] md:top-[-2vw] lg:left-[-5vw] lg:top-[-4vw]" style={{translateY,}}/>
        </div>
          <div className="mt-10 sm:mt-10 md:mt-30">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl py-2 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text">
              Get highly qualified leads
              <br /> in just few clicks
            </h1>
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
        </div>
      </section>
    )
};


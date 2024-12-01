"use client";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dashboardImage2 from "@/assets/dashboard.webp";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FcTemplate, FcGlobe, FcSearch, FcSms, FcFinePrint, FcHighPriority } from "react-icons/fc";





export const Features = () => {

  const sectionRef = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end','center end']
  });
  const opacityX = useTransform(scrollYProgress,[0,1],[0.5,1])
  const rotatex = useTransform(scrollYProgress,[0,1],[15,0])

  return (
    <section id="features"  className="relative w-full pb-10 overflow-x-clip bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] select-none">

      <div className="py-4">
        <div className="">
          <div className="flex gap-2 justify-center items-center mt-24">
          <Badge
            className="text-sm sm:text-sm py-0.5 md:py-1.5 sm:py-0.5 text-center font-normal bg-[#EAEEFE] rounded-full border border-black/20 transition-colors flex justify-center shadow-md items-center gap-2 whitespace-nowrap text-black hover:bg-transparent"
          >
          Boost your productivity
          </Badge>
          </div>
          <div className="mt-5 container">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl py-2 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text">
              Powerful Way to Supercharge Your Lead Generation
            </h2>
            <p className="text-sm sm:text-sm md:text-xl font-bold text-center text-black/40 py-5 sm:py-5 md:py-5 px-5 sm:px-5 md:px-20">
              Leadscraper is packed with tools to streamline your search for
              qualified leads.
            </p>
          </div>
        </div>
        <div className="p-5 sm:p-5 md:py-20 md:px-28">
          <motion.div
          style={{
            opacity: opacityX,
            rotateX: rotatex,
            transformPerspective: "800px",
          }}
          >
            <Image ref={sectionRef} src={dashboardImage2} alt="cog image" className="rounded-lg shadow-lg" />
          </motion.div>
        </div>
      </div>

      <div className="pt- md:pt-20">
        <div className="">
          <div className="mt-5 container">
            <h2 className="text-2xl sm:text-3xl md:text-6xl py-2 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text">
            All-in-One Solution for Lead Generation
            </h2>
            <p className="text-sm sm:text-sm md:text-xl font-bold text-center text-black/40 py-5 sm:py-5 md:py-5 px-5 sm:px-5 md:px-20">
            Leadscraper combines cutting-edge tools that help you find the right leads, analyze them instantly, and convert them into valuable opportunities.
            </p>
          </div>
        </div>
        <div className="p-5 sm:p-5 md:py-10 md:px-28 mt-5 sm:mt-5 md:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="shadow-md">
                <CardHeader className="text-md sm:text-md md:text-xl font-bold flex-row items-center gap-3">
                <FcGlobe className="w-6 h-6 md:w-8 md:h-8 mt-2 rounded-full"/>
                  <p>Get businesses across the world map</p>
                </CardHeader>
                <CardDescription className="px-7 pb-8 font-medium text-sm md:text-md text-slate-700">
                You can locate any type of businesses worldwide by dragging a selection circle anywhere on the world map.
                </CardDescription>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="text-md sm:text-md md:text-xl font-bold flex-row items-center gap-3">
                <FcTemplate className="w-6 h-6 md:w-8 md:h-8 mt-2 rounded-full"/>
                  <p>List businesses without websites</p>
                </CardHeader>
                <CardDescription className="px-7 pb-8 font-medium text-sm md:text-md text-slate-700">
                Using only a toggle to filter them: get businesses without websites or just show all of them. One click to make the change!
                </CardDescription>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="text-md sm:text-md md:text-xl font-bold flex-row items-center gap-3">
                <FcSearch className="w-6 h-6 md:w-8 md:h-8 mt-2 rounded-full"/>
                  <p>Search business data by type or name</p>
                </CardHeader>
                <CardDescription className="px-7 pb-8 font-medium text-sm md:text-md text-slate-700">
                Enter a keyword or use a dropdown to find businesses by type or name. For instance, you can search for accountants in a specific area near London.
                </CardDescription>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="text-md sm:text-md md:text-xl font-bold flex-row items-center gap-3">
                <FcSms className="w-6 h-6 md:w-8 md:h-8 mt-2 rounded-full"/>
                  <p>Contact companies with one click</p>
                </CardHeader>
                <CardDescription className="px-7 pb-8 font-medium text-sm md:text-md text-slate-700">
                Easily reach businesses via phone call or SMS with a single click! Alternatively, you can contact them through other means from a well-structured dashboard.
                </CardDescription>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="text-md sm:text-md md:text-xl font-bold flex-row items-center gap-3">
                <FcFinePrint className="w-6 h-6 md:w-8 md:h-8 mt-2 rounded-full"/>
                  <p>Score websites with Page Speed Insights</p>
                </CardHeader>
                <CardDescription className="px-7 pb-8 font-medium text-sm md:text-md text-slate-700">
                Similar to Lighthouse, our app asynchronously scores every existing website of businesses on your dashboard with ease. Identify those with poor scores and give them a call!
                </CardDescription>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="text-md sm:text-md md:text-xl font-bold flex-row items-center gap-3">
                <FcHighPriority className="w-6 h-6 md:w-8 md:h-8 mt-2 rounded-full"/>
                  <p>Spot non-dedicated/third-party websites</p>
                </CardHeader>
                <CardDescription className="px-7 pb-8 font-medium text-sm md:text-md text-slate-700">
                Equipped with AI-powered analysis, our app determines if each business website is a third-party platform (e.g., Facebook Page, third party booking site) instead of a dedicated site.
                </CardDescription>
              </Card>
          </div>
        </div>

        <div className="absolute left-0 right-0 top-60 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>
    </section>
  );
};

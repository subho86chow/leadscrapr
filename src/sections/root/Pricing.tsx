"use client";

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion";



const pricingTiers = [
  {
    id:1,
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Try for free",
    popular: false,
    inverse: false,
    features: [
      "Free first 500 credits",
      "5 tasks",
      "Download CSV",
      "Lighthouse report",
    ],
  },
  {
    id:2,
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign Up Now",
    popular: true,
    inverse: true,
    features: [
      "Get 10,000 credits/month",
      "Unlimited tasks",
      "Download CSV",
      "Lighthouse report",
      "AI features",
      "24/7 chat support"
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px]">
      <div className="p-5 sm:p-5 md:pt-20 md:px-28">
      <div className="mt-5 container">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl py-2 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text">
            Free to try, affordable <br/> for your whole company
            </h2>
            <p className="text-sm sm:text-sm md:text-xl font-bold text-center text-black/40 py-5 px-5 sm:px-5 md:px-20">
            Get started with Leadscraper at no cost, and scale effortlessly with pricing plans that grow with your business—perfect for teams of any size.
          </p>
          </div>
      </div>
      <div className="p-5 sm:p-5 md:py-10 md:px-28">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center mx-10 sm:mx-10 md:mx-6 lg:mx-60">
          {pricingTiers.map(({id,title,monthlyPrice,buttonText,features,inverse}:{id:number,title:string,monthlyPrice:number,buttonText:string,features:string[],inverse:boolean})=> (

            <Card key={id} className={twMerge(" bg-white rounded-3xl shadow-[0_7px_14px_#EAEAEA]",inverse === true && 'bg-black text-white')}>

              <CardHeader className="text-center text-2xl sm:text-2xl md:text-3xl font-bold">

              <motion.span
              animate={{
                backgroundPositionX: "100%",
              }}
              transition={{
                duration:10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className={twMerge("text-black",inverse===true && 'bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#71C2EF)] [background-size:200%] text-transparent bg-clip-text')}>{title}</motion.span>

              </CardHeader>

              <CardDescription className="flex flex-row justify-center items-baseline">
                <span className={twMerge("text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tighter leading-none",inverse===true && 'text-white')}>${monthlyPrice}</span>
                <span className={twMerge("text-base font-semibold text-black/50 tracking-tighter",inverse===true && 'text-white/50')}>/month</span>
              </CardDescription>

              <div className="flex items-center justify-center py-5">
                <button className={twMerge("btn btn-primary gap-1 text-xs sm:text-xs md:text-base shadow-lg",inverse === true && 'btn-transparent bg-white')}>
                  {buttonText}
                </button>
              </div>

              <div className="px-1 sm:px-1 ms:px-2 lg:px-3 mb-10">
                {features.map((featutre)=>(
                    <CardContent key={Math.random()} className="flex gap-2 items-center ml-10 p-1">
                      <FaCheck />
                      <p className="text-sm sm:text-sm md:text-base">{featutre}</p>
                    </CardContent>
                ))}
              </div>

            </Card>
          ))}
          </div>
        </div>
        <div className="relative">
        <div className="absolute left-0 right-0 top-[-80vh] -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-700 opacity-20 blur-[100px]"></div></div>
    </section>
  );
};
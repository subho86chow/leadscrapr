'use client';

import { useState, useEffect } from 'react'
import ArrowRight from "@/assets/arrow-right.svg";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {useSmoothScroll} from "@/utils/useSmoothscroll";
import Favicon from "@/app/favicon.ico";
import Image from 'next/image';



export const Navbar = () => {


  const curScrollPos: boolean = window.scrollY > 0 ? true : false

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const [activeSection, setActiveSection] = useState('home')
  const scrollTo = useSmoothScroll()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        const offset = 70
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  
  return (
    <header id="home" className="sticky top-0 z-30">
      <div className="flex justify-center items-center py-2 sm:py-3 bg-black text-white text-xs sm:text-sm">
        <div className="inline-flex items-center gap-1">
          <p className="text-white/60 px-2 hidden md:block">Start getting qualified leads in seconds</p>
          <div className="cursor-pointer flex gap-1 items-center">
          <p >Get started for free</p>
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 inline-flex justify-center items-center" />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-4 sm:pt-6 md:pt-10 px-0">
      <nav className={`flex items-center justify-center space-x-1 sm:space-x-6 md:space-x-8 px-1 sm:px-1 md:px-3 py-1 sm:py-1 md:py-2 bg-transparent rounded-full border border-black-900 p-2 w-full-100px max-w-[280px] sm:max-w-sm md:max-w-xl mx-auto text-[10px] sm:text-xs md:text-base transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-3xl shadow-lg border-0' : ''
        } ${curScrollPos? 'backdrop-blur-3xl shadow-lg border-0':''}`}>
          <div className="flex items-center">
            <Image src={Favicon} width={30} alt="footer logo"/>
            <Link href="/" className="hidden sm:hidden md:block text-sm sm:text-md md:text-xl px-1 font-bold bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text">
              Leadscrapr
            </Link>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">

              <button onClick={() => scrollTo('features')} className="text-blue-900 hover:text-black-900 font-semibold ">
                Features
              </button>
              <button onClick={() => scrollTo('pricing')} className="text-blue-900 hover:text-black-900 font-semibold ">
                Pricing
              </button>
              <button onClick={() => scrollTo('faqs')} className="text-blue-900 hover:text-black-900 font-semibold ">
                FAQ
              </button>

              <Link
              href=""
              className={`btn btn-transparent border text-blue-900 hover:bg-blue-700 ${ isScrolled ? 'bg-blue-600 text-white border-0 transition-all' : ''}`}
            >
              Sign In
            </Link>

          </div>
        </nav>
      </div>
    </header>
  );
};

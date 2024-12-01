"use client";

import Image from "next/image";
import Link from "next/link";
import Favicon from "@/app/favicon.ico";
import { FaLinkedinIn,FaXTwitter,FaYoutube } from "react-icons/fa6";


export const Footer = () => {
  return (
    <section className="bg-white select-none">
      <div className="mx-6 py-4 sm:py-4 md:pt-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src={Favicon} width={30} alt="footer logo"/>
          <p className="text-sm sm:text-md md:text-xl px-1 font-bold bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text">
              Leadscrapr
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="#"><FaLinkedinIn className="w-6 h-6"/></Link>
          <Link href="#"><FaXTwitter className="w-6 h-6"/></Link>
          <Link href="#"><FaYoutube className="w-6 h-6"/></Link>

        </div>
      </div>
      <div className="mx-6 md:py-3 md:flex flex-row justify-between items-center">
        <p>© Leadscrapr 2024 || Made with ♥︎ in India</p>
        <div className="flex">
          <ul className="flex gap-3 py-3 justify-center items-center">
            <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use" className="hover:underline">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

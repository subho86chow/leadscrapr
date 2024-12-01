'use client';

import {LogOut} from "lucide-react"
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Favicon from "@/app/favicon.ico"
import {motion} from "framer-motion"
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GiTwoCoins } from "react-icons/gi";
import { ReviewForm } from "./ReviewForm";
import { ThemeToggleSwitch } from "./ThemeToogleSwitch";


const RandomGradientAvatar = () => {
  const [gradientStyle, setGradientStyle] = useState({});

  useEffect(() => {
    const randomHue = () => Math.random() * 360;
    const randomOffset = () => Math.random() * 50 + 50;
    const hue1 = randomHue();
    const hue2 = (hue1 + randomOffset()) % 360;

    const color1 = `hsl(${hue1}, 100%, 50%)`;
    const color2 = `hsl(${hue2}, 100%, 50%)`;

    setGradientStyle({
      backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})`,
    });
  }, []);

  return (
    <Avatar className="border shadow-lg rounded-full m-3">
      <AvatarFallback style={gradientStyle}></AvatarFallback>
    </Avatar>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white dark:bg-black border-b border-gray-200 dark:border-white/20">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Image src={Favicon} width={30} alt="footer logo"/>
            <p className="text-sm sm:text-md md:text-xl px-1 font-bold bg-gradient-to-b from-black to-blue-600 text-transparent bg-clip-text dark:text-white">
              Leadscrapr
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex md:items-center md:space-x-4">
              <ReviewForm/>
            </div>
            <div className="">
              <Button variant="ghost" size="sm" className="border cursor-default hover:bg-background">          
                <GiTwoCoins />
                <span className='text-xs md:text-sm select-none'>3000</span>
              </Button>
            </div>

            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0' onClick={() => setIsOpen(!isOpen)}>
                  <Link href="#" onClick={() => setIsOpen(!isOpen)}><RandomGradientAvatar/></Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href="/dashboard"><DropdownMenuItem data-keep-open >Dashboard</DropdownMenuItem></Link>
                  <Link href="/map-finder"><DropdownMenuItem>Map Finder</DropdownMenuItem></Link>
                  <Link href="/tasks"><DropdownMenuItem>Tasks</DropdownMenuItem></Link>
                  <Link href="/profile"><DropdownMenuItem>Account Settings</DropdownMenuItem></Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                  onSelect={(event) => {
                    event.preventDefault(); // Prevent menu from closing
                    console.log("Persistent Button clicked!");
                  }}
                  className=""
                  >
                    Theme
                    <ThemeSwitcher/>
                    <ThemeToggleSwitch/>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><LogOut/>Log out</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-transparent">
                  <Button size="lg" className="w-full justify-center bg-black hover:bg-black/90 border">
                        <motion.span 
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration:5,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }} 
                        className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#71C2EF)] [background-size:200%] text-transparent bg-clip-text'>
                          Upgrade to Pro
                        </motion.span>
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
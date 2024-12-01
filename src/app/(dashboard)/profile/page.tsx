import React from 'react'
import Header from '@/sections/dashboard/Header'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import UsernameForm from "@/sections/dashboard/usernameFrom"
import AvatarUpdate from "@/sections/dashboard/AvatarUpdate"
import ProfileNavMobile from "@/sections/dashboard/profileNavMobile"
import EmailForm from "@/sections/dashboard/emailForm"
import DeleteUser from '@/sections/dashboard/deleteUser'
import { ThemeProvider } from "@/components/theme-provider"


export default function Page () {
  return (
    <>
<ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <div className="bg-gray-100 dark:bg-black h-full">
      <Header/>
      <div className="p-5 sm:p-5 sm:px-12 md:py-10 md:px-20 md:mx-6 lg:px-16">
        <div className="mx-auto flex justify-between">
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900/90 dark:text-white">Account settings</h2>
      <ProfileNavMobile/>

        </div>
      </div>
    </div>
    <Separator/>
    <div className="bg-gray-100  dark:bg-black h-full">
      <div className="p-5 sm:p-5 md:py-0 md:px-20 lg:px-16 md:flex">
        <div className="mr-[10vw] hidden lg:block bg-gray-100  dark:bg-black">
          <div className='py-3'>
          <ul className='text-lg'>
            <li className='p-3 text-slate-900/80 hover:text-slate-900 hover:bg-zinc-200 dark:text-white hover:dark:bg-gray-800/90 rounded-md'><Link href="#">General</Link></li>
            <li className='p-3 text-slate-900/80 hover:text-slate-900 hover:bg-zinc-200 dark:text-white hover:dark:bg-gray-800/90 rounded-md'><Link href="#">Authentication</Link></li>
            <li className='p-3 text-slate-900/80 hover:text-slate-900 hover:bg-zinc-200 dark:text-white hover:dark:bg-gray-800/90 rounded-md'><Link href="#">Subscription</Link></li>
            <li className='p-3 text-slate-900/80 hover:text-slate-900 hover:bg-zinc-200 dark:text-white hover:dark:bg-gray-800/90 rounded-md'><Link href="#">Billing</Link></li>
          </ul>
          </div>

        </div>
        <div className="mx-0 lg:mx-auto w-full p-1 pt-5">
          <div className="mx-5">
            <AvatarUpdate/>
          </div>
          <div className="pt-10 mx-5">
            <UsernameForm/>
          </div>
          <div className="pt-10 mx-5">
            <EmailForm/>
          </div>
          <div className="py-10 mx-5">
            <DeleteUser/>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
    </>
  )
}
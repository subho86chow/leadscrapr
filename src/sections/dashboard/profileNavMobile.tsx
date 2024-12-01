"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {X,AlignJustify} from "lucide-react"

export default function profileNavMobile() {
  return (
    <div className="block lg:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="secondary" className="h-10 w-10 border rounded-full"><AlignJustify /></Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto">
              <div className="block">
              <ul className='py-3 text-lg text-center'>
                  <li className='py-2 text-slate-900/80 hover:text-slate-900 dark:text-white dark:hover:text-white/80'><Link href="#">General</Link></li>
                  <li className='py-2 text-slate-900/80 hover:text-slate-900 dark:text-white dark:hover:text-white/80'><Link href="#">Authentication</Link></li>
                  <li className='py-2 text-slate-900/80 hover:text-slate-900 dark:text-white dark:hover:text-white/80'><Link href="#">Subscription</Link></li>
                  <li className='py-2 text-slate-900/80 hover:text-slate-900 dark:text-white dark:hover:text-white/80'><Link href="#">Billing</Link></li>
              </ul>
              </div>
          </div>
          <DrawerFooter className="mx-auto">
              <DrawerClose asChild>
                <X className="hover:cursor-pointer"/>
              </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

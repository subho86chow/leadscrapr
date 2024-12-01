'use client'

import { useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export function useSmoothScroll() {
  const router = useRouter()
  const pathname = usePathname()

  return useCallback((id: string) => {
    const isHomePage = pathname === '/'
    
    if (!isHomePage) {
      // If not on home page, navigate to home page with hash
      router.push(`/#${id}`)
    } else {
      // If on home page, scroll to the section
      const element = document.getElementById(id)
      if (element) {
        const offset = 70 // 60px offset
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }, [router, pathname])
}
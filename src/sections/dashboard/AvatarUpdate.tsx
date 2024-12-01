"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface ProfileComponentsProps {
  onAvatarChange?: (file: File) => void
  onNameChange?: (name: string) => void
  initialName?: string
}

export default function AvatarUodate({ 
  onAvatarChange, 
  onNameChange,
  initialName = ""
}: ProfileComponentsProps = {}) {
  const [avatarFile, setAvatarFile] = useState<File | null>(null)
  const [avatarPreview, setAvatarPreview] = useState<string>("")
  
  const handleAvatarClick = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        setAvatarFile(file)
        const reader = new FileReader()
        reader.onload = (e) => {
          setAvatarPreview(e.target?.result as string)
        }
        reader.readAsDataURL(file)
        onAvatarChange?.(file)
      }
    }
    input.click()
  }
  return (
      <Card className="border border-gray-300 dark:border-white/20 rounded-lg shadow-none">
        <CardHeader className="md:pb-0">
          <CardTitle className="text-base md:text-xl font-medium p-0 m-0">Avatar</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center md:pb-2">
          <div className="space-y-2">
            <p className="text-xs md:text-medium">This is your avatar.</p>
            <p className="text-xs md:text-medium">Click on the avatar to upload<br className="block md:hidden"/> a custom one from your files.</p>
          </div>
          <button
            onClick={handleAvatarClick}
            className="relative md:translate-y-[-20px] h-16 w-16 md:w-24 md:h-24 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 "
            aria-label="Upload avatar"
          >
            {avatarPreview ? (
              <img 
                src={avatarPreview} 
                alt="Avatar preview" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-amber-400 to-green-400" />
            )}
          </button>
        </CardContent>
        <Separator className="bg-gray-300 dark:bg-white/20"/>
        <CardFooter className="bg-gray-100 dark:bg-gray-900/90 rounded-b-lg px-6 py-3">
          <p className="text-xs md:text-sm text-muted-foreground">
            An avatar is optional but strongly recommended.
          </p>
        </CardFooter>
      </Card>
  )
}
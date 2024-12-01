"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface ProfileComponentsProps {
  onNameChange?: (name: string) => void
  initialName?: string
}

export default function UsernameForm({ 
  onNameChange,
  initialName = ""
}: ProfileComponentsProps = {}) {
  const [name, setName] = useState(initialName)
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value.slice(0, 32)
    setName(newName)
    onNameChange?.(newName)
    setIsButtonDisabled(newName.length === 0)
  }

  return (
      <Card className="border border-gray-300 dark:border-white/20 rounded-lg shadow-none">
        <CardHeader className="">
          <CardTitle className="text-base md:text-xl font-medium p-0 m-0">Full Name</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
              <p className="text-xs md:text-medium">Please enter your full name, or a display name you are comfortable with.</p>
            <Input
              id="displayName"
              value={name}
              onChange={handleNameChange}
              maxLength={32}
              placeholder="Enter your display name"
            />
          </div>
        </CardContent>
        <Separator className="bg-gray-300 dark:bg-white/20"/>
        <CardFooter className="flex justify-between bg-gray-100 dark:bg-gray-900/90 rounded-b-lg px-6 py-3">
          <p className="text-xs md:text-sm text-muted-foreground">
            Please use 32 characters at maximum.
          </p>
          <Button disabled={isButtonDisabled} size="sm" type="button" onClick={() => onNameChange?.(name)}>
            Save
          </Button>
        </CardFooter>
      </Card>
  )
}
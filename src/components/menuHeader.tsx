"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Settings } from "lucide-react"
import { useRouter } from 'next/router'
import * as React from "react"

export function MenuHeader() {
  const router = useRouter()
  const [language, setLanguage] = React.useState("en")

  const handleLanguageChange = (lang:string) => {
    setLanguage(lang)
    const currentPath = router.asPath
    router.push(`/${lang}${currentPath}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-transparent border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white">
        <Button variant="outline"><Settings className="hover:animate-spin-once w-4 h-4"/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-transparent border-2 border-zinc-800 text-white">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={language} onValueChange={handleLanguageChange}>
          <DropdownMenuRadioItem className="hover:bg-zinc-800" value="en">English 🇺🇸</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="hover:bg-zinc-800" value="pt-br">Português 🇧🇷</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="hover:bg-zinc-800" value="es">Español 🇪🇸</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

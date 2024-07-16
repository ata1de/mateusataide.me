"use client"

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from '@/navigation';
import { Settings } from "lucide-react";
import { usePathname as pathNameNext } from "next/navigation"; // assuming useLocale hook exists to get the current locale
import { useEffect, useState } from "react";

export function MenuHeader() {
  const [position, setPosition] = useState("bottom")
  
  const pathName = usePathname()
  const router = useRouter()
  const currentLocale = pathNameNext().split('/')[1]

  useEffect(() => {
    switch(currentLocale) {
      case 'en':
        setPosition('top')
        break
      case 'pt':
        setPosition('bottom')
        break
      case 'es':
        setPosition('right')
        break
      default:
        setPosition('bottom')
    }
  }, [currentLocale])

  const handleLanguageChange = (locale: string, position: string) => {
    router.push(pathName, { locale })
    setPosition(position)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-transparent border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white">
        <Button variant="outline"><Settings className="hover:animate-spin-once w-4 h-4"/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-transparent border-2 border-zinc-800 text-zinc-300">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem onClick={() => handleLanguageChange('en', 'top')} className="hover:bg-zinc-800" value="top">
            English 🇺🇸
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem onClick={() => handleLanguageChange('pt', 'bottom')} className="hover:bg-zinc-800" value="bottom">
            Português 🇧🇷
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem onClick={() => handleLanguageChange('es', 'right')} className="hover:bg-zinc-800" value="right">
            Español 🇪🇸
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

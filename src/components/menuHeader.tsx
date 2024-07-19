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
import { Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname as pathNameNext } from "next/navigation"; // assuming useLocale hook exists to get the current locale
import { useEffect, useState } from "react";

export function MenuHeader() {
  const [position, setPosition] = useState("bottom")
  
  const pathName = usePathname()
  const router = useRouter()
  const currentLocale = pathNameNext().split('/')[1]

  const { theme, setTheme } = useTheme()

  const handleModeChange = (newMode: 'light' | 'dark') => {
    const selectedMode = theme?.split('-')[1]
    const newTheme = `${newMode}-${selectedMode}`
    console.log(theme)
    console.log(newMode)

    setTheme(newTheme)
  }

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
      <DropdownMenuTrigger asChild className="bg-LightBrown border-2 border-zinc-400 hover:bg-LightBrown">
        <Button variant="outline"><Settings className="hover:animate-spin-once w-4 h-4"/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-LightBrown border-2 border-zinc-800 text-Black">
        <DropdownMenuLabel className="flex justify-center items-center gap-3">
          <p>Language</p>
          <div className="flex justify-center items-center gap-3">
            <Button className="flex items-center gap-x-2 px-3 rounded-md text-sm border-muted transition"
            onClick={() => handleModeChange('light')}
            >
              <Sun className="h-4 x-4 shrink-0"/>
            </Button>
            <Button className="flex items-center gap-x-2 px-3 rounded-md text-sm border-muted transition"
            onClick={() => handleModeChange("dark")}
            >
              <Moon className="h-4 x-4 shrink-0"/>
            </Button>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-lime-400"/>
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem onClick={() => handleLanguageChange('en', 'top')} className="hover:bg-zinc-500" value="top">
            English 🇺🇸
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem onClick={() => handleLanguageChange('pt', 'bottom')} className="hover:bg-zinc-500" value="bottom">
            Português 🇧🇷
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem onClick={() => handleLanguageChange('es', 'right')} className="hover:bg-zinc-500" value="right">
            Español 🇪🇸
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

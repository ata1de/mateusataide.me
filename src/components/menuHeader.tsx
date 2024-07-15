"use client"

import * as React from "react"

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

export function MenuHeader() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="bg-transparent border-2 border-zinc-800 hover:bg-zinc-800 hover:text-white">
        <Button variant="outline"><Settings className="hover:animate-spin-once w-4 h-4"/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-transparent border-2 border-zinc-800 text-white">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem className="hover:bg-zinc-800" value="top">English 🇺🇸</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="hover:bg-zinc-800" value="bottom">Português 🇧🇷</DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="hover:bg-zinc-800" value="right">Español 🇪🇸</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

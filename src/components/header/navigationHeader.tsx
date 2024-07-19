"use client"

import * as React from "react"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"



export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="leading-5 no-underline text-[14px] font-medium p-3 rounded-md ">Tech</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="flex flex-col w-[300px] max-[1024px]:overflow-scroll gap-3 p-4  ">
            <ListItem
            href="/projects"
            title="Projects"
            >
                Projetos que foram feitos com determinação e suor em cada aprendizado
            </ListItem>
            <ListItem
            href="/stack"
            title="Stack"
            >
                Tecnologias que uso no dia a dia para o meu trabalho
            </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

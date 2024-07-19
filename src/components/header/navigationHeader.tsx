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
import { useTranslations } from "next-intl"



export function NavigationMenuDemo() {
  const projects = useTranslations('Header.links.project.projects')
  const stack = useTranslations('Header.links.project.stack')
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="leading-5 no-underline text-[14px] font-medium p-3 rounded-md ">Tech</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="flex flex-col w-[300px] max-[1024px]:overflow-scroll gap-3 p-4  ">
            <ListItem
            href="/projects"
            title={`${projects('title')}`}
            >
                {projects('description')}
            </ListItem>
            <ListItem
            href="/stack"
            title={`${stack('title')}`}
            >
                {stack('description')}
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

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
import { useLocale, useTranslations } from "next-intl"
import { Link } from "next-view-transitions"

type NavigationMenuProps = {
  isPhone?: boolean
}

export function NavigationMenuDemo({ isPhone=false }: NavigationMenuProps) {
  const projects = useTranslations('Header.links.project.projects')
  const stack = useTranslations('Header.links.project.stack')
  const currentLocale = useLocale();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem >
          <NavigationMenuTrigger className={`${isPhone ? '': 'px-4 py-2'} leading-5 no-underline text-[14px] font-medium rounded-md bg-transparent`}>Tech</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className={`flex flex-col w-[200px] min-[450px]:w-[300px] max-[1024px]:overflow-scroll gap-3 p-4`}>
            <Link href={`/${currentLocale}/projects`}>
              <ListItem
              title={`${projects('title')}`}
              >
                  {projects('description')}
              </ListItem>
            </Link>
            <Link href={`/${currentLocale}/stacks`}>
              <ListItem
              title={`${stack('title')}`}
              >
                  {stack('description')}
              </ListItem>
            </Link>
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

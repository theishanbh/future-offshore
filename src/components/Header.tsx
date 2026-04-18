"use client"

import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        {
          "bg-background/95 supports-[backdrop-filter]:bg-background/60 shadow-md backdrop-blur":
            scrolled,
          "bg-transparent": !scrolled,
        },
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative shrink-0">
          <Image
            src="/images/logos/primary-logo-no-tag.jpg"
            alt="Future Offshore"
            width={160}
            height={45}
            className="h-[45px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
                {
                  "text-foreground": scrolled,
                  "text-white": !scrolled,
                },
              )}
            >
              {link.name}
              <span className="gradient-bg absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <ThemeToggle scrolled={scrolled} />
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle scrolled={scrolled} />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className={cn("transition-colors duration-300", {
                    "text-foreground": scrolled,
                    "text-white hover:bg-white/10": !scrolled,
                  })}
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex w-full flex-col items-center justify-center gap-8 sm:max-w-full"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSheetOpen(false)}
                  className="text-primary hover:text-fo-blue dark:hover:text-fo-green text-2xl font-black tracking-wide uppercase transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

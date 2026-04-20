"use client"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { services } from "@/data/services"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const servicesByCategory = {
  "Project Support": services.filter((s) => s.category === "project-support"),
  "Technical Support": services.filter(
    (s) => s.category === "technical-support",
  ),
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150)
  }

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
            src={
              scrolled
                ? "/images/logos/primary-logo-colour-blue-no-tag.svg"
                : "/images/logos/primary-logo-colour-white-no-tag.svg"
            }
            alt="Future Offshore"
            width={160}
            height={45}
            className="h-[45px] w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "group relative flex items-center gap-1 text-sm font-semibold tracking-wide uppercase transition-colors duration-300",
                    {
                      "text-foreground": scrolled,
                      "text-white": !scrolled,
                    },
                  )}
                >
                  {link.name}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-200",
                      dropdownOpen && "rotate-180",
                    )}
                  />
                  <span className="gradient-bg absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute top-full left-1/2 z-50 mt-4 -translate-x-1/2">
                    <div className="bg-background w-[480px] max-w-[calc(100vw-2rem)] rounded-xl p-6 shadow-2xl ring-1 ring-black/5">
                      {Object.entries(servicesByCategory).map(
                        ([category, items]) => (
                          <div key={category} className="mb-4 last:mb-0">
                            <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-widest uppercase">
                              {category}
                            </p>
                            <div className="grid grid-cols-2 gap-1">
                              {items.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  onClick={() => setDropdownOpen(false)}
                                  className="text-primary hover:bg-muted rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ),
                      )}
                      <div className="mt-3 border-t pt-3">
                        <Link
                          href="/services"
                          onClick={() => setDropdownOpen(false)}
                          className="text-fo-green text-sm font-semibold hover:underline"
                        >
                          View All Services &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
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
            ),
          )}
        </nav>

        {/* Mobile: hamburger */}
        <div className="flex items-center gap-2 md:hidden">
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
              className="flex w-full flex-col justify-center gap-0 px-10 sm:max-w-full"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.href} className="flex flex-col">
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="text-primary hover:text-fo-blue flex items-center gap-2 text-2xl font-black tracking-wide uppercase transition-colors duration-200"
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            "size-5 transition-transform duration-200",
                            mobileServicesOpen && "rotate-180",
                          )}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="mt-4 flex flex-col gap-3 border-l-2 border-black/10 pl-5">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={() => {
                                setSheetOpen(false)
                                setMobileServicesOpen(false)
                              }}
                              className="text-muted-foreground hover:text-fo-green text-base font-medium transition-colors"
                            >
                              {service.title}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            onClick={() => {
                              setSheetOpen(false)
                              setMobileServicesOpen(false)
                            }}
                            className="text-fo-green text-base font-semibold"
                          >
                            All Services &rarr;
                          </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className="text-primary hover:text-fo-blue text-2xl font-black tracking-wide uppercase transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

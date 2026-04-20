"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

const emptySubscribe = () => () => {}

export function ThemeToggle({ scrolled = true }: { scrolled?: boolean }) {
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )

  const buttonClass = cn("transition-colors duration-300", {
    "text-foreground": scrolled,
    "text-white hover:bg-white/10": !scrolled,
  })

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        aria-label="Toggle theme"
        className={buttonClass}
      >
        <Sun className="size-5" />
      </Button>
    )
  }

  const isDark = theme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      className={buttonClass}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  )
}

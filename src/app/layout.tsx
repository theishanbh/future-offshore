import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"

const generalSans = localFont({
  src: "../fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  display: "swap",
})

const cabinetGrotesk = localFont({
  src: "../fonts/CabinetGrotesk-Variable.woff2",
  variable: "--font-cabinet-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Future Offshore | Innovate. Collaborate. Deliver.",
  description:
    "Future Offshore is a leading offshore engineering company providing innovative project support, technical expertise, and quality management services to the energy industry.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        generalSans.variable,
        cabinetGrotesk.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

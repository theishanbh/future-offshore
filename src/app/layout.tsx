import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { OrganizationSchema } from "@/components/StructuredData"
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
  metadataBase: new URL("https://futureoffshore.co.uk"),
  title: {
    default: "Future Offshore | Innovate. Collaborate. Deliver.",
    template: "%s | Future Offshore",
  },
  description:
    "Future Offshore is a leading offshore engineering company providing innovative project support, technical expertise, and quality management services to the energy industry.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://futureoffshore.co.uk",
    siteName: "Future Offshore",
    title: "Future Offshore | Innovate. Collaborate. Deliver.",
    description:
      "Personalised, flexible and innovation-driven offshore engineering services — from concept to completion.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Future Offshore - Offshore Engineering Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Offshore | Innovate. Collaborate. Deliver.",
    description:
      "Personalised, flexible and innovation-driven offshore engineering services — from concept to completion.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
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
        <OrganizationSchema />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

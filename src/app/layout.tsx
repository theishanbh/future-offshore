import type { Metadata } from "next"
import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

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
    <html lang="en" className="antialiased">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

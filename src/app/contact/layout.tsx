import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Contact Future Offshore for offshore engineering support, project management, and technical expertise. Based in the United Kingdom, serving clients globally.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Future Offshore",
    description:
      "Get in touch to discuss how Future Offshore can support your next offshore engineering project.",
    url: "/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

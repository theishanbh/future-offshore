import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Offshore Engineering Services - Technical & Project Support",
  description:
    "Comprehensive offshore engineering services including pipelay equipment, cable lay systems, subsea tools, project management, client representation, and quality management.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services - Future Offshore",
    description:
      "Comprehensive offshore engineering services spanning technical support and project delivery.",
    url: "/services",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

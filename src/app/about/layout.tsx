import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Offshore Engineering Excellence",
  description:
    "Learn about Future Offshore's mission, leadership team, and 40+ years of combined offshore engineering experience in pipelay, cable lay, and subsea systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Future Offshore",
    description:
      "Learn about Future Offshore's mission, leadership team, and 40+ years of combined offshore engineering experience.",
    url: "/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

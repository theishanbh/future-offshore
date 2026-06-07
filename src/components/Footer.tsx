import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { env } from "@/env"
import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const footerServices = [
  { name: "Pipelay Equipment", href: "/services/pipelay-equipment" },
  { name: "Cable Lay Equipment", href: "/services/cable-lay-equipment" },
  { name: "Subsea Trenchers", href: "/services/subsea-trenchers" },
  { name: "Engineering Services", href: "/services/engineering-services" },
  { name: "Quality Management", href: "/services/quality-management" },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logos/primary-logo-colour-white-no-tag.svg"
              alt="Future Offshore"
              width={140}
              height={50}
              className="mb-6 h-[50px] w-auto"
            />
            <p className="text-sm leading-relaxed text-white/70">
              Future Offshore delivers innovative engineering solutions and
              expert support to the offshore energy industry, committed to
              safety, quality, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-base font-semibold tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-fo-green text-sm text-white/70 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-base font-semibold tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-fo-green text-sm text-white/70 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-base font-semibold tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                  className="hover:text-fo-green transition-colors duration-200"
                >
                  {env.NEXT_PUBLIC_CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href="tel:+447899860529">+44 (0) 7899 860 529</a>
              </li>
              <li>United Kingdom</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Gradient Strip */}
      <Separator className="gradient-bg h-[3px] border-none" />

      {/* Bottom Bar */}
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} Future Offshore. All rights
          reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-fo-green text-white/50 hover:bg-white/10"
            nativeButton={false}
            render={
              <a
                href="https://www.linkedin.com/company/future-offshore/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              />
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:text-fo-green text-white/50 hover:bg-white/10"
            nativeButton={false}
            render={
              <a
                href={`mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                aria-label="Email"
              />
            }
          >
            <Mail className="size-5" />
          </Button>
        </div>
      </div>
    </footer>
  )
}

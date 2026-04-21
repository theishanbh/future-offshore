import { getServiceBySlug, services } from "@/data/services"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Service Not Found" }
  return {
    title: `${service.title} | Future Offshore`,
    description: service.shortDescription,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/services"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
          <span className="text-fo-green mb-4 inline-block text-sm font-semibold tracking-wider uppercase">
            {service.categoryLabel}
          </span>
          <h1 className="text-4xl font-black text-white md:text-6xl">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left: Description + Features */}
            <div className="lg:col-span-2">
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                {service.fullDescription}
              </p>

              <h2 className="text-navy mb-6 text-2xl font-black">
                What We Deliver
              </h2>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="text-fo-green mt-0.5 h-5 w-5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image + CTA */}
            <div className="space-y-8">
              <img
                src={service.image}
                alt={service.title}
                className={`h-64 w-full rounded-xl object-cover shadow-lg ${service.imagePosition ? `object-${service.imagePosition}` : ""}`}
              />
              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="mb-3 text-xl font-black">Get in Touch</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-300">
                  Ready to discuss how we can support your project? Contact our
                  team today.
                </p>
                <Link
                  href="/contact"
                  className="gradient-bg inline-block rounded-lg px-6 py-3 font-bold text-white shadow-lg transition-all hover:opacity-90"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-navy mb-10 text-3xl font-black">
            Other Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group block"
              >
                <div className="bg-card overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <div className="gradient-bg h-[3px]" />
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-5">
                    <span className="text-fo-green text-xs font-semibold tracking-wider uppercase">
                      {s.categoryLabel}
                    </span>
                    <h3 className="text-navy mt-1 mb-2 text-lg font-black">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">
                      {s.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

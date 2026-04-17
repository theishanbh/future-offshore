import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, getServiceBySlug } from '@/data/services';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} | Future Offshore`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-navy/95 pt-6 pb-0">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-block text-fo-green font-semibold text-sm uppercase tracking-wider mb-4">
            {service.categoryLabel}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white">
            {service.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Description + Features */}
            <div className="lg:col-span-2">
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                {service.fullDescription}
              </p>

              <h2 className="text-2xl font-black text-navy mb-6">
                What We Deliver
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-fo-green mt-0.5 shrink-0"
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
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Image + CTA */}
            <div className="space-y-8">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="bg-navy rounded-xl p-8 text-white">
                <h3 className="text-xl font-black mb-3">Get in Touch</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Ready to discuss how we can support your project? Contact our
                  team today.
                </p>
                <Link
                  href="/contact"
                  className="inline-block gradient-bg text-navy font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-navy mb-10">
            Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-[3px] gradient-bg" />
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-fo-green text-xs font-semibold uppercase tracking-wider">
                      {s.categoryLabel}
                    </span>
                    <h3 className="text-lg font-black text-navy mt-1 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
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
  );
}

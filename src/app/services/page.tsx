"use client"

import { Button } from "@/components/ui/button"
import { getServicesByCategory, services } from "@/data/services"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
      <Link href={`/services/${service.slug}`} className="group block h-full">
        <div className="bg-card ring-foreground/10 flex h-full flex-col overflow-hidden rounded-xl ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          {/* Image */}
          <div className="relative h-56 shrink-0 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute right-0 bottom-0 left-0 p-5">
              <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {service.categoryLabel}
              </span>
              <h3 className="text-xl font-black text-white">{service.title}</h3>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {service.shortDescription}
            </p>

            {/* Feature preview */}
            <ul className="mb-5 space-y-2">
              {service.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="text-muted-foreground flex items-start gap-2.5 text-xs"
                >
                  <span className="gradient-bg mt-1.5 size-1.5 shrink-0 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-2">
              <span className="text-fo-green inline-flex items-center gap-1 text-sm font-semibold">
                Learn More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function CategorySection({
  title,
  category,
}: {
  title: string
  category: string
}) {
  const categoryServices = getServicesByCategory(category)

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
      className="mb-20"
    >
      <motion.h2
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="text-primary mb-10 text-3xl font-black md:text-4xl"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {categoryServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </motion.section>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-black text-white md:text-6xl"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl"
          >
            Comprehensive offshore engineering services spanning project support
            and technical expertise, delivered with precision and a
            collaborative approach.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <CategorySection title="Project Support" category="project-support" />
          <CategorySection
            title="Technical Support"
            category="technical-support"
          />
        </div>
      </section>
    </>
  )
}

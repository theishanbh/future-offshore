"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
      <Link href={`/services/${service.slug}`} className="group block">
        <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
          <div className="gradient-bg h-[3px]" />
          <img
            src={service.image}
            alt={service.title}
            className="h-48 w-full object-cover"
          />
          <CardContent className="p-6">
            <h3 className="text-primary mb-2 text-xl font-black">
              {service.title}
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              {service.shortDescription}
            </p>
            <Button variant="link" tabIndex={-1}>
              Learn More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>
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
      <section className="bg-navy py-24 md:py-32">
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

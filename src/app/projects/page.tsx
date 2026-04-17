"use client"

import AnimatedSection from "@/components/AnimatedSection"
import { projects } from "@/data/projects"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const categories = [
  "All",
  "Pipelay Equipment",
  "Cable Lay Equipment",
  "Subsea Tools",
  "Project Support",
  "Quality Management",
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-black md:text-5xl lg:text-6xl"
          >
            Our <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl"
          >
            Showcasing our track record of delivering complex offshore
            engineering projects.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <AnimatedSection>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "gradient-bg text-white shadow-lg"
                    : "text-navy border-navy/20 hover:border-navy/50 border bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover"
                  />
                  <span className="gradient-bg absolute bottom-0 left-4 translate-y-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 pt-8">
                  <h3 className="text-navy mb-1 text-lg font-bold">
                    {project.title}
                  </h3>
                  <p className="mb-3 text-sm text-gray-500">
                    {project.client} &middot; {project.year}
                  </p>
                  <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-fo-blue hover:text-navy text-sm font-semibold transition-colors"
                  >
                    View Details &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  ClipboardList,
  Film,
  Lightbulb,
  Rocket,
  Users,
  Wrench,
} from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

function stagger(delay: number) {
  return {
    ...fadeInUp,
    transition: { duration: 0.6, delay },
  }
}

/* ───────────────────────── Hero Carousel ───────────────────────── */
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    alt: "Deep blue ocean stretching to the horizon",
  },
  {
    src: "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1920&q=80",
    alt: "Ocean waves at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?auto=format&fit=crop&w=1920&q=80",
    alt: "Cargo ship on open sea",
  },
  {
    src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1920&q=80",
    alt: "Offshore engineering vessel",
  },
  {
    src: "https://images.unsplash.com/photo-1513553404607-988bf2703777?auto=format&fit=crop&w=1920&q=80",
    alt: "Ship at sea during golden hour",
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* carousel images */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={current}
          src={heroImages[current].src}
          alt={heroImages[current].alt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
      <div className="bg-navy/70 absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <motion.p
          {...stagger(0)}
          className="mb-6 text-sm tracking-[0.3em] text-white/70 uppercase"
        >
          Offshore Engineering Excellence
        </motion.p>

        <motion.h1
          {...stagger(0.15)}
          className="mb-6 text-4xl leading-tight font-black text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Shaping the Future of
          <br />
          Offshore Engineering
        </motion.h1>

        <motion.p
          {...stagger(0.3)}
          className="gradient-text mb-6 text-lg font-semibold tracking-[0.15em] sm:text-xl md:text-2xl"
        >
          INNOVATE. COLLABORATE. DELIVER.
        </motion.p>

        <motion.p
          {...stagger(0.45)}
          className="mx-auto mb-10 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Personalised, flexible and innovation-driven offshore engineering
          services — from concept to completion.
        </motion.p>

        <motion.div
          {...stagger(0.6)}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            variant="accent"
            size="pill"
            nativeButton={false}
            render={<Link href="/services" />}
          >
            Our Services
          </Button>
          <Button
            variant="outlineHero"
            size="pill"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>

      {/* carousel indicators */}
      <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "gradient-bg w-8" : "w-2 bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <ChevronDown className="size-6 text-white" />
      </motion.div>
    </section>
  )
}

/* ───────────────────────── About Intro ───────────────────────── */
function AboutIntro() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">
        <motion.div {...fadeInUp}>
          <p className="text-fo-green mb-4 text-sm font-semibold tracking-widest uppercase">
            Who We Are
          </p>
          <h2 className="text-primary mb-6 text-3xl leading-tight font-black sm:text-4xl">
            Engineering Excellence, Delivered Personally
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Future Offshore is established to provide a personalised, flexible
            and innovation driven service to customers. We want to work closely
            with clients, move faster, and deliver solutions tailored precisely
            for their needs. With over 20 years of offshore engineering
            experience, our team brings deep technical expertise across pipelay,
            cable lay, subsea systems, project management, and consulting.
          </p>
          <Button
            size="pill"
            nativeButton={false}
            render={<Link href="/about" />}
          >
            Learn More
          </Button>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <img
            src="/images/alan-arseven.webp"
            alt="Offshore vessel at sea"
            className="h-auto w-full rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}

/* ───────────────────────── Services ───────────────────────── */
const services = [
  {
    title: "Project Support",
    description:
      "Client representation, project management, and quality oversight to safeguard your project interests.",
    icon: ClipboardList,
    href: "/services",
  },
  {
    title: "Technical Support",
    description:
      "Expert engineering for pipelay, cable lay, and subsea equipment systems.",
    icon: Wrench,
    href: "/services",
  },
  {
    title: "Engineering Services",
    description:
      "From concept development to detailed design and operational engineering.",
    icon: Film,
    href: "/services",
  },
  {
    title: "Project Delivery",
    description:
      "20+ years delivering offshore projects through the full lifecycle.",
    icon: Rocket,
    href: "/services",
  },
]

function ServicesOverview() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div {...fadeInUp} className="mb-16 text-center">
          <p className="text-fo-green mb-4 text-sm font-semibold tracking-widest uppercase">
            What We Do
          </p>
          <h2 className="text-primary text-3xl font-black sm:text-4xl">
            Our Services
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link href={s.href} className="group block h-full">
                <div className="bg-navy flex h-full flex-col justify-between rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl sm:p-10">
                  {/* Icon */}
                  <div>
                    <div className="text-fo-green mb-6">
                      <s.icon className="size-12" strokeWidth={1.5} />
                    </div>
                    {/* Title */}
                    <h3 className="mb-4 text-2xl font-black text-white">
                      {s.title}
                    </h3>
                    {/* Description */}
                    <p className="mb-8 leading-relaxed text-white/70">
                      {s.description}
                    </p>
                  </div>
                  {/* CTA */}
                  <div className="flex items-center gap-2">
                    <ArrowRight className="group-hover:text-fo-green size-5 text-white/50 transition-all duration-300 group-hover:translate-x-1" />
                    <span className="group-hover:text-fo-green text-sm font-semibold tracking-wide text-white/50 uppercase transition-colors duration-300">
                      {s.title}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Stats ───────────────────────── */
function Stats() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Left: text */}
          <motion.div {...fadeInUp}>
            <p className="text-fo-green mb-4 text-sm font-semibold tracking-widest uppercase">
              Why Future Offshore
            </p>
            <h2 className="text-primary mb-6 text-3xl leading-tight font-black sm:text-4xl">
              We&apos;ve Got Your Back &mdash; We&apos;ve Been There
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With decades of hands-on offshore engineering experience, our team
              has delivered some of the most advanced pipelay, cable lay, and
              subsea systems in operation today. We bring that expertise
              directly to your project.
            </p>
            <Button
              size="pill"
              nativeButton={false}
              render={<Link href="/about" />}
            >
              Learn More
            </Button>
          </motion.div>

          {/* Right: highlight stat */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="text-center">
              <p className="gradient-text mb-4 text-7xl font-black sm:text-8xl">
                40+
              </p>
              <div className="gradient-bg mx-auto mb-4 h-[2px] w-24" />
              <p className="text-muted-foreground text-lg tracking-wide">
                Years of Combined Industry Experience
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Core Values ───────────────────────── */
const values = [
  {
    title: "Innovate",
    description:
      "We challenge assumptions, embrace curiosity, and push boundaries to find smarter, safer, and more efficient engineering solutions.",
    icon: Lightbulb,
  },
  {
    title: "Collaborate",
    description:
      "We believe the best engineering is built together. Collaboration means valuing diverse perspectives and communicating openly.",
    icon: Users,
  },
  {
    title: "Deliver",
    description:
      "We take ownership of our work and are committed to delivering reliable, high-quality results every time.",
    icon: CheckCircle,
  },
]

function CoreValues() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div {...fadeInUp} className="mb-16 text-center">
          <h2 className="text-primary text-3xl font-black sm:text-4xl">
            Our Core Values
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-accent mb-4 inline-flex">
                <v.icon className="size-12" />
              </div>
              <h3 className="gradient-text mb-3 text-2xl font-black">
                {v.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Testimonials ───────────────────────── */
const testimonials = [
  {
    quote:
      "Future Offshore provided outstanding technical oversight on our pipelay system upgrade. Their attention to detail and deep engineering knowledge ensured we delivered on time and to specification.",
    name: "James Henderson",
    role: "Project Manager",
    company: "North Sea Energy Ltd",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Working with Future Offshore felt like having an extension of our own team. Their collaborative approach and transparency throughout the project gave us complete confidence in the outcome.",
    name: "Sarah Mitchell",
    role: "Operations Director",
    company: "Atlantic Subsea Solutions",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The engineering expertise Future Offshore brought to our cable lay spread design was exceptional. They delivered innovative solutions that significantly improved our operational efficiency.",
    name: "David Park",
    role: "Chief Engineer",
    company: "Meridian Offshore Group",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Future Offshore's client representation services were invaluable. They safeguarded our interests throughout a complex manufacturing programme and kept us informed at every stage.",
    name: "Laura Chen",
    role: "VP of Projects",
    company: "Pacific Marine Systems",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
]

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div {...fadeInUp} className="mb-16 text-center">
          <p className="text-fo-green mb-4 text-sm font-semibold tracking-widest uppercase">
            Testimonials
          </p>
          <h2 className="text-primary text-3xl font-black sm:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              {/* Quote mark */}
              <div className="gradient-text mb-6 text-7xl leading-none font-black select-none">
                &ldquo;
              </div>

              <p className="text-primary mb-8 text-lg leading-relaxed italic sm:text-xl md:text-2xl">
                {testimonials[current].quote}
              </p>

              <div className="flex flex-col items-center gap-3">
                <img
                  src={testimonials[current].photo}
                  alt={testimonials[current].name}
                  className="size-16 rounded-full object-cover shadow-md"
                />
                <div>
                  <p className="text-primary text-base font-black">
                    {testimonials[current].name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[current].role},{" "}
                    {testimonials[current].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "gradient-bg w-8" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── CTA Banner ───────────────────────── */
function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-32">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1920&q=80"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="bg-navy/80 absolute inset-0 -z-10" />

      {/* Decorative blurred orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 -z-10 size-[500px] rounded-full bg-[#b4d337]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 -bottom-32 -z-10 size-[400px] rounded-full bg-[#00aeef]/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <motion.div {...fadeInUp}>
            <p className="text-fo-green mb-4 text-sm font-semibold tracking-widest uppercase">
              Get in Touch
            </p>
            <h2 className="mb-6 text-3xl leading-tight font-black text-white sm:text-4xl lg:text-5xl">
              Ready to Start Your
              <br />
              <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-white/70">
              Whether you need engineering expertise, project management
              support, or end-to-end delivery, our team is ready to help.
              Let&apos;s discuss how Future Offshore can support your goals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="accent"
                size="pill"
                nativeButton={false}
                render={<Link href="/contact" />}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Right: hardhat image */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src="/images/fo-hardhat.webp"
              alt="Future Offshore hardhat"
              className="mx-auto max-w-sm rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Page ───────────────────────── */
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutIntro />
      <ServicesOverview />
      <Stats />
      <CoreValues />
      <CTABanner />
    </main>
  )
}

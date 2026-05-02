"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
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

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* bg image + overlay */}
      <img
        src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1920&q=80"
        alt="Offshore platform"
        className="absolute inset-0 h-full w-full object-cover"
      />
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
            Future Offshore exists to do things differently
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            We deliver a personalised, flexible, and innovation-driven service -
            working closely with our clients to move faster and create solutions
            tailored exactly to their needs. Without the layers of larger
            organisations, we stay agile, responsive, and focused on what
            matters most. Our approach is hands-on and collaborative. We bring
            experience, clarity, and transparency to every project, ensuring our
            clients always feel informed, supported, and confident in the
            outcome. At Future Offshore, we don’t just meet expectations - we
            push beyond them.
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
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
            alt="Offshore engineering team"
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
    href: "/services/client-representation",
  },
  {
    title: "Technical Support",
    description:
      "Expert engineering for pipelay, cable lay, and subsea equipment systems.",
    icon: Wrench,
    href: "/services/pipelay-equipment",
  },
  {
    title: "Engineering Services",
    description:
      "From concept development to detailed design and operational engineering.",
    icon: Film,
    href: "/services/engineering-services",
  },
  {
    title: "Project Delivery",
    description:
      "20+ years delivering offshore projects through the full lifecycle.",
    icon: Rocket,
    href: "/services/project-delivery",
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

        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="group relative overflow-hidden transition-shadow hover:shadow-xl">
                {/* top gradient border */}
                <div className="gradient-bg absolute top-0 right-0 left-0 h-[3px]" />
                <CardHeader>
                  <s.icon className="text-accent size-10" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-primary mb-3 text-xl font-black">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="link"
                    nativeButton={false}
                    render={<Link href={s.href} />}
                  >
                    Learn More &rarr;
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Stats ───────────────────────── */
const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "2", label: "Industry Leaders" },
]

function Stats() {
  return (
    <section className="bg-navy relative overflow-hidden py-24">
      {/* subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px] opacity-5" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-10 px-4 text-center md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            {...fadeInUp}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <p className="gradient-text mb-2 text-5xl font-black">{s.value}</p>
            <p className="text-sm tracking-wide text-white/80">{s.label}</p>
          </motion.div>
        ))}
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
    <section className="bg-background py-24">
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

/* ───────────────────────── CTA Banner ───────────────────────── */
function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* wave top */}
      <div className="absolute top-0 right-0 left-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60V0c240 40 480 60 720 40S1200 0 1440 30v30H0z"
            className="fill-background"
          />
        </svg>
      </div>
      <div className="gradient-bg pt-20 pb-24">
        <motion.div
          {...fadeInUp}
          className="mx-auto max-w-7xl px-4 text-center"
        >
          <h2 className="mb-4 text-3xl font-black text-white sm:text-4xl">
            Ready to Start Your Next Project?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Let&apos;s discuss how Future Offshore can support your engineering
            needs.
          </p>
          <Button
            variant="white"
            size="pill"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Contact Us
          </Button>
        </motion.div>
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

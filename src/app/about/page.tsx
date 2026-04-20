"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle,
  Lightbulb,
  Shield,
  Users,
} from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

/* ───────────────────────── Data ───────────────────────── */

const team = [
  {
    name: "Mike Smith",
    role: "Technical Director",
    photo: "/images/team/mike.webp",
    description:
      "With over 20 years of offshore engineering experience, Mike leads the technical direction of Future Offshore, bringing deep expertise in pipelay systems, structural analysis, and equipment design. His career includes leading the design, delivery, and commissioning of some of the most advanced pipelay and subsea systems in operation today.",
  },
  {
    name: "Charlotte Chapman",
    role: "Projects Director",
    photo: "/images/team/charlotte.webp",
    description:
      "Charlotte drives project delivery excellence at Future Offshore, ensuring clients receive transparent communication, quality outcomes, and on-time delivery across all engagements. With extensive experience in offshore project management and client representation, she brings a meticulous and collaborative approach to every project.",
  },
]

const values = [
  {
    letter: "I",
    title: "Innovate",
    icon: Lightbulb,
    description:
      "We challenge assumptions, embrace curiosity, and push boundaries to find smarter, safer, and more efficient engineering solutions. Innovation is not just about new technology — it's about continuously improving how we think, design, and deliver.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    letter: "C",
    title: "Collaborate",
    icon: Users,
    description:
      "We believe the best engineering is built together. Collaboration means valuing diverse perspectives, communicating openly, and working as one team with clients, partners, and suppliers.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    letter: "D",
    title: "Deliver",
    icon: BadgeCheck,
    description:
      "We take ownership of our work and are committed to delivering reliable, high-quality results every time. Precision, safety, and accountability guide our approach from concept to completion.",
    image:
      "https://images.unsplash.com/photo-1566024287286-457247b70310?auto=format&fit=crop&w=800&q=80",
  },
]

const whyUs = [
  "Over 20 years of hands-on offshore engineering expertise",
  "Proven track record delivering advanced pipelay, cable lay, and subsea systems",
  "Personalised, flexible service without corporate layers",
  "Commitment to safety, quality, and innovation on every project",
  "Transparent communication and collaborative client partnerships",
  "End-to-end support from concept through to commissioning",
]

/* ───────────────────────── Page ───────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── 1. Hero: Full-bleed image ── */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1920&q=80"
          alt="Ocean"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="bg-navy/60 absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm tracking-[0.3em] text-white/70 uppercase"
          >
            About Future Offshore
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-6 text-4xl font-black text-white md:text-6xl"
          >
            Engineering Excellence,
            <br />
            Delivered Personally
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-3xl text-lg text-white/80 md:text-xl"
          >
            A personalised, flexible and innovation-driven approach to offshore
            engineering.
          </motion.p>
        </div>
      </section>

      {/* ── 2. Who We Are: 70/30 text-image ── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[2fr_1fr]"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-primary mb-6 text-3xl font-black md:text-4xl">
                Who We Are
              </h2>
              <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
                <p>
                  Future Offshore is established to provide a personalised,
                  flexible and innovation driven service to customers. We want
                  to work closely with clients, move faster, and deliver
                  solutions tailored precisely for their needs, without the
                  limitations and layers that come with the bigger corporate
                  structure.
                </p>
                <p>
                  Future Offshore allows us to combine our experience with a
                  more hands on, collaborative approach, ensuring clients
                  receive the attention, transparency and quality they deserve.
                  Above all, we&apos;re committed to going above and beyond on
                  every project, delivering work that not only meets
                  expectations but exceeds them.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=800&q=80"
                alt="Offshore engineering team at work"
                className="h-72 w-full rounded-xl object-cover shadow-lg lg:h-[500px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Quote Section: Full-width image with pull-quote ── */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1530177150700-84cd9a3b059b?auto=format&fit=crop&w=1920&q=80"
          alt="Offshore vessel at sea"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="bg-navy/70 absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-20">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-2xl leading-relaxed font-light text-white md:text-3xl lg:text-4xl"
          >
            &ldquo;People are at the heart of everything we do. It&apos;s about
            technology, systems, and processes, but in the end,{" "}
            <span className="gradient-text font-black">
              it is our people that deliver
            </span>{" "}
            the results.&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* ── 4. Mission ── */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <img
                src="/images/fo-porthole.webp"
                alt="View through a ship porthole"
                className="w-full rounded-xl object-cover shadow-lg"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-primary mb-8 text-3xl font-black md:text-4xl">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
                To shape the future of the offshore engineering industry by
                working collaboratively with clients and operators to turn
                complex technical challenges into effective, real-world
                solutions and to independently ensure that their subcontracted
                projects are being managed to support on-time delivery of
                quality equipment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Our Experience: Dark section with text + image ── */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[2fr_1fr]"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="mb-8 text-3xl font-black text-white md:text-4xl">
                Our Experience
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-white/80">
                <p>
                  Leading the design, delivery, and commissioning of some of the
                  most advanced pipelay, cable lay and subsea systems in
                  operation today including those for Saipem, Technip,
                  McDermott, Subsea 7, Boskalis and Sapura.
                </p>
                <p>
                  Delivery of full system spreads as Product Lead for Pipe and
                  Cable Lay within IHC UK. Developed innovative methods for
                  structural and fatigue analysis, establishing a foundation for
                  future success. This led to several patents and industry
                  leading equipment.
                </p>
                <p>
                  Beyond large pipelay systems, we have delivered carousels,
                  cable spreads, trenchers, and numerous FEED and concept
                  designs.
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img
                src="https://images.unsplash.com/photo-1566024287286-457247b70310?auto=format&fit=crop&w=800&q=80"
                alt="Offshore equipment"
                className="h-[500px] w-full rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Leadership ── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-primary mb-4 text-3xl font-black md:text-4xl"
            >
              Leadership
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-14 max-w-3xl text-lg leading-relaxed"
            >
              Our leadership team brings decades of hands-on offshore
              engineering experience, guiding every project with technical
              rigour and a commitment to client success.
            </motion.p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="h-full"
                >
                  <div className="group h-full">
                    {/* Rectangular photo */}
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="aspect-[5/4] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-primary mb-1 text-2xl font-black">
                      {member.name}
                    </h3>
                    <p className="gradient-text mb-4 text-sm font-semibold tracking-wide uppercase">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. Vision & Values: 3-column cards with image + dark box ── */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-14 text-center">
              <h2 className="text-primary mb-4 text-3xl font-black md:text-4xl">
                Vision &amp; Values
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
                A future where offshore engineering is safer, smarter, and more
                collaborative. Our values guide everything we do:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="group flex"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-xl">
                    {/* Card image */}
                    <div className="relative h-52 shrink-0 overflow-hidden">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Content box */}
                    <div className="bg-muted flex flex-1 gap-5 p-6">
                      {/* Large letter */}
                      <span className="gradient-text shrink-0 text-5xl leading-none font-black">
                        {value.letter}
                      </span>
                      <div>
                        <h3 className="text-primary mb-2 text-lg font-black">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. Quality & Safety: Teal/accent section with fact cards ── */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="mb-14">
              <h2 className="text-primary mb-4 text-3xl font-black md:text-4xl">
                Quality, Safety &amp; Standards
              </h2>
              <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
                Creating value beyond project delivery. We are committed to
                upholding the highest standards across every engagement.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Engineering Quality",
                  icon: Shield,
                  items: [
                    "Rigorous design verification and review processes",
                    "Adherence to international codes and standards",
                    "Independent quality oversight on all deliverables",
                  ],
                },
                {
                  title: "Health & Safety",
                  icon: CheckCircle,
                  items: [
                    "Safety-first culture embedded in every project phase",
                    "Risk assessment and mitigation planning",
                    "Compliance with industry HSEQ frameworks",
                  ],
                },
                {
                  title: "Client Standards",
                  icon: BadgeCheck,
                  items: [
                    "Transparent reporting and communication",
                    "On-time, on-budget project delivery",
                    "Continuous improvement and lessons learned",
                  ],
                },
              ].map((card) => (
                <motion.div key={card.title} variants={fadeInUp}>
                  <div className="bg-background h-full rounded-xl p-8 shadow-sm ring-1 ring-black/5">
                    <card.icon className="text-fo-green mb-4 size-8" />
                    <h3 className="text-primary mb-4 text-xl font-black">
                      {card.title}
                    </h3>
                    <ul className="space-y-3">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground flex items-start gap-3 text-sm"
                        >
                          <span className="gradient-bg mt-1.5 size-1.5 shrink-0 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 9. Why Future Offshore: Dark section, 50/50 text + image ── */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="mb-8 text-3xl font-black text-white md:text-4xl">
                Why Future Offshore?
              </h2>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-lg text-white/80"
                  >
                    <ArrowRight className="text-fo-green mt-1 size-5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img
                src="/images/fo-hardhat.webp"
                alt="Future Offshore hardhat"
                className="w-full rounded-xl object-cover shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <section className="gradient-bg py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-6 text-3xl font-black text-white md:text-4xl"
            >
              Ready to Work Together?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-8 max-w-xl text-lg text-white/80"
            >
              Let&apos;s discuss how Future Offshore can support your next
              project.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                variant="white"
                size="pillLg"
                nativeButton={false}
                render={<Link href="/contact" />}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BadgeCheck, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

const values = [
  {
    title: "INNOVATE",
    icon: Lightbulb,
    description:
      "We challenge assumptions, embrace curiosity, and push boundaries to find smarter, safer, and more efficient engineering solutions. Innovation is not just about new technology — it's about continuously improving how we think, design, and deliver.",
  },
  {
    title: "COLLABORATE",
    icon: Users,
    description:
      "We believe the best engineering is built together. Collaboration means valuing diverse perspectives, communicating openly, and working as one team with clients, partners, and suppliers.",
  },
  {
    title: "DELIVER",
    icon: BadgeCheck,
    description:
      "We take ownership of our work and are committed to delivering reliable, high-quality results every time. Precision, safety, and accountability guide our approach from concept to completion.",
  },
]

const team = [
  {
    name: "Mike Smith",
    role: "Technical Director",
    initials: "MS",
    description:
      "With over 20 years of offshore engineering experience, Mike leads the technical direction of Future Offshore, bringing deep expertise in pipelay systems, structural analysis, and equipment design.",
  },
  {
    name: "Charlotte Chapman",
    role: "Projects Director",
    initials: "CC",
    description:
      "Charlotte drives project delivery excellence at Future Offshore, ensuring clients receive transparent communication, quality outcomes, and on-time delivery across all engagements.",
  },
]

export default function AboutPage() {
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
            About Future Offshore
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl"
          >
            A personalised, flexible and innovation-driven approach to offshore
            engineering.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-primary mb-6 text-3xl font-black md:text-4xl">
                Who We Are
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Future Offshore exists to do things differently. We deliver a
                personalised, flexible, and innovation-driven service - working
                closely with our clients to move faster and create solutions
                tailored exactly to their needs. Without the layers of larger
                organisations, we stay agile, responsive, and focused on what
                matters most.
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                Our approach is hands-on and collaborative. We bring experience,
                clarity, and transparency to every project, ensuring our clients
                always feel informed, supported, and confident in the outcome.
              </p>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                At Future Offshore, we don&apos;t just meet expectations - we
                push beyond them.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="bg-muted flex h-80 items-center justify-center rounded-xl">
                <span className="text-muted-foreground text-lg">
                  Company Image
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-primary mb-8 text-3xl font-black md:text-4xl"
            >
              Our Mission
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-lg leading-relaxed md:text-xl"
            >
              To shape the future of the offshore engineering industry by
              working collaboratively with clients and operators to turn complex
              technical challenges into effective, real-world solutions and to
              independently ensure that their subcontracted projects are being
              managed to support on-time delivery of quality equipment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mx-auto max-w-4xl"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-primary mb-8 text-center text-3xl font-black md:text-4xl"
            >
              Our Experience
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground text-center text-lg leading-relaxed"
            >
              Leading the design, delivery, and commissioning of some of the
              most advanced pipelay, cable lay and subsea systems in operation
              today including those for Saipem, Technip, McDermott, Subsea 7,
              Boskalis and Sapura. Delivery of full system spreads as Product
              Lead for Pipe and Cable Lay within IHC UK. Developed innovative
              methods for structural and fatigue analysis, establishing a
              foundation for future success. This led to several patents and
              industry leading equipment. Beyond large pipelay systems, we have
              delivered carousels, cable spreads, trenchers, and numerous FEED
              and concept designs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-primary mb-12 text-center text-3xl font-black md:text-4xl"
            >
              Our Leadership
            </motion.h2>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              {team.map((member) => (
                <motion.div key={member.name} variants={fadeInUp}>
                  <Card className="text-center">
                    <CardContent className="pt-8">
                      <Avatar className="mx-auto mb-6 size-24">
                        <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-black">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-primary text-xl font-black">
                        {member.name}
                      </h3>
                      <p className="gradient-text mb-4 font-semibold">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="mb-12 text-center text-3xl font-black text-white md:text-4xl"
            >
              Our Core Values
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {values.map((value) => (
                <motion.div key={value.title} variants={fadeInUp}>
                  <Card className="border-white/10 bg-white/5 text-center backdrop-blur">
                    <CardContent className="pt-8">
                      <div className="text-fo-green mb-4 flex justify-center">
                        <value.icon className="size-10" />
                      </div>
                      <h3 className="gradient-text mb-4 text-xl font-black">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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

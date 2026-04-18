"use client"

import AnimatedSection from "@/components/AnimatedSection"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"
import { FormEvent, useState } from "react"

const subjects = [
  "General Enquiry",
  "Project Support",
  "Technical Consultation",
  "Partnership Opportunity",
  "Other",
]

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "General Enquiry",
    message: "",
  })
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setStatus("error")
      setErrorMsg("Please fill in all required fields.")
      return
    }
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed to send")
      setStatus("success")
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "General Enquiry",
        message: "",
      })
    } catch {
      setStatus("error")
      setErrorMsg("Something went wrong. Please try again later.")
    }
  }

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
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray-300 md:text-xl"
          >
            Let&apos;s discuss how Future Offshore can support your next
            project.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form - Left Column */}
          <AnimatedSection className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">
                    First Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">
                    Last Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Smith"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.smith@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+44 (0) 1234 567890"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label>Subject</Label>
                <Select
                  value={form.subject}
                  onValueChange={(val) =>
                    setForm({ ...form, subject: val as string })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project or enquiry..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                size="pillBlock"
              >
                {status === "loading" ? "Sending..." : "Send Enquiry"}
              </Button>

              {status === "success" && (
                <Alert className="border-fo-green/30 bg-fo-green/10">
                  <CheckCircle2 className="text-fo-green size-4" />
                  <AlertDescription className="text-fo-green">
                    Thank you! Your enquiry has been sent successfully.
                  </AlertDescription>
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{errorMsg}</AlertDescription>
                </Alert>
              )}
            </form>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection className="space-y-8 lg:col-span-2" delay={0.2}>
            {/* Get in Touch Card */}
            <Card className="bg-navy border-none text-white">
              <CardContent className="space-y-6 p-8">
                <h3 className="text-xl font-black">Get in Touch</h3>

                <div className="flex items-start gap-4">
                  <Mail className="text-fo-green mt-0.5 size-6 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:info@futureoffshore.co.uk"
                      className="hover:text-fo-green transition-colors"
                    >
                      info@futureoffshore.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-fo-green mt-0.5 size-6 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <a
                      href="tel:+441234567890"
                      className="hover:text-fo-green transition-colors"
                    >
                      +44 (0) 1234 567890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-fo-green mt-0.5 size-6 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Follow Us */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-primary mb-4 text-xl font-black">
                  Follow Us
                </h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary inline-flex items-center gap-2 font-semibold transition-colors"
                >
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-primary mb-4 text-xl font-black">
                  <Clock className="mr-2 inline size-5" />
                  Office Hours
                </h3>
                <div className="text-muted-foreground space-y-2">
                  <div className="flex justify-between">
                    <span>Monday &ndash; Friday</span>
                    <span className="text-primary font-semibold">
                      9:00 AM &ndash; 5:30 PM
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    GMT (Greenwich Mean Time)
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}

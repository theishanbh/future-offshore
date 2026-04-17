"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function stagger(delay: number) {
  return {
    ...fadeInUp,
    transition: { duration: 0.6, delay },
  };
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* bg image + overlay */}
      <img
        src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=1920&q=80"
        alt="Offshore platform"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.p
          {...stagger(0)}
          className="text-sm tracking-[0.3em] uppercase text-white/70 mb-6"
        >
          Offshore Engineering Excellence
        </motion.p>

        <motion.h1
          {...stagger(0.15)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
        >
          Shaping the Future of
          <br />
          Offshore Engineering
        </motion.h1>

        <motion.p
          {...stagger(0.3)}
          className="gradient-text text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.15em] mb-6"
        >
          INNOVATE. COLLABORATE. DELIVER.
        </motion.p>

        <motion.p
          {...stagger(0.45)}
          className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg mb-10"
        >
          Personalised, flexible and innovation-driven offshore engineering
          services — from concept to completion.
        </motion.p>

        <motion.div
          {...stagger(0.6)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/services"
            className="gradient-bg text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}

/* ───────────────────────── About Intro ───────────────────────── */
function AboutIntro() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeInUp}>
          <p className="text-fo-green font-semibold text-sm tracking-widest uppercase mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-navy mb-6 leading-tight">
            Engineering Excellence, Delivered Personally
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Future Offshore is established to provide a personalised, flexible
            and innovation driven service to customers. We want to work closely
            with clients, move faster, and deliver solutions tailored precisely
            for their needs. With over 20 years of offshore engineering
            experience, our team brings deep technical expertise across pipelay,
            cable lay, subsea systems, project management, and consulting.
          </p>
          <Link
            href="/about"
            className="inline-block gradient-bg text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Learn More
          </Link>
        </motion.div>

        <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
            alt="Offshore engineering team"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ───────────────────────── Services ───────────────────────── */
const services = [
  {
    title: "Project Support",
    description:
      "Client representation, project management, and quality oversight to safeguard your project interests.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Technical Support",
    description:
      "Expert engineering for pipelay, cable lay, and subsea equipment systems.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.121 2.121 0 113-3l5.1 5.1m0 0l2.83 2.83m-2.83-2.83l5.1-5.1a2.121 2.121 0 113 3l-5.1 5.1m-2.83 2.83l-2.83 2.83a2.121 2.121 0 11-3-3l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Engineering Services",
    description:
      "From concept development to detailed design and operational engineering.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: "Project Delivery",
    description:
      "20+ years delivering offshore projects through the full lifecycle.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

function ServicesOverview() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <p className="text-fo-green font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-navy">
            Our Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
              {/* top gradient border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] gradient-bg" />
              <div className="text-fo-blue mb-4">{s.icon}</div>
              <h3 className="text-xl font-black text-navy mb-3">{s.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {s.description}
              </p>
              <Link
                href="/services"
                className="text-fo-blue font-semibold hover:underline"
              >
                Learn More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Stats ───────────────────────── */
const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Global Clients" },
  { value: "2", label: "Industry Leaders" },
];

function Stats() {
  return (
    <section className="bg-navy py-24 relative overflow-hidden">
      {/* subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
      <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div key={s.label} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.15 }}>
            <p className="text-5xl font-black gradient-text mb-2">{s.value}</p>
            <p className="text-white/80 text-sm tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Core Values ───────────────────────── */
const values = [
  {
    title: "Innovate",
    description:
      "We challenge assumptions, embrace curiosity, and push boundaries to find smarter, safer, and more efficient engineering solutions.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Collaborate",
    description:
      "We believe the best engineering is built together. Collaboration means valuing diverse perspectives and communicating openly.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Deliver",
    description:
      "We take ownership of our work and are committed to delivering reliable, high-quality results every time.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function CoreValues() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-navy">
            Our Core Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="inline-flex text-fo-blue mb-4">{v.icon}</div>
              <h3 className="text-2xl font-black gradient-text mb-3">
                {v.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA Banner ───────────────────────── */
function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      {/* wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path
            d="M0 60V0c240 40 480 60 720 40S1200 0 1440 30v30H0z"
            fill="white"
          />
        </svg>
      </div>
      <div className="gradient-bg pt-20 pb-24">
        <motion.div
          {...fadeInUp}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Future Offshore can support your engineering
            needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
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
  );
}

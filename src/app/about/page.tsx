'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const values = [
  {
    title: 'INNOVATE',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    description: 'We challenge assumptions, embrace curiosity, and push boundaries to find smarter, safer, and more efficient engineering solutions. Innovation is not just about new technology — it\'s about continuously improving how we think, design, and deliver.',
  },
  {
    title: 'COLLABORATE',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    description: 'We believe the best engineering is built together. Collaboration means valuing diverse perspectives, communicating openly, and working as one team with clients, partners, and suppliers.',
  },
  {
    title: 'DELIVER',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    description: 'We take ownership of our work and are committed to delivering reliable, high-quality results every time. Precision, safety, and accountability guide our approach from concept to completion.',
  },
];

const team = [
  {
    name: 'Mike Smith',
    role: 'Technical Director',
    initials: 'MS',
    description: 'With over 20 years of offshore engineering experience, Mike leads the technical direction of Future Offshore, bringing deep expertise in pipelay systems, structural analysis, and equipment design.',
  },
  {
    name: 'Charlotte Chapman',
    role: 'Projects Director',
    initials: 'CC',
    description: 'Charlotte drives project delivery excellence at Future Offshore, ensuring clients receive transparent communication, quality outcomes, and on-time delivery across all engagements.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            About Future Offshore
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A personalised, flexible and innovation-driven approach to offshore engineering.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">Who We Are</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Future Offshore is established to provide a personalised, flexible and innovation driven service to customers. We want to work closely with clients, move faster, and deliver solutions tailored precisely for their needs, without the limitations and layers that come with the bigger corporate structure. Future Offshore allows us to combine our experience with a more hands on, collaborative approach, ensuring clients receive the attention, transparency and quality they deserve. Above all, we&apos;re committed to going above and beyond on every project, delivering work that not only meets expectations but exceeds them.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Company Image</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-navy mb-8">
              Our Mission
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-700 text-lg md:text-xl leading-relaxed">
              To shape the future of the offshore engineering industry by working collaboratively with clients and operators to turn complex technical challenges into effective, real-world solutions and to independently ensure that their subcontracted projects are being managed to support on-time delivery of quality equipment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-navy mb-8 text-center">
              Our Experience
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-700 text-lg leading-relaxed text-center">
              Leading the design, delivery, and commissioning of some of the most advanced pipelay, cable lay and subsea systems in operation today including those for Saipem, Technip, McDermott, Subsea 7, Boskalis and Sapura. Delivery of full system spreads as Product Lead for Pipe and Cable Lay within IHC UK. Developed innovative methods for structural and fatigue analysis, establishing a foundation for future success. This led to several patents and industry leading equipment. Beyond large pipelay systems, we have delivered carousels, cable spreads, trenchers, and numerous FEED and concept designs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-navy mb-12 text-center">
              Our Leadership
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg p-8 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-navy mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-2xl font-black">{member.initials}</span>
                  </div>
                  <h3 className="text-xl font-black text-navy">{member.name}</h3>
                  <p className="gradient-text font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Our Core Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur rounded-xl p-8 text-center"
                >
                  <div className="text-fo-green mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="gradient-text text-xl font-black mb-4">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-black text-white mb-6">
              Ready to Work Together?
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <Link
                href="/contact"
                className="inline-block bg-white text-navy font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

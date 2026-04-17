'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { services, getServicesByCategory } from '@/data/services';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
      <Link href={`/services/${service.slug}`} className="block group">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className="h-[3px] gradient-bg" />
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-black text-navy mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {service.shortDescription}
            </p>
            <span className="text-fo-blue font-semibold text-sm group-hover:translate-x-1 inline-block transition-transform">
              Learn More &rarr;
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function CategorySection({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  const categoryServices = getServicesByCategory(category);

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={stagger}
      className="mb-20"
    >
      <motion.h2
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-black text-navy mb-10"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categoryServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </motion.section>
  );
}

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive offshore engineering services spanning project support
            and technical expertise, delivered with precision and a collaborative
            approach.
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <CategorySection title="Project Support" category="project-support" />
          <CategorySection title="Technical Support" category="technical-support" />
        </div>
      </section>
    </>
  );
}

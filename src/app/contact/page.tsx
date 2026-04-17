'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Enquiry',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.message) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', subject: 'General Enquiry', message: '' });
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again later.');
    }
  };

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy transition-colors';

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Let&apos;s discuss how Future Offshore can support your next project.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form - Left Column */}
          <AnimatedSection className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={form.firstName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Smith"
                    value={form.lastName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.smith@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+44 (0) 1234 567890"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company"
                  value={form.company}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>General Enquiry</option>
                  <option>Project Support</option>
                  <option>Technical Consultation</option>
                  <option>Partnership Opportunity</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us about your project or enquiry..."
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full gradient-bg text-white font-semibold py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
              </button>

              {status === 'success' && (
                <p className="text-green-600 font-semibold text-center">
                  Thank you! Your enquiry has been sent successfully.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 font-semibold text-center">{errorMsg}</p>
              )}
            </form>
          </AnimatedSection>

          {/* Right Column */}
          <AnimatedSection className="lg:col-span-2 space-y-8" delay={0.2}>
            {/* Get in Touch Card */}
            <div className="bg-navy text-white rounded-xl p-8 space-y-6">
              <h3 className="text-xl font-black">Get in Touch</h3>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-fo-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@futureoffshore.co.uk" className="hover:text-fo-green transition-colors">
                    info@futureoffshore.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-fo-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+441234567890" className="hover:text-fo-green transition-colors">
                    +44 (0) 1234 567890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-fo-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>United Kingdom</p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-black text-navy mb-4">Follow Us</h3>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-fo-blue hover:text-navy transition-colors font-semibold"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-black text-navy mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday &ndash; Friday</span>
                  <span className="font-semibold text-navy">9:00 AM &ndash; 5:30 PM</span>
                </div>
                <p className="text-sm text-gray-400">GMT (Greenwich Mean Time)</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

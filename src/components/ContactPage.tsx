import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// ---------- helper ----------
const AnimatedTextBorder = ({ children, direction = 'up', delay = 0 }) => {
  const slide = {
    left: { x: -60, opacity: 0 },
    right: { x: 60, opacity: 0 },
    up: { y: 40, opacity: 0 },
  };
  return (
    <motion.span
      initial={slide[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay }}
      className="relative inline-block"
    >
      {children}
      <motion.span
        className="absolute left-0 -bottom-1 h-0.5 w-full bg-emerald-400"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      />
    </motion.span>
  );
};

// ---------- refined content ----------
const contactMethods = [
  {
    title: 'General Inquiry',
    email: 'hello@altibbe.com',
    desc: 'Questions about certifications, labels, or partnerships.',
  },
  {
    title: 'Certification Support',
    email: 'cert@altibbe.com',
    desc: 'Need help with Hedamo labels or audits.',
  },
  {
    title: 'Press & Media',
    email: 'press@altibbe.com',
    desc: 'Interviews, logos, brand assets.',
  },
];

// ---------- page ----------
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <AnimatedTextBorder direction="up">
              Get In Touch
            </AnimatedTextBorder>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you’re a producer, consumer or media outlet, we’re here to help you thrive in transparency and health.
          </motion.p>
        </div>
      </section>

      {/* Contact Channels */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {contactMethods.map((item, idx) => (
            <motion.div
              key={item.email}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-bold mb-3">
                <AnimatedTextBorder direction="left" delay={idx * 0.1}>
                  {item.title}
                </AnimatedTextBorder>
              </h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <a
                href={`mailto:${item.email}`}
                className="btn-mono"
              >
                {item.email}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            <AnimatedTextBorder direction="up">
              Stay Updated
            </AnimatedTextBorder>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-600 mb-8"
          >
            Receive the latest insights on organic certification, health labels and sustainability straight to your inbox.
          </motion.p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Subscribed!');
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Email address"
              required
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-emerald-500 outline-none"
            />
            <button type="submit" className="btn-mono">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
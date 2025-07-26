import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import AnimatedTextBorder from './common/AnimatedTextBorder';

const NewsHighlight = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          <AnimatedTextBorder direction="up" delay={0}>
            Hedamo Transparency Services
          </AnimatedTextBorder>
        </h2>

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-700 mb-4"
        >
          Hedamo (our expert review brand) sets the standard for transparency and holistic health in food and farming. Through our services, producers gain credibility and consumers gain trust.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-left max-w-2xl mx-auto mb-8 space-y-2 text-gray-700 list-disc list-inside"
        >
          <li><strong>Organic Farm Consulting:</strong> Tailored strategies for organic farms and food producers.</li>
          <li><strong>Health-Centered Product Reporting:</strong> Detailed reports highlighting unique health benefits.</li>
          <li><strong>Global Market Access:</strong> Help products meet regional standards and reach new markets.</li>
        </motion.ul>
<motion.a
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  whileHover={{ scale: 1.05 }}
  href="#"
  className="btn-mono inline-flex items-center"
>
  <motion.span
    className="relative flex items-center"
    initial={false}
    animate={{ flexDirection: 'row-reverse' }}
    whileHover={{ flexDirection: 'row' }}
    transition={{ type: 'spring', stiffness: 100, damping: 40 }}
  >
    <ArrowRightIcon className="h-5 w-5" />
    <span className="mx-2">Join Our Waitlist to Get Verified</span>
  </motion.span>
</motion.a>
      </div>
    </section>
  );
};

export default NewsHighlight;
// src/components/v2/communitypage/Contribute.tsx
import React from 'react';
import { motion } from 'framer-motion';
import ArrowButton from '../../common/ArrowButton';

const links = [
  { title: 'Participate in Community Discussion', href: 'https://www.xdc.dev/' },
  { title: 'Get emails about upcoming events', href: 'mailto:consult@xdc.org?subject=Contact Us' },
  { title: 'Track what’s happening on Voting Dapp', href: 'https://xdc-voting-dapp.vercel.app/' },
];

const slideIn = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const buttonSlide = {
  hidden: (i: number) => ({ opacity: 0, x: 100, transition: { delay: i * 0.15 } }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contribute() {
  return (
    <section className="py-20 px-6 bg-white">
      {/* full-width neutral bar */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-neutral-100 text-black">
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          {/* TEXT BLOCK */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideIn}
            className="text-left mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contribute</h2>
            <p className="max-w-2xl">
              The XDC community includes a global network of individuals with different
              skills contributing to the ecosystem's growth. Each participant can play
              a role and there are many ways to get involved.
            </p>
          </motion.div>

          {/* ARROW BUTTONS */}
          <div className="grid md:grid-cols-3 gap-6">
            {links.map(({ title, href }, idx) => (
              <motion.div
                key={title}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={buttonSlide}
              >
                <ArrowButton
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  {title}
                </ArrowButton>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
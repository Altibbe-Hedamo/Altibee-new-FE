// FeatureTriple.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Enterprise',
    body: 'The XDC Network is a groundbreaking blockchain with impressive speed, scalability, low fees, and military-grade security. Using XDC Network, businesses can improve their record keeping, exchange data and transfer assets more efficiently and more securely.',
    cta: 'Explore Enterprise Solutions',
    href: '/enterprise',
  },
  {
    title: 'Trade Finance',
    body: 'The XDC Network sets a benchmark for digitizing trade finance by enabling the tokenization of diverse trade finance instruments and assets.',
    cta: 'Explore TradeFi',
    href: '/trade-fi',
  },
  {
    title: 'Developers & Creators',
    body: 'The XDC Network is an enterprise-grade, open-source and EVM-compatible Layer 1 blockchain. Geared to accommodate any EVM tool set, developers can carry their skills from other chains onto the XDC Network.',
    cta: 'Start creating with XDC',
    href: '/dev',
  },
];

export default function FeatureTriple() {
  return (
    <section className="bg-[#131619] text-[#9FF3FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((f) => (
            <article
              key={f.title}
              className="flex flex-col justify-between space-y-6"
            >
              <div>
                <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
                  {f.title}
                </h2>
                <p className="mt-4 font-sans text-base leading-relaxed text-[#9FF3FF]/90">
                  {f.body}
                </p>
              </div>

              <Link
                to={f.href}
                className="inline-flex items-center font-sans text-sm group"
              >
                <span className="underline underline-offset-4">
                  {f.cta}
                </span>
                <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
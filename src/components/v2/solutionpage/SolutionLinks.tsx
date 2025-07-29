// src/components/v2/solutionpage/SolutionLinks.tsx
'use client';
import { useEffect, useRef } from 'react';
import ArrowButton from '../../common/ArrowButton';

const blocks = [
  {
    title: 'Enterprise',
    text: 'The XDC Network is a groundbreaking blockchain with impressive speed, scalability, low fees, and military-grade security. Using XDC Network, businesses can improve their record keeping, exchange data and transfer assets more efficiently and more securely.',
    cta: 'Explore Enterprise Solutions',
    href: '/solutions/enterprise',
  },
  {
    title: 'Trade Finance',
    text: 'The XDC Network sets a benchmark for digitizing trade finance by enabling the tokenization of diverse trade finance instruments and assets.',
    cta: 'Explore TradeFi',
    href: '/solutions/trade-finance',
  },
  {
    title: 'Developers & Creators',
    text: 'The XDC Network is an enterprise-grade, open-source and EVM-compatible Layer 1 blockchain. Geared to accommodate any EVM tool set, developers can carry their skills from other chains onto the XDC Network.',
    cta: 'Start creating with XDC',
    href: '/solutions/developers',
  },
];

export default function SolutionLinks() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('opacity-0', 'translate-y-6');
            e.target.classList.add('opacity-100', 'translate-y-0');
          }
        }),
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && io.observe(el));

    return () => refs.current.forEach((el) => el && io.unobserve(el));
  }, []);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 px-6">
        {/* left half: image */}
        <div className="flex justify-center">
          <img
            src="/image.png"
            alt="XDC Solutions"
            className="object-contain w-full h-auto max-w-lg"
          />
        </div>

        {/* right half: cards */}
        <div className="flex flex-col space-y-10">
          {blocks.map((b, idx) => (
            <div
              key={b.title}
              ref={(el) => (refs.current[idx] = el)}
              className="space-y-3 transition-all duration-700 opacity-0 translate-y-6"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                {b.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {b.text}
              </p>
              <ArrowButton href={b.href} classname='p-4 w-full'>{b.cta}</ArrowButton>
            </div>
          ))}
        </div>
      </div>
           <div className="w-3/4 h-px  bg-black mt-4"></div>
    </section>
  );
}
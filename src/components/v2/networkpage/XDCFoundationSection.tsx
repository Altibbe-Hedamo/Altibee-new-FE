// src/components/sections/XDCFoundationSection.tsx
'use client'; // if you’re in Next.js App Router
import { useEffect, useRef } from 'react';
import ArrowButton from '../../common/ArrowButton';

const XDCFoundationSection = () => {
  // observe every paragraph on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-done');
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll('.slide-in')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* CSS keyframes (tiny global style) */}
      <style jsx global>{`
        .slide-in {
          opacity: 0;
          transform: translateX(100px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .slide-in-done {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      {/* invisible SVG for the double-bubble clip-path */}
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="frame-a" clipPathUnits="objectBoundingBox">
            <path d="M0.492,0.039 a0.015,0.012,0,0,0,0.017,0 C0.553,0.015,0.606,0,0.663,0 C0.808,0,0.927,0.093,0.934,0.211 c0,0.006,0.007,0.012,0.014,0.012 H0.986 c0.008,0,0.014,0.005,0.014,0.012 v0.754 c0,0.006,-0.006,0.012,-0.014,0.012 H0.014 c-0.008,0,-0.014,-0.005,-0.014,-0.012 V0.234 c0,-0.006,0.006,-0.012,0.014,-0.012 h0.039 c0.008,0,0.014,-0.005,0.014,-0.012 C0.075,0.093,0.193,0,0.338,0 c0.057,0,0.11,0.015,0.154,0.039" />
          </clipPath>
        </defs>
      </svg>

      <section className="relative py-24 bg-white w-full">
        {/* ¾-width top & bottom borders */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gray-200" />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gray-200" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* LEFT — clipped image + buttons */}
          <div className="flex flex-col items-start space-y-6">
            <div className="w-full max-w-sm h-[500px]">
              <img
                src="/image.png" // swap for real asset
                alt="XDC illustration"
                className="w-full h-full object-cover"
                style={{ clipPath: 'url(#frame-a)', WebkitClipPath: 'url(#frame-a)' }}
              />
            </div>

            <div className="flex flex-col gap-4 w-full">
              <ArrowButton href="https://xinfin.org" classname="w-full">
                Visit the XinFin Website
              </ArrowButton>
              <ArrowButton href="/get-in-touch">Consult XDC Foundation</ArrowButton>
            </div>
          </div>

          {/* RIGHT — animated paragraphs */}
          <div className="flex flex-col items-start space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              XDC <em className="not-italic">Network</em>
            </h2>

            {[
              'Since its origins in 2017, the XDC Network has seen a distributed community of developers, early adopters and advocates serve as champions for the adoption of XDC’s blockchain technology.',
              'As an open-source, enterprise-grade blockchain, XDC Network was designed to support those using distributed-ledger technology to more efficiently store and exchange data, assets, and ideas through decentralized applications and enforceable smart contracts.',
              <>
                <strong key="k">XinFin Fintech's</strong> vision for an enterprise-grade
                blockchain network began with a solid technical foundation and a sustainable
                route towards decentralized participation. This vision has since inspired
                distributed innovation and adoption. A decentralized community with diverse
                contributions creates major opportunities for network adoption.
              </>,
              'XDC Foundation works to support the XDC Ecosystem, where XDC Network’s open-source technology is adopted for many diverse use cases. A community-driven initiative, the Foundation was formed in Q2 2021 to support the growth, development and adoption of the XDC Network by collaborating with an informed and active collective.',
            ].map((txt, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-slate-700 slide-in"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {txt}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default XDCFoundationSection;
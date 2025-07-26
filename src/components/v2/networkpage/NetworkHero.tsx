// src/components/sections/NetworkHero.tsx
import React from 'react';

const NetworkHero = () => (
  <section className="bg-[#131619] text-[#9FF3FF] px-6 py-24 md:py-40">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="font-mono text-4xl md:text-7xl font-bold leading-none">
          <span className="block">XDC Network</span>
          <em className="block italic">A channel to build and connect</em>
        </h1>
        <p className="mt-6 font-sans text-lg md:text-xl max-w-xl leading-relaxed">
          As a decentralized public ledger, the Layer 1 XDC Network enables information
          transparency and provides a distributed, universal ledger of truth — unburdened
          by central administrative controls or a single point of failure.
        </p>
      </div>

      <div className="relative">
        <svg width="0" height="0" aria-hidden="true">
          <defs>
            <clipPath id="frame-a" clipPathUnits="objectBoundingBox">
              <path d="M0.492,0.039 a0.015,0.012,0,0,0,0.017,0 C0.553,0.015,0.606,0,0.663,0 C0.808,0,0.927,0.093,0.934,0.211 c0,0.006,0.007,0.012,0.014,0.012 H0.986 c0.008,0,0.014,0.005,0.014,0.012 v0.754 c0,0.006,-0.006,0.012,-0.014,0.012 H0.014 c-0.008,0,-0.014,-0.005,-0.014,-0.012 V0.234 c0,-0.006,0.006,-0.012,0.014,-0.012 h0.039 c0.008,0,0.014,-0.005,0.014,-0.012 C0.075,0.093,0.193,0,0.338,0 c0.057,0,0.11,0.015,0.154,0.039" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="w-full aspect-[4/5] bg-slate-800 rounded-xl"
          style={{ clipPath: 'url(#frame-a)' }}
        >
          <canvas className="w-full h-full" width={439} height={532} />
        </div>
      </div>
    </div>
  </section>
);

export default NetworkHero;
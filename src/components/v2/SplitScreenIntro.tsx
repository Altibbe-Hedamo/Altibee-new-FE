// SplitScreenIntro.tsx
import React from 'react';
import ArrowButton from '../common/ArrowButton';

export default function SplitScreenIntro() {
  return (
    // <section className="bg-[#131619] text-[#9FF3FF]">
    <section className="bg-[#131619] text-[#9FF3FF] z-10">
      <div className="flex flex-col lg:flex-row">
        {/* 1️⃣  LEFT : Image half */}
        <div
          className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-[auto] bg-cover bg-center"
          style={{
            backgroundImage: "url('/image.png')", // ← 1920×1080
          }}
        />

        {/* 2️⃣  RIGHT : Text half */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-16 px-[clamp(1rem,6vw,4rem)]">
      {/* Enterprise */}
          <div className="mb-12">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">
              Enterprise
            </h2>
            <p className="font-sans text-[1rem] leading-[1.6] mt-3 text-[#9FF3FF]/90">
              The XDC Network is a groundbreaking blockchain with impressive
              speed, scalability, low fees, and military-grade security. Using
              XDC Network, businesses can improve their record keeping, exchange
              data and transfer assets more efficiently and more securely.
            </p>
            <ArrowButton href="/enterprise">
              Explore Enterprise Solutions
            </ArrowButton>
          </div>

          {/* Trade Finance */}
          <div className="mb-12">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">
              Trade Finance
            </h2>
            <p className="font-sans text-[1rem] leading-[1.6] mt-3 text-[#9FF3FF]/90">
              The XDC Network sets a benchmark for digitizing trade finance by
              enabling the tokenization of diverse trade finance instruments and
              assets.
            </p>
            <ArrowButton href="/trade-fi">
              Explore TradeFi
            </ArrowButton>
          </div>

          {/* Developers & Creators */}
          <div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-tight">
              Developers & Creators
            </h2>
            <p className="font-sans text-[1rem] leading-[1.6] mt-3 text-[#9FF3FF]/90">
              The XDC Network is an enterprise-grade, open-source and
              EVM-compatible Layer 1 blockchain. Geared to accommodate any EVM
              tool set, developers can carry their skills from other chains onto
              the XDC Network.
            </p>
            <ArrowButton href="/dev">
              Start creating with XDC
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
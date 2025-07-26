// components/BuildSection.tsx
import React from 'react';

const BuildSection = () => (
  <section className="bg-[#131619] text-[#9FF3FF] px-6 py-20 md:py-32">
    <div className="max-w-6xl mx-auto">
      {/* Top branding */}
      <h1 className="font-mono text-5xl md:text-7xl font-bold tracking-tighter">
        XBuilc&nbsp;&nbsp;SXDC&nbsp;&nbsp;KHer
      </h1>
      <p className="font-sans text-3xl md:text-5xl mt-4">
        <a
          href="https://xdc.org/build"
          className="underline hover:text-[#9FF3FF]/80 transition-colors"
        >
          a xdc.org/build
        </a>
      </p>

      {/* Big headline */}
      <h2 className="font-serif text-4xl md:text-6xl mt-16">
        Start Building
      </h2>
      <p className="font-sans text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
        Build with confidence and harness the capabilities of blockchain
        technology with the XDC Network.
      </p>

      {/* Quick-start links */}
      <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 text-xl">
        {[
          { label: 'Launch a Subnet', url: '#', icon: '📺' },
          { label: 'Documentation', url: '#', icon: '📖' },
          { label: 'GitHub', url: '#', icon: '🐙' },
          { label: 'Explorer', url: '#', icon: '🔍' },
          { label: 'Wallets', url: '#', icon: '💳' },
          { label: 'Articles', url: '#', icon: '✍️' },
        ].map(({ label, url, icon }) => (
          <li key={label}>
            <a
              href={url}
              className="flex items-center space-x-2 hover:text-white transition-colors underline"
            >
              <span>{icon}</span>
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default BuildSection;
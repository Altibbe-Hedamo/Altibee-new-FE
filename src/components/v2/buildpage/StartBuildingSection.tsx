// src/components/build/StartBuildingSection.jsx
'use client';
import { useEffect } from 'react';

const linksCol2 = [
  { label: 'Documentation', href: '#' },
  { label: 'GitHub', href: '#' },
];
const linksCol3 = [
  { label: 'Wallets', href: '#' },
  { label: 'Explorer', href: '#' },
];

export default function StartBuildingSection() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('animate-in');
        }),
      { threshold: 0.3 }
    );
    document.querySelectorAll('.slide').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        .slide {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .yellow-stroke {
          stroke: #FBBF24;
          stroke-width: 2;
          fill: none;
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: draw 1.5s ease-out forwards;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
<section className="py-20 bg-amber-50">
  <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10 lg:gap-16 items-start">

    {/* ── 1st column ── */}
    <div className="flex flex-col items-center text-center space-y-6">
      <h2 className="text-3xl font-bold slide typewrite">
        <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-black animate-typing">
          Start Building
        </span>
      </h2>

      <p className="text-gray-700 max-w-sm slide" style={{transitionDelay:'0.15s'}}>
        Build with confidence and harness the capabilities of blockchain technology with the XDC Network.
      </p>

      <a
        href="https://youtu.be/YOUR_VIDEO_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 slide"
        style={{transitionDelay:'0.3s'}}
      >
        WATCH: Launch a Subnet on XDC Network
      </a>
    </div>

    {/* ── 2nd column ── */}
    <div className="flex flex-col items-center space-y-6">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <clipPath id="clipLeft"><path d="M150 0 C0 75 0 225 150 300 C300 225 300 75 150 0 Z" /></clipPath>
          </defs>
          <path d="M150 0 C0 75 0 225 150 300 C300 225 300 75 150 0 Z" className="yellow-stroke" />
          <image href="/image.png" width="300" height="300" clipPath="url(#clipLeft)" preserveAspectRatio="xMidYMid slice"/>
        </svg>
      </div>

      <h3 className="text-2xl font-bold slide" style={{transitionDelay:'0.4s'}}>Resources</h3>

      {linksCol2.map((l, i) => (
        <a
          key={l.label}
          href={l.href}
          className="text-sm underline hover:text-blue-600 slide link-border"
          style={{transitionDelay:`${0.5 + i * 0.05}s`}}
        >
          {l.label} →
        </a>
      ))}
    </div>

    {/* ── 3rd column ── */}
    <div className="flex flex-col items-center space-y-6">
      <div className="relative w-48 h-48">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <defs>
            <clipPath id="clipRight"><path d="M150 0 C0 75 0 225 150 300 C300 225 300 75 150 0 Z" /></clipPath>
          </defs>
          <path d="M150 0 C0 75 0 225 150 300 C300 225 300 75 150 0 Z" className="yellow-stroke" />
          <image href="/image.png" width="300" height="300" clipPath="url(#clipRight)" preserveAspectRatio="xMidYMid slice"/>
        </svg>
      </div>

      <h3 className="text-2xl font-bold slide" style={{transitionDelay:'0.4s'}}>Subnets</h3>

      {linksCol3.map((l, i) => (
        <a
          key={l.label}
          href={l.href}
          className="text-sm underline hover:text-blue-600 slide link-border"
          style={{transitionDelay:`${0.5 + i * 0.05}s`}}
        >
          {l.label} →
        </a>
      ))}
    </div>
  </div>

  {/* ----- NEW STYLES ----- */}
  <style jsx global>{`
    /* typing animation */
    @keyframes typing {
      0%   { width: 0 }
      100% { width: 100% }
    }
    .animate-typing {
      animation: typing 1.2s steps(14, end) forwards;
    }

    /* animated top / bottom border for links */
    .link-border {
      position: relative;
      padding: 0.5rem 0;
      text-decoration: none;
    }
    .link-border::before,
    .link-border::after {
      content: '';
      position: absolute;
      left: 50%;
      width: 0;
      height: 1px;
      background: currentColor;
      transition: width 0.3s ease, left 0.3s ease;
    }
    .link-border::before { top: 0; }
    .link-border::after  { bottom: 0; }
    .link-border:hover::before,
    .link-border:hover::after {
      width: 100%;
      left: 0;
    }
  `}</style>
</section>
    </>
  );
}
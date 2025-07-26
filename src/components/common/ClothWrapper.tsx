import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HERO_HEIGHT_CSS = 'calc(var(--vh, 1vh) * 84)';   // same as Hero height

export default function ClothWrapper() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleScroll = () => {
      const y = window.scrollY;
      // translateY goes from -100% (fully above viewport) to 0 (fully covers hero)
      const offset = Math.max(-100, -100 + y); // percentage units
      if (ref.current) {
        ref.current.style.transform = `translateY(${offset}%)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();                         // initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. The cloth (SmoothWrapper content) */}
      <div
        ref={ref}
        className="fixed top-0 left-0 w-full bg-[rgb(19,22,25)] z-20"
        style={{ height: HERO_HEIGHT_CSS, willChange: 'transform' }}
      >
        <section
          className="relative flex flex-col lg:flex-row items-center justify-center w-full h-full"
        >
          {/* ---------- Left text block ---------- */}
          <div className="flex flex-col items-center text-center px-6 py-20 lg:w-1/2">
            <h2
              className="text-[1.8rem] leading-[1.5] font-[400] tracking-tight"
              style={{ fontFamily: '"Untitled Sans", sans-serif' }}
            >
              <span className="block text-white" data-aos="fade-up">
                Success Depends on
              </span>
              <span className="block text-white" data-aos="fade-up" data-aos-delay="150">
                Your Network
              </span>
            </h2>

            <div className="my-10" />

            <p
              className="max-w-xl text-[1.125rem] leading-[1.6] font-[400]"
              style={{ fontFamily: '"Untitled Sans", sans-serif' }}
            >
              <span className="inline-block text-white/80" data-aos="fade-up" data-aos-delay="300">
                A fast and secure blockchain that supports trade finance,
                real-world asset (RWA) tokenization, and
              </span>{' '}
              <span className="inline-block text-white/80" data-aos="fade-up" data-aos-delay="450">
                enterprise applications.
              </span>
            </p>

            <div className="my-12" />

            <a
              href="/build"
              className="group relative inline-flex items-center justify-center px-9 py-4 text-sm font-semibold text-white border border-white/50 rounded-sm transition-all duration-300 hover:bg-white hover:text-[rgb(19,22,25)]"
            >
              {/* decorative SVG border – unchanged */}
              <svg
                viewBox="0 0 231 74"
                fill="none"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  d="M230 1H1V73H230V1Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                />
              </svg>

              <span className="relative flex items-center space-x-2">
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M0 9h18c-2.397 0-7.192-1.6-7.192-8M0 9h18c-2.397 0-7.192 1.6-7.192 8"
                  />
                </svg>

                <span>Get started with XDC</span>

                <svg
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 18 18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M0 9h18c-2.397 0-7.192 1.6-7.192 8"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* ---------- Right illustration ---------- */}
          <div className="relative w-full lg:w-1/2 h-full">
            <svg width="0" height="0" aria-hidden="true">
              <defs>
                <clipPath id="frameClip" clipPathUnits="objectBoundingBox">
                  <path d="M0,1 h1 V0.132 h-0.361 C0.615,0.054,0.561,0,0.5,0 c-0.062,0,-0.114,0.054,-0.138,0.132 H0 v0.868" />
                </clipPath>
              </defs>
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ clipPath: 'url(#frameClip)' }}
            >
              <canvas
                className="w-[90%] max-w-3xl aspect-[2560/1732] bg-slate-800 rounded-md"
                width={2560}
                height={1732}
                aria-hidden="true"
              />
            </div>
          </div>
        </section>
      </div>

      {/* 2. Spacer so the rest of the page can scroll normally
          (same height as the hero, so once the cloth is fully down
          the scroll continues seamlessly) */}
      <div style={{ height: HERO_HEIGHT_CSS }} />
    </>
  );
}
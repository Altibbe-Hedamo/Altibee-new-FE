// components/Hero.tsx
import { useEffect } from 'react';

export default function Hero() {
  // Mobile-safe 100vh
  useEffect(() => {
    const setVh = () =>
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`
      );
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <section
      style={{ height: 'calc(var(--vh, 1vh) * 84)' }}
      className="relative w-full flex items-center justify-center bg-[#131619] text-[#9FF3FF] px-6  sticky top-0 0"
    >
      {/* Optional subtle noise overlay */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[url('/image.png')]" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Main heading with PDF font pattern */}
        <h1 className="heading-main text-[clamp(6.2rem,7.3vw,16.6rem)] leading-none tracking-tight text-[#9FF3FF]">
          <em className="not-italic">
            Enterprise-grade <br /> blockchain
          </em>
        </h1>

        <p className="mt-6 body-text text-[clamp(1.8rem,2vw,2.2rem)] text-[#9FF3FF]/90">
          EVM-compatible, open-source, ready for trade finance.
        </p>

        {/* Animated button */}
        <a
          href="#next"
          className="group relative inline-flex items-center justify-center max-w-[42.5rem] mt-12 px-8 py-5 button-text text-[clamp(1.8rem,2vw,2.2rem)] text-[#9FF3FF]"
        >
          <span className="relative overflow-hidden">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Explore XDC
            </span>
            <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
              Explore XDC
            </span>
          </span>

          {/* Arrow */}
          <svg
            className="w-[0.7em] h-[0.7em] ml-[0.7em] transition-transform duration-300 ease-out group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12H6.5m11 0l-5-5m5 5l-5 5"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
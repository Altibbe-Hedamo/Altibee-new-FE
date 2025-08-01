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
      className="relative w-full flex items-center justify-center bg-primary-900 text-accent-mint px-6 sticky top-0"
    >
      {/* Optional subtle noise overlay with organic texture */}
      <div 
        className="absolute inset-0 -z-10 opacity-10"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1920&h=1080&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-5xl mx-auto text-center">
        {/* Main heading with PDF font pattern */}
        <h1 className="heading-main text-[clamp(6.2rem,7.3vw,16.6rem)] leading-none tracking-tight text-accent-mint">
          <em className="not-italic">
            Organic-grade <br /> blockchain
          </em>
        </h1>

        <p className="mt-6 body-text text-[clamp(1.8rem,2vw,2.2rem)] text-accent-mint/90">
          EVM-compatible, sustainable, ready for organic trade finance.
        </p>

        {/* Animated button */}
        <a
          href="#next"
          className="group relative inline-flex items-center justify-center max-w-[42.5rem] mt-12 px-8 py-5 button-text text-[clamp(1.8rem,2vw,2.2rem)] text-accent-mint bg-primary-600 hover:bg-primary-500 rounded-lg transition-colors"
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
// components/Hero.tsx
import { useEffect } from 'react';
import ScrollingTextButton from '../common/ScrollingTextButton';

export default function Hero() {
  /* Mobile-safe 100 vh */
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
      className="fixed top-0 left-0 w-full flex items-center justify-center bg-[#131619] text-[#9FF3FF] px-6 z-0"
    >
      {/* Optional subtle noise overlay */}
      <div className="absolute inset-0 -z-10 opacity-5 bg-[url('/noise.svg')]" />

      <div className="max-w-5xl mx-auto text-center">
        {/* Editorial headline */}
        <h1 className="font-editorial text-[clamp(6.2rem,7.3vw,16.6rem)] leading-none tracking-tight">
          <em className="not-italic">
            Enterprise-grade <br /> blockchain
          </em>
        </h1>

        <p className="mt-6 font-sans text-[clamp(1.8rem,2vw,2.2rem)] text-[#9FF3FF]/90">
          EVM-compatible, open-source, ready for trade finance.
        </p>

        <ScrollingTextButton href="/blog">Read More</ScrollingTextButton>
      </div>
    </section>
  );
}
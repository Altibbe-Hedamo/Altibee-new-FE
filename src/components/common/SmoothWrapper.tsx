import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SmoothWrapper() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Parallax driver
    const onScroll = () => {
      const scrollY = window.scrollY;
      // tweak 0.3 and 0.2 to taste
      document.documentElement.style.setProperty(
        '--parallax',
        `${scrollY * 0.3}px`
      );
      document.documentElement.style.setProperty(
        '--scale',
        `${1 - scrollY * 0.0002}`   // 0.0002 -> subtle shrink
      );
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-center w-full
                 bg-[rgb(19,22,25)] z-[10]"   /* same bg as hero so edges don’t bleed */
      style={{
        height: 'var(--homeHeroHeight)',
        transform: 'translateY(var(--parallax, 0)) * -0.4))',
        willChange: 'transform',
        transformOrigin: 'top center',
      }}
    >
    
    </section>
  );
}
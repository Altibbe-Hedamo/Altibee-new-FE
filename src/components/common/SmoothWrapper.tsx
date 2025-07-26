// components/SmoothWrapper.tsx
import React, { useEffect } from 'react';

export default function SmoothWrapper() {
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
      style={{ height: 'calc(var(--vh, 1vh) * 120)', backgroundImage: "url('https://picsum.photos/1920/1081')" }}
      className="
        relative
        z-10
        w-full
        bg-cover
        bg-center
        bg-[rgb(19,22,25)]
      "
    >
      {/* Optional dark overlay so text above pops */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
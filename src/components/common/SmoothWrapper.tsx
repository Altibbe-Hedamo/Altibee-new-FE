// components/SmoothWrapper.tsx
import React, { useEffect } from 'react';

export default function SmoothWrapper() {
  /* keep the vh helper */
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
      style={{ height: 'calc(var(--vh, 1vh) * 120)' }}
      className="
        relative
        z-10
        w-full
        flex
        items-center
        justify-center
        bg-[rgb(19,22,25)]
      "
    >
      {/* background layer with circle → full reveal animation */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          circle-reveal
        "
        style={{
          backgroundImage: "url('/image.png')",
          animation: 'circleGrow 1.2s cubic-bezier(.25,.8,.25,1) forwards',
        }}
      />

      {/* subtle overlay so text above remains readable */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}
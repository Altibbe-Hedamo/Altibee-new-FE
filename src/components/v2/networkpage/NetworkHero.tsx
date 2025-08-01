// NetworkHero.tsx
const NetworkHero = () => (
  <section className=" w-full">
    {/* invisible SVG clip-path definition */}
    <svg width="0" height="0" aria-hidden="true">
      <defs>
        <clipPath id="frame-a" clipPathUnits="objectBoundingBox">
          <path d="M0.492,0.039 a0.015,0.012,0,0,0,0.017,0 C0.553,0.015,0.606,0,0.663,0 C0.808,0,0.927,0.093,0.934,0.211 c0,0.006,0.007,0.012,0.014,0.012 H0.986 c0.008,0,0.014,0.005,0.014,0.012 v0.754 c0,0.006,-0.006,0.012,-0.014,0.012 H0.014 c-0.008,0,-0.014,-0.005,-0.014,-0.012 V0.234 c0,-0.006,0.006,-0.012,0.014,-0.012 h0.039 c0.008,0,0.014,-0.005,0.014,-0.012 C0.075,0.093,0.193,0,0.338,0 c0.057,0,0.11,0.015,0.154,0.039" />
        </clipPath>
      </defs>
    </svg>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-stretch min-h-[70vh] md:min-h-[80vh] mb-8">
      {/* Left side – text centered vertically */}
      <div className="flex flex-col justify-center px-6 py-12 md:py-24">
        <h1 className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold leading-none">
          <span className="block">XDC Network</span>
          <em className="block italic">A channel to build and connect</em>
        </h1>
        <p className="mt-6 font-sans text-lg md:text-xl max-w-lg leading-relaxed">
          As a decentralized public ledger, the Layer 1 XDC Network enables
          information transparency and provides a distributed, universal ledger
          of truth — unburdened by central administrative controls or a single
          point of failure.
        </p>
      </div>

      {/* Right side – image fills full height */}
      <div className="flex items-stretch">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&h=800&q=80"
          alt="XDC illustration"
          className="w-full h-full object-cover"
          style={{ clipPath: 'url(#frame-a)' }}
        />
      </div>
    </div>
  </section>
);

export default NetworkHero;
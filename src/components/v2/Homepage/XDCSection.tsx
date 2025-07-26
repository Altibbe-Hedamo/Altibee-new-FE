// components/XDCIntroSection.tsx
export default function XDCIntroSection() {
  return (
    <section className="bg-white text-slate-900">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT — full-bleed image */}
        <div
          className="
            w-full lg:w-1/2
            min-h-[50vh] lg:min-h-0
            bg-cover bg-center
          "
          style={{ backgroundImage: "url('/image.png')" }}
        />

        {/* RIGHT — text block */}
        <div className="
          w-full lg:w-1/2
          flex flex-col justify-center
          py-16 lg:py-24
          px-[clamp(1.5rem,6vw,4rem)]
          space-y-8
        ">
          <h2 className="
            font-serif
            text-[clamp(2.25rem,5vw,3.5rem)]
            leading-tight
          ">
            WHAT IS A BLOCKCHAIN?
          </h2>

          <p className="
            font-sans
            text-base lg:text-lg
            leading-relaxed
            text-slate-700
          ">
            XDC Network is an enterprise-grade, open-source blockchain protocol.
            An EVM-compatible chain with smart-contract capabilities, it is
            uniquely suited to revolutionize, decentralize, and liquify the
            trade-finance industry through the tokenization of real-world assets
            and financial instruments.
          </p>

          <a
            href="/network"
            className="
              inline-flex items-center
              font-sans text-sm lg:text-base
              font-semibold text-slate-900
              underline underline-offset-4
              hover:decoration-2 transition-all
            "
          >
            → Explore the Network
          </a>
        </div>
      </div>
    </section>
  );
}
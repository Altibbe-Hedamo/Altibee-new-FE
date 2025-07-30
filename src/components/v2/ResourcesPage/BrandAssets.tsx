// src/components/build/BrandAssets.jsx
import ArrowButton from "../../common/ArrowButton"; // only if you still need it elsewhere

const BrandAssets = () => {
  const cards = [
    {
      title: "Brand Assets & Guidelines",
      desc: "Official logos, colours, fonts and usage rules for the XDC brand.",
      href: "/resources/brand-assets",
    },
    {
      title: "Brand Philosophy",
      desc: "Understand the mission and vision behind the XDC identity.",
      href: "https://xdc.org/case-studies/dao-of-chain",
    },
    {
      title: "XDC Terminology & Copywriting Standards",
      desc: "A concise guide to writing accurately about the XDC Network.",
      href: "https://xdcf.cdn.prismic.io/xdcf/c730f922-eafc-4313-b7b1-b422509dc1ce_XDC_Terminology___Copywriting_Standards.pdf",
    },
  ];

  return (
    <section id="brand-assets" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Brand Assets</h2>
        <p className="max-w-2xl mb-12">
          You are encouraged to use the XDC brand assets for your project. Please
          follow the guidelines to ensure consistent and professional presentation.
        </p>

        {/* ---------- Same card grid as LearnMore ---------- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ title, desc, href }) => (
            <div
              key={title}
              className="flex flex-col bg-red-200 overflow-hidden h-full"
            >
              {/* Top clickable area */}
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-6 hover:shadow-lg transition flex-grow"
              >
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </a>

              {/* Full-width animated button */}
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full px-6 py-3 font-sans text-base tracking-tight bg-pink-400 transition-all duration-300 rounded-b-lg"
              >
                <span className="relative overflow-hidden text-black font-medium">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                    Read: {title}
                  </span>
                  <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                    Read: {title}
                  </span>
                </span>

                {/* Arrow */}
                <svg
                  className="w-[1.6em] h-[1.6em] ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1 text-white"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandAssets;
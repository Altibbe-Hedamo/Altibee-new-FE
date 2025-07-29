const posts = [
  {
    img: "https://images.prismic.io/xdcf/aD39o7h8WN-LVfwd_6yrCoverFinal.png?auto=format",
    title: "XDC Network Caps Six Years of Live Mainnet",
  },
  {
    img: "https://images.prismic.io/xdcf/Z2L83pbqstJ98pWl_XDC2024MilestonesCover.jpg?auto=format",
    title: "XDC Boldly Brings Blockchain to the Real World",
  },
];

export default function Articles() {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Built On XDC Network</h2>

        {/* 1️⃣  Puzzle SVG mask (exact shape) – hidden, referenced by CSS */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="puzzle" clipPathUnits="objectBoundingBox">
              <path d="M0.03 0.03 H0.67 C0.7 0.03 0.72 0.05 0.72 0.08 V0.22 C0.72 0.25 0.75 0.27 0.78 0.27 H0.97 C1 0.27 1 0.3 0.97 0.3 H0.78 C0.75 0.3 0.72 0.32 0.72 0.35 V0.5 L0.78 0.5 C0.81 0.5 0.83 0.52 0.83 0.55 V0.7 C0.83 0.73 0.8 0.75 0.78 0.75 H0.72 V0.92 C0.72 0.95 0.7 0.97 0.67 0.97 H0.03 V0.03 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((p) => (
            <div
              key={p.title}
              className="group bg-white shadow-md overflow-hidden"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover transition-clip duration-300 group-hover:clip-[url(#puzzle)]"
              />
              <div className="p-5">
                <p className="font-semibold">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
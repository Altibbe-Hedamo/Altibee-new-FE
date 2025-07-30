const links = [
  {
    title: "Decentralization and the XIP",
    desc: "XDC Community member Jon McBee writes that decentralization is more of a spectrum...",
    href: "https://www.xdc.dev/walterblueu/decentralization-and-the-xip-process-5bgn",
  },
  {
    title: "Smart contract-powered dApps",
    desc: "Learn how smart contracts can power decentralized applications.",
    href: "https://docs.xdc.community/get-started/blockchain-basics/what-is-a-dapp",
  },
  {
    title: "Dr. Fisher Yu describes XDC 2.0",
    desc: "XDC Network’s protocol lead, Dr. Fisher Yu, provides a status update on XDC 2.0...",
    href: "#", // Replace with actual video link
  },
  {
    title: "Using MetaMask for XDC",
    desc: "With more than 30 million users and growing, MetaMask is a versatile and widely used…",
    href: "https://xdc.org/articles/using-metamask-for-xdc",
  },
  {
    title: "World Economic Forum report",
    desc: "The trade finance gap has reached $1.7 trillion...",
    href: "https://www.weforum.org/agenda/2022/06/investing-trade-finance-profitable-help-smes/",
  },
  {
    title: "READ & WATCH the tutorials",
    desc: "Immerse yourself in the tools to bring your project to life on the XDC Network...",
    href: "https://docs.xdc.community/learn/how-to-articles",
  },
];

const LearnMore = () => (
  <section id="tutorials" className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More</h2>
      <p className="max-w-2xl mb-12">
        Why is decentralization in blockchain important? How are smart contracts
        used to create dApps? …
      </p>

      {/* ---------- Card grid ---------- */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {links.map(({ title, desc, href }) => (
          <div key={title} className="flex flex-col bg-red-200  overflow-hidden h-full my-4 mx-6">
            {/* Top section */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 hover:shadow-lg transition flex-grow"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </a>

            {/* Bottom full-width animated button */}
            <a
              href={href}
              target="_blank"
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

export default LearnMore;

const papers = [
  {
    title:
      'Gradually and Then Suddenly: The Future of Economics in Light of the History of Financial Information Technology',
    href: 'https://xdcf.cdn.prismic.io/xdcf/cefb72d3-5f06-45fc-9769-9f14675938d6_Gradually_and_then_suddenly__Apr_.pdf',
  },
  {
    title:
      'Accountability and Forensics in Blockchains: XDC Consensus Engine DPoS 2.0',
    href: 'https://xdcf.cdn.prismic.io/xdcf/876fd551-96c0-41e8-9a9a-437620cc1fee_XDPoS2.0_whitepaper.pdf',
  },
]

const Whitepapers = () => (
  <section id="whitepapers" className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Whitepapers</h2>
      {papers.map(({ title, href }) => (
        <a
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-4 underline text-brand-accent hover:no-underline"
        >
          {title}
        </a>
      ))}
    </div>
  </section>
)
export default Whitepapers
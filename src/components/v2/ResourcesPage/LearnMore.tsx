const links = [
  {
    title: 'Decentralization and the XIP Process',
    desc: 'XDC Community member Jon McBee writes that decentralization is more of a spectrum...',
    href: 'https://www.xdc.dev/walterblueu/decentralization-and-the-xip-process-5bgn',
  },
  {
    title: 'Smart contract-powered dApps',
    desc: 'Learn how smart contracts can power decentralized applications.',
    href: 'https://docs.xdc.community/get-started/blockchain-basics/what-is-a-dapp',
  },
  {
    title: 'Dr. Fisher Yu describes XDC 2.0',
    desc: 'XDC Network’s protocol lead, Dr. Fisher Yu, provides a status update on XDC 2.0...',
    href: '#', // replace with real video link
  },
  {
    title: 'Using MetaMask for XDC',
    desc: 'With more than 30 million users and growing, MetaMask is a versatile and widely used…',
    href: 'https://xdc.org/articles/using-metamask-for-xdc',
  },
  {
    title: 'World Economic Forum report',
    desc: 'The trade finance gap has reached $1.7 trillion...',
    href: 'https://www.weforum.org/agenda/2022/06/investing-trade-finance-profitable-help-smes/',
  },
  {
    title: 'READ & WATCH the tutorials',
    desc: 'Immerse yourself in the tools to bring your project to life on the XDC Network...',
    href: 'https://docs.xdc.community/learn/how-to-articles',
  },
]

const LearnMore = () => (
  <section id="tutorials" className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More</h2>
      <p className="max-w-2xl mb-12">
        Why is decentralization in blockchain important? How are smart contracts
        used to create dApps? …
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {links.map(({ title, desc, href }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
)
export default LearnMore
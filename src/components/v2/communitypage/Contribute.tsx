const links = [
  {
    title: 'Participate in Community Discussion on XDC.dev',
    href: 'https://www.xdc.dev/',
  },
  {
    title: 'Get emails about upcoming XDC events',
    href: 'mailto:consult@xdc.org?subject=Contact Us',
  },
  {
    title: 'Track what’s happening on XDC Voting Dapp',
    href: 'https://xdc-voting-dapp.vercel.app/',
  },
]

const Contribute = () => (
  <section className="py-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Contribute</h2>
      <p className="max-w-2xl mx-auto mb-10">
        The XDC community includes a global network of individuals with different
        skills contributing to the ecosystem's growth. Each participant can play
        a role and there are many ways to get involved.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {links.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="border border-brand px-6 py-4 rounded-md hover:bg-brand hover:text-white transition"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  </section>
)
export default Contribute
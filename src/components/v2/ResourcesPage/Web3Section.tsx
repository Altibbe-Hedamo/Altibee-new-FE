const Web3Section = () => (
  <section id="web3" className="py-20 px-6 max-w-4xl mx-auto">
    {/* Full-width background bar */}
    <div className="mt-6 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-yellow-200 text-black text-base md:text-lg font-medium px-6 py-4 h-full">
      
      {/* Inner centered content */}
      <div className="max-w-3xl mx-auto text-left py-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          What is <em className="not-italic text-brand-accent">Web3?</em>
        </h2>

        <p className="mt-6 text-lg leading-relaxed">
          Blockchain networks like XDC Network can be used to support a decentralized
          Web3 — the next generation of internet. Web3 is most simply described as
          hosting applications, storing and accessing private data, and transferring
          value, content, and ideas using completely decentralized networks with no
          single point of failure and no trust required. Goodbye centralized,
          privately owned servers. Open-source trustless systems will remain more
          stable and reliable than centralized servers due to the network being
          maintained by hundreds or even thousands of entities instead of just one.
        </p>

        <a
          href="/articles/why-you-shouldnt-be-afraid-of-digitization"
          className="inline-block mt-8 border border-brand-text px-6 py-3 rounded-md hover:bg-brand-text hover:text-brand-bg transition"
        >
          READ: Why You Shouldn’t Be Afraid of Digitization
        </a>
      </div>
    </div>
  </section>
);

export default Web3Section;

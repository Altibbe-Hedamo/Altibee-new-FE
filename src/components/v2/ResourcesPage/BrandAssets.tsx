const BrandAssets = () => (
  <section id="brand-assets" className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Brand Assets</h2>
      <p className="mb-10">
        You are encouraged to use the XDC brand assets for your project…
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          ['Brand Assets & Guidelines', '/resources/brand-assets'],
          ['Brand Philosophy', 'https://xdc.org/case-studies/dao-of-chain'],
          ['XDC Terminology & Copywriting Standards', 'https://xdcf.cdn.prismic.io/xdcf/c730f922-eafc-4313-b7b1-b422509dc1ce_XDC_Terminology___Copywriting_Standards.pdf'],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </section>
)
export default BrandAssets
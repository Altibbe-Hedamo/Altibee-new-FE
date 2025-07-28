const CommunityBlock = () => (
  <section className="py-20 px-6 bg-brand-bg">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Grow your project <em className="not-italic text-brand-accent">on XDC Network</em>
      </h2>
      <p className="max-w-2xl mx-auto mt-6">
        Whether your project has been up and running for some time or it’s in the
        dream stage, we want to be a resource for you wherever you are…
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {[
          ['Request PR support', 'https://forms.gle/8qPanSJZcUADJ8CHA'],
          ['Consult XDC Foundation', '/get-in-touch'],
          ['Developer Forum', 'https://www.xdc.dev/'],
          ['XDC Masterclass', 'https://codedamn.com/learn/xdc-workshop'],
        ].map(([label, href]) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="border border-brand-text px-6 py-3 rounded-md hover:bg-brand-text hover:text-brand-bg transition"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </section>
)
export default CommunityBlock
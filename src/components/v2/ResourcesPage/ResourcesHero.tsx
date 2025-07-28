const ResourcesHero = () => (
  <section className="py-24 px-6 text-center">
    <h1 className="font-bold text-5xl md:text-7xl">
      Blockchain <em className="not-italic text-brand-accent">Resources</em>
    </h1>
    <p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl">
      Make an informed decision. You’re in the right spot for tools and
      information.
    </p>
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      {['Tutorials', 'Whitepapers', 'Brand Assets'].map(label => (
        <button
          key={label}
          className="border border-brand-text px-6 py-3 rounded-md hover:bg-brand-text hover:text-brand-bg transition"
        >
          {label}
        </button>
      ))}
    </div>
  </section>
)
export default ResourcesHero
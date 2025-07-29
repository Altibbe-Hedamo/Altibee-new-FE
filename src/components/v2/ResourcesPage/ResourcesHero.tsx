import ArrowButton from '../../common/ArrowButton'

export default function ResourcesHero() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column – text + buttons */}
        <div className="text-left">
          <h1 className="font-bold text-5xl md:text-7xl">
            Blockchain <em className="not-italic text-brand-accent">Resources</em>
          </h1>

          <p className="max-w-xl mt-6 text-lg md:text-xl">
            Make an informed decision. You’re in the right spot for tools and
            information.
          </p>

          {/* Stack buttons vertically */}
          <div className="mt-10 flex flex-col items-start gap-4">
            {['Tutorials', 'Whitepapers', 'Brand Assets'].map(label => (
              <ArrowButton key={label} href="#">
                {label}
              </ArrowButton>
            ))}
          </div>
        </div>

        {/* Right column – puzzle-shaped image */}
        <div
          className="relative w-full h-full"
          style={{
            clipPath: 'polygon(0% 0%,85% 0%,100% 25%,100% 75%,85% 100%,0% 100%)'
          }}
        >
          <img
            src="/image.png"
            alt="XDC resources"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}4
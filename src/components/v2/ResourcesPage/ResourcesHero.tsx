import ArrowButton from '../../common/ArrowButton'

export default function ResourcesHero() {
  return (
    <section className="py-48 px-6"> {/* <-- taller section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column – text + buttons */}
        <div className="text-left">
          <h1 className="font-bold text-6xl md:text-8xl"> {/* <-- bigger text */}
            Blockchain <em className="not-italic text-brand-accent">Resources</em>
          </h1>

          <p className="max-w-2xl mt-8 text-xl md:text-2xl"> {/* <-- bigger paragraph */}
            Make an informed decision. You’re in the right spot for tools and
            information.
          </p>

          {/* Stack buttons vertically */}
          <div className="mt-12 flex flex-col items-start gap-6"> {/* <-- more space */}
            {['Tutorials', 'Whitepapers', 'Brand Assets'].map(label => (
              <ArrowButton key={label} href="#" classname='w-full p-4 text-xl'>
                {label}
              </ArrowButton>
            ))}
          </div>
        </div>

        {/* Right column – puzzle-shaped image */}
        <div
          className="relative w-full h-[50rem]" 
          style={{
            clipPath: 'polygon(0% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 0% 100%)',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&h=800&q=80"
            alt="Organic resources and herbs"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
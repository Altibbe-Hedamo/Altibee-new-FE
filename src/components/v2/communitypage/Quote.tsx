const Quote = () => (
  <section className="py-20 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <svg
        className="w-16 h-10 mx-auto mb-4 text-accent"
        viewBox="0 0 105 53"
        fill="currentColor"
      >
        <path d="M53 0A53 53 0 0 0 0 53h53V0Z" />
        <path d="M105 0a53 53 0 0 0-53 53h53V0Z" />
      </svg>
      <blockquote className="text-xl md:text-2xl italic leading-relaxed">
        We're looking forward to be helping the XDC Network grow its institutional
        participation across the entire spectrum of the crypto industry...
      </blockquote>
      <figcaption className="mt-6">
        <p className="font-semibold">Trustology</p>
        <cite className="text-sm text-gray-500">— Alex Batlin, Founder and CEO</cite>
      </figcaption>
    </div>
  </section>
)
export default Quote
const Podcast = () => (
  <section className="py-20 px-6 bg-surface">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold">
        Podcast <em className="not-italic text-accent">XDC The Stream</em>
      </h2>
      <p className="mt-6 max-w-2xl mx-auto text-lg">
        It’s often difficult to cut through the noise and join discussions about
        the real-world use of blockchain technology…
      </p>

      <iframe
        className="mt-8 mx-auto"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1843935993&color=%239ff3ff&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>

      <a
        href="https://soundcloud.com/xdc-stream/episode-16-tokenization-of-real-world-assets-on-blockchain"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 border border-brand px-6 py-3 rounded-md hover:bg-brand hover:text-white transition"
      >
        XDC The Stream, Episode 16 — 6.10.24
      </a>
    </div>
  </section>
)
export default Podcast
// Podcast.jsx
import { useEffect, useRef } from 'react';

const Podcast = () => {
  const textRef = useRef(null);

  useEffect(() => {
    textRef.current?.classList.remove('opacity-0', 'translate-x-12');
    textRef.current?.classList.add('opacity-100', 'translate-x-0');
  }, []);

  return (
    <section className="py-20 bg-purple-100">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center min-h-[500px]">
        {/* LEFT: image that always fills exactly the left half */}
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80"
            alt="Episode 16 cover"
          />
        </div>

        {/* RIGHT: text perfectly centered */}
        <div
          ref={textRef}
          className="flex flex-col justify-center items-center text-center px-6 space-y-5
                     transition-all duration-700 ease-out opacity-0 translate-x-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Podcast <em className="not-italic ">XDC The Stream</em>
          </h2>

          <p className="max-w-md  text-lg">
            It’s often difficult to cut through the noise and join discussions
            about the real-world use of blockchain technology…
          </p>

          {/* SoundCloud widget */}
          {/* <iframe
            className="w-full max-w-md rounded-md"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1843935993&color=%239ff3ff&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          /> */}

          <a
            href="https://soundcloud.com/xdc-stream/episode-16-tokenization-of-real-world-assets-on-blockchain"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400  px-6 py-3 rounded-md hover:bg-cyan-400 hover:text-slate-900 transition"
          >
            XDC The Stream, Episode 16 — 6.10.24
          </a>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
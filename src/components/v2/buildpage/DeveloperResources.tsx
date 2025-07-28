// src/components/build/DeveloperResources.jsx
import ArrowButton from "../../common/ArrowButton";
import { useEffect } from "react";

const resources = [
  { title: "XDC.dev", desc: "Contribute your expertise or learn from experienced developers.", link: "https://www.xdc.dev/" },
  { title: "XDC DAO", desc: "Share your ideas and engage in impactful discussions.", link: "https://www.xdcdao.org/" },
  { title: "Discord", desc: "Join a community of active developers.", link: "https://discord.gg/MFeHJ6C5gn" },
  { title: "Project Onboarding", desc: "Get technical support for integration.", link: "https://forms.gle/" },
];

export default function DeveloperResources() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("animate-in");
        }),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".slide-fade").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* ---- Left: Hero Image ---- */}
        <div className="relative">
          <img
            src="/image.png"
            alt="Developer Resources"
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>

        {/* ---- Right: 4 Topic Cards ---- */}
        <div className="grid sm:grid-cols-2 gap-8">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 flex flex-col justify-between space-y-6 slide-fade"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-base text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
              <ArrowButton href={item.link}>Learn More →</ArrowButton>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Animation CSS ---- */}
      <style jsx global>{`
        .slide-fade {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .animate-in {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </section>
  );
}
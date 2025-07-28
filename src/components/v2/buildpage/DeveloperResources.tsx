// src/components/build/DeveloperResources.jsx
const resources = [
  { title: "XDC.dev", desc: "Contribute your expertise or learn from experienced developers.", link: "https://www.xdc.dev/" },
  { title: "XDC DAO", desc: "Share your ideas and engage in impactful discussions.", link: "https://www.xdcdao.org/" },
  { title: "Discord", desc: "Join a community of active developers.", link: "https://discord.gg/MFeHJ6C5gn" },
  { title: "Project Onboarding", desc: "Get technical support for integration.", link: "https://forms.gle/..." },
];

export default function DeveloperResources() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Developer Resources</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((item, idx) => (
            <div key={idx} className="bg-white border rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                Visit →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// HomePage.tsx
import { useEffect } from 'react';
import Header from '../../components/v2/Header';
import FeatureTriple from '../../components/v2/FeatureTriple';

export default function HomePage() {
  useEffect(() => {
    const setVh = () =>
      document.documentElement.style.setProperty(
        '--vh',
        `${window.innerHeight * 0.01}px`
      );
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  const articles = [
    {
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=60',
      title: 'XDC Network partners with SBI',
      date: 'Jul 25, 2025',
    },
    {
      img: 'https://images.unsplash.com/photo-1639762681057-408e52392e1b?auto=format&fit=crop&w=400&q=60',
      title: 'Trade finance on-chain: a deep dive',
      date: 'Jul 23, 2025',
    },
    {
      img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=400&q=60',
      title: 'Tokenizing real-world assets',
      date: 'Jul 21, 2025',
    },
  ];

  const logos = Array(5).fill(
    'https://via.placeholder.com/120x40/9FF3FF/131619?text=PARTNER'
  );

  return (
    <>
      {/* <Header /> */}

      {/* HERO */}
    

      {/* INTRO */}
      <section className="py-[clamp(4rem,6.3vw,13rem)] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-[clamp(3.2rem,3.1vw,7.6rem)] leading-none tracking-tighter">
            Enterprise
          </h2>
          <p className="max-w-3xl mt-4 font-sans text-[clamp(1.6rem,1.6vw,2.6rem)] leading-snug">
            Impressive speed, scalability, low fees, & military-grade security.
          </p>
          <a href="/enterprise" className="mt-8 underline underline-offset-4">
            Explore Enterprise Solutions
          </a>
        </div>
      </section>

     <FeatureTriple />

      {/* FOOTER */}
      <footer className="bg-[#DBE6EB] py-[clamp(6rem,9vw,9rem)] px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-sans text-lg mb-4">XDC Network</h4>
            <p className="text-sm text-[#8D9A9B]">
              Enterprise-grade, EVM-compatible, open-source.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-lg mb-4">Developers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/docs">Docs</a></li>
              <li><a href="/github">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-lg mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/discord">Discord</a></li>
              <li><a href="/twitter">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#131619]/10 mt-12 pt-8 text-center text-sm text-[#8D9A9B]">
          © 2025 XDC Foundation
        </div>
      </footer>
    </>
  );
}
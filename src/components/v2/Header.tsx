import { useState, useEffect, Fragment } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const nav = [
  {
    label: 'Solutions',
    img: '/images/solutions.jpg',
    links: [
      { label: 'RWA Tokenization', href: '/rwa' },
      { label: 'Trade Finance', href: '/trade-fi' },
      { label: 'Enterprise', href: '/enterprise' },
    ],
  },
  {
    label: 'Build on XDC',
    img: '/images/build.jpg',
    links: [
      { label: 'For Developers', href: '/dev' },
      { label: 'SDK & Docs', href: '/docs' },
      { label: 'GitHub', href: 'https://github.com' },
    ],
  },
  {
    label: 'Resources',
    img: '/images/resources.jpg',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Whitepaper', href: '/whitepaper' },
      { label: 'Ecosystem', href: '/ecosystem' },
    ],
  },
  {
    label: 'Community',
    img: '/images/community.jpg',
    links: [
      { label: 'Discord', href: 'https://discord.gg' },
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'Forum', href: '/forum' },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);

  /* mobile-safe vh */
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

  return (
    <>
      {/* DESKTOP */}
      <header className="sticky top-0 z-30 bg-[#131619]/90 backdrop-blur text-[#9FF3FF]">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <a href="/" className="font-sans text-xl font-bold">
            XDC
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <div key={n.label} className="relative group">
                <button className="flex items-center gap-1 font-sans text-base">
                  {n.label} <ChevronDown size={14} />
                </button>

                {/* Mega menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white text-[#131619] rounded-lg shadow-lg p-4 flex gap-4">
                    <img
                      src={n.img}
                      alt={n.label}
                      className="w-48 h-32 object-cover rounded"
                    />
                    <ul className="flex-1">
                      {n.links.map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href}
                            className="block py-1 font-sans text-sm hover:underline"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden lg:block">
            <input
              type="text"
              placeholder="Search XDC"
              className="bg-transparent border-b border-[#9FF3FF]/30 text-sm px-2 py-1 outline-none focus:border-[#9FF3FF]"
            />
          </div>

          {/* Mobile menu toggle */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-40 bg-[#F8FBFC] text-[#131619] transform transition-transform duration-300 lg:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <span className="font-bold text-lg">XDC</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="p-6 space-y-4">
          {nav.map((n) => (
            <Fragment key={n.label}>
              <button
                className="w-full flex justify-between items-center font-sans text-lg"
                onClick={() =>
                  setSubOpen(subOpen === n.label ? null : n.label)
                }
              >
                {n.label} <ChevronDown size={18} />
              </button>
              {subOpen === n.label && (
                <ul className="pl-4 space-y-2 animate-slide-in">
                  {n.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="font-sans text-base">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </>
  );
}
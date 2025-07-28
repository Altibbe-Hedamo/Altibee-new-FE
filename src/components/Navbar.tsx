import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const navData = [
  {
    label: 'network',
    img: '/image.png',      // ← put your preview image here
    links: [
      { label: 'RWA Tokenization', href: '/rwa' },
      { label: 'Trade Finance', href: '/trade-fi' },
      { label: 'Enterprise', href: '/enterprise' },
    ],
  },
  {
    label: 'Build on XDC',
    img: '/image.png',
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
      { label: 'Discord', href: 'https://discord.com' },
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'Forum', href: '/forum' },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(null);

  /* mobile-safe 100vh */
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
      {/* DESKTOP BAR */}
      <nav className="bg-[#131619] text-[#9FF3FF] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            Altibbe
          </Link>

          {/* Desktop mega-menu */}
          <div className="hidden md:flex items-center gap-8">
            {navData.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 font-medium">
                  {item.label}
                  <ChevronDown size={16} />
                </button>

                {/* Hover card */}
             {/* Hover card */}
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
  <div className="bg-white text-[#131619] rounded-lg shadow-2xl p-5 flex gap-5">
    {/* preview image */}
    <img
      src={item.img}
      alt={item.label}
      className="w-48 h-32 object-cover rounded"
    />
    {/* sub-links */}
    <ul className="flex-1 space-y-0">
      {item.links.map((l, idx) => (
        <li
          key={l.label}
          className={`border-b border-[#131619]/20 ${
            idx === item.links.length - 1 ? 'border-b-0' : ''
          }`}
        >
          <Link
            to={l.href}
            className="block py-2 font-sans text-sm hover:underline"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</div>
              </div>
            ))}

            {/* simple links */}
            {/* {['Home', 'About', 'Contact'].map((l) => (
              <Link
                key={l}
                to={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
                className="font-medium hover:underline"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                {l}
              </Link>
            ))} */}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-[#F8FBFC] text-[#131619] transform transition-transform md:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold">Altibbe</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto">
          {navData.map((item) => (
            <div key={item.label}>
              <button
                className="w-full flex justify-between items-center font-semibold"
                onClick={() =>
                  setSubOpen(subOpen === item.label ? null : item.label)
                }
              >
                {item.label}
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    subOpen === item.label ? 'rotate-180' : ''
                  }`}
                />
              </button>
             {subOpen === item.label && (
  <ul className="pl-4 mt-2 space-y-0 animate-slide-in">
    {item.links.map((l, idx) => (
      <li
        key={l.label}
        className={`border-b border-[#131619]/20 ${
          idx === item.links.length - 1 ? 'border-b-0' : ''
        }`}
      >
        <Link
          to={l.href}
          className="block py-2"
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0 });
          }}
        >
          {l.label}
        </Link>
      </li>
    ))}
  </ul>
)}
            </div>
          ))}

          {['Home', 'About', 'Blog', 'Contact'].map((l) => (
            <Link
              key={l}
              to={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
              className="block font-semibold"
              onClick={() => {
                setOpen(false);
                window.scrollTo({ top: 0 });
              }}
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
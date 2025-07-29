// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const navData = [
  {
    label: 'Network',
    img: '/image.png',
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

interface NavbarProps {
  className?: string;                    // dynamic outer class for desktop bar
  mobileClassName?: string;              // dynamic outer class for mobile drawer
}

// scroll-hide hook
function useScrollHide(threshold = 60) {
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setShow(y < lastY || y <= threshold);
      setLastY(y);
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [lastY, threshold]);

  return show;
}

export default function Navbar({
  className = 'bg-[#131619]',
  mobileClassName = 'bg-white',
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const show = useScrollHide();

  /* mobile safe vh */
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
      {/* DESKTOP / TABLET BAR */}
      <nav
        className={`
          text-[#9FF3FF] fixed top-0 left-0 right-0 z-40 h-16
          transition-opacity duration-300
          ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
          <Link to="/" className="text-2xl font-bold">
            Altibbe
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navData.map((item) => (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 font-medium">
                  {item.label}
                  <ChevronDown size={16} />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                  <div className="bg-white text-[#131619] rounded-lg shadow-2xl p-5 flex gap-5">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-48 h-32 object-cover rounded"
                    />
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
                            className="block py-2 text-sm hover:underline"
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

            {['Home', 'About', 'Contact'].map((l) => (
              <Link
                key={l}
                to={l === 'Home' ? '/' : `/${l.toLowerCase()}`}
                className="font-medium hover:underline"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                {l}
              </Link>
            ))}
          </div>

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
        className={`
          fixed inset-0 z-50 text-[#131619] transform transition-transform md:hidden
          ${open ? 'translate-x-0' : '-translate-x-full'}
          ${mobileClassName}
        `}
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
                <ul className="pl-4 mt-2 space-y-0">
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

          {['Home', 'About', 'Contact'].map((l) => (
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
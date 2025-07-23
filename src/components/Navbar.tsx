// src/components/Navbar.tsx
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 60); // hide only when scrolling down
      setLastY(y);
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [lastY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-500 bg-white/90 backdrop-blur-sm shadow-sm ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-2xl font-mono font-bold text-emerald-700">Altibbe</span>
        <div className="space-x-6 font-mono text-sm tracking-wider">
          <a href="/hedamo">Hedamo</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact Us</a>
          <a href="#about">About</a>
          <a href="#community">Community</a>
          <a href="#xdc-weekly">xdc-weekly</a>
          <a href="#ecosystem">ecosystem</a>

        </div>
      </div>
    </nav>
  );
};


export default Navbar;
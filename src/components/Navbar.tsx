import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/community', label: 'Community' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-emerald-600">
          Altibbe
        </Link>

        <div className="hidden md:flex space-x-6">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-emerald-600 font-medium"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
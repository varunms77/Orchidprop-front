import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_URL = "/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-500 border-b border-outline-variant bg-surface shadow-sm"
      id="main-nav"
      style={{ height: '80px' }}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-8 h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4">
          <img alt="Orchid Properties Logo" className="h-12 w-auto object-contain" src={LOGO_URL} style={{ filter: 'invert(1)' }} />
          <span className="font-headline-md text-headline-md font-semibold text-on-surface">Orchid Properties</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-label-md text-label-md uppercase tracking-widest hover:text-secondary transition-colors duration-300 ${
                location.pathname === link.to ? 'text-secondary' : 'text-on-surface'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-md text-label-md uppercase tracking-widest hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-secondary" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className="material-symbols-outlined text-3xl">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant shadow-lg py-6 px-margin-mobile space-y-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="block font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-secondary transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full text-center bg-secondary text-on-secondary px-6 py-3 rounded-full font-label-md text-label-md uppercase tracking-widest mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </nav>
  );
}

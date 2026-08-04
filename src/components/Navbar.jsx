import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LOGO_URL = "/logo.png";

const projectsList = {
  residentialLayouts: [
    { name: "Balaji Layout", id: "balaji_layout" },
    { name: "Kanakgiri Park", id: "kanakgiri_park" },
    { name: "Balaji Nagar", id: "balaji_nagar" },
    { name: "Mahalaxmi Layout", id: "mahalaxmi_layout" },
    { name: "Siddharoodha Layout", id: "siddharoodha_layout" },
    { name: "Hans Garden", id: "hans_garden" }
  ],
  farmVilla: [
    { name: "Wild Woods", id: "wild_woods" }
  ]
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const isProjectsActive = location.pathname.startsWith('/projects');

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
          <Link
            to="/"
            className={`font-label-md text-label-md uppercase tracking-widest hover:text-secondary transition-colors duration-300 ${
              location.pathname === '/' ? 'text-secondary' : 'text-on-surface'
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`font-label-md text-label-md uppercase tracking-widest hover:text-secondary transition-colors duration-300 ${
              location.pathname === '/about' ? 'text-secondary' : 'text-on-surface'
            }`}
          >
            About Us
          </Link>

          {/* Projects Dropdown Menu Trigger */}
          <div
            className="relative py-4"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 font-label-md text-label-md uppercase tracking-widest hover:text-secondary transition-colors duration-300 ${
                isProjectsActive ? 'text-secondary font-bold' : 'text-on-surface'
              }`}
            >
              Projects
              <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
            </button>

            {/* Mega Dropdown Panel matching user image */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[540px] bg-white border border-outline-variant/60 rounded-2xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-2 gap-8 relative">
                  {/* Column 1 */}
                  <div>
                    <h4 className="font-label-md text-secondary text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-secondary/20">
                      Residential Layouts
                    </h4>
                    <div className="space-y-3">
                      {projectsList.residentialLayouts.map((proj) => (
                        <Link
                          key={proj.id}
                          to={`/projects/${proj.id}`}
                          onClick={() => setDropdownOpen(false)}
                          className="block text-on-surface-variant hover:text-secondary text-sm font-medium transition-colors hover:translate-x-1 transform duration-200"
                        >
                          {proj.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="absolute top-0 bottom-0 left-1/2 -ml-[0.5px] w-[1px] bg-outline-variant/40" />

                  {/* Column 2 */}
                  <div className="pl-4">
                    <h4 className="font-label-md text-secondary text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-secondary/20">
                      Farm Villa
                    </h4>
                    <div className="space-y-3">
                      {projectsList.farmVilla.map((proj) => (
                        <Link
                          key={proj.id}
                          to={`/projects/${proj.id}`}
                          onClick={() => setDropdownOpen(false)}
                          className="block text-on-surface-variant hover:text-secondary text-sm font-medium transition-colors hover:translate-x-1 transform duration-200"
                        >
                          {proj.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className={`font-label-md text-label-md uppercase tracking-widest hover:text-secondary transition-colors duration-300 ${
              location.pathname === '/contact' ? 'text-secondary' : 'text-on-surface'
            }`}
          >
            Contact Us
          </Link>

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
        <div className="md:hidden absolute top-full left-0 w-full bg-surface border-b border-outline-variant shadow-lg py-6 px-margin-mobile space-y-4 max-h-[80vh] overflow-y-auto">
          <Link
            to="/"
            className="block font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-secondary transition-colors py-2"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-secondary transition-colors py-2"
            onClick={() => setMobileOpen(false)}
          >
            About Us
          </Link>

          {/* Mobile Projects Submenu */}
          <div>
            <button
              onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
              className="flex items-center justify-between w-full font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-secondary transition-colors py-2"
            >
              Projects
              <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${mobileProjectsOpen ? 'rotate-180' : ''}`}>
                keyboard_arrow_down
              </span>
            </button>

            {mobileProjectsOpen && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-secondary/30">
                <p className="text-xs font-bold text-secondary uppercase tracking-wider pt-2">Residential Layouts</p>
                {projectsList.residentialLayouts.map((proj) => (
                  <Link
                    key={proj.id}
                    to={`/projects/${proj.id}`}
                    className="block text-sm text-on-surface-variant hover:text-secondary py-1"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileProjectsOpen(false);
                    }}
                  >
                    {proj.name}
                  </Link>
                ))}
                <p className="text-xs font-bold text-secondary uppercase tracking-wider pt-2">Farm Villa</p>
                {projectsList.farmVilla.map((proj) => (
                  <Link
                    key={proj.id}
                    to={`/projects/${proj.id}`}
                    className="block text-sm text-on-surface-variant hover:text-secondary py-1"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileProjectsOpen(false);
                    }}
                  >
                    {proj.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="block font-label-md text-label-md uppercase tracking-widest text-on-surface hover:text-secondary transition-colors py-2"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>

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

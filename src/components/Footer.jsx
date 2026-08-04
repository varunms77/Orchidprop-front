import React from 'react';
import { Link } from 'react-router-dom';

const LOGO_URL = "/lg1.png";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-outline-variant w-full pt-section-gap pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="flex items-center gap-2">
            <img alt="Orchid Properties Logo" className="h-10 w-auto" src={LOGO_URL} style={{ filter: 'invert(1)' }} />
            <span className="font-headline-md text-headline-md font-bold text-secondary">Orchid Properties</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80 leading-relaxed">
            Crafting premium residential environments with transparency, trust, and exceptional quality for modern living.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block font-body-md" to="/">Home</Link></li>
            <li><Link className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block font-body-md" to="/about">About Us</Link></li>
            <li><Link className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block font-body-md" to="/contact">Contact Us</Link></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block font-body-md" href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-6">Top Projects</h4>
          <ul className="space-y-4">
            <li><Link className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block font-body-md" to="/projects">Hans Garden</Link></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block font-body-md" href="#">Wildwoods</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block font-body-md" href="#">Balaji Nagar</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all duration-300 inline-block font-body-md" href="#">Kanakgiri Park</a></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-label-md text-label-md uppercase tracking-widest text-secondary mb-6">Office Address</h4>
          <p className="text-on-surface-variant font-body-md leading-relaxed">
            CTS NO:65/10MN PID NO:1465,<br />
            Mrityunjaya Nagar, Near Old APMC,<br />
            Dharwad - 580006
          </p>
          <div className="flex gap-4 mt-6">
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-margin-desktop max-w-container-max mx-auto pt-12 mt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant font-body-md text-sm opacity-70">© 2024 Orchid Properties. All rights reserved.</p>
        <div className="flex gap-8 text-sm text-on-surface-variant opacity-70">
          <a className="hover:text-secondary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-secondary transition-colors" href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

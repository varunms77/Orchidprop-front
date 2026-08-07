import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRevealOnScroll, useNavbarScroll } from '../hooks/useScrollEffects';

const HERO_VIDEO = "/projects/Orchidhorizontal.mp4";

const gridImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDTg5dT7_yI5pxQtwvB497-y00xjwV8f56jGTecx8Wq9x19IUTFRBeq1abvS2yhidMoHh3Y58QPVjNdG7fr4dX09pVZ-ScABajM9372sQV1HU_comeaTfqyw8DIefA_1iIFnjdMV4FaN_p781zYvFW4w_5xJknTouA-K8CJLyAenQtcOAovqb6Krr4a1tP8I5r72oF4DkCANtcZGMZT0aHb2vtHvBa93_tld6rjiLAMHvRvnYKiZXiB4A",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAAssCilVvysp6OZ9FBh1NKFod_loNziVOHjnYKYqFzvLOFde_aS8IonHb7sGSnvrvB9Scgiq2MJsk6VniJjTgRGIfCOjaLZky24YQx2iqNe8BB_ux56sRhq4SHBUVvSCBIi_N2uS6N2oV8p6NLEU_s0RrFZvlg8uwTAP-Tz3cVAFK5ftQqfXKLbgHyciQ1Cec8GlJiKhDL_W-dQdAAwk0ThA9MVMlY59DV08QohSot4V_ocaJWGv601A",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3sP48lWK6rfX6XYKkHoJMzHFOPeMfre8IxykTA8l4URZcOpZ1Y5h-xheHy70oyNEpSKRxOOz9PPaDacjAfQwhk0-L6Nt830mID0wr8Apk_QPjTXa8_MA4Hf0YBegsGAQnev3NQRJlXbyA9v7a1_Y6ESzSlrxO3WtPceI7fhyI3p_pVLh1hptDezAawwKemuzUkoDfcpDC_2zbQ6k0-KaXGm6Ab1_jNBi55_hOrK-8Tmy4dJykgHn_9A",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDnh3LDKC6HdIKtk9025_B_HOLTVROfcQiELmDr9Ga_NBDZOUMgVDAfCerO4WEoUIAkCGbR7yNbUd-212wvmkbiADK1FpdzBTve38fWnZbv8ndQmfujbYpVeQc72PBXMqsJQ1KSVTiVBAAwBw9rOjXVGVfjiNmA5xYW_ogS2XGzd0XCgnBzP3OUIZlKGerw6PBQz-vUAdqyiRQLVWuSAuRSPHUOszX9eIyEO4aqPbcs4yrKLo01NNq32g"
];

const bentoFeatures = [
  { icon: "location_on", title: "Prime Locations", desc: "Strategically selected areas with high appreciation potential and seamless connectivity." },
  { icon: "gavel", title: "Legal Documentation", desc: "100% verified titles and hassle-free registration processes for peace of mind." },
  { icon: "payments", title: "Affordable Investment", desc: "Premium living accessible through competitive pricing and flexible payment plans." },
  { icon: "sentiment_very_satisfied", title: "Customer Satisfaction", desc: "A community of 5000+ happy land owners who trust the Orchid name." },
  { icon: "verified", title: "Trusted Service", desc: "Dedicated relationship managers guiding you through every step of the journey." },
  { icon: "foundation", title: "Quality Developments", desc: "Setting standard infrastructure including wide blacktop roads, drainage and amenities." }
];

export default function About() {
  useRevealOnScroll();
  useNavbarScroll();

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface font-body-md overflow-x-hidden">
      <Navbar />

      <main className="pt-[80px]">
        {/* Hero Section */}
        <section className="relative min-h-[560px] h-[75vh] md:h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center opacity-85 md:opacity-100"
            >
              <source src={HERO_VIDEO} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Desktop gradient: left-to-right fade */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
            {/* Mobile gradient: bright, clean gradient fade from left/bottom for maximum video brightness and text clarity */}
            <div className="block md:hidden absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-margin-desktop w-full reveal active py-8 md:py-0">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-3 md:mb-4 block">Legacy of Excellence</span>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-6 md:mb-8 leading-tight break-words">
                Crafting the <br/><span className="text-primary italic">Luxury of Space</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 md:mb-10 max-w-xl">
                A trusted leader specializing in premium real estate developments, where every square foot is a foundation for your future legacy.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/#projects" className="bg-primary text-on-primary px-8 md:px-10 py-3.5 md:py-4 rounded-[20px] font-body-md text-body-md hover:opacity-90 transition-all whisper-shadow shadow-primary/20">
                  Explore Collections
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Purpose / Mission Section */}
        <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="space-y-12 reveal">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-[1px] bg-primary"></span>
                  <span className="font-label-caps text-label-caps text-primary uppercase">Our Purpose</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Transparency as our Foundation</h2>
                <p className="font-body-md text-body-md text-secondary leading-loose max-w-lg">
                  Our mission is to deliver transparent, legally verified, and thoughtfully planned real estate developments. From residential layouts and commercial plots to farm villa communities, we create lasting value through trust, quality, and strategic locations.
                </p>
              </div>
              <div className="bg-surface-container-low p-10 rounded-[32px] whisper-shadow">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Our Vision</h3>
                <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                  "To become Karnataka’s most trusted real estate company, renowned for crafting exceptional spaces that elevate lifestyles, empower businesses, and create lasting legacies."
                </p>
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-4 reveal">
              <div className="space-y-4 pt-12">
                <div className="h-[300px] rounded-[32px] overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${gridImages[0]}')` }}></div>
                </div>
                <div className="h-[200px] rounded-[32px] overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${gridImages[1]}')` }}></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-[200px] rounded-[32px] overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${gridImages[2]}')` }}></div>
                </div>
                <div className="h-[300px] rounded-[32px] overflow-hidden">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${gridImages[3]}')` }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Advantage Grid */}
        <section className="py-section-gap bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-16 reveal">
              <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase mb-4 block">The Orchid Advantage</span>
              <h2 className="font-headline-md text-headline-md text-on-surface">Why Investing with Us is a Legacy Move</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {bentoFeatures.map(item => (
                <div key={item.title} className="glass-card p-10 rounded-[32px] whisper-shadow group hover:bg-primary transition-all duration-500 reveal">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-4xl mb-6 block" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-on-primary mb-4">{item.title}</h4>
                  <p className="font-body-md text-body-md text-secondary group-hover:text-on-primary/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12 reveal">
            <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] uppercase mb-4 block">Stay Connected</span>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Connect With Us</h2>
            <p className="font-body-md text-body-md text-secondary max-w-lg mx-auto">
              Follow our social channels to get the latest updates on new layout launches, project developments, and real estate insights.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 reveal">
            <a
              href="https://www.facebook.com/share/17jW3pfvyf/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-5 rounded-[24px] glass-card whisper-shadow hover:bg-primary hover:text-on-primary text-on-surface transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-on-primary transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block font-headline-sm text-sm font-semibold">Facebook</span>
                <span className="block text-xs opacity-75 font-body-md">@orchidproperties</span>
              </div>
            </a>

            <a
              href="https://www.instagram.com/orchidproperties?igsh=c2JsNXlqZnZtcjE5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-5 rounded-[24px] glass-card whisper-shadow hover:bg-primary hover:text-on-primary text-on-surface transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-on-primary transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block font-headline-sm text-sm font-semibold">Instagram</span>
                <span className="block text-xs opacity-75 font-body-md">@orchidproperties</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/orchidproperties/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-5 rounded-[24px] glass-card whisper-shadow hover:bg-primary hover:text-on-primary text-on-surface transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-on-primary transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block font-headline-sm text-sm font-semibold">LinkedIn</span>
                <span className="block text-xs opacity-75 font-body-md">@orchidproperties</span>
              </div>
            </a>

            <a
              href="https://youtube.com/@orchid.properties?si=9ETB7kS0S4FyfnLa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-8 py-5 rounded-[24px] glass-card whisper-shadow hover:bg-primary hover:text-on-primary text-on-surface transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-on-primary transition-colors">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block font-headline-sm text-sm font-semibold">YouTube</span>
                <span className="block text-xs opacity-75 font-body-md">@orchidproperties</span>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

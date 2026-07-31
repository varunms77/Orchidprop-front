import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRevealOnScroll, useNavbarScroll } from '../hooks/useScrollEffects';

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuCTQ02f_eE9IwjOeqEzwIlWFaQ-6zGWcb7iVHZiUMP7qwCyBxJ3jvtI_GzR7RZQ_YgLG0hH4FuHtQHMTqfFtlJclk-gzgCvWIHGXFXJMG78nRJ0v7YJbGnapvCEziKW474xOjUYjQdR46PNy7Q3kjKLN3XBDv8psv77_1l6HFCJnwxJFpIjNygrB-7AQMp70bVVbUN47v-YjhiGHWkH3t-lvDSkW1I26eefwFRehvw4-yZw9hGOFapSEA";

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
        <section className="relative h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-[10s] hover:scale-105" style={{ backgroundImage: `url('${HERO_IMG}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full reveal active">
            <div className="max-w-2xl">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4 block">Legacy of Excellence</span>
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-8 leading-tight">
                Crafting the <br/><span className="text-primary italic">Luxury of Space</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-10">
                A trusted leader specializing exclusively in premium residential land and plots, where every square foot is a foundation for your future legacy.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/#projects" className="bg-primary text-on-primary px-10 py-4 rounded-[20px] font-body-md text-body-md hover:opacity-90 transition-all whisper-shadow shadow-primary/20">
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
                  Our mission is simple yet profound: Deliver transparent, legally verified, and high-value residential layouts that stand the test of time. We believe in land as the ultimate asset.
                </p>
              </div>
              <div className="bg-surface-container-low p-10 rounded-[32px] whisper-shadow">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Our Vision</h3>
                <p className="font-body-md text-body-md text-on-surface-variant italic leading-relaxed">
                  "To become Karnataka’s most trusted residential plot developer, recognized for setting the gold standard in premium land acquisition and community planning."
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
      </main>

      <Footer />
    </div>
  );
}

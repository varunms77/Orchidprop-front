import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRevealOnScroll, useNavbarScroll } from '../hooks/useScrollEffects';

const MAP_BG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBiRHzIgPJBdApYPiXURpRYYMWhzqz4equmETk4xDI2FMsLgPNO9Ggv_Cvql387jp9fTzKrBTixLJWDc-YxDLTg8QmgEHLGG_gCnoX2alwgNx4a8MPtPlZbMXx7q7lWXF5kJ5QSaZFya_8fhw6hkbhqrKvjcguOFg5AEk42tGyH7AjArDFiNAa5WqX-AODA8ATClurjuL5VzuMA8baa9uJT04B97szzIPz6df0HXWGvvlYgr69c00V1pQgYzrrVF04bvl8dpbhzdQ";

export default function Contact() {
  useRevealOnScroll();
  useNavbarScroll();

  const [submitState, setSubmitState] = useState('idle'); // idle | sending | sent
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitState('sending');

    let text = `Hello Orchid Properties,\nI would like to make an enquiry.\n`;
    if (formData.name) text += `*Name:* ${formData.name}\n`;
    if (formData.email) text += `*Email:* ${formData.email}\n`;
    if (formData.phone) text += `*Phone:* ${formData.phone}\n`;
    if (formData.message) text += `*Message:* ${formData.message}\n`;

    const whatsappUrl = `https://wa.me/message/XAGEMF5YRVSJK1?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setSubmitState('sent');
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        setSubmitState('idle');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    }, 800);
  };

  return (
    <div className="w-full min-h-screen bg-background text-on-surface font-body-md overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Header */}
        <header className="mb-16 reveal active">
          <p className="font-label-caps text-label-caps text-primary tracking-[0.2em] mb-4">CONNECT WITH EXCELLENCE</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-2xl leading-tight">
            We are here to assist your legacy.
          </h1>
        </header>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
          {/* Left: Elegant Contact Form */}
          <section className="reveal-left active glass-card rounded-[32px] p-10 md:p-12 whisper-shadow transition-shadow duration-500">
            <h2 className="font-headline-md text-headline-md text-primary mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-outline ml-1 block">FULL NAME</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-outline-variant rounded-xl px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                  type="text"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-outline ml-1 block">EMAIL ADDRESS</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-outline-variant rounded-xl px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps text-label-caps text-outline ml-1 block">PHONE NUMBER</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-outline-variant rounded-xl px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant"
                    type="tel"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-outline ml-1 block">YOUR MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white border border-outline-variant rounded-xl px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant resize-none"
                  rows="5"
                />
              </div>
              <button
                className={`w-full py-5 rounded-full font-label-md text-label-md uppercase tracking-widest transition-all duration-500 shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-3 ${
                  submitState === 'sent' ? 'bg-emerald-500 text-white shadow-emerald-500/30' : 'bg-secondary text-on-secondary shadow-secondary/30 hover:bg-on-secondary-fixed-variant'
                }`}
                type="submit"
                disabled={submitState !== 'idle'}
              >
                {submitState === 'idle' && (<>Submit Enquiry <span className="material-symbols-outlined">send</span></>)}
                {submitState === 'sending' && (<><span className="material-symbols-outlined animate-spin">progress_activity</span> Redirecting to WhatsApp...</>)}
                {submitState === 'sent' && (<><span className="material-symbols-outlined">check_circle</span> Enquiry Sent</>)}
              </button>
            </form>
          </section>

          {/* Right: Contact Details */}
          <section className="reveal-right active space-y-10 lg:pl-10">
            <div className="grid grid-cols-1 gap-6">
              {/* Address */}
              <div className="glass-card p-8 rounded-[20px] transition-transform duration-300 hover:-translate-y-2 flex items-start gap-6 group">
                <div className="bg-secondary/10 p-4 rounded-xl group-hover:bg-secondary transition-colors">
                  <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors text-3xl">location_on</span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-2">Office Address</h3>
                  <p className="font-body-lg text-body-lg">CTS NO:65/10MN PID NO:1465,<br />Mrityunjaya Nagar, Near Old APMC,<br />Dharwad 580006</p>
                </div>
              </div>
              {/* Phone */}
              <div className="glass-card p-8 rounded-[20px] transition-transform duration-300 hover:-translate-y-2 flex items-start gap-6 group">
                <div className="bg-secondary/10 p-4 rounded-xl group-hover:bg-secondary transition-colors">
                  <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors text-3xl">call</span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-2">Concierge Line</h3>
                  <p className="font-body-lg text-body-lg whitespace-nowrap">+91 77604 91666</p>
                </div>
              </div>
              {/* Email */}
              <div className="glass-card p-8 rounded-[20px] transition-transform duration-300 hover:-translate-y-2 flex items-start gap-6 group">
                <div className="bg-secondary/10 p-4 rounded-xl group-hover:bg-secondary transition-colors">
                  <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors text-3xl">mail</span>
                </div>
                <div>
                  <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-2">Digital Enquiries</h3>
                  <p className="font-body-lg text-body-lg whitespace-nowrap">info@orchidproperties.group</p>
                </div>
              </div>
            </div>

            {/* Business Hours & WhatsApp */}
            <div className="glass-card p-8 rounded-[20px] flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant mb-2">Business Hours</h3>
                <p className="font-body-md text-body-md">Mon - Fri: 09:00 - 19:00</p>
                <p className="font-body-md text-body-md">Sat - Sun: By Appointment Only</p>
              </div>
              <a
                href="https://wa.me/message/XAGEMF5YRVSJK1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-label-md text-label-md uppercase tracking-widest hover:brightness-110 transition-all duration-300 shadow-lg flex items-center gap-3"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Chat on WhatsApp
              </a>
            </div>
          </section>
        </div>

        {/* Map Section */}
        <section className="mt-section-gap">
          <div className="glass-card rounded-[20px] overflow-hidden shadow-sm h-[500px] relative group">
            <iframe
              title="Orchid Properties Location Map"
              src="https://maps.google.com/maps?q=CTS%20NO:65/10MN%20PID%20NO:1465,%20Mrityunjaya%20Nagar,%20Near%20Old%20APMC,%20Dharwad%20580006&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

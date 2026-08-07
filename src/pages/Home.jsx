import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRevealOnScroll, useParallax, useNavbarScroll } from '../hooks/useScrollEffects';

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuA38ikc9HF7l7y1JvDrIa3-duZ7IPuBi-HxsC1Iy7oebpMP1A9jmRmgQVB3dH_sHnP8Fo8inTLy_tx19lJ9zODZJ45O-m2p6ESBsWthOu969fRJRKIpzHhqBpzYsQHje8McmOwY3Qv-AE_UJRtnY2tihva5O_I4ul2brfmXMjOV6GUE42gy-3tCTmtTRzIAtNxUbS3TESQJB8Bz7zp8egT9KkfiMoWAplhFTsPIVZnu_hTBZ8FdnLDXMyqRTtLdRurOPoI";

const projectImages = [
  "/projects/balaji_layout.jpg",
  "/projects/kanakgiri_park.jpg",
  "/projects/balaji_nagar.jpg",
  "/projects/wild_woods.jpg",
  "/projects/mahalaxmi.jpg",
  "/projects/sidaroodha.jpg"
];

const projects = [
  {
    name: "Balaji Layout",
    desc: "Experience everyday comfort in a community made to inspire.",
    badge: "Fast Selling",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-agIoqyATWJ741khXW0GFaoSGQdOMkONVCQu4wUhtN8cGy2VCxveybqao2Zy5i0XaFEaSe2TszxPZmGEcVR-loT7XedRAJPSjydoAoOI46CaHPXI_Ktr3E47poyNqIJWccVyOBcWjvhIqfaFITMyfB7QBE50AkObn_dXF-poZoPZKhVO6nadmfRu25QUgdVW_nb-y7_GS4pAyKQzoEfGppljCMTF4lewRyqEOpIyRSyd6hibhrzUMGM3_ESLampM8xhE",
    image: "/projects/balaji_layout.jpg",
    link: "/projects/balaji_layout"
  },
  {
    name: "Kanakgiri Park",
    desc: "Step into a vibrant community where every moment feels refreshing.",
    badge: "New",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFYQYwERiiFrk7FUJm55cvATYc37eYLWO9PRq3Cg6Sm_6bugqDhf_ZVtZVmi458-1JACTK0gEtOLXmP-l_hw3u_q0FxKhTaTRUHNPOZ17gSCtsFdkqS4kHJ2qctM7Resn25AHPwfNva3wr6voKhAbzXQaxGHj9B3oNWIyFSdIJWwzZ5oOfwzOLF_iSP91YmSl-fyVCIkiyK-3SNlNlHksPDig4LthwIETH9jYxgAhgBVJaeVuAikSZ2C5zIVznspwMEho",
    image: "/projects/kanakgiri_park.jpg",
    link: "/projects/kanakgiri_park"
  },
  {
    name: "Balaji Nagar",
    desc: "Live where connectivity, comfort, and opportunity come together.",
    badge: "Corner Plots",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVvXMmZBJu_20QvCxuWFI4OOeZQD5O4J3-MZCZRH9VZfLdp0Mg6vvaLpLGDBz1y1k3KE94nlHuM9QvaDWfxHupVrvEoXeI5xMeP8wWittkrgSpcMCC-TJCXzMnO8zi_2MA0tZpmOKoq9qrsNprNdl5tHDhBhaUSLMZ5ibVrUAqw0QRwtpb8tJqcxNRI9HZDQruloYIcgGh88U1n2btA6gfDFYquMf1CyMfvNwFFyox2g25ZKEeHnlQGTXRac6pfHW3Mrs",
    image: "/projects/balaji_nagar.jpg",
    link: "/projects/balaji_nagar"
  },
  {
    name: "Wild Woods",
    desc: "Find your sanctuary in a farm villa surrounded by timeless natural beauty.",
    badge: "Farm Villa",
    logo: "/projects/wild_woods.png",
    image: "/projects/wild_woods.jpg",
    link: "/projects/wild_woods"
  },
  {
    name: "Mahalaxmi Layout",
    desc: "Choose a residential address where families grow and futures flourish.",
    badge: "New",
    logo: "/mahalakshmi.png",
    image: "/projects/mahalaxmi.jpg",
    link: "/projects/mahalaxmi_layout"
  },
  {
    name: "Siddharoodha Layout",
    desc: "More than a layout—it's a community you'll be proud to call home.",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJKMZa9oQvcwOv-aDnhNZdeTLem5sRSUkOVGfPaK4JhoxG8OFxGpuFH3PLtrBrPjcrcR3ks8xdQkkQsW1TgHkCErkDK0kEw41b_QCeJhR9BkCKmOyvwBceHvCNvqjCt-2vdWIKIRyYOhvJSEZmxMwMSyGnECU5tP5dAeua36-wSBW_REAJsb5MHqRQYQ2Do1cXX2tZRJWSkIBv_Ig8SrzMGJ5znJ-whaO8RLLw4ulHReHNzqh9f7bi9G0gyaO5xXEBbag",
    image: "/projects/sidaroodha.jpg",
    link: "/projects/siddharoodha_layout"
  },
  {
    name: "Hans Garden",
    desc: "Where smart businesses find the perfect place to grow and push the code.",
    badge: "Commercial Space",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDHjdTaLOaRN2XK3UcnmODt49fH5E9FtwK7hWKKYJr36PzvyLHrSg3-tseaCFa5x5DgfUB-e-mmUOiusYjG1vqEdSnO8n7EolcAuvOGqi-q3etasGgpBzRtaQD8tr1VvmBp2QIx2uPNs_IvHl-u5aOCHl5H99MMpN9Qb1EatX07UEF1kNz_djiy1krLNrd5dLVgOsSxf2EEiQUP0i63Cv7nGVrMcbSuv1RYo1DQfdzejMNOk0QGnMG8KfUDewsUHJ2_Rk",
    image: "/projects/hans_garden.png",
    link: "/projects/hans_garden"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length);
    }, 4500); // changes every 4.5 seconds for a premium, deliberate feel
    return () => clearInterval(timer);
  }, []);

  useRevealOnScroll();
  useNavbarScroll();

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface font-body-md overflow-x-hidden">
      <Navbar />

      {/* Cinematic Hero */}
      <header className="relative h-screen w-full overflow-hidden flex items-end pb-28 md:pb-36">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/35 z-10" />
          <div className="absolute inset-0 hero-gradient z-20" />
          {projectImages.map((img, idx) => (
            <img
              key={img}
              alt={`Premium Residential Hero ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out ${
                idx === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
              style={{
                transitionProperty: 'opacity, transform',
                transform: idx === currentSlide ? 'scale(1.08)' : 'scale(1.0)'
              }}
              src={img}
            />
          ))}
        </div>
        <div className="relative z-30 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="max-w-3xl space-y-6 reveal active">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white leading-tight">
              Premium Residential Plots for Your <span className="text-secondary-fixed font-semibold">Dream Future</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/95 max-w-xl">
              Discover legally verified residential layouts with premium infrastructure and trusted investment opportunities. Build your legacy on a foundation of excellence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a className="bg-secondary text-on-secondary px-10 py-4 rounded-full font-label-md text-label-md uppercase tracking-widest shadow-xl shadow-secondary/30 hover:bg-on-secondary-fixed-variant transition-all transform hover:scale-105" href="#projects">
                View Projects
              </a>
              <Link className="glass-card text-white border-white/30 px-10 py-4 rounded-full font-label-md text-label-md uppercase tracking-widest hover:bg-white/20 transition-all transform hover:scale-105" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 text-white/40 animate-bounce">
          <span className="font-label-md text-xs uppercase tracking-tighter">Explore</span>
          <span className="material-symbols-outlined text-[20px]">expand_more</span>
        </div>
      </header>

      {/* Featured Projects */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="projects">
        <div className="text-center mb-20 reveal">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest block mb-4">Our Portfolio</span>
          <h2 className="font-display-lg text-headline-lg text-on-surface">Discover Our Signature Developments</h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {projects.map((project, i) => (
            <div key={project.name} className="glass-card rounded-[20px] overflow-hidden flex flex-col group transition-all duration-500 hover:shadow-xl reveal">
              <div className="h-64 overflow-hidden relative">
                {project.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-primary/85 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                    {project.badge}
                  </div>
                )}
                <img alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.image} />
              </div>
              <div className="p-8 bg-white flex-grow flex flex-col justify-between">
                <div>
                  {project.logo && (
                    <img alt={`${project.name} Logo`} className="h-12 w-auto mb-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-500" src={project.logo} />
                  )}
                  <h3 className="font-headline-sm text-headline-sm mb-2 text-on-surface">{project.name}</h3>
                  <p className="text-secondary text-body-md mb-8">{project.desc}</p>
                </div>
                {project.link ? (
                  <Link to={project.link} className="block w-full text-center border border-primary text-primary py-3 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300">
                    View Project
                  </Link>
                ) : (
                  <button className="w-full border border-primary text-primary py-3 rounded-xl font-label-md text-label-md uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300">
                    View Project
                  </button>
                )}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* About Us Preview */}
      <section className="bg-surface-container py-section-gap" id="about">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square glass-card rounded-3xl overflow-hidden p-8 flex flex-col justify-end">
                  <span className="text-4xl font-bold text-secondary mb-2">15+</span>
                  <p className="text-on-surface-variant font-label-md uppercase tracking-tighter">Years of Excellence</p>
                </div>
                <div className="aspect-[4/5] bg-secondary rounded-3xl overflow-hidden flex items-center justify-center p-8 text-on-secondary">
                  <p className="text-xl font-medium leading-relaxed italic">"Trust is the cornerstone of every plot we sell."</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-[4/5] glass-card rounded-3xl overflow-hidden p-8 flex flex-col justify-between">
                  <span className="material-symbols-outlined text-4xl text-secondary">verified_user</span>
                  <div>
                    <span className="text-2xl font-bold text-on-surface">100%</span>
                    <p className="text-on-surface-variant font-label-md uppercase tracking-tighter">Legal Verification</p>
                  </div>
                </div>
                <div className="aspect-square glass-card rounded-3xl overflow-hidden p-8 flex flex-col justify-end">
                  <span className="text-4xl font-bold text-secondary mb-2">500+</span>
                  <p className="text-on-surface-variant font-label-md uppercase tracking-tighter">Happy Families</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8 reveal">
            <span className="text-secondary font-label-md text-label-md uppercase tracking-widest block">Who We Are</span>
            <h2 className="font-display-lg text-headline-lg text-on-surface">Trusted Residential Land Specialists</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              At Orchid Properties, we don't just sell plots; we provide the foundation for your aspirations. With over a decade of expertise in urban development and land acquisition, we specialize in identifying high-growth corridors and transforming them into premium residential spaces.
            </p>
            <div className="space-y-4">
              {["Clear Title & Documentation", "Prime Infrastructure Ready", "Strategically Located Layouts"].map(item => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </div>
                  <span className="font-body-md font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link to="/about" className="bg-secondary text-on-secondary px-10 py-4 rounded-full font-label-md text-label-md uppercase tracking-widest shadow-xl shadow-secondary/30 hover:bg-on-secondary-fixed-variant transition-all inline-block">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Orchid Advantage */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
        <div className="text-center mb-16">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest block mb-4">
            The Orchid Advantage
          </span>
          <h2 className="font-display-md text-headline-lg md:text-display-md text-on-surface">
            Why Investing with Us is a Legacy Move
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {[
            {
              icon: "pin_drop",
              title: "Prime Locations",
              desc: "Strategically selected areas with high appreciation potential and seamless connectivity."
            },
            {
              icon: "gavel",
              title: "Legal Documentation",
              desc: "100% verified titles and hassle-free registration processes for peace of mind."
            },
            {
              icon: "payments",
              title: "Affordable Investment",
              desc: "Premium living accessible through competitive pricing and flexible payment plans."
            },
            {
              icon: "sentiment_satisfied",
              title: "Customer Satisfaction",
              desc: "A community of 5000+ happy land owners who trust the Orchid name."
            },
            {
              icon: "verified",
              title: "Trusted Service",
              desc: "Dedicated relationship managers guiding you through every step of the journey."
            },
            {
              icon: "home_work",
              title: "Quality Developments",
              desc: "World-class infrastructure including wide roads, drainage, and green lungs."
            }
          ].map((item, index) => (
            <div key={index} className="glass-card rounded-[24px] p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-headline-sm text-lg font-bold text-on-surface mt-2">{item.title}</h3>
              <p className="text-on-surface-variant text-body-md leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="contact">
        <div className="glass-card rounded-[40px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 reveal">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
          <div className="flex-1 space-y-6 relative z-10">
            <h2 className="font-display-lg text-headline-lg text-on-surface">Start Your Journey with Orchid Properties</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Have questions about specific layouts or investment potential? Our specialist consultants are ready to help you find the perfect plot.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl">call</span>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-semibold whitespace-nowrap">+91 77604 91666</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl">mail</span>
                <div>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-semibold whitespace-nowrap">info@orchidproperties.group</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[400px] glass-card p-8 rounded-3xl border border-white relative z-10">
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">Full Name</label>
                <input className="w-full bg-transparent border-b border-outline-variant focus:border-secondary py-2 outline-none transition-colors" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">Phone Number</label>
                <input className="w-full bg-transparent border-b border-outline-variant focus:border-secondary py-2 outline-none transition-colors" type="tel" />
              </div>
              <button className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-label-md text-label-md uppercase tracking-widest shadow-lg shadow-secondary/20 hover:scale-[1.02] transition-all" type="submit">
                Get Call Back
              </button>
            </form>
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

      <Footer />
    </div>
  );
}

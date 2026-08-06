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
                <input className="w-full bg-transparent border-b border-outline-variant focus:border-secondary py-2 outline-none transition-colors" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-xs uppercase tracking-widest text-on-surface-variant">Phone Number</label>
                <input className="w-full bg-transparent border-b border-outline-variant focus:border-secondary py-2 outline-none transition-colors" placeholder="+91 00000 00000" type="tel" />
              </div>
              <button className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-label-md text-label-md uppercase tracking-widest shadow-lg shadow-secondary/20 hover:scale-[1.02] transition-all" type="submit">
                Get Call Back
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

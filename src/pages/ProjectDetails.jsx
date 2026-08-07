import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRevealOnScroll, useNavbarScroll } from '../hooks/useScrollEffects';

const projectsData = {
  wild_woods: {
    name: "Wild Woods",
    tagline: "Escape to Your Own Sanctuary",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuArUTMnFtDdnxLMVKqPloUmp0ksXvbIYeT9m6gO25cjSduv9nPMgCUItwc0hBnO8NqXW00M0PoaADrbzgLyXGkOgphM9sx9HWJrugvnLigSR1b-lV0VxBzF7TgGIuUW-HT0eTwXE749BtjG7nl1fG1rp1Ejg_NFOoXs5DLoyFk6FFAFFAFFAFFAFFAFFAFFAFFAFFAFFAFFAFFAFFAFFAFFAFFAFFAFFA",
    heroImage: "/projects/wild_woods.jpg",
    videoImage: "/projects/wild_woods.jpg",
    videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dwoxzre9m&public_id=Wild_woods_xwwobv",
    desc: "Wild Woods represents the luxury of seclusion, an exclusive farm villa community by Orchid Properties. Nestled amidst lush greenery, century-old trees, and rolling landscapes, this project offers premium farm villa plots to create your own legacy retreat. Thoughtfully planned to preserve nature, every plot enjoys scenic surroundings, fresh air, and breathtaking views.",
    approval: "HDUDA Approved",
    sizes: "5-10  Guntas",
    amenities: [
      { icon: "road", label: "Wide Bitumen Roads", desc: "30ft wide well-paved roads throughout the community ensuring seamless movement and aesthetic appeal." },
      { icon: "pool", label: "Swimming Pool", desc: "Enjoy a beautifully designed swimming pool, perfect for relaxation, fitness, and quality time with family in a peaceful community setting." },
      { icon: "fence", label: "Gated Community", desc: "Secure gated community with controlled access, 24/7 safety, and a peaceful environment for comfortable family living." },
      { icon: "holiday_village", label: "Club House", desc: "A modern clubhouse offering elegant spaces for social gatherings, celebrations, indoor recreation, and community events" },
      { icon: "celebration", label: "Party Lawn", desc: "A beautifully landscaped open party lawn, perfect for family celebrations, festive occasions, and memorable outdoor events" }
    ],
    proximity: [
      { icon: "commute", label: "Connectivity", desc: "Dharwad City (20 mins)" },
      { icon: "commute", label: "Connectivity", desc: "Jayanagar - Srinagar (15 mins) " },
      { icon: "commute", label: "Connectivity", desc: "Hubli Airport (25 mins)" },
    ],
    mapUrl: "https://maps.google.com/maps?q=Wild+Woods,+Murakatti,+Dharwad+-+Haliyal+Rd,+Dharwad,+Karnataka+580118&t=&z=14&ie=UTF8&iwloc=&output=embed",
    heroDesc: "Luxury Farm Villas crafted for serene living, expansive open spaces, and a perfect blend of nature and comfort.",
    gallery: [
      "/projects/wild_woods.jpg",
      "/projects/wild3.jpg",
      "/projects/wild1.jpg",
      "/projects/wild2.jpg",
      "/projects/wild4.jpg"
    ]
  },
  hans_garden: {
    name: "Hans Garden",
    tagline: "Eminent Living",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDHjdTaLOaRN2XK3UcnmODt49fH5E9FtwK7hWKKYJr36PzvyLHrSg3-tseaCFa5x5DgfUB-e-mmUOiusYjG1vqEdSnO8n7EolcAuvOGqi-q3etasGgpBzRtaQD8tr1VvmBp2QIx2uPNs_IvHl-u5aOCHl5H99MMpN9Qb1EatX07UEF1kNz_djiy1krLNrd5dLVgOsSxf2EEiQUP0i63Cv7nGVrMcbSuv1RYo1DQfdzejMNOk0QGnMG8KfUDewsUHJ2_Rk",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6zKyoQyFG8SQQai4C6bRwe6POYKzxTez5NF6SMpqvA6uJgumt3V1nmfWKkCH30snEFVAIiC5uK4Y8m3Szr-5twxssrd3H_hdy69-4n1AR8EzmvjbvsWT2wUkRnAT8v-s3ee4qSd0IuCxx2_sF89Gq4w2NtFJ9KEKb6XDmwcW4WCCpPTnPRs5bZZRHlY2_kYUdERL5cYl7_B4D05poArIBzt3wpRmX8WIqRFP_ww4WZT9mKOSnn7OZravNnbbW7h-SRZ4",
    videoImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyzts4jBllCyEFzi-hNkk0mUL1ahIeDyYNlt9Gr6EtAPeOHbnjIMykn6OSSNPf8edDeM_B1Om6fC8-ARWeV8jB5MAJ7DFOfGEWyV7t7tbBLgw7Ch9uhJxs9b14yegeauc8qBYI_HkGFuiXWVtYcw7o3KzbMsbCZ1kkoDNaERjtARLYqVs634g1V-Kl6KB7X-S1jofEgxUwupHJ_RPQu-kZvO1K7RtSyj3l_ChXjXa4VoN99ZJ8cVGOmA",
    desc: "Hans Garden is where business meets opportunity. Strategically positioned to maximize visibility and accessibility, this premium commercial destination is designed for entrepreneurs, retailers, and investors seeking a location that drives growth, attracts customers, and creates long-term value.",
    approval: "HDUDA",
    sizes: "1200 - 4000 sqft",
    amenities: [
      { icon: "road", label: "Wide Bitumen Roads", desc: "30ft wide well-paved roads throughout the community ensuring seamless movement and aesthetic appeal." },
      { icon: "water_drop", label: "24/7 Water Supply", desc: "Dedicated overhead water tanks and deep borewells ensuring uninterrupted supply to every plot." },
      { icon: "bolt", label: "Electricity", desc: "Underground cabling for an obstruction-free sky and consistent power distribution." },
      { icon: "nature_people", label: "Green Parks", desc: "Lush landscaped parks and children's play areas integrated into the layout design." },
      { icon: "wb_twilight", label: "Street Lights", desc: "High-efficiency LED street lights ensuring security and elegance during nighttime." }
    ],
    proximity: [
      { icon: "school", label: "Education Hub", desc: "Global International School (5 mins) • St. Mary's Academy (8 mins)" },
      { icon: "medical_services", label: "Medical Care", desc: "City Super Specialty Hospital (10 mins) • HealthCare Clinic (4 mins)" },
      { icon: "commute", label: "Connectivity", desc: "Main Bus Terminal (12 mins) • Metro Station Phase II (15 mins)" }
    ],
    mapUrl: "https://maps.google.com/maps?q=Hans+Garden,+Orchid+Properties,+Dharwad,+Karnataka&t=&z=14&ie=UTF8&iwloc=&output=embed",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEjWlkdVBZi31WI3YW-9mJNeQNdcuZmJg7VqpwLynZw46GAKQaZYRiU5CQrm2_0wiYe_kj_K_nEJspEtCWzBYKXtxtT20YinX5XigOMkyNd5hIrIahg5MOTu3skvZMoPQonB-2d4RqrH8XdEOZyjDtsdtZ0QHwDYPbfYZF-Qip_c_jhxTeu4QB-WwHlSI_L_uD4n-oE16pFs9y_GaHD7ap9yv8D-Rvo_KUKtLO_l8XxCtfNEhc4CNWOg",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmOlU-Lxm3VT5o7Jvv-vXLoCDbUh8bJVkiDihPGgYwGit43Ij52VACxXLlhd9gUuhHXRasombOH8qHynEjWL_QIx64SLIVZbDbZygIXONIVQec5NFqgOR_L8sMe8TcxDr-YMCmJVa3vFa9VwG9zpDAd1gGwKL6B7xuNe6pWNnn_Qh_0_Qgu_ioHkA5eT7pk3GVvdmF9UuhP_NN8I9nMU6bN8x9pF4zF-ir1ChdE417EmXkLIdAB828lw"
    ]
  },
  siddharoodha_layout: {
    name: "Siddharoodha Layout",
    tagline: "Tradition Meets Urban Living",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJKMZa9oQvcwOv-aDnhNZdeTLem5sRSUkOVGfPaK4JhoxG8OFxGpuFH3PLtrBrPjcrcR3ks8xdQkkQsW1TgHkCErkDK0kEw41b_QCeJhR9BkCKmOyvwBceHvCNvqjCt-2vdWIKIRyYOhvJSEZmxMwMSyGnECU5tP5dAeua36-wSBW_REAJsb5MHqRQYQ2Do1cXX2tZRJWSkIBv_Ig8SrzMGJ5znJ-whaO8RLLw4ulHReHNzqh9f7bi9G0gyaO5xXEBbag",
    heroImage: "/projects/sidaroodha.jpg",
    videoImage: "/projects/sidaroodha.jpg",
    heroDesc: "A community where tradition inspires modern living and every home reflects timeless values.",
    desc: "Siddharoodha Layout is where aspirations find their perfect address. Designed to inspire a refined lifestyle, this exclusive residential community offers an environment that celebrates space, serenity, and a future built with confidence. Every plot is an opportunity to create a home that reflects your vision.",
    approval: "HDUDA Approved",
    sizes: "1200 - 3000 sqft",
    amenities: [
      { icon: "road", label: "Wide Bitumen Roads", desc: "30ft wide well-paved roads throughout the community ensuring seamless movement and aesthetic appeal." },
      { icon: "water_drop", label: "24/7 Water Supply", desc: "Dedicated overhead water tanks and deep borewells ensuring uninterrupted supply to every plot." },
      { icon: "bolt", label: "Electricity", desc: "Underground cabling for an obstruction-free sky and consistent power distribution." },
      { icon: "nature_people", label: "Green Parks", desc: "Lush landscaped parks and children's play areas integrated into the layout design." },
      { icon: "wb_twilight", label: "Street Lights", desc: "High-efficiency LED street lights ensuring security and elegance during nighttime." }
    ],
    proximity: [
      { icon: "school", label: "Education Hub", desc: "Basavareddy Institute(4 mins)" },
      { icon: "commute", label: "Connectivity", desc: "Dharwad New Bus Terminal (5 mins)" },
      { icon: "medical_services", label: "Medical Care", desc: "German Hospital (7 mins)" },
    ],
    mapUrl: "https://maps.google.com/maps?q=Siddharoodha+layout,+Orchid+Properties,+near+BD+Patil+Convention+Hall,+Sampige+Nagar,+Dharwad,+Karnataka+580007&t=&z=14&ie=UTF8&iwloc=&output=embed",
    gallery: [
      "/projects/sida11.jpg",
      "/projects/sida22.jpg",
      "/projects/sida33.jpg",
      "/projects/sida44.jpg"
    ]
  },
  balaji_layout: {
    name: "Balaji Layout",
    tagline: "Own Your Legacy",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-agIoqyATWJ741khXW0GFaoSGQdOMkONVCQu4wUhtN8cGy2VCxveybqao2Zy5i0XaFEaSe2TszxPZmGEcVR-loT7XedRAJPSjydoAoOI46CaHPXI_Ktr3E47poyNqIJWccVyOBcWjvhIqfaFITMyfB7QBE50AkObn_dXF-poZoPZKhVO6nadmfRu25QUgdVW_nb-y7_GS4pAyKQzoEfGppljCMTF4lewRyqEOpIyRSyd6hibhrzUMGM3_ESLampM8xhE",
    heroImage: "/projects/balaji_layout.jpg",
    videoImage: "/projects/balaji_layout.jpg",
    videoUrl: "https://www.youtube.com/embed/nXfb26Gwlgo?autoplay=1",
    desc: "Balaji Layout is meticulously planned to represent comfort, security, and legacy. Set in a fast-appreciating corridor, this project has been built to exceed standard specifications. With dedicated services and top-grade concrete details, this neighborhood guarantees a reliable and robust investment for you and your family.",
    approval: "HDUDA Approved",
    sizes: "1200 - 2400 sqft",
    amenities: [
      { icon: "road", label: "Wide Bitumen Roads", desc: "30ft wide well-paved roads throughout the community ensuring seamless movement and aesthetic appeal." },
      { icon: "water_drop", label: "24/7 Water Supply", desc: "Dedicated overhead water tanks and deep borewells ensuring uninterrupted supply to every plot." },
      { icon: "bolt", label: "Electricity", desc: "Underground cabling for an obstruction-free sky and consistent power distribution." },
      { icon: "nature_people", label: "Green Parks", desc: "Lush landscaped parks and children's play areas integrated into the layout design." },
      { icon: "wb_twilight", label: "Street Lights", desc: "High-efficiency LED street lights ensuring security and elegance during nighttime." }
    ],
    proximity: [
      { icon: "commute", label: "Connectivity", desc: "National Highway (2 mins)" },
      { icon: "account_balance", label: "University", desc: "Agriculture University(5 mins)" },
      { icon: "school", label: "Education Hub", desc: "IIT DHARWAD (10 mins) " }
    ],
    brochureUrl: "/projects/Balaji_Layout.pdf",
    mapUrl: "https://maps.google.com/maps?q=Balaji+Layout,+Chikkamalligwad,+Dharwad,+Hiremalligawad,+Karnataka+580007&t=&z=16&ie=UTF8&iwloc=&output=embed",
    gallery: [
      "/projects/bal1.jpeg",
      "/projects/bal2.jpeg",
      "/projects/bal3.jpeg",
      "/projects/bal4.jpeg",
      "/projects/bal5.jpeg"
    ]
  },
  balaji_nagar: {
    name: "Balaji Nagar",
    tagline: "Vibrant Community Living",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVvXMmZBJu_20QvCxuWFI4OOeZQD5O4J3-MZCZRH9VZfLdp0Mg6vvaLpLGDBz1y1k3KE94nlHuM9QvaDWfxHupVrvEoXeI5xMeP8wWittkrgSpcMCC-TJCXzMnO8zi_2MA0tZpmOKoq9qrsNprNdl5tHDhBhaUSLMZ5ibVrUAqw0QRwtpb8tJqcxNRI9HZDQruloYIcgGh88U1n2btA6gfDFYquMf1CyMfvNwFFyox2g25ZKEeHnlQGTXRac6pfHW3Mrs",
    heroImage: "/projects/b3.jpg",
    videoImage: "/projects/balaji_nagar.jpg",
    heroDesc: "Crafted to elevate everyday living with modern amenities, peaceful surroundings, and excellent connectivity.",
    desc: "Balaji Nagar stands as a symbol of thoughtful planning and enduring quality. Nestled in a fast-developing location, this premium residential layout offers legally approved plots, modern infrastructure, and a welcoming environment that inspires comfortable living and lasting value.",
    approval: "HDUDA Approved",
    sizes: "1200 - 1500 sqft",
    amenities: [
      { icon: "road", label: "Wide Bitumen Roads", desc: "30ft wide well-paved roads throughout the community ensuring seamless movement and aesthetic appeal." },
      { icon: "water_drop", label: "24/7 Water Supply", desc: "Dedicated overhead water tanks and deep borewells ensuring uninterrupted supply to every plot." },
      { icon: "bolt", label: "Electricity", desc: "Underground cabling for an obstruction-free sky and consistent power distribution." },
      { icon: "nature_people", label: "Green Parks", desc: "Lush landscaped parks and children's play areas integrated into the layout design." },
      { icon: "wb_twilight", label: "Street Lights", desc: "High-efficiency LED street lights ensuring security and elegance during nighttime." }
    ],
    proximity: [
      { icon: "commute", label: "Connectivity", desc: "National Highway(1 min)" },
      { icon: "school", label: "Education Hub", desc: "Karnataka State Higher Education Academy(3 mins)" },
      { icon: "account_balance", label: "University", desc: "Karnataka University(7 mins)" }

    ],
    mapUrl: "https://maps.google.com/maps?q=Balaji+Nagar,+Orchid+Properties,+Dharwad+-+Haliyal+Rd,+Hubballi,+Karnataka+580007&t=&z=14&ie=UTF8&iwloc=&output=embed",
    gallery: [
      "/projects/b1.jpg",
      "/projects/b2.jpg",
      "/projects/b3.jpg",
      "/projects/b4.jpg"

    ]
  },
  kanakgiri_park: {
    name: "Kanakgiri Park",
    tagline: "Modern Park-Side Living",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFYQYwERiiFrk7FUJm55cvATYc37eYLWO9PRq3Cg6Sm_6bugqDhf_ZVtZVmi458-1JACTK0gEtOLXmP-l_hw3u_q0FxKhTaTRUHNPOZ17gSCtsFdkqS4kHJ2qctM7Resn25AHPwfNva3wr6voKhAbzXQaxGHj9B3oNWIyFSdIJWwzZ5oOfwzOLF_iSP91YmSl-fyVCIkiyK-3SNlNlHksPDig4LthwIETH9jYxgAhgBVJaeVuAikSZ2C5zIVznspwMEho",
    heroImage: "/projects/kanakgiri_park.jpg",
    videoImage: "/projects/kanakgiri_park.jpg",
    heroDesc: "A premium destination offering well-planned plots, lush surroundings, and exceptional connectivity.",
    desc: "Kanakagiri Park is meticulously planned to represent comfort, connectivity, and long-term value. Situated in a rapidly growing location, this premium residential layout is designed to exceed modern living expectations. With quality infrastructure, legally approved plots, and excellent access to key destinations, it offers a secure and rewarding investment for you and your family.",
    approval: "HDUDA Approved",
    sizes: "1200 - 4000 sqft",
    amenities: [
      { icon: "road", label: "Wide Bitumen Roads", desc: " 30ft wide well-paved roads throughout the community ensuring seamless movement and aesthetic appeal." },
      { icon: "water_drop", label: "24/7 Water Supply", desc: "Dedicated overhead water tanks and deep borewells ensuring uninterrupted supply to every plot." },
      { icon: "bolt", label: "Electricity", desc: "Underground cabling for an obstruction-free sky and consistent power distribution." },
      { icon: "nature_people", label: "Green Parks", desc: "Lush landscaped parks and children's play areas integrated into the layout design." },
      { icon: "wb_twilight", label: "Street Lights", desc: "High-efficiency LED street lights ensuring security and elegance during nighttime." }
    ],
    proximity: [
      { icon: "commute", label: "Connectivity", desc: "National Highway (2 mins)" },
      { icon: "school", label: "Education Hub", desc: "Classic International School (5 mins)" },
      { icon: "account_balance", label: "University", desc: "Karnataka University(7 mins)" },
    ],
    mapUrl: "https://maps.google.com/maps?q=Kanakagiri+Park,+Orchid+Properties,+Tapovan+Nagar,+Kyarkoppa,+Dharwad,+Karnataka+580003&t=&z=14&ie=UTF8&iwloc=&output=embed",
    gallery: [
      "/projects/kanakgiri_park.jpg",
      "/projects/kanak1.jpg",
      "/projects/kanak2.jpg",
      "/projects/kanak3.jpg",
      "/projects/kanak4.jpg",
      "/projects/kanak5.jpg"

    ]
  },
  mahalaxmi_layout: {
    name: "Mahalaxmi Layout",
    tagline: "Your Visionary Future",
    logo: "/mahalakshmi.png",
    heroImage: "/projects/mahalaxmi.jpg",
    videoImage: "/projects/mahalaxmi.jpg",
    heroDesc: "More than a residential layout—it's a destination where memories are made and futures are built.",
    desc: "Mahalaxmi Layout is where peaceful surroundings meet modern living. Overlooking a serene environment and supported by excellent connectivity, it offers the ideal setting to build a home that reflects your aspirations and enriches everyday life. Designed with quality infrastructure and legally approved plots, this vibrant community brings together comfort, convenience, and lasting value in one exceptional destination.",
    approval: "HDUDA Approval ",
    sizes: "1200 - 3600 sqft",
    amenities: [
      { icon: "road", label: "Wide Bitumen Roads", desc: "30ft wide well-paved roads throughout the community ensuring seamless movement and aesthetic appeal." },
      { icon: "water_drop", label: "24/7 Water Supply", desc: "Dedicated overhead water tanks and deep borewells ensuring uninterrupted supply to every plot." },
      { icon: "bolt", label: "Electricity", desc: "Underground cabling for an obstruction-free sky and consistent power distribution." },
      { icon: "nature_people", label: "Green Parks", desc: "Lush landscaped parks and children's play areas integrated into the layout design." },
      { icon: "wb_twilight", label: "Street Lights", desc: "High-efficiency LED street lights ensuring security and elegance during nighttime." }
    ],
    proximity: [
      { icon: "commute", label: "Connectivity", desc: "NH-48 Access (4 mins)" },
      { icon: "medical_services", label: "Medical Care", desc: "German Hospital (5 mins)" },
      { icon: "school", label: "Schools", desc: "JSS Public School (7 mins)" }
    ],
    mapUrl: "https://maps.google.com/maps?q=Mahalaxmi+Layout,+Orchid+Properties,+opp.+Kelageri+Lake,+Kelgeri,+Dharwad,+Karnataka+580007&t=&z=14&ie=UTF8&iwloc=&output=embed",
    gallery: [
      "/projects/ma4.jpg",
      "/projects/ma5.jpg",
      "/projects/ma1.jpg",
      "/projects/ma2.jpg",
      "/projects/ma3.jpg"
    ]
  }
};

export default function ProjectDetails() {
  useRevealOnScroll();
  useNavbarScroll();

  const { projectId } = useParams();
  const currentId = projectId || 'hans_garden';
  const project = projectsData[currentId] || projectsData['hans_garden'];
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    setIsVideoPlaying(false);
  }, [projectId]);

  return (
    <div className="w-full min-h-screen bg-surface text-on-surface font-body-md overflow-x-hidden">
      <Navbar />

      {/* 1. Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full scale-105">
          <img alt={`${project.name} Premium Estate`} className="w-full h-full object-cover brightness-[0.85]" src={project.heroImage} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-0 reveal active">
          <p className="font-label-caps text-label-caps text-white mb-4 tracking-[0.2em] uppercase">{project.tagline}</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 drop-shadow-sm">{project.name}</h1>
          <p className="font-body-lg text-body-lg max-w-2xl mx-auto text-white/80 leading-relaxed">
            {project.heroDesc || "Premium Residential Layout designed for peaceful living, open spaces, and a timeless lifestyle."}
          </p>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#layouts" className="bg-primary text-on-primary px-10 py-4 rounded-full font-label-caps text-label-caps whisper-shadow hover:scale-105 transition-all">Explore Layouts</a>
            <a href="#location" className="glass-card px-10 py-4 rounded-full font-label-caps text-label-caps text-on-surface hover:bg-white/40 transition-all">View Location</a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-primary text-3xl">keyboard_double_arrow_down</span>
        </div>
      </header>

      {/* 2. Cinematic Video Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap reveal">
        <div className="text-center mb-16">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">A Cinematic Vision</h2>
          <div className="w-24 h-1 bg-primary-fixed-dim mx-auto rounded-full"></div>
        </div>
        <div className="relative w-full aspect-video rounded-[20px] overflow-hidden whisper-shadow glass-card group cursor-pointer">
          {project.videoUrl ? (
            isVideoPlaying ? (
              project.videoUrl.includes('embed') ? (
                <iframe src={project.videoUrl} className="w-full h-full" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowFullScreen frameBorder="0" />
              ) : (
                <video src={project.videoUrl} controls autoPlay className="w-full h-full object-cover" />
              )
            ) : (
              <div onClick={() => setIsVideoPlaying(true)} className="relative w-full h-full">
                <img className="w-full h-full object-cover" alt={`${project.name} Cinematic Aerial View`} src={project.videoImage} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-500">
                  <button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-white text-5xl fill" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </button>
                </div>
              </div>
            )
          ) : (
            <img className="w-full h-full object-cover" alt={`${project.name} Cinematic Aerial View`} src={project.videoImage} />
          )}
        </div>
      </section>

      {/* 3. Overview & Stats Section */}
      <section className="bg-surface-container-low py-section-gap" id="layouts">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="reveal">
            <h2 className="font-headline-md text-headline-md text-primary mb-8">Crafting Your Future</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-12">
              {project.desc}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-primary pl-6">
                <p className="font-label-caps text-label-caps text-secondary mb-1">Approval Status</p>
                <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">{project.approval}</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="font-label-caps text-label-caps text-secondary mb-1">Plot Sizes</p>
                <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">{project.sizes}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-gutter reveal">
            <div className="aspect-square rounded-3xl overflow-hidden mt-12 whisper-shadow">
              <img className="w-full h-full object-cover" alt={`${project.name} Layout View 1`} src={project.gallery[0] || project.heroImage} />
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden whisper-shadow">
              <img className="w-full h-full object-cover" alt={`${project.name} Layout View 2`} src={project.gallery[1] || project.heroImage} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Visual Perspective Gallery */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap reveal">
        <div className="mb-12">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Visual Perspective</h2>
          <div className="w-20 h-1 bg-primary-fixed-dim rounded-full"></div>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {(project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImage, project.videoImage]).map((img, idx) => (
            <div
              key={idx}
              className={`overflow-hidden rounded-2xl whisper-shadow group break-inside-avoid mb-6 ${idx % 3 === 1 ? 'mt-8' : ''}`}
            >
              <img
                src={img}
                alt={`${project.name} Visual ${idx + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                style={{ aspectRatio: idx % 3 === 0 ? '4/3' : idx % 3 === 1 ? '3/4' : '4/3' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. Amenities Bento Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="text-center mb-20 reveal">
          <h2 className="font-headline-md text-headline-md text-primary">Signature Amenities</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-4">Curated infrastructure for modern living</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter reveal">
          {/* Bento Item 1 */}
          <div className="md:col-span-2 glass-card rounded-[32px] p-10 flex flex-col justify-between hover:bg-white transition-all duration-500 whisper-shadow">
            <div className="mb-12">
              <span className="material-symbols-outlined text-5xl text-primary mb-6">{project.amenities[0]?.icon}</span>
              <h3 className="font-headline-sm text-headline-sm mb-4 text-on-surface">{project.amenities[0]?.label}</h3>
              <p className="text-on-surface-variant">{project.amenities[0]?.desc}</p>
            </div>
            <div className="flex gap-4">
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold">Premium Layout</span>
              <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-bold">Easy Access</span>
            </div>
          </div>
          {/* Bento Item 2 */}
          <div className="bg-primary rounded-[32px] p-10 text-on-primary flex flex-col justify-center whisper-shadow">
            <span className="material-symbols-outlined text-5xl mb-6">{project.amenities[1]?.icon}</span>
            <h3 className="font-headline-sm text-headline-sm mb-4">{project.amenities[1]?.label}</h3>
            <p className="opacity-80">{project.amenities[1]?.desc}</p>
          </div>
          {/* Bento Item 3 */}
          <div className="bg-surface-container-high rounded-[32px] p-10 flex flex-col justify-between whisper-shadow">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">{project.amenities[2]?.icon}</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 text-on-surface">{project.amenities[2]?.label}</h3>
            <p className="text-on-surface-variant">{project.amenities[2]?.desc}</p>
          </div>
          {/* Bento Item 4 */}
          <div className="glass-card rounded-[32px] p-10 flex flex-col justify-between whisper-shadow">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">{project.amenities[3]?.icon}</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 text-on-surface">{project.amenities[3]?.label}</h3>
            <p className="text-on-surface-variant">{project.amenities[3]?.desc}</p>
          </div>
          {/* Bento Item 5 */}
          <div className="bg-surface-container-highest rounded-[32px] p-10 flex flex-col justify-between whisper-shadow">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">{project.amenities[4]?.icon}</span>
            <h3 className="font-headline-sm text-headline-sm mb-4 text-on-surface">{project.amenities[4]?.label}</h3>
            <p className="text-on-surface-variant">{project.amenities[4]?.desc}</p>
          </div>
        </div>
      </section>

      {/* 6. Location Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden" id="location">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10 reveal">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-6">Strategic Proximity</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{project.name} is centrally located with seamless connectivity to major healthcare, educational, and transportation hubs.</p>
            </div>
            <div className="space-y-6">
              {project.proximity.map((prox, index) => (
                <div key={index} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-secondary/5 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{prox.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{prox.label}</h4>
                    <p className="text-sm text-on-surface-variant font-medium">{prox.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[500px] rounded-[20px] overflow-hidden shadow-xl border border-secondary/20 reveal">
            <div className="absolute inset-0 bg-secondary/5" />
            <iframe
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={project.mapUrl}
              title={`${project.name} Location Map`}
            />
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="py-section-gap relative overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="glass-card p-12 md:p-20 rounded-[40px] shadow-2xl relative overflow-hidden reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display-lg text-headline-lg md:text-display-lg text-primary mb-6">
                  Secure Your Future at {project.name}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                  Limited plots remaining in Phase 1. Schedule a private site visit today and experience the tranquility firsthand.
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.brochureUrl ? (
                    <a href={project.brochureUrl} download className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-xl transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined">download</span> Download Brochure
                    </a>
                  ) : (
                    <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:shadow-xl transition-all flex items-center gap-2">
                      <span className="material-symbols-outlined">event_available</span> Book Site Visit
                    </Link>
                  )}
                  <Link to="/contact" className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary/5 transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined">call</span> Call Expert
                  </Link>
                </div>
              </div>

              {/* Enquire Form */}
              <div className="bg-white p-8 rounded-[30px] shadow-lg border border-outline-variant/30">
                <h3 className="font-headline-md text-headline-md mb-6">Enquire Now</h3>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 transition-colors" placeholder="Full Name" type="text" />
                  <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 transition-colors" placeholder="Email Address" type="email" />
                  <input className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:border-secondary focus:ring-0 px-0 py-3 transition-colors" placeholder="Phone Number" type="tel" />
                  <div className="pt-4">
                    <button className="w-full bg-primary text-on-primary py-4 rounded-full font-bold uppercase tracking-widest hover:brightness-110 transition-all" type="submit">
                      Submit Interest
                    </button>
                  </div>
                  <p className="text-[10px] text-center text-on-surface-variant opacity-70">By submitting, you agree to our privacy policy and terms of service.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

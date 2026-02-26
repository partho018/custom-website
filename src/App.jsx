import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import logo from './assets/logo.svg';
import star from './assets/star.svg';
import icons from './assets/icons.svg';
import countries from './assets/countries.svg';
import mockupMain from './assets/mockup_main.avif';
import mockupLeft from './assets/mockups.avif';
import floatingRing from './assets/floating_ring.avif';
import floatingCursor from './assets/floating_cursor.avif';
import floatingCube from './assets/cube.avif';
import floatingAi from './assets/ai.avif';
import glowImg from './assets/glow.avif';
import cardImg from './assets/card-img.avif';
import cardImg2 from '../img/67ac7759bb3dd367d1496be0_7bc437d91a35f0cfd064cdc379817e74_2.avif';
import cardImg3 from '../img/67ac7758837d0dffb8e32f63_137e4404fe981fb7e0f2f0db1f9ec8e1_3.avif';
import cardImg4 from '../img/67ac775942997040149279e4_4e1a024419bc26a83fde290b2ebc5fcf_4.avif';
import cardImg5 from '../img/67ac7758b9d04d9f75e7bc48_0f92202ed3fd271cc358161c2617e175_5.avif';
import ctaArrow from '../img/67a20bdb0c4f1aa404f9cd38_CTA-Arrow.svg';

// Client Images
import client1 from '../img/Clint/68db83d7e2ef5cee4c7c64ad_Client_Sofia Gouveia_916.avif';
import client2 from '../img/Clint/68db86d8ef94ad655fb9fd01_Client_Austin_916.avif';
import client3 from '../img/Clint/68db8732b22da6b432112dce_Client_Moshiur Rahman Radif_916.avif';
import client4 from '../img/Clint/68e51a2880009d309ccf8a30_Client_Jahnobi_916.avif';
import client5 from '../img/Clint/68e64d2785cf3cb4d1e5bcc1_Client_Dilicio_916.avif';
import client6 from '../img/Clint/6972023ccec47fa8734cf934_Client_Armen Avagyan _916.avif';
import client7 from '../img/Clint/697c78b3798750901911bb75_Client_Anika _916.avif';
import client8 from '../img/Clint/69a044959b8bba79e7629219_Client_Tanmee _916.avif';


// Services Images
import wwd1 from '../img/we do/1.avif';
import wwd2 from '../img/we do/2.avif';
import wwd2_1 from '../img/we do/2.1.avif';
import wwd2_2 from '../img/we do/2.2.avif';
import wwd3_1 from '../img/we do/3.1.avif';
import wwd3_2 from '../img/we do/3.2.avif';
import wwd4_1 from '../img/we do/4.1.avif';
import wwd4_2 from '../img/we do/4.2.avif';

function App() {
    const services = [
        {
            title: "UI/UX Design",
            desc: "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
            images: [wwd1, wwd2]
        },
        {
            title: "Web Development",
            desc: "Building high-performance websites using modern frameworks. Responsive, scalable, and secure solutions tailored to your business.",
            images: [wwd2_1, wwd2_2]
        },
        {
            title: "Brand Identity",
            desc: "Creating unique visual identities that stand out. Logo design, colour palettes, typography, and brand guidelines for your products.",
            images: [wwd3_1, wwd3_2]
        },
        {
            title: "Mobile Apps",
            desc: "Developing native and cross-platform mobile applications that provide seamless user experiences on iOS and Android.",
            images: [wwd4_1, wwd4_2]
        }
    ];

    const projects = [
        {
            category: "Travel",
            title: "Easy Booking for Dream Trips",
            desc: "Triply is a hassle-free & effective tour solution for travelers. It's an all-inclusive booking and planning website that helps people make their dream trips easier.",
            stats: [{ label: "Pages in Projects", value: "40+" }, { label: "Retention Growth", value: "36%" }],
            ceo: { name: "Shubho Al-Faroque", role: "Triply CEO", avatar: "https://i.pravatar.cc/150?u=shubho" },
            bgColor: "#C6CFFF",
            btnColor: "#9AABFF",
            image: cardImg
        },
        {
            category: "Fintech",
            title: "Smart Investing for Everyone",
            desc: "A revolutionary platform that simplifies stock market investing through AI-driven insights and automated portfolio management for beginners.",
            stats: [{ label: "Users Reached", value: "100k+" }, { label: "Assets Managed", value: "$50M" }],
            ceo: { name: "Sarah Jenkins", role: "Investly Founder", avatar: "https://i.pravatar.cc/150?u=sarah" },
            bgColor: "#FFB8B0",
            btnColor: "#FE8F83",
            image: cardImg2
        },
        {
            category: "Healthcare",
            title: "Telehealth Redefined",
            desc: "Connecting patients with top-tier specialists instantly. Our encrypted video platform ensures safety while making healthcare accessible globally.",
            stats: [{ label: "Doctors Onboard", value: "500+" }, { label: "Patient Satisfaction", value: "98%" }],
            ceo: { name: "Dr. James Wilson", role: "HealthSync CMO", avatar: "https://i.pravatar.cc/150?u=james" },
            bgColor: "#FBE8A4",
            btnColor: "#F7BB48",
            image: cardImg3
        },
        {
            category: "E-commerce",
            title: "Modern Shopping Experience",
            desc: "A headless commerce solution focused on speed and high conversion rates. We built a custom storefront that increased sales by 40% in three months.",
            stats: [{ label: "Conversion Rate", value: "+4.5%" }, { label: "Page Load Speed", value: "0.8s" }],
            ceo: { name: "Monica Geller", role: "ShopEase CEO", avatar: "https://i.pravatar.cc/150?u=monica" },
            bgColor: "#ABF5FF",
            btnColor: "#ABF5FF",
            image: cardImg4
        },
        {
            category: "SaaS",
            title: "Enterprise Workflow Automation",
            desc: "Streamlining complex business processes with a drag-and-drop interface. Trusted by Fortune 500 companies to reduce operational costs.",
            stats: [{ label: "Efficiency Gain", value: "60%" }, { label: "Setup Time", value: "2 Days" }],
            ceo: { name: "Robert Fox", role: "FlowState CTO", avatar: "https://i.pravatar.cc/150?u=robert" },
            bgColor: "#C9FFF7",
            btnColor: "#57E6D8",
            image: cardImg5
        }
    ];

    const clientStories = [
        {
            name: "Sofia Gouveia",
            role: "Marketing Director @ TechFlow",
            testimonial: "Design Monks completely transformed our brand identity. Their vision was exactly what we needed.",
            image: client1,
            brand: "TechFlow"
        },
        {
            name: "Austin",
            role: "Founder @ Spark",
            testimonial: "The attention to detail and creative direction was phenomenal. Highly recommended.",
            image: client2,
            brand: "Spark"
        },
        {
            name: "Moshiur Rahman",
            role: "CEO @ PrimeStream",
            testimonial: "Working with them was a seamless experience. They really understood our user base.",
            image: client3,
            brand: "PrimeStream"
        },
        {
            name: "Jahnobi",
            role: "Product Lead @ Nexa",
            testimonial: "The team delivered above and beyond our expectations. A true design powerhouse.",
            image: client4,
            brand: "Nexa"
        },
        {
            name: "Dilicio",
            role: "COO @ Foodies",
            testimonial: "Our conversion rates spiked by 40% after the redesign. Simply amazing work.",
            image: client5,
            brand: "Foodies"
        },
        {
            name: "Armen Avagyan",
            role: "CEO @ Fraus",
            testimonial: "Design Monks brought a perspective we hadn't considered. It was a game changer.",
            image: client6,
            brand: "Fraus"
        },
        {
            name: "Anika",
            role: "Design Lead @ Aura",
            testimonial: "The level of professionalism and craft they bring to the table is unmatched.",
            image: client7,
            brand: "Aura"
        },
        {
            name: "Tanmee",
            role: "CTO @ CloudSync",
            testimonial: "Fast, reliable, and exceptionally talented. Best agency we've ever worked with.",
            image: client8,
            brand: "CloudSync"
        }
    ];

    const [currentClientIndex, setCurrentClientIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setTransitionEnabled(true);
            setCurrentClientIndex((prev) => prev + 1);
        }, 3500);
        return () => clearInterval(timer);
    }, [isPaused, clientStories.length]);

    useEffect(() => {
        if (currentClientIndex === clientStories.length) {
            const timer = setTimeout(() => {
                setTransitionEnabled(false);
                setCurrentClientIndex(0);
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [currentClientIndex, clientStories.length]);



    return (
        <div className="app-container">
            {/* Top Navigation - Text Only */}
            <header className="site-header">
                <h2 className="site-logo-text">designmonks</h2>
            </header>

            <main className="hero-section">
                {/* Hero Content */}
                <div className="hero-main-content">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rating-badge"
                    >
                        <img src={logo} alt="brand" className="brand-logo-small" />
                        <div className="rating-visual">
                            <span className="rating-num">4.9</span>
                            <img src={star} alt="stars" className="star-img" />
                        </div>
                        <p className="agency-sub">Leading UI/UX Design Agency</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="hero-title"
                    >
                        <span className="we-text">We</span> <span className="elegant-serif">Design</span> <span className="red-hat-text">Products That</span> <br />
                        <span className="red-hat-text">Drive</span> <img src={icons} alt="icons" className="title-icons" /> <span className="elegant-serif">Results</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="country-chip-wrapper"
                    >
                        <img src={countries} alt="Designing across 8+ countries" className="country-chip-img" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="cta-wrapper"
                    >
                        <button className="purple-btn">
                            <span className="btn-chat-icon">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 13C24 18.5228 19.5228 23 14 23C12.5 23 9 23 7 25C7 23 7 19.5 7 18.5C4.5 16.5 4 15 4 13C4 7.47715 8.47715 3 14 3C19.5228 3 24 7.47715 24 13Z" fill="white" />
                                    <path d="M10 14C10 14 11.5 16.5 14 16.5C16.5 16.5 18 14 18 14" stroke="#7D40FF" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </span>
                            Book a Call
                        </button>
                    </motion.div>
                </div>

                {/* Left Side Floating Elements */}
                <div className="floating-elements-container left">
                    <motion.img
                        src={mockupLeft}
                        alt="mockup left"
                        className="floating-mockup-left"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: [0, 15, 0]
                        }}
                        transition={{
                            x: { duration: 0.8, delay: 0.4 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                    <motion.img
                        src={floatingCube}
                        alt="cube"
                        className="floating3d cube-3d"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    />
                    <motion.img
                        src={floatingAi}
                        alt="ai"
                        className="floating3d ai-3d"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    />
                </div>

                {/* Right Side Floating Elements */}
                <div className="floating-elements-container">
                    <motion.img
                        src={mockupMain}
                        alt="mockup"
                        className="floating-mockup"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: [0, -15, 0]
                        }}
                        transition={{
                            x: { duration: 0.8, delay: 0.4 },
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                    <motion.img
                        src={floatingRing}
                        alt="ring"
                        className="floating3d ring-3d"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    />
                    <motion.img
                        src={floatingCursor}
                        alt="cursor"
                        className="floating3d cursor-3d"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    />
                </div>
            </main>

            {/* Trusted By Section / Marquee */}
            <section className="trusted-by-section">
                {/* Background Glow Image */}
                <img src={glowImg} alt="glow effect" className="background-glow-img" />

                <div className="marquee-container">
                    <div className="marquee-content marquee-top">
                        {/* Duplicate content to make the scroll seamless */}
                        <div className="marquee-track left">
                            <span className="brand-logo"><span className="symbol">✜</span> Liberate Labs</span>
                            <span className="brand-logo">edvive</span>
                            <span className="brand-logo font-bold">LeKlub</span>
                            <span className="brand-logo italic">Lendiview</span>
                            <span className="brand-logo"><span className="symbol">∮</span> Likely</span>
                            <span className="brand-logo font-script">Mymemorybox</span>
                            {/* Duplicates */}
                            <span className="brand-logo"><span className="symbol">✜</span> Liberate Labs</span>
                            <span className="brand-logo">edvive</span>
                            <span className="brand-logo font-bold">LeKlub</span>
                            <span className="brand-logo italic">Lendiview</span>
                            <span className="brand-logo"><span className="symbol">∮</span> Likely</span>
                            <span className="brand-logo font-script">Mymemorybox</span>
                        </div>
                    </div>

                    <div className="marquee-content marquee-bottom">
                        <div className="marquee-track right">
                            <span className="brand-logo">mpower</span>
                            <span className="brand-logo font-wide">BizPhix</span>
                            <span className="brand-logo"><span className="symbol">🏛</span> Buttercup Venues</span>
                            <span className="brand-logo"><span className="symbol">☁</span> CarboBon</span>
                            <span className="brand-logo font-serif">Carnesia</span>
                            <span className="brand-logo"><span className="symbol">⚡</span> Compai.es</span>
                            <span className="brand-logo"><span className="symbol">◎</span> CPG Syn</span>
                            {/* Duplicates */}
                            <span className="brand-logo">mpower</span>
                            <span className="brand-logo font-wide">BizPhix</span>
                            <span className="brand-logo"><span className="symbol">🏛</span> Buttercup Venues</span>
                            <span className="brand-logo"><span className="symbol">☁</span> CarboBon</span>
                            <span className="brand-logo font-serif">Carnesia</span>
                            <span className="brand-logo"><span className="symbol">⚡</span> Compai.es</span>
                            <span className="brand-logo"><span className="symbol">◎</span> CPG Syn</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proven Success Section */}
            <section className="proven-success-section">
                <div className="success-content">
                    <span className="industry-wins-badge">Industry Wins</span>
                    <h2 className="success-title">
                        Proven Success in <br />
                        <span className="elegant-serif dark">Every Industry</span>
                    </h2>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="project-card"
                                style={{ backgroundColor: project.bgColor }}
                            >
                                <div className="project-info">
                                    <p className="project-category">{project.category}</p>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.desc}</p>

                                    <div className="project-stats">
                                        {project.stats.map((stat, sIndex) => (
                                            <div key={sIndex} className="stat-item">
                                                <p className="stat-label">{stat.label}</p>
                                                <p className="stat-value">{stat.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="ceo-badge" style={{ backgroundColor: project.btnColor }}>
                                        <img src={project.ceo.avatar} alt={project.ceo.name} className="ceo-avatar" />
                                        <div className="ceo-details">
                                            <p className="ceo-name">{project.ceo.name}</p>
                                            <p className="ceo-role">{project.ceo.role}</p>
                                        </div>
                                        <img src={ctaArrow} alt="arrow" className="ceo-arrow-icon" />
                                    </div>
                                </div>

                                <div className="project-visual">
                                    <div className="visual-container">
                                        <img src={project.image} alt="project visual" className="card-mockup-img" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="see-all-container">
                        <button className="see-all-btn">
                            See All Projects
                            <img src={ctaArrow} alt="arrow" className="see-all-arrow-icon" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Client Stories Section */}
            <section className="client-stories-section">
                <div className="client-stories-content">
                    <span className="client-stories-badge">Client Stories</span>
                    <h2 className="client-stories-title">
                        Success Stories <br />
                        That <span className="elegant-serif dark">Inspire Us</span>
                    </h2>
                </div>

                <div
                    className="client-carousel-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <motion.div
                        className="client-carousel-track"
                        animate={{
                            x: `-${currentClientIndex * 25}vw`
                        }}
                        transition={transitionEnabled ? {
                            duration: 1.2,
                            ease: [0.65, 0, 0.35, 1] // Very smooth easeInOut
                        } : { duration: 0 }}
                    >
                        {/* Render original + first 4 duplicates for seamless loop */}
                        {[...clientStories, ...clientStories.slice(0, 4)].map((story, index) => (
                            <div
                                key={index}
                                className="client-card"
                                onMouseEnter={() => {
                                    setHoveredVideoIndex(index);
                                    setIsPaused(true);
                                }}
                                onMouseLeave={() => {
                                    setHoveredVideoIndex(null);
                                    setIsPaused(false);
                                }}
                            >
                                <div className="client-card-inner">
                                    {hoveredVideoIndex === index ? (
                                        <div className="client-video-wrapper">
                                            <iframe
                                                className="client-video-iframe"
                                                src="https://www.youtube.com/embed/oa1qKT-VJvo?autoplay=1&mute=1&controls=0&loop=1&playlist=oa1qKT-VJvo&modestbranding=1&rel=0&iv_load_policy=3"
                                                title="Client Story Video"
                                                frameBorder="0"
                                                allow="autoplay; encrypted-media"
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <img src={story.image} alt={story.name} className="client-image" />
                                    )}
                                    <div className="client-play-btn" style={{ opacity: hoveredVideoIndex === index ? 0 : 1 }}>
                                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                                            <circle cx="30" cy="30" r="30" fill="white" fillOpacity="0.3" />
                                            <path d="M38 30L26 37V23L38 30Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="client-card-overlay" style={{ opacity: hoveredVideoIndex === index ? 0 : 1, transition: 'opacity 0.3s ease' }}>
                                        <div className="client-brand">
                                            <span className="brand-dot">●</span> {story.brand}
                                        </div>
                                        <p className="client-testimonial">"{story.testimonial}"</p>
                                        <div className="client-info">
                                            <h4 className="client-name">{story.name}</h4>
                                            <p className="client-role">{story.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="what-we-do-section">
                <div className="wwd-content">
                    <span className="wwd-badge">What We Do</span>
                    <h2 className="wwd-title">
                        We Design <span className="elegant-serif">Brands</span> That <span className="elegant-serif">Speak</span> To Audiences
                    </h2>
                </div>

                <div className="wwd-services-container">
                    {services.map((service, index) => (
                        <div key={index} className="wwd-service-row">
                            <div className="wwd-text-col">
                                <h3 className="service-title">
                                    {service.title.split(' ')[0]} <span className="elegant-serif">{service.title.split(' ').slice(1).join(' ')}</span>
                                </h3>
                                <div className="service-divider"></div>
                                <p className="service-desc">{service.desc}</p>
                                <a href="#" className="service-link">
                                    See More
                                    <span className="arrow-icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.1152 8.99999C18.1185 9 18.1217 9 18.125 9L18.125 9.00006V11.0001H18.0904C14.1661 11.0163 11.625 13.7984 11.625 16.25H9.625C9.625 14.2566 10.6462 12.3552 12.3133 11.0001H1.875V9.00006H12.3134C10.6462 7.64492 9.625 5.74342 9.625 3.75H11.625C11.625 6.20673 14.1768 8.99539 18.1152 8.99999Z" fill="currentColor" />
                                        </svg>
                                    </span>

                                </a>
                            </div>
                            <div className="wwd-images-col">
                                <div className="service-image-card main-img">
                                    <img src={service.images[0]} alt={service.title} />
                                </div>
                                <div className="service-image-card side-img">
                                    <img src={service.images[1]} alt={service.title} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* Floating Bottom Nav */}
            <div className="nav-blur-bg"></div>
            <nav className="floating-nav">
                <div className="nav-inner">
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#services" className="nav-link">Services</a>

                    <button className="nav-cta">
                        <span className="cta-icon">
                            <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 13C24 18.5228 19.5228 23 14 23C12.5 23 9 23 7 25C7 23 7 19.5 7 18.5C4.5 16.5 4 15 4 13C4 7.47715 8.47715 3 14 3C19.5228 3 24 7.47715 24 13Z" fill="white" />
                                <path d="M10 14C10 14 11.5 16.5 14 16.5C16.5 16.5 18 14 18 14" stroke="#7D40FF" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </span>
                        Start a Project
                        <div className="cta-glow"></div>
                    </button>

                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#more" className="nav-link">More</a>
                </div>
            </nav>
        </div>
    );
}

export default App;

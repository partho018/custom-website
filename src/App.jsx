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
import footerImg from '../img/foo.avif';

// AI-Powered Design Section Images
import aiCenterLogo from '../img/AI-Powered Design/68b61fd952b78aa1c579683c_Frame 2147224744.svg';
import aiImg1 from '../img/AI-Powered Design/68c0f8e5e4eed26b3df33dbf_Frame 427321588 (10) (1).avif';
import aiImg2 from '../img/AI-Powered Design/68c0fd1543795606db43fc7a_b0912675069a2f6948f5db3e54c11327_Frame 2147226580 (1).avif';
import aiImg3 from '../img/AI-Powered Design/68c0fd7c6c69d5e8b586e825_Frame 2147226653 (2) (1).avif';
import aiImg4 from '../img/AI-Powered Design/68c0fdca701e60e4fb26c2fa_Frame 427321588 (11) (1).avif';
import aiImg5 from '../img/AI-Powered Design/68c0fe116b9d3d649da7d5ef_Frame 427321588 (13) (1).avif';
import aiImg6 from '../img/AI-Powered Design/68c0feeeeec420934eb6dc33_f5af64da87fb7c474458934d16bc50fe_Frame 2147226581 (1).avif';
import infinityIcon from '../img/Why Choose Us/67bbf4557f15dfc01f0bbe24_Infinity.avif';
import profileIcon from '../img/Why Choose Us/67bbf455cd6e05ec201e5e82_Profile-p-500.avif';
import dollarIcon from '../img/Why Choose Us/67bbf455bde8347a515f5d6c_Dollar.avif';
import diagramIcon from '../img/Why Choose Us/67bbf455657afc36ca73f802_diagram-p-500.avif';
import starIcon from '../img/Why Choose Us/67bbf455f7d2b364987895ff_star-p-500.avif';
import cornerGradient from '../img/68ba5e44ccb1468ce5b97221_96a931f11af1a2f6b37e251396d130df_6894f274513a65bb1abe220f_Gradient (1)-p-130x130q80.avif';
import fortyPlus from '../img/40+.avif';


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
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [hoveredVideoIndex, setHoveredVideoIndex] = useState(null);
    const [openFaq, setOpenFaq] = useState(null);
    const [selectedBudget, setSelectedBudget] = useState("More than $50K");
    const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: null });
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        whatsapp: '',
        details: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, success: false, error: null });

        // Prepare data for FormSubmit
        const dataToSend = {
            ...formData,
            budget: selectedBudget,
            _subject: `New Project Inquiry from ${formData.fullName}`,
            _template: 'table', // Makes the email look clean
            _captcha: 'false'   // Disables the captcha for smoother UX
        };

        try {
            const response = await fetch("https://formsubmit.co/ajax/Parthosamadder00@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            const result = await response.json();
            if (response.ok) {
                setFormStatus({ submitting: false, success: true, error: null });
                setFormData({ fullName: '', email: '', whatsapp: '', details: '' });
                setSelectedBudget("More than $50K");
            } else {
                setFormStatus({ submitting: false, success: false, error: "Submission failed. Please try again." });
            }
        } catch (err) {
            setFormStatus({ submitting: false, success: false, error: "Something went wrong. Please try again." });
        }
    };


    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            id: 1,
            question: "How do you approach a new design project?",
            answer: "We start with deep discovery and strategy to understand your business goals, target audience, and market landscape. From there, we move to user journey mapping, wireframing, and finally high-fidelity UI design."
        },
        {
            id: 2,
            question: "What industries do you specialize in?",
            answer: "While we have extensive experience in Fintech, Healthcare, and SaaS, our design-first methodology allows us to tackle complex problems in any industry, from Edtech to Cybersecurity."
        },
        {
            id: 3,
            question: "Do you offer post-launch support and optimization?",
            answer: "Absolutely. We view our client relationships as long-term partnerships. We offer flexible maintenance and optimization retainers to ensure your product continues to evolve and perform."
        },
        {
            id: 4,
            question: "How long does a typical design project take?",
            answer: "Most projects range from 4 to 12 weeks, depending on the scope and complexity. We emphasize quality and thoroughness, while maintaining an agile pace to meet your business timelines."
        },
        {
            id: 5,
            question: "Will you help with the actual development of the design?",
            answer: "Yes, we have a dedicated development team specializing in React, Next.js, and Webflow, ensuring your designs are implemented with pixel-perfect precision and high performance."
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

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

            {/* Impact Section */}
            <section className="impact-section">
                <div className="impact-container">
                    <span className="impact-badge">AI-Powered Design</span>
                    <h2 className="impact-title">
                        Smarter Design, <span className="elegant-serif">Supercharged By AI</span>
                    </h2>
                    <p className="impact-subtitle">
                        From wireframes to launch, we blend AI tools with strategy to deliver faster, <br />
                        sharper, and data-led design results.
                    </p>

                    <div className="ai-features-grid">
                        <svg className="connecting-lines-svg" viewBox="0 0 1000 600" fill="none" preserveAspectRatio="none">
                            <defs>
                                <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#b085ff" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#7D40FF" stopOpacity="0.3" />
                                </radialGradient>

                            </defs>



                            {/* ── TOP MIDDLE: card → center ── */}
                            <path id="p-top-mid" d="M500 212 V300" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" />
                            <circle r="2" fill="#a67fff">
                                <animateMotion dur="2.3s" repeatCount="indefinite" begin="0s" rotate="none">
                                    <mpath href="#p-top-mid" />
                                </animateMotion>
                            </circle>

                            {/* ── BOTTOM MIDDLE: card → center ── */}
                            <path id="p-bot-mid" d="M500 388 V300" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" />
                            <circle r="2" fill="#a67fff">
                                <animateMotion dur="3.7s" repeatCount="indefinite" begin="1.8s" rotate="none">
                                    <mpath href="#p-bot-mid" />
                                </animateMotion>
                            </circle>

                            {/* ── LEFT TOP: card → center ── */}
                            <path id="p-left-top" d="M160 212 V260 Q160 275, 185 275 H380 C410 275, 420 300, 440 300 H460" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" fill="none" />
                            <circle r="2" fill="#a67fff">
                                <animateMotion dur="2.9s" repeatCount="indefinite" begin="0.7s" rotate="none">
                                    <mpath href="#p-left-top" />
                                </animateMotion>
                            </circle>

                            {/* ── LEFT BOTTOM: card → center ── */}
                            <path id="p-left-bot" d="M160 388 V340 Q160 325, 185 325 H380 C410 325, 420 300, 440 300 H460" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" fill="none" />
                            <circle r="2" fill="#a67fff">
                                <animateMotion dur="4.1s" repeatCount="indefinite" begin="2.9s" rotate="none">
                                    <mpath href="#p-left-bot" />
                                </animateMotion>
                            </circle>

                            {/* ── RIGHT TOP: card → center ── */}
                            <path id="p-right-top" d="M840 212 V260 Q840 275, 815 275 H620 C590 275, 580 300, 560 300 H540" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" fill="none" />
                            <circle r="2" fill="#a67fff">
                                <animateMotion dur="3.3s" repeatCount="indefinite" begin="1.4s" rotate="none">
                                    <mpath href="#p-right-top" />
                                </animateMotion>
                            </circle>

                            {/* ── RIGHT BOTTOM: card → center ── */}
                            <path id="p-right-bot" d="M840 388 V340 Q840 325, 815 325 H620 C590 325, 580 300, 560 300 H540" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" fill="none" />
                            <circle r="2" fill="#a67fff">
                                <animateMotion dur="2.6s" repeatCount="indefinite" begin="3.5s" rotate="none">
                                    <mpath href="#p-right-bot" />
                                </animateMotion>
                            </circle>
                        </svg>
                        <div className="ai-center-logo-wrapper">
                            <div className="center-glow"></div>
                            <img src={aiCenterLogo} alt="AI Logo" className="ai-center-logo" />
                        </div>

                        <div className="ai-card top-left">
                            <div className="ai-card-content">
                                <h3>UX Copy <span className="elegant-serif">That Clicks</span></h3>
                                <p>We use AI to create effective copies like CTAs and microcopy that speaks.</p>
                            </div>
                            <div className="ai-card-visual">
                                <img src={aiImg1} alt="UX Copy AI" />
                            </div>
                        </div>

                        <div className="ai-card top-center">
                            <div className="ai-card-content">
                                <h3>Visuals, <span className="elegant-serif">Instantly On Point</span></h3>
                                <p>We generate custom visuals using AI for faster concept directions, brand-ready.</p>
                            </div>
                            <div className="ai-card-visual">
                                <img src={aiImg2} alt="Visuals AI" />
                            </div>
                        </div>

                        <div className="ai-card top-right">
                            <div className="ai-card-content">
                                <h3>Data-Led <span className="elegant-serif">Design Decisions</span></h3>
                                <p>We predict user behavior before launch with AI-powered heatmaps that help us.</p>
                            </div>
                            <div className="ai-card-visual">
                                <img src={aiImg3} alt="Data AI" />
                            </div>
                        </div>

                        <div className="ai-card bottom-left">
                            <div className="ai-card-content">
                                <h3>Smarter & <span className="elegant-serif">Faster Wireframes</span></h3>
                                <p>We rapidly turn ideas into functional wireframes using AI tools, with less.</p>
                            </div>
                            <div className="ai-card-visual">
                                <img src={aiImg4} alt="Wireframes AI" />
                            </div>
                        </div>

                        <div className="ai-card bottom-center">
                            <div className="ai-card-content">
                                <h3>Launch Quicker, <span className="elegant-serif">Spend Less</span></h3>
                                <p>AI reduces revisions and guesswork and makes your website ready to launch.</p>
                            </div>
                            <div className="ai-card-visual">
                                <img src={aiImg5} alt="Launch AI" />
                            </div>
                        </div>

                        <div className="ai-card bottom-right">
                            <div className="ai-card-content">
                                <h3>No Blank <span className="elegant-serif">Canvas Struggles</span></h3>
                                <p>AI generates editable mockups from prompts so we can skip the slow start.</p>
                            </div>
                            <div className="ai-card-visual">
                                <img src={aiImg6} alt="Mockups AI" />
                            </div>
                        </div>
                    </div>
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

            {/* Why Choose Us Section */}
            <section className="why-choose-us-section">
                <div className="why-choose-us-container">
                    <span className="why-choose-us-badge">Why Choose Us</span>
                    <h2 className="why-choose-us-title">
                        We <span className="elegant-serif dark">Design</span> for the <span className="elegant-serif dark">Future</span> to <br />
                        Drive Today's <span className="elegant-serif dark">Success</span>
                    </h2>

                    <div className="why-choose-us-grid">
                        <div className="wcu-card">
                            <div className="wcu-icon-wrapper">
                                <img src={infinityIcon} alt="Unlimited Revisions" />
                            </div>
                            <h3 className="wcu-card-title">Unlimited Revisions</h3>
                            <p className="wcu-card-desc">
                                We're committed to your satisfaction with unlimited revisions at every step.
                                Our mission is to make your vision come to life exactly as you imagine.
                            </p>
                        </div>

                        <div className="wcu-card">
                            <div className="wcu-icon-wrapper">
                                <img src={profileIcon} alt="Lifetime Support" />
                            </div>
                            <h3 className="wcu-card-title">Lifetime Support</h3>
                            <p className="wcu-card-desc">
                                With our lifetime support, you're never alone. We'll be there for you at every
                                stage with necessary guidance and assistance whenever you need it.
                            </p>
                        </div>

                        <div className="wcu-card">
                            <div className="wcu-icon-wrapper">
                                <img src={dollarIcon} alt="Personalised Plans" />
                            </div>
                            <h3 className="wcu-card-title">Personalised Plans</h3>
                            <p className="wcu-card-desc">
                                Get top-quality service without breaking the bank. Our rates are
                                designed to fit your budget so that you can get the best value for your investment.
                            </p>
                        </div>

                        <div className="wcu-card">
                            <div className="wcu-icon-wrapper">
                                <img src={diagramIcon} alt="Custom Design Solutions" />
                            </div>
                            <h3 className="wcu-card-title">Custom Design Solutions</h3>
                            <p className="wcu-card-desc">
                                Our easy payment options are completely flexible. So, you can invest
                                in your success while staying within your budget.
                            </p>
                        </div>

                        <div className="wcu-card">
                            <div className="wcu-icon-wrapper">
                                <img src={starIcon} alt="24/7 Customer Support" />
                            </div>
                            <h3 className="wcu-card-title">24/7 Customer Support</h3>
                            <p className="wcu-card-desc">
                                Benefit from the expertise of our carefully chosen resources that are
                                designed to make your journey smooth and effortless with outstanding results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Plans Section */}
            <section className="pricing-plans-section">
                <div className="pricing-container">
                    <span className="pricing-badge">Pricing plans</span>
                    <h2 className="pricing-title">
                        <span className="elegant-serif">Unbeatable</span> Value <br />
                        Unmatched <span className="elegant-serif">Quality</span>
                    </h2>

                    <div className="pricing-grid">
                        {/* Card 1 */}
                        <div className="pricing-card">
                            <div className="price-top">
                                <h3 className="plan-price">$1,800</h3>
                                <p className="plan-subtitle">Ideal for Startup Owners, MVP Builders</p>
                                <h4 className="plan-name">Website Design</h4>
                            </div>
                            <ul className="plan-features">
                                <li>
                                    <span className="check-icon">✓</span> Design Style Guide
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Responsive across all devices
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Unlimited Revisions
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Developer Handoff
                                </li>
                            </ul>
                            <button className="pricing-cta">
                                Explore More <span className="cta-arrow-right">→</span>
                            </button>
                        </div>

                        {/* Card 2 - Highlighted */}
                        <div className="pricing-card highlighted">
                            <div className="price-top">
                                <h3 className="plan-price">$3,500</h3>
                                <p className="plan-subtitle">For SaaS & fast MVP launches.</p>
                                <h4 className="plan-name">Web/Mobile App Design</h4>
                            </div>
                            <ul className="plan-features">
                                <li>
                                    <span className="check-icon">✓</span> UX Research
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Design System with token
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Unlimited Revisions
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Developer handoff
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Transparent communication
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Responsive across all devices
                                </li>
                            </ul>
                            <button className="pricing-cta pink">
                                Explore More <span className="cta-arrow-right">→</span>
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="pricing-card">
                            <div className="price-top">
                                <h3 className="plan-price">$3,800+</h3>
                                <p className="plan-subtitle">Ideal for Startup or MVP</p>
                                <h4 className="plan-name">Monthly Subscription</h4>
                            </div>
                            <ul className="plan-features">
                                <li>
                                    <span className="check-icon">✓</span> Monthly dedicated designers
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Adhoc design support
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Right designer for right product
                                </li>
                                <li>
                                    <span className="check-icon">✓</span> Transparent communication
                                </li>
                            </ul>
                            <button className="pricing-cta">
                                Explore More <span className="cta-arrow-right">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section className="openings-section">
                <div className="openings-container">
                    <span className="openings-badge">Openings</span>
                    <h2 className="openings-title">
                        Be a <span className="elegant-serif">Monk!</span> Like us
                    </h2>

                    <div className="job-cards-container">
                        {/* Job Card 1 */}
                        <div className="job-card">
                            <div className="job-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8Z" />
                                    <path d="M22 12h-4" />
                                    <path d="M18 16h-4" />
                                    <path d="M18 8h-4" />
                                </svg>
                            </div>
                            <div className="job-content">
                                <h3 className="job-title">Mobile App UI Designer</h3>
                                <p className="job-desc">
                                    We're looking for a talented UI Designer (Mobile App) to join our R&D team to drive standout projects and shape aesthetic solutions at Design Monks. If you love to design nice, attractive UI, visuals, mobile app interfaces - we'd love to hear from...
                                </p>
                                <div className="job-tags">
                                    <span className="job-tag">UPTO BDT 40k</span>
                                    <span className="job-tag">1 Vacancy</span>
                                    <span className="job-tag">Full Time</span>
                                    <span className="job-tag">Remote</span>
                                </div>
                            </div>
                        </div>

                        {/* Job Card 2 */}
                        <div className="job-card">
                            <div className="job-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8Z" />
                                    <path d="M22 12h-4" />
                                    <path d="M18 16h-4" />
                                    <path d="M18 8h-4" />
                                </svg>
                            </div>
                            <div className="job-content">
                                <h3 className="job-title">Senior Web Designer</h3>
                                <p className="job-desc">
                                    We're looking for a Senior Web Designer to join Design Monks and create high-quality landing pages and modern websites. If you love designing clean, beautiful, and conversion-focused web experiences and enjoy turning ideas into responsive...
                                </p>
                                <div className="job-tags">
                                    <span className="job-tag">UPTO BDT 60K</span>
                                    <span className="job-tag">1 Vacancy</span>
                                    <span className="job-tag">Full Time</span>
                                    <span className="job-tag">Remote</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Referral Section */}
            <section className="referral-section">
                <div className="referral-container">
                    <span className="referral-badge">Referral From People</span>
                    <h2 className="referral-title">
                        Trusted by People <br />
                        <span className="elegant-serif">Chosen By Brands</span>
                    </h2>

                </div>
            </section>
            {/* Scrolling Referrals Section */}
            <section className="scrolling-referrals-section">
                <div className="scrolling-container">
                    {/* Row 1: Right to Left */}
                    <div className="marquee-wrapper">
                        <div className="marquee-track track-left">
                            {[client1, client2, client3, client4, client1, client2, client3, client4].map((img, i) => (
                                <div className="scrolling-card" key={`r1-${i}`}>
                                    <p className="scrolling-text">
                                        "Working with Design Monks was a great experience. They were responsible, communicative, and delivered excellent design work. Their team really understood our vision and translated it into a product that exceeded our expectations in every way possible."
                                    </p>
                                    <div className="scrolling-author">
                                        <img src={img} alt="Client" className="author-img" />
                                        <div className="author-info">
                                            <span className="author-name">{i % 4 === 0 ? "Sofia Gouveia" : i % 4 === 1 ? "Austin" : i % 4 === 2 ? "Moshiur Rahman" : "Jahnobi"}</span>
                                            <span className="author-role">{i % 4 === 0 ? "Marketing Manager @ Voc AI" : "CEO @ TechFlow"}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Left to Right */}
                    <div className="marquee-wrapper">
                        <div className="marquee-track track-right">
                            {[client5, client6, client7, client8, client5, client6, client7, client8].map((img, i) => (
                                <div className="scrolling-card" key={`r2-${i}`}>
                                    <p className="scrolling-text">
                                        "Design Monks is a professional, reliable partner for end-to-end product builds. From clean, modern designs to seamless systems, they handled everything with total professionalism. I couldn't be happier with our collaboration on this complex project."
                                    </p>
                                    <div className="scrolling-author">
                                        <img src={img} alt="Client" className="author-img" />
                                        <div className="author-info">
                                            <span className="author-name">{i % 4 === 0 ? "Dilicio" : i % 4 === 1 ? "Armen Avagyan" : i % 4 === 2 ? "Anika" : "Tanmee"}</span>
                                            <span className="author-role">{i % 4 === 1 ? "CEO & Co Founder @ Fraus" : "Founder @ Coinpulse"}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 3: Right to Left */}
                    <div className="marquee-wrapper">
                        <div className="marquee-track track-left">
                            {[client3, client5, client1, client7, client3, client5, client1, client7].map((img, i) => (
                                <div className="scrolling-card" key={`r3-${i}`}>
                                    <p className="scrolling-text">
                                        "They translated our business goals into clean, aesthetic designs with total transparency. The team is patient, committed, and a highly recommended design partner for any company looking to elevate their digital presence significantly."
                                    </p>
                                    <div className="scrolling-author">
                                        <img src={img} alt="Client" className="author-img" />
                                        <div className="author-info">
                                            <span className="author-name">{i % 4 === 0 ? "Moshiur" : i % 4 === 1 ? "Dilicio" : i % 4 === 2 ? "Sofia" : "Anika"}</span>
                                            <span className="author-role">Product Lead @ Innovate</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="faq-container">
                    <span className="faq-badge">Frequently Asked Questions</span>
                    <h2 className="faq-title">
                        Your Questions <br />
                        <span className="elegant-serif">Answered!</span>
                    </h2>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div 
                                key={faq.id} 
                                className={`faq-item ${openFaq === index ? 'active' : ''}`}
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <div className="faq-icon-circle">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 9L12 15L18 9" stroke="#7D40FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation/Contact Section */}
            <section className="consultation-section">
                <div className="consultation-container">
                    <img src={cornerGradient} alt="Decorative Gradient" className="consultation-corner-img" />
                    <div className="consultation-grid">
                        {/* Left Side: Text and Profile */}
                        <div className="consultation-info">
                            <div className="consultation-badge">
                                <span className="dot"></span>
                                Claim a $799 Consultation, on Us!
                            </div>
                            <h2 className="consultation-title">
                                Enhance Your Brand <br />
                                <span className="elegant-serif">Potential At No Cost!</span>
                            </h2>
                            <ul className="consultation-features">
                                <li>
                                    <span className="check-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Expect a response from us within 24 hours
                                </li>
                                <li>
                                    <span className="check-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    We're happy to sign an NDA upon request.
                                </li>
                                <li>
                                    <span className="check-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    Get access to a team of dedicated product specialists.
                                </li>
                            </ul>

                            <div className="consultant-card">
                                <div className="consultant-photo-wrapper">
                                    <img src={client2} alt="Abdullah Al Noman" />
                                </div>
                                    <div className="consultant-details">
                                        <h4 className="consultant-name">Abdullah Al Noman</h4>
                                        <p className="consultant-role">COO & Co-founder</p>
                                        <div className="consultant-phone">
                                            <span className="phone-icon">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.39.015 12.03c0 2.123.551 4.197 1.595 6.06L0 24l6.105-1.602a11.834 11.834 0 005.937 1.597h.005c6.637 0 12.032-5.391 12.035-12.031a11.764 11.764 0 00-3.517-8.403z" fill="white"/>
                                                </svg>
                                            </span>
                                            +1 (716) 503-6335
                                        </div>
                                        <a href="#" className="book-call-link">Book a Call Directly</a>
                                    </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="consultation-form-wrapper">
                            <form className="consultation-form" onSubmit={handleFormSubmit}>
                                {formStatus.success ? (
                                    <div className="form-success-message">
                                        <h3 style={{ color: '#fff', marginBottom: '10px' }}>Thank you! 🎉</h3>
                                        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Your message has been sent successfully. We will get back to you within 24 hours.</p>
                                        <button 
                                            type="button" 
                                            className="budget-btn active" 
                                            style={{ marginTop: '20px' }}
                                            onClick={() => setFormStatus({ submitting: false, success: false, error: null })}
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input 
                                                type="text" 
                                                name="fullName"
                                                placeholder="John Doe" 
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required 
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>Your Email</label>
                                                <input 
                                                    type="email" 
                                                    name="email"
                                                    placeholder="yourmail@gmail.com" 
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required 
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>Whatsapp Number</label>
                                                <input 
                                                    type="text" 
                                                    name="whatsapp"
                                                    placeholder="1123 1234567" 
                                                    value={formData.whatsapp}
                                                    onChange={handleInputChange}
                                                    required 
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Project Budget</label>
                                            <div className="budget-options">
                                                {["Less than $5K", "$5K - $10K", "$10K - $20K", "$20K - $50K", "More than $50K"].map((budget) => (
                                                    <button 
                                                        key={budget} 
                                                        type="button" 
                                                        className={`budget-btn ${budget === selectedBudget ? 'active' : ''}`}
                                                        onClick={() => setSelectedBudget(budget)}
                                                    >
                                                        {budget}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Project Details</label>
                                            <textarea 
                                                name="details"
                                                placeholder="I want to redesign my website.."
                                                value={formData.details}
                                                onChange={handleInputChange}
                                                required
                                            ></textarea>
                                        </div>
                                        {formStatus.error && <p style={{ color: '#ff4d4d', fontSize: '14px', marginBottom: '10px' }}>{formStatus.error}</p>}
                                        <button type="submit" className="connect-submit-btn" disabled={formStatus.submitting}>
                                            <span>{formStatus.submitting ? 'Sending...' : "Let's Connect"}</span>
                                            {!formStatus.submitting && (
                                                <span className="rocket-icon">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                        <polyline points="12 5 19 12 12 19"></polyline>
                                                    </svg>
                                                </span>
                                            )}
                                        </button>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Banner Section */}
            <section className="trust-banner-section">
                <div className="trust-banner-container">
                    <div className="trust-pill">
                        <div className="trust-pill-avatars">
                            <img src={fortyPlus} alt="40+ Trusted" />
                        </div>
                        <div className="trust-marquee-wrapper">
                            <div className="trust-marquee-content">
                                <div className="trust-pill-text">
                                    Secure Your <span className="elegant-serif">Brand's Future</span> Today. 
                                    Why Risk It With The <span className="elegant-serif">Wrong Partner?</span> 
                                    Get 100% Value And Guarantee —&nbsp;
                                </div>
                                <div className="trust-pill-text">
                                    Secure Your <span className="elegant-serif">Brand's Future</span> Today. 
                                    Why Risk It With The <span className="elegant-serif">Wrong Partner?</span> 
                                    Get 100% Value And Guarantee —&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pre-Footer Newsletter Section */}
            <section className="pre-footer-section">
                <div className="pre-footer-container">
                    <p className="pre-footer-text">
                        Say goodbye to outdated enterprise software and welcome the smoother one. 
                        We lead you from design to product innovation to shape your path from idea to success
                    </p>

                    <div className="social-links-row">
                        <a href="#" className="social-box dribbble">
                            <span className="tooltip">Dribbble</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>
                        </a>
                        <a href="#" className="social-box behance">
                            <span className="tooltip">Behance</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 7.15c0-1.8-1.2-1.93-2.1-1.93h-1.8v1.8h1.8v.02c.74 0 .74.79.74.83v2.53H14.12V3.74h2.52v-.02c0-.74.79-.74.83-.74h3.6V.34h-3.6c-1.8 0-3.34 1.54-3.34 3.34V10.4h-3.23V7.17c0-1.8-1.2-1.93-2.1-1.93H7.01v1.8h1.79v.02c.74 0 .74.79.74.83v2.53H2.88V7.17c0-1.8-1.2-1.93-2.1-1.93H0v16.92h22V7.15zM2.88 20.61V12.1h6.66v8.51H2.88zm11.24 0V12.1h6.66v8.51h-6.66z"></path></svg>
                        </a>
                        <a href="#" className="social-box instagram">
                            <span className="tooltip">Instagram</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.486.275 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                        </a>
                        <a href="#" className="social-box linkedin">
                            <span className="tooltip">LinkedIn</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="#" className="social-box facebook">
                            <span className="tooltip">Facebook</span>
                            <svg viewBox="0 0 320 512" width="16" height="20" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
                        </a>
                        <a href="#" className="social-box twitter">
                            <span className="tooltip">Twitter</span>
                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 48 48"><path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" /></svg>
                        </a>
                        <a href="#" className="social-box telegram">
                            <span className="tooltip">Telegram</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                        </a>
                    </div>

                    <div className="subscribe-form-container">
                        <div className="subscribe-input-wrapper">
                            <span className="mail-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </span>
                            <input type="email" placeholder="Your email here" />
                        </div>
                        <button className="subscribe-submit-btn">
                            Subscribe
                            <span className="arrow-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </span>
                        </button>
                    </div>
                </div>
            </section>


            <footer className="main-footer">
                <div className="footer-container">
                    <div className="footer-col">
                        <h3>Important Links</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Industry</a></li>
                            <li><a href="#">Blogs</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">UI/UX Design</a></li>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Logo & Branding</a></li>
                            <li><a href="#">Webflow Design</a></li>
                            <li><a href="#">Framer Design</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Specialized Industry</h3>
                        <ul>
                            <li><a href="#">Fintech Industry</a></li>
                            <li><a href="#">Healthcare & Fitness Industry</a></li>
                            <li><a href="#">Edtech Industry</a></li>
                            <li><a href="#">Cybersecurity Industry</a></li>
                            <li>
                                <a href="#" className="footer-download-btn">
                                    Company Deck
                                    <span className="download-icon">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Compare</h3>
                        <ul>
                            <li><a href="#">Vs Agencies</a></li>
                            <li><a href="#">Vs Freelancers</a></li>
                            <li><a href="#">Vs Inhouse</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <div className="footer-bottom-left">
                            <a href="#">Terms & Conditions</a>
                        </div>
                        <div className="footer-bottom-center">
                            <p>© 2026, Design Monks, All Rights Reserved.</p>
                        </div>
                        <div className="footer-bottom-right">
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                <div className="footer-extra-image">
                    <img src={footerImg} alt="Decorative Footer" />
                </div>
            </footer>


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
                    </button>


                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#more" className="nav-link">More</a>
                </div>
            </nav>
            {/* Back to Top Button */}
            {
                showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="back-to-top-btn"
                    >
                        <span className="btt-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" fill="white" />
                                <path d="M12 16V8M12 8L8 12M12 8L16 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        Back to Top
                    </motion.button>
                )
            }
        </div>
    );
}

export default App;

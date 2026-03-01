import React from 'react';
import './App.css';

// Component Imports
import Hero from './components/Hero';
import BrandMarquee from './components/BrandMarquee';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import AIImpact from './components/AIImpact';
import WhyUs from './components/WhyUs';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Openings from './components/Openings';
import ScrollingReferrals from './components/ScrollingReferrals';
import FAQ from './components/FAQ';
import Consultation from './components/Consultation';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import BackToTop from './components/BackToTop';

// Asset Imports
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

// Why Choose Us Icons
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
            category: "AI Advertising",
            title: "Smart AI Ads That Scale Your Business Fast",
            desc: "We build AI-powered ads for startups & businesses — better targeting, less budget wasted, more leads delivered.",
            stats: [{ label: "Strategy", value: "Free" }, { label: "First Draft", value: "In 24 Hrs" }],
            ceo: { name: "", role: "", avatar: null },
            getServiceText: "Get This Service",
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
            btnColor: "#78E9F6",
            image: cardImg4
        },
        {
            category: "SaaS",
            title: "Enterprise Workflow",
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
            testimonial: "Garuda completely transformed our brand identity. Their vision was exactly what we needed.",
            image: client1,
            brand: "TechFlow",
            cardBg: "#A8C69F"
        },
        {
            name: "Austin",
            role: "Founder @ Spark",
            testimonial: "The attention to detail and creative direction was phenomenal. Highly recommended.",
            image: client2,
            brand: "Spark",
            cardBg: "#E2A36F"
        },
        {
            name: "Moshiur Rahman",
            role: "CEO @ PrimeStream",
            testimonial: "Working with them was a seamless experience. They really understood our user base.",
            image: client3,
            brand: "PrimeStream",
            cardBg: "#F2DC83"
        },
        {
            name: "Jahnobi",
            role: "Product Lead @ Nexa",
            testimonial: "The team delivered above and beyond our expectations. A true design powerhouse.",
            image: client4,
            brand: "Nexa",
            cardBg: "#D0EDF7"
        },
        {
            name: "Dilicio",
            role: "COO @ Foodies",
            testimonial: "Our conversion rates spiked by 40% after the redesign. Simply amazing work.",
            image: client5,
            brand: "Foodies",
            cardBg: "#A8C69F"
        },
        {
            name: "Armen Avagyan",
            role: "CEO @ Fraus",
            testimonial: "Garuda brought a perspective we hadn't considered. It was a game changer.",
            image: client6,
            brand: "Fraus",
            cardBg: "#E2A36F"
        },
        {
            name: "Anika",
            role: "Design Lead @ Aura",
            testimonial: "The level of professionalism and craft they bring to the table is unmatched.",
            image: client7,
            brand: "Aura",
            cardBg: "#F2DC83"
        },
        {
            name: "Tanmee",
            role: "CTO @ CloudSync",
            testimonial: "Fast, reliable, and exceptionally talented. Best agency we've ever worked with.",
            image: client8,
            brand: "CloudSync",
            cardBg: "#D0EDF7"
        }
    ];

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

    return (
        <div className="app-container">
            <header className="site-header">
                <h2 className="site-logo-text">Garuda</h2>
            </header>

            <Hero
                logo={logo}
                star={star}
                icons={icons}
                countries={countries}
                mockupLeft={mockupLeft}
                floatingCube={floatingCube}
                floatingAi={floatingAi}
                mockupMain={mockupMain}
                floatingRing={floatingRing}
                floatingCursor={floatingCursor}
            />

            <BrandMarquee glowImg={glowImg} />

            <Projects projects={projects} ctaArrow={ctaArrow} />

            <Testimonials clientStories={clientStories} />

            <AIImpact
                aiCenterLogo={aiCenterLogo}
                aiImg1={aiImg1}
                aiImg2={aiImg2}
                aiImg3={aiImg3}
                aiImg4={aiImg4}
                aiImg5={aiImg5}
                aiImg6={aiImg6}
            />

            <WhyUs />

            <WhatWeDo services={services} />

            <WhyChooseUs
                infinityIcon={infinityIcon}
                profileIcon={profileIcon}
                dollarIcon={dollarIcon}
                diagramIcon={diagramIcon}
                starIcon={starIcon}
            />

            <Pricing />

            <Openings />

            <ScrollingReferrals
                client1={client1} client2={client2} client3={client3} client4={client4}
                client5={client5} client6={client6} client7={client7} client8={client8}
            />

            <FAQ faqs={faqs} />

            <Consultation cornerGradient={cornerGradient} client2={client2} />

            <PreFooter fortyPlus={fortyPlus} />

            <Footer footerImg={footerImg} />

            <Navigation />

            <BackToTop />
        </div>
    );
}

export default App;

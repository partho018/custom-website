import React from 'react';

const AIImpact = ({ aiCenterLogo, aiImg1, aiImg2, aiImg3, aiImg4, aiImg5, aiImg6 }) => {
    return (
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

                        {/* TOP MIDDLE path */}
                        <path id="p-top-mid" d="M500 212 V300" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" />
                        <circle r="2" fill="#a67fff">
                            <animateMotion dur="2.3s" repeatCount="indefinite" begin="0s" rotate="none">
                                <mpath href="#p-top-mid" />
                            </animateMotion>
                        </circle>

                        {/* BOTTOM MIDDLE path */}
                        <path id="p-bot-mid" d="M500 388 V300" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" />
                        <circle r="2" fill="#a67fff">
                            <animateMotion dur="3.7s" repeatCount="indefinite" begin="1.8s" rotate="none">
                                <mpath href="#p-bot-mid" />
                            </animateMotion>
                        </circle>

                        {/* LEFT TOP path */}
                        <path id="p-left-top" d="M160 212 V260 Q160 275, 185 275 H380 C410 275, 420 300, 440 300 H460" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" fill="none" />
                        <circle r="2" fill="#a67fff">
                            <animateMotion dur="2.9s" repeatCount="indefinite" begin="0.7s" rotate="none">
                                <mpath href="#p-left-top" />
                            </animateMotion>
                        </circle>

                        {/* LEFT BOTTOM path */}
                        <path id="p-left-bot" d="M160 388 V340 Q160 325, 185 325 H380 C410 325, 420 300, 440 300 H460" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" fill="none" />
                        <circle r="2" fill="#a67fff">
                            <animateMotion dur="4.1s" repeatCount="indefinite" begin="2.9s" rotate="none">
                                <mpath href="#p-left-bot" />
                            </animateMotion>
                        </circle>

                        {/* RIGHT TOP path */}
                        <path id="p-right-top" d="M840 212 V260 Q840 275, 815 275 H620 C590 275, 580 300, 560 300 H540" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" fill="none" />
                        <circle r="2" fill="#a67fff">
                            <animateMotion dur="3.3s" repeatCount="indefinite" begin="1.4s" rotate="none">
                                <mpath href="#p-right-top" />
                            </animateMotion>
                        </circle>

                        {/* RIGHT BOTTOM path */}
                        <path id="p-right-bot" d="M840 388 V340 Q840 325, 815 325 H620 C590 325, 580 300, 560 300 H540" stroke="rgba(125,64,255,0.4)" strokeWidth="1.5" fill="none" />
                        <circle r="2" fill="#a67fff">
                            <animateMotion dur="2.6s" repeatCount="indefinite" begin="3.5s" rotate="none">
                                <mpath href="#p-right-bot" />
                            </animateMotion>
                        </circle>
                    </svg>
                    <div className="ai-center-logo-wrapper">
                        <div className="center-glow"></div>
                        <img src={aiCenterLogo} alt="AI Logo" className="ai-center-logo" loading="lazy" />
                    </div>

                    <div className="ai-card top-left">
                        <div className="ai-card-content">
                            <h3>UX Copy <span className="elegant-serif">That Clicks</span></h3>
                            <p>We use AI to create effective copies like CTAs and microcopy that speaks.</p>
                        </div>
                        <div className="ai-card-visual">
                            <img src={aiImg1} alt="UX Copy AI" loading="lazy" decoding="async" />
                        </div>
                    </div>

                    <div className="ai-card top-center">
                        <div className="ai-card-content">
                            <h3>Visuals, <span className="elegant-serif">Instantly On Point</span></h3>
                            <p>We generate custom visuals using AI for faster concept directions, brand-ready.</p>
                        </div>
                        <div className="ai-card-visual">
                            <img src={aiImg2} alt="Visuals AI" loading="lazy" decoding="async" />
                        </div>
                    </div>

                    <div className="ai-card top-right">
                        <div className="ai-card-content">
                            <h3>Data-Led <span className="elegant-serif">Design Decisions</span></h3>
                            <p>We predict user behavior before launch with AI-powered heatmaps that help us.</p>
                        </div>
                        <div className="ai-card-visual">
                            <img src={aiImg3} alt="Data AI" loading="lazy" decoding="async" />
                        </div>
                    </div>

                    <div className="ai-card bottom-left">
                        <div className="ai-card-content">
                            <h3>Smarter & <span className="elegant-serif">Faster Wireframes</span></h3>
                            <p>We rapidly turn ideas into functional wireframes using AI tools, with less.</p>
                        </div>
                        <div className="ai-card-visual">
                            <img src={aiImg4} alt="Wireframes AI" loading="lazy" decoding="async" />
                        </div>
                    </div>

                    <div className="ai-card bottom-center">
                        <div className="ai-card-content">
                            <h3>Launch Quicker, <span className="elegant-serif">Spend Less</span></h3>
                            <p>AI reduces revisions and guesswork and makes your website ready to launch.</p>
                        </div>
                        <div className="ai-card-visual">
                            <img src={aiImg5} alt="Launch AI" loading="lazy" decoding="async" />
                        </div>
                    </div>

                    <div className="ai-card bottom-right">
                        <div className="ai-card-content">
                            <h3>No Blank <span className="elegant-serif">Canvas Struggles</span></h3>
                            <p>AI generates editable mockups from prompts so we can skip the slow start.</p>
                        </div>
                        <div className="ai-card-visual">
                            <img src={aiImg6} alt="Mockups AI" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(AIImpact);

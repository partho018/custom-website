import React from 'react';

const Openings = () => {
    return (
        <section className="openings-section">
            <div className="openings-container">
                <span className="openings-badge">Openings</span>
                <h2 className="openings-title">
                    Be a <span className="elegant-serif">Monk!</span> Like us
                </h2>

                <div className="job-cards-container">
                    <div className="job-card">
                        <div className="job-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8Z" />
                                <path d="M22 12h-4" /><path d="M18 16h-4" /><path d="M18 8h-4" />
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

                    <div className="job-card">
                        <div className="job-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8Z" />
                                <path d="M22 12h-4" /><path d="M18 16h-4" /><path d="M18 8h-4" />
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
    );
};

export default React.memo(Openings);

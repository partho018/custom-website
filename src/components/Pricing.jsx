import React from 'react';

const Pricing = () => {
    return (
        <section className="pricing-plans-section">
            <div className="pricing-container">
                <span className="pricing-badge">Pricing plans</span>
                <h2 className="pricing-title">
                    <span className="elegant-serif">Unbeatable</span> Value <br />
                    Unmatched <span className="elegant-serif">Quality</span>
                </h2>

                <div className="pricing-grid">
                    <div className="pricing-card">
                        <div className="price-top">
                            <h3 className="plan-price">$1,800</h3>
                            <p className="plan-subtitle">Ideal for Startup Owners, MVP Builders</p>
                            <h4 className="plan-name">Website Design</h4>
                        </div>
                        <ul className="plan-features">
                            <li><span className="check-icon">✓</span> Design Style Guide</li>
                            <li><span className="check-icon">✓</span> Responsive across all devices</li>
                            <li><span className="check-icon">✓</span> Unlimited Revisions</li>
                            <li><span className="check-icon">✓</span> Developer Handoff</li>
                        </ul>
                        <button className="pricing-cta">
                            Explore More <span className="cta-arrow-right">→</span>
                        </button>
                    </div>

                    <div className="pricing-card highlighted">
                        <div className="price-top">
                            <h3 className="plan-price">$3,500</h3>
                            <p className="plan-subtitle">For SaaS & fast MVP launches.</p>
                            <h4 className="plan-name">Web/Mobile App Design</h4>
                        </div>
                        <ul className="plan-features">
                            <li><span className="check-icon">✓</span> UX Research</li>
                            <li><span className="check-icon">✓</span> Design System with token</li>
                            <li><span className="check-icon">✓</span> Unlimited Revisions</li>
                            <li><span className="check-icon">✓</span> Developer handoff</li>
                            <li><span className="check-icon">✓</span> Transparent communication</li>
                            <li><span className="check-icon">✓</span> Responsive across all devices</li>
                        </ul>
                        <button className="pricing-cta pink">
                            Explore More <span className="cta-arrow-right">→</span>
                        </button>
                    </div>

                    <div className="pricing-card">
                        <div className="price-top">
                            <h3 className="plan-price">$3,800+</h3>
                            <p className="plan-subtitle">Ideal for Startup or MVP</p>
                            <h4 className="plan-name">Monthly Subscription</h4>
                        </div>
                        <ul className="plan-features">
                            <li><span className="check-icon">✓</span> Monthly dedicated designers</li>
                            <li><span className="check-icon">✓</span> Adhoc design support</li>
                            <li><span className="check-icon">✓</span> Right designer for right product</li>
                            <li><span className="check-icon">✓</span> Transparent communication</li>
                        </ul>
                        <button className="pricing-cta">
                            Explore More <span className="cta-arrow-right">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Pricing);

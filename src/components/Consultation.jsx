import React, { useState } from 'react';

const Consultation = ({ cornerGradient, client2 }) => {
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

        const dataToSend = {
            ...formData,
            budget: selectedBudget,
            _subject: `New Project Inquiry from ${formData.fullName}`,
            _template: 'table',
            _captcha: 'false'
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

    return (
        <section className="consultation-section">
            <div className="consultation-container">
                <img src={cornerGradient} alt="Decorative Gradient" className="consultation-corner-img" loading="lazy" decoding="async" />
                <div className="consultation-grid">
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
                                <img src={client2} alt="Abdullah Al Noman" loading="lazy" decoding="async" />
                            </div>
                            <div className="consultant-details">
                                <h4 className="consultant-name">Abdullah Al Noman</h4>
                                <p className="consultant-role">COO & Co-founder</p>
                                <div className="consultant-phone">
                                    <span className="phone-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.39.015 12.03c0 2.123.551 4.197 1.595 6.06L0 24l6.105-1.602a11.834 11.834 0 005.937 1.597h.005c6.637 0 12.032-5.391 12.035-12.031a11.764 11.764 0 00-3.517-8.403z" fill="white" />
                                        </svg>
                                    </span>
                                    +1 (716) 503-6335
                                </div>
                                <a href="#" className="book-call-link">Book a Call Directly</a>
                            </div>
                        </div>
                    </div>

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
    );
};

export default React.memo(Consultation);

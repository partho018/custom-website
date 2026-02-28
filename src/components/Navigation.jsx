import React from 'react';

const Navigation = () => {
    return (
        <>
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
        </>
    );
};

export default React.memo(Navigation);

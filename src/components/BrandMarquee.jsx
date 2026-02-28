import React from 'react';

const BrandMarquee = ({ glowImg }) => {
    return (
        <section className="trusted-by-section">
            <img src={glowImg} alt="glow effect" className="background-glow-img" loading="lazy" decoding="async" />

            <div className="marquee-container">
                <div className="marquee-content marquee-top">
                    <div className="marquee-track left">
                        <span className="brand-logo"><span className="symbol">✜</span> Liberate Labs</span>
                        <span className="brand-logo">edvive</span>
                        <span className="brand-logo font-bold">LeKlub</span>
                        <span className="brand-logo italic">Lendiview</span>
                        <span className="brand-logo"><span className="symbol">∮</span> Likely</span>
                        <span className="brand-logo font-script">Mymemorybox</span>
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
    );
};

export default React.memo(BrandMarquee);

import React, { useState, useEffect, useRef } from 'react';

const NetworkLoader = () => {
    const [isOffline, setIsOffline] = useState(!navigator.onLine);
    const [isSlow, setIsSlow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [hiding, setHiding] = useState(false);
    const slowTimerRef = useRef(null);
    const pingIntervalRef = useRef(null);

    // Check connection speed by timing a small ping
    const checkConnectionSpeed = async () => {
        if (!navigator.onLine) return;
        try {
            const start = Date.now();
            const url = `https://www.google.com/favicon.ico?_=${Date.now()}`;
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 4000);
            await fetch(url, {
                mode: 'no-cors',
                cache: 'no-store',
                signal: controller.signal,
            });
            clearTimeout(timeoutId);
            const duration = Date.now() - start;
            // If ping takes > 2.5 seconds, consider it slow
            setIsSlow(duration > 2500);
        } catch {
            // Fetch aborted = very slow or no connection
            setIsSlow(true);
        }
    };

    // Show/hide logic
    useEffect(() => {
        const shouldShow = isOffline || isSlow;
        if (shouldShow) {
            setHiding(false);
            setVisible(true);
        } else if (visible) {
            setHiding(true);
            const t = setTimeout(() => {
                setVisible(false);
                setHiding(false);
            }, 600);
            return () => clearTimeout(t);
        }
    }, [isOffline, isSlow]);

    // Online/offline event listeners
    useEffect(() => {
        const handleOffline = () => setIsOffline(true);
        const handleOnline = () => {
            setIsOffline(false);
            checkConnectionSpeed();
        };

        window.addEventListener('offline', handleOffline);
        window.addEventListener('online', handleOnline);

        // Periodic speed check every 8 seconds
        pingIntervalRef.current = setInterval(checkConnectionSpeed, 8000);
        // Initial check
        checkConnectionSpeed();

        return () => {
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('online', handleOnline);
            clearInterval(pingIntervalRef.current);
            clearTimeout(slowTimerRef.current);
        };
    }, []);

    if (!visible) return null;

    return (
        <div className={`network-loader-overlay ${hiding ? 'network-loader-hide' : 'network-loader-show'}`}>
            <div className="network-loader-card">
                {/* Animated WiFi / No-signal icon */}
                <div className="network-icon-wrap">
                    {isOffline ? (
                        <svg className="network-icon offline-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="50" r="4" fill="#ff6b6b" />
                            <path d="M10 22 C18 14, 46 14, 54 22" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.3" />
                            <path d="M16 30 C21 24, 43 24, 48 30" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.3" />
                            <path d="M22 38 C26 34, 38 34, 42 38" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.3" />
                            {/* X mark */}
                            <line x1="20" y1="10" x2="44" y2="54" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round" />
                            <line x1="44" y1="10" x2="20" y2="54" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    ) : (
                        <svg className="network-icon slow-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="50" r="4" fill="#f7c948" />
                            <path d="M10 22 C18 14, 46 14, 54 22" stroke="#f7c948" strokeWidth="4" strokeLinecap="round" fill="none" className="wifi-arc arc-3" />
                            <path d="M16 30 C21 24, 43 24, 48 30" stroke="#f7c948" strokeWidth="4" strokeLinecap="round" fill="none" className="wifi-arc arc-2" />
                            <path d="M22 38 C26 34, 38 34, 42 38" stroke="#f7c948" strokeWidth="4" strokeLinecap="round" fill="none" className="wifi-arc arc-1" />
                        </svg>
                    )}
                </div>

                {/* Spinner rings */}
                <div className="network-spinner">
                    <div className="spinner-ring ring-1"></div>
                    <div className="spinner-ring ring-2"></div>
                    <div className="spinner-ring ring-3"></div>
                </div>

                {/* Text */}
                <p className="network-title">
                    {isOffline ? 'No Internet Connection' : 'Slow Connection Detected'}
                </p>
                <p className="network-subtitle">
                    {isOffline
                        ? 'Please check your network and try again.'
                        : 'Loading may take longer than usual...'}
                </p>

                {/* Animated dots */}
                <div className="network-dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    );
};

export default NetworkLoader;

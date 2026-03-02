import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [showChangeModal, setShowChangeModal] = useState(false);
    const [changeType, setChangeType] = useState(''); // 'email' or 'password'

    // Change form states
    const [currentPassword, setCurrentPassword] = useState('');
    const [newValue, setNewValue] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState({ type: '', text: '' });
    const [isUpdating, setIsUpdating] = useState(false);

    const currentEmail = localStorage.getItem('dashboard_email') || 'admin@gmail.com';

    // Auth check
    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('dashboard_auth');
        if (!isLoggedIn) {
            navigate('/dashboard/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('dashboard_auth');
        navigate('/dashboard/login');
    };

    const openChangeModal = (type) => {
        setChangeType(type);
        setCurrentPassword('');
        setNewValue('');
        setConfirmPassword('');
        setMessage({ type: '', text: '' });
        setShowChangeModal(true);
    };

    const closeModal = () => {
        setShowChangeModal(false);
        setChangeType('');
        setMessage({ type: '', text: '' });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsUpdating(true);
        setMessage({ type: '', text: '' });

        const storedPassword = localStorage.getItem('dashboard_password') || 'admin123';

        setTimeout(() => {
            if (currentPassword !== storedPassword) {
                setMessage({ type: 'error', text: 'Current password is incorrect!' });
                setIsUpdating(false);
                return;
            }

            if (changeType === 'password') {
                if (newValue.length < 6) {
                    setMessage({ type: 'error', text: 'New password must be at least 6 characters!' });
                    setIsUpdating(false);
                    return;
                }
                if (newValue !== confirmPassword) {
                    setMessage({ type: 'error', text: 'Passwords do not match!' });
                    setIsUpdating(false);
                    return;
                }
                localStorage.setItem('dashboard_password', newValue);
                setMessage({ type: 'success', text: 'Password updated successfully!' });
            } else if (changeType === 'email') {
                if (!newValue.includes('@') || !newValue.includes('.')) {
                    setMessage({ type: 'error', text: 'Please enter a valid Gmail address!' });
                    setIsUpdating(false);
                    return;
                }
                localStorage.setItem('dashboard_email', newValue);
                setMessage({ type: 'success', text: 'Gmail updated successfully!' });
            }
            setIsUpdating(false);

            setTimeout(() => {
                closeModal();
            }, 1500);
        }, 800);
    };

    const stats = [
        { label: 'Total Visitors', value: '12,450', icon: '👁️', change: '+12%' },
        { label: 'New Consultations', value: '48', icon: '💬', change: '+8%' },
        { label: 'Projects Completed', value: '127', icon: '✅', change: '+5%' },
        { label: 'Revenue', value: '$84K', icon: '💰', change: '+18%' },
    ];

    return (
        <div className="dashboard-page">
            {/* Sidebar */}
            <aside className="db-sidebar">
                <div className="db-sidebar-header">
                    <div className="db-brand">
                        <div className="db-brand-icon">
                            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                                <path d="M16 2L29 8.5V23.5L16 30L3 23.5V8.5L16 2Z" fill="url(#dbBrandGrad)" />
                                <defs>
                                    <linearGradient id="dbBrandGrad" x1="3" y1="2" x2="29" y2="30" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#6366f1" />
                                        <stop offset="1" stopColor="#a855f7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <span>Garuda Admin</span>
                    </div>
                </div>

                <nav className="db-nav">
                    <button
                        id="nav-overview"
                        className={`db-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                        </svg>
                        Overview
                    </button>
                    <button
                        id="nav-settings"
                        className={`db-nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                        Settings
                    </button>
                    <a href="/" className="db-nav-item" id="nav-website">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Main Website
                    </a>
                </nav>

                <div className="db-sidebar-footer">
                    <div className="db-user-info">
                        <div className="db-avatar">
                            {currentEmail.charAt(0).toUpperCase()}
                        </div>
                        <div className="db-user-details">
                            <span className="db-user-email">{currentEmail.length > 20 ? currentEmail.substring(0, 18) + '...' : currentEmail}</span>
                            <span className="db-user-role">Administrator</span>
                        </div>
                    </div>
                    <button id="logout-btn" className="db-logout-btn" onClick={handleLogout} title="Logout">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="db-main">
                {/* Header */}
                <div className="db-header">
                    <div className="db-header-title">
                        <h1>{activeTab === 'overview' ? 'Dashboard Overview' : 'Account Settings'}</h1>
                        <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <div className="db-header-actions">
                        <div className="db-status-badge">
                            <span className="status-dot"></span>
                            Live
                        </div>
                    </div>
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="db-content">
                        <div className="db-stats-grid">
                            {stats.map((stat, i) => (
                                <div key={i} className="db-stat-card">
                                    <div className="db-stat-icon">{stat.icon}</div>
                                    <div className="db-stat-info">
                                        <p className="db-stat-label">{stat.label}</p>
                                        <h3 className="db-stat-value">{stat.value}</h3>
                                        <span className="db-stat-change positive">{stat.change} this month</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="db-quick-actions">
                            <h2>Quick Actions</h2>
                            <div className="db-action-grid">
                                <button className="db-action-card" onClick={() => { setActiveTab('settings'); openChangeModal('email'); }}>
                                    <div className="db-action-icon">✉️</div>
                                    <h3>Change Gmail</h3>
                                    <p>Update your login email address</p>
                                </button>
                                <button className="db-action-card" onClick={() => { setActiveTab('settings'); openChangeModal('password'); }}>
                                    <div className="db-action-icon">🔐</div>
                                    <h3>Change Password</h3>
                                    <p>Set a new secure password</p>
                                </button>
                                <a href="/" className="db-action-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="db-action-icon">🌐</div>
                                    <h3>View Website</h3>
                                    <p>Visit your live site</p>
                                </a>
                                <button className="db-action-card danger" onClick={handleLogout}>
                                    <div className="db-action-icon">🚪</div>
                                    <h3>Logout</h3>
                                    <p>End your session</p>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                    <div className="db-content">
                        <div className="db-settings-grid">
                            {/* Email Section */}
                            <div className="db-settings-card">
                                <div className="db-settings-card-header">
                                    <div className="db-settings-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Change Gmail</h3>
                                        <p>Update your login email address</p>
                                    </div>
                                </div>
                                <div className="db-current-value">
                                    <label>Current Gmail</label>
                                    <span>{currentEmail}</span>
                                </div>
                                <button id="change-email-btn" className="db-change-btn" onClick={() => openChangeModal('email')}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                    Update Gmail
                                </button>
                            </div>

                            {/* Password Section */}
                            <div className="db-settings-card">
                                <div className="db-settings-card-header">
                                    <div className="db-settings-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Change Password</h3>
                                        <p>Keep your account secure</p>
                                    </div>
                                </div>
                                <div className="db-current-value">
                                    <label>Current Password</label>
                                    <span>••••••••</span>
                                </div>
                                <button id="change-password-btn" className="db-change-btn" onClick={() => openChangeModal('password')}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                    Update Password
                                </button>
                            </div>

                            {/* Account Info */}
                            <div className="db-settings-card full-width">
                                <div className="db-settings-card-header">
                                    <div className="db-settings-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3>Account Information</h3>
                                        <p>Your account details</p>
                                    </div>
                                </div>
                                <div className="db-info-list">
                                    <div className="db-info-item">
                                        <span className="db-info-label">Email</span>
                                        <span className="db-info-value">{currentEmail}</span>
                                    </div>
                                    <div className="db-info-item">
                                        <span className="db-info-label">Role</span>
                                        <span className="db-info-value db-badge">Administrator</span>
                                    </div>
                                    <div className="db-info-item">
                                        <span className="db-info-label">Status</span>
                                        <span className="db-info-value db-badge active">Active</span>
                                    </div>
                                </div>
                                <button className="db-logout-full-btn" onClick={handleLogout}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" />
                                        <line x1="21" y1="12" x2="9" y2="12" />
                                    </svg>
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Change Modal */}
            {showChangeModal && (
                <div className="db-modal-overlay" onClick={closeModal}>
                    <div className="db-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="db-modal-header">
                            <h3>
                                {changeType === 'email' ? '✉️ Change Gmail' : '🔐 Change Password'}
                            </h3>
                            <button className="db-modal-close" onClick={closeModal}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {message.text && (
                            <div className={`db-modal-message ${message.type}`}>
                                {message.type === 'success' ? '✅' : '❌'} {message.text}
                            </div>
                        )}

                        <form className="db-modal-form" onSubmit={handleUpdate}>
                            <div className="form-group">
                                <label>Current Password</label>
                                <div className="input-wrapper">
                                    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                    <input
                                        type="password"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        placeholder="Enter current password..."
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>{changeType === 'email' ? 'New Gmail' : 'New Password'}</label>
                                <div className="input-wrapper">
                                    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        {changeType === 'email' ? (
                                            <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>
                                        ) : (
                                            <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>
                                        )}
                                    </svg>
                                    <input
                                        type={changeType === 'email' ? 'email' : 'password'}
                                        value={newValue}
                                        onChange={(e) => setNewValue(e.target.value)}
                                        placeholder={changeType === 'email' ? 'Enter new Gmail...' : 'Enter new password...'}
                                        required
                                    />
                                </div>
                            </div>

                            {changeType === 'password' && (
                                <div className="form-group">
                                    <label>Confirm New Password</label>
                                    <div className="input-wrapper">
                                        <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        <input
                                            type="password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Confirm new password..."
                                            required
                                        />
                                    </div>
                                </div>
                            )}

                            <div className="db-modal-actions">
                                <button type="button" className="db-cancel-btn" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="db-save-btn" disabled={isUpdating}>
                                    {isUpdating ? (
                                        <><span className="spinner"></span> Updating...</>
                                    ) : (
                                        <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Save Changes</>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    collection, addDoc, getDocs, updateDoc, deleteDoc,
    doc, query, orderBy, onSnapshot
} from 'firebase/firestore';
import { db } from '../firebase';
import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [showChangeModal, setShowChangeModal] = useState(false);
    const [changeType, setChangeType] = useState('');

    // Change form states
    const [currentPassword, setCurrentPassword] = useState('');
    const [newValue, setNewValue] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState({ type: '', text: '' });
    const [isUpdating, setIsUpdating] = useState(false);

    const currentEmail = localStorage.getItem('dashboard_email') || 'admin@gmail.com';

    // ========== BLOG STATES ==========
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showBlogModal, setShowBlogModal] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [deleteConfirm, setDeleteConfirm] = useState(null);
    const [blogForm, setBlogForm] = useState({
        title: '', slug: '', category: '', shortDesc: '', content: '',
        author: '', date: '', tags: '', status: 'draft', thumbnail: ''
    });
    const [thumbnailPreview, setThumbnailPreview] = useState('');
    const [blogSearch, setBlogSearch] = useState('');
    const [blogFilter, setBlogFilter] = useState('all');
    const fileInputRef = useRef(null);

    // ========== SUBMISSION STATES ==========
    const [submissions, setSubmissions] = useState([]);
    const [loadingSubmissions, setLoadingSubmissions] = useState(true);
    const [submissionSearch, setSubmissionSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const CATEGORIES = ['Web Design', 'SEO', 'Development', 'Branding', 'UI/UX', 'Mobile Apps', 'Marketing', 'Other'];

    // Auth check
    useEffect(() => {
        const isLoggedIn = sessionStorage.getItem('dashboard_auth');
        if (!isLoggedIn) navigate('/dashboard/login');
    }, [navigate]);

    // ========== Firebase: Real-time posts listener ==========
    useEffect(() => {
        setLoadingPosts(true);
        const q = query(collection(db, 'blog_posts'), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            const fetched = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setPosts(fetched);
            setLoadingPosts(false);
        }, (err) => {
            console.error('Firebase error:', err);
            setLoadingPosts(false);
        });
        return () => unsub();
    }, []);

    // ========== Firebase: Real-time submissions listener ==========
    useEffect(() => {
        setLoadingSubmissions(true);
        const q = query(collection(db, 'contact_submissions'), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(q, (snapshot) => {
            const fetched = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
            setSubmissions(fetched);
            setLoadingSubmissions(false);
        }, (err) => {
            console.error('Firebase error (submissions):', err);
            setLoadingSubmissions(false);
        });
        return () => unsub();
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('dashboard_auth');
        navigate('/dashboard/login');
    };

    const openChangeModal = (type) => {
        setChangeType(type);
        setCurrentPassword(''); setNewValue(''); setConfirmPassword('');
        setMessage({ type: '', text: '' });
        setShowChangeModal(true);
    };

    const closeModal = () => { setShowChangeModal(false); setChangeType(''); setMessage({ type: '', text: '' }); };

    const handleUpdate = (e) => {
        e.preventDefault(); setIsUpdating(true); setMessage({ type: '', text: '' });
        const storedPassword = localStorage.getItem('dashboard_password') || 'admin123';
        setTimeout(() => {
            if (currentPassword !== storedPassword) {
                setMessage({ type: 'error', text: 'Current password is incorrect!' });
                setIsUpdating(false); return;
            }
            if (changeType === 'password') {
                if (newValue.length < 6) { setMessage({ type: 'error', text: 'New password must be at least 6 characters!' }); setIsUpdating(false); return; }
                if (newValue !== confirmPassword) { setMessage({ type: 'error', text: 'Passwords do not match!' }); setIsUpdating(false); return; }
                localStorage.setItem('dashboard_password', newValue);
                setMessage({ type: 'success', text: 'Password updated successfully!' });
            } else if (changeType === 'email') {
                if (!newValue.includes('@') || !newValue.includes('.')) { setMessage({ type: 'error', text: 'Please enter a valid Gmail address!' }); setIsUpdating(false); return; }
                localStorage.setItem('dashboard_email', newValue);
                setMessage({ type: 'success', text: 'Gmail updated successfully!' });
            }
            setIsUpdating(false);
            setTimeout(() => closeModal(), 1500);
        }, 800);
    };

    // ========== BLOG HELPERS ==========
    const generateSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const openBlogModal = (post = null) => {
        if (post) {
            setEditingPost(post);
            setBlogForm({ ...post });
            setThumbnailPreview(post.thumbnail || '');
        } else {
            setEditingPost(null);
            setBlogForm({ title: '', slug: '', category: '', shortDesc: '', content: '', author: '', date: new Date().toISOString().split('T')[0], tags: '', status: 'draft', thumbnail: '' });
            setThumbnailPreview('');
        }
        setShowBlogModal(true);
    };

    const closeBlogModal = () => { setShowBlogModal(false); setEditingPost(null); setThumbnailPreview(''); };

    const handleBlogFormChange = (e) => {
        const { name, value } = e.target;
        setBlogForm(prev => {
            const updated = { ...prev, [name]: value };
            if (name === 'title' && !editingPost) updated.slug = generateSlug(value);
            return updated;
        });
    };

    const handleThumbnailUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setThumbnailPreview(reader.result);
            setBlogForm(prev => ({ ...prev, thumbnail: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    // ── Firebase CRUD ──
    const handleBlogSubmit = async (e) => {
        e.preventDefault();
        if (!blogForm.title || !blogForm.category || !blogForm.content) return;
        setSaving(true);
        try {
            const { id: _id, ...formData } = blogForm;
            if (editingPost) {
                await updateDoc(doc(db, 'blog_posts', editingPost.id), {
                    ...formData,
                    updatedAt: new Date().toISOString()
                });
            } else {
                await addDoc(collection(db, 'blog_posts'), {
                    ...formData,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString()
                });
            }
            closeBlogModal();
        } catch (err) {
            console.error('Save error:', err);
            alert('Error saving post: ' + err.message);
        }
        setSaving(false);
    };

    const handleDeletePost = async (id) => {
        try {
            await deleteDoc(doc(db, 'blog_posts', id));
        } catch (err) {
            console.error('Delete error:', err);
        }
        setDeleteConfirm(null);
    };

    const toggleStatus = async (post) => {
        try {
            await updateDoc(doc(db, 'blog_posts', post.id), {
                status: post.status === 'published' ? 'draft' : 'published',
                updatedAt: new Date().toISOString()
            });
        } catch (err) {
            console.error('Toggle error:', err);
        }
    };

    const filteredPosts = posts.filter(p => {
        const matchSearch = p.title.toLowerCase().includes(blogSearch.toLowerCase()) || p.category?.toLowerCase().includes(blogSearch.toLowerCase());
        const matchFilter = blogFilter === 'all' || p.status === blogFilter;
        return matchSearch && matchFilter;
    });

    const publishedCount = posts.filter(p => p.status === 'published').length;
    const draftCount = posts.filter(p => p.status === 'draft').length;

    // ========== SUBMISSION HELPERS ==========
    const filteredSubmissions = submissions.filter(s =>
        s.fullName?.toLowerCase().includes(submissionSearch.toLowerCase()) ||
        s.email?.toLowerCase().includes(submissionSearch.toLowerCase()) ||
        s.details?.toLowerCase().includes(submissionSearch.toLowerCase())
    );

    const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
    const paginatedSubmissions = filteredSubmissions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleDeleteSubmission = async (id) => {
        if (!window.confirm('Are you sure you want to delete this submission?')) return;
        try {
            await deleteDoc(doc(db, 'contact_submissions', id));
        } catch (err) {
            console.error('Delete error:', err);
        }
    };

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
                    <button id="nav-overview" className={`db-nav-item ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
                        </svg>
                        Overview
                    </button>
                    <button id="nav-blog" className={`db-nav-item ${activeTab === 'blog' ? 'active' : ''}`} onClick={() => setActiveTab('blog')}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
                            <polyline points="10 9 9 9 8 9" />
                        </svg>
                        Blog Posts
                        {posts.length > 0 && <span className="db-nav-badge">{posts.length}</span>}
                    </button>
                    <button id="nav-submissions" className={`db-nav-item ${activeTab === 'submissions' ? 'active' : ''}`} onClick={() => { setActiveTab('submissions'); setCurrentPage(1); }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Inquiries
                        {submissions.length > 0 && <span className="db-nav-badge blue">{submissions.length}</span>}
                    </button>
                    <button id="nav-settings" className={`db-nav-item ${activeTab === 'settings' ? 'active' : ''}`} onClick={() => setActiveTab('settings')}>
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
                        <div className="db-avatar">{currentEmail.charAt(0).toUpperCase()}</div>
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
                        <h1>{activeTab === 'overview' ? 'Dashboard Overview' : activeTab === 'blog' ? 'Blog Management' : activeTab === 'submissions' ? 'Contact Submissions' : 'Account Settings'}</h1>
                        <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                    <div className="db-header-actions">
                        {activeTab === 'blog' && (
                            <button className="db-add-post-btn" onClick={() => openBlogModal()}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                                New Post
                            </button>
                        )}
                        <div className="db-status-badge">
                            <span className="status-dot"></span>
                            Live
                        </div>
                    </div>
                </div>

                {/* Overview Tab */}
                {activeTab === 'overview' && (
                    <div className="db-content">
                        <div className="db-quick-actions">
                            <h2>Quick Actions</h2>
                            <div className="db-action-grid">
                                <button className="db-action-card" onClick={() => { setActiveTab('blog'); openBlogModal(); }}>
                                    <div className="db-action-icon">✍️</div>
                                    <h3>New Blog Post</h3>
                                    <p>Write and publish a new article</p>
                                </button>
                                <button className="db-action-card" onClick={() => setActiveTab('blog')}>
                                    <div className="db-action-icon">📝</div>
                                    <h3>Manage Blog</h3>
                                    <p>{posts.length} posts · {publishedCount} published</p>
                                </button>
                                <button className="db-action-card" onClick={() => setActiveTab('submissions')}>
                                    <div className="db-action-icon">📩</div>
                                    <h3>Project Inquiries</h3>
                                    <p>{submissions.length} total messages</p>
                                </button>
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

                {/* Blog Tab */}
                {activeTab === 'blog' && (
                    <div className="db-content">
                        {/* Blog Stats */}
                        <div className="db-blog-stats">
                            <div className="db-blog-stat">
                                <span className="db-blog-stat-num">{posts.length}</span>
                                <span className="db-blog-stat-lbl">Total Posts</span>
                            </div>
                            <div className="db-blog-stat published">
                                <span className="db-blog-stat-num">{publishedCount}</span>
                                <span className="db-blog-stat-lbl">Published</span>
                            </div>
                            <div className="db-blog-stat draft">
                                <span className="db-blog-stat-num">{draftCount}</span>
                                <span className="db-blog-stat-lbl">Drafts</span>
                            </div>
                        </div>

                        {/* Toolbar */}
                        <div className="db-blog-toolbar">
                            <div className="db-blog-search-wrap">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                                <input className="db-blog-search" type="text" placeholder="Search posts..." value={blogSearch} onChange={e => setBlogSearch(e.target.value)} />
                            </div>
                            <div className="db-blog-filters">
                                {['all', 'published', 'draft'].map(f => (
                                    <button key={f} className={`db-filter-btn ${blogFilter === f ? 'active' : ''}`} onClick={() => setBlogFilter(f)}>
                                        {f.charAt(0).toUpperCase() + f.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Posts List */}
                        {filteredPosts.length === 0 ? (
                            <div className="db-blog-empty">
                                <div className="db-blog-empty-icon">📄</div>
                                <h3>{posts.length === 0 ? 'No blog posts yet' : 'No posts found'}</h3>
                                <p>{posts.length === 0 ? 'Click "New Post" to create your first blog article.' : 'Try a different search or filter.'}</p>
                                {posts.length === 0 && (
                                    <button className="db-add-post-btn" onClick={() => openBlogModal()}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                                        </svg>
                                        Create First Post
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="db-posts-list">
                                {filteredPosts.map(post => (
                                    <div key={post.id} className="db-post-row">
                                        <div className="db-post-thumb">
                                            {post.thumbnail
                                                ? <img src={post.thumbnail} alt={post.title} />
                                                : <div className="db-post-thumb-placeholder">📝</div>
                                            }
                                        </div>
                                        <div className="db-post-info">
                                            <div className="db-post-meta-top">
                                                {post.category && <span className="db-post-cat">{post.category}</span>}
                                                <span className={`db-post-status ${post.status}`}>
                                                    {post.status === 'published' ? '🟢 Published' : '🟡 Draft'}
                                                </span>
                                            </div>
                                            <h3 className="db-post-title">{post.title}</h3>
                                            <p className="db-post-desc">{post.shortDesc || 'No description provided.'}</p>
                                            <div className="db-post-meta-bot">
                                                {post.author && <span>✍️ {post.author}</span>}
                                                {post.date && <span>📅 {post.date}</span>}
                                                {post.tags && <span>🏷️ {post.tags}</span>}
                                            </div>
                                        </div>
                                        <div className="db-post-actions">
                                            <button className="db-post-action-btn toggle" onClick={() => toggleStatus(post)} title={post.status === 'published' ? 'Unpublish' : 'Publish'}>
                                                {post.status === 'published'
                                                    ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                                                    : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                                }
                                            </button>
                                            <button className="db-post-action-btn edit" onClick={() => openBlogModal(post)} title="Edit">
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                </svg>
                                            </button>
                                            <button className="db-post-action-btn delete" onClick={() => setDeleteConfirm(post.id)} title="Delete">
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                                    <path d="M10 11v6" /><path d="M14 11v6" />
                                                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Submissions Tab */}
                {activeTab === 'submissions' && (
                    <div className="db-content">
                        {/* Submissions Toolbar */}
                        <div className="db-blog-toolbar">
                            <div className="db-blog-search-wrap">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                                <input className="db-blog-search" type="text" placeholder="Search inquiries..." value={submissionSearch} onChange={e => { setSubmissionSearch(e.target.value); setCurrentPage(1); }} />
                            </div>
                            <div className="db-submissions-count">
                                Showing {paginatedSubmissions.length} of {filteredSubmissions.length}
                            </div>
                        </div>

                        {/* Submissions List */}
                        {filteredSubmissions.length === 0 ? (
                            <div className="db-blog-empty">
                                <div className="db-blog-empty-icon">📩</div>
                                <h3>{submissions.length === 0 ? 'No inquiries yet' : 'No matches found'}</h3>
                                <p>When people contact you from the website, their details will appear here.</p>
                            </div>
                        ) : (
                            <>
                                <div className="db-submissions-list">
                                    {paginatedSubmissions.map(sub => (
                                        <div key={sub.id} className="db-submission-card">
                                            <div className="db-sub-header">
                                                <div className="db-sub-user">
                                                    <div className="db-sub-avatar">{sub.fullName?.charAt(0).toUpperCase()}</div>
                                                    <div>
                                                        <h3>{sub.fullName}</h3>
                                                        <span className="db-sub-date">
                                                            📅 {sub.createdAt?.toDate ? sub.createdAt.toDate().toLocaleString() : 'Just now'}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="db-sub-budget">{sub.budget || 'No Budget'}</div>
                                            </div>
                                            <div className="db-sub-info">
                                                <div className="db-sub-info-item">
                                                    <strong>Email:</strong> {sub.email}
                                                </div>
                                                <div className="db-sub-info-item">
                                                    <strong>Whatsapp:</strong> {sub.whatsapp}
                                                </div>
                                            </div>
                                            <div className="db-sub-details">
                                                <p>{sub.details}</p>
                                            </div>
                                            <div className="db-sub-actions">
                                                <a href={`mailto:${sub.email}`} className="db-sub-action-btn reply">Reply via Email</a>
                                                <button className="db-sub-action-btn delete" onClick={() => handleDeleteSubmission(sub.id)}>Delete</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="db-pagination">
                                        <button
                                            className="db-page-btn"
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage(prev => prev - 1)}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="15 18 9 12 15 6" />
                                            </svg>
                                            Previous
                                        </button>
                                        <div className="db-page-numbers">
                                            Page {currentPage} of {totalPages}
                                        </div>
                                        <button
                                            className="db-page-btn"
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage(prev => prev + 1)}
                                        >
                                            Next
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                )}

                {/* Settings Tab */}
                {activeTab === 'settings' && (
                    <div className="db-content">
                        <div className="db-settings-grid">
                            <div className="db-settings-card">
                                <div className="db-settings-card-header">
                                    <div className="db-settings-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div><h3>Change Gmail</h3><p>Update your login email address</p></div>
                                </div>
                                <div className="db-current-value"><label>Current Gmail</label><span>{currentEmail}</span></div>
                                <button id="change-email-btn" className="db-change-btn" onClick={() => openChangeModal('email')}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                    Update Gmail
                                </button>
                            </div>

                            <div className="db-settings-card">
                                <div className="db-settings-card-header">
                                    <div className="db-settings-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                    </div>
                                    <div><h3>Change Password</h3><p>Keep your account secure</p></div>
                                </div>
                                <div className="db-current-value"><label>Current Password</label><span>••••••••</span></div>
                                <button id="change-password-btn" className="db-change-btn" onClick={() => openChangeModal('password')}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                    Update Password
                                </button>
                            </div>

                            <div className="db-settings-card full-width">
                                <div className="db-settings-card-header">
                                    <div className="db-settings-icon">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>
                                    <div><h3>Account Information</h3><p>Your account details</p></div>
                                </div>
                                <div className="db-info-list">
                                    <div className="db-info-item"><span className="db-info-label">Email</span><span className="db-info-value">{currentEmail}</span></div>
                                    <div className="db-info-item"><span className="db-info-label">Role</span><span className="db-info-value db-badge">Administrator</span></div>
                                    <div className="db-info-item"><span className="db-info-label">Status</span><span className="db-info-value db-badge active">Active</span></div>
                                </div>
                                <button className="db-logout-full-btn" onClick={handleLogout}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                        <polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
                                    </svg>
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* ======== Change Credentials Modal ======== */}
            {showChangeModal && (
                <div className="db-modal-overlay" onClick={closeModal}>
                    <div className="db-modal" onClick={e => e.stopPropagation()}>
                        <div className="db-modal-header">
                            <h3>{changeType === 'email' ? '✉️ Change Gmail' : '🔐 Change Password'}</h3>
                            <button className="db-modal-close" onClick={closeModal}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
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
                                    <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} placeholder="Enter current password..." required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>{changeType === 'email' ? 'New Gmail' : 'New Password'}</label>
                                <div className="input-wrapper">
                                    <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        {changeType === 'email'
                                            ? <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>
                                            : <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>
                                        }
                                    </svg>
                                    <input type={changeType === 'email' ? 'email' : 'password'} value={newValue} onChange={e => setNewValue(e.target.value)} placeholder={changeType === 'email' ? 'Enter new Gmail...' : 'Enter new password...'} required />
                                </div>
                            </div>
                            {changeType === 'password' && (
                                <div className="form-group">
                                    <label>Confirm New Password</label>
                                    <div className="input-wrapper">
                                        <svg className="input-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>
                                        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm new password..." required />
                                    </div>
                                </div>
                            )}
                            <div className="db-modal-actions">
                                <button type="button" className="db-cancel-btn" onClick={closeModal}>Cancel</button>
                                <button type="submit" className="db-save-btn" disabled={isUpdating}>
                                    {isUpdating ? <><span className="spinner"></span> Updating...</> : <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg> Save Changes</>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ======== Blog Post Modal ======== */}
            {showBlogModal && (
                <div className="db-modal-overlay" onClick={closeBlogModal}>
                    <div className="db-blog-modal" onClick={e => e.stopPropagation()}>
                        <div className="db-modal-header">
                            <h3>{editingPost ? '✏️ Edit Post' : '✍️ New Blog Post'}</h3>
                            <button className="db-modal-close" onClick={closeBlogModal}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                        <form className="db-blog-form" onSubmit={handleBlogSubmit}>
                            <div className="db-blog-form-grid">
                                {/* LEFT */}
                                <div className="db-blog-form-left">
                                    <div className="db-form-group">
                                        <label>Post Title <span className="req">*</span></label>
                                        <input name="title" value={blogForm.title} onChange={handleBlogFormChange} placeholder="Enter post title..." required />
                                    </div>
                                    <div className="db-form-group">
                                        <label>Slug / URL</label>
                                        <input name="slug" value={blogForm.slug} onChange={handleBlogFormChange} placeholder="auto-generated-slug" />
                                    </div>
                                    <div className="db-form-row">
                                        <div className="db-form-group">
                                            <label>Category <span className="req">*</span></label>
                                            <select name="category" value={blogForm.category} onChange={handleBlogFormChange} required>
                                                <option value="">Select category</option>
                                                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                                            </select>
                                        </div>
                                        <div className="db-form-group">
                                            <label>Author</label>
                                            <input name="author" value={blogForm.author} onChange={handleBlogFormChange} placeholder="Author name..." />
                                        </div>
                                    </div>
                                    <div className="db-form-row">
                                        <div className="db-form-group">
                                            <label>Published Date</label>
                                            <input type="date" name="date" value={blogForm.date} onChange={handleBlogFormChange} />
                                        </div>
                                        <div className="db-form-group">
                                            <label>Status</label>
                                            <select name="status" value={blogForm.status} onChange={handleBlogFormChange}>
                                                <option value="draft">Draft</option>
                                                <option value="published">Published</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="db-form-group">
                                        <label>Tags</label>
                                        <input name="tags" value={blogForm.tags} onChange={handleBlogFormChange} placeholder="design, web, seo (comma separated)..." />
                                    </div>
                                    <div className="db-form-group">
                                        <label>Short Description</label>
                                        <textarea name="shortDesc" value={blogForm.shortDesc} onChange={handleBlogFormChange} placeholder="Brief summary shown in post cards..." rows={2} />
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="db-blog-form-right">
                                    <div className="db-form-group">
                                        <label>Thumbnail Image</label>
                                        <div className="db-thumb-upload" onClick={() => fileInputRef.current?.click()}>
                                            {thumbnailPreview
                                                ? <img src={thumbnailPreview} alt="preview" className="db-thumb-preview-img" />
                                                : <div className="db-thumb-placeholder">
                                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                                    <span>Click to upload image</span>
                                                    <small>PNG, JPG, WEBP</small>
                                                </div>
                                            }
                                        </div>
                                        <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleThumbnailUpload} />
                                        {thumbnailPreview && (
                                            <button type="button" className="db-remove-thumb" onClick={() => { setThumbnailPreview(''); setBlogForm(p => ({ ...p, thumbnail: '' })); }}>
                                                Remove Image
                                            </button>
                                        )}
                                    </div>
                                    <div className="db-form-group" style={{ flex: 1 }}>
                                        <label>Content <span className="req">*</span></label>
                                        <textarea name="content" value={blogForm.content} onChange={handleBlogFormChange} placeholder="Write your blog content here..." rows={10} required style={{ flex: 1, minHeight: '180px' }} />
                                    </div>
                                </div>
                            </div>
                            <div className="db-modal-actions db-blog-form-actions">
                                <button type="button" className="db-cancel-btn" onClick={closeBlogModal}>Cancel</button>
                                <button type="submit" className="db-save-btn" disabled={saving}>
                                    {saving ? (
                                        <><span className="spinner"></span> Saving...</>
                                    ) : (
                                        <>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                            {editingPost ? 'Update Post' : 'Create Post'}
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* ======== Delete Confirm ======== */}
            {deleteConfirm && (
                <div className="db-modal-overlay" onClick={() => setDeleteConfirm(null)}>
                    <div className="db-modal db-delete-modal" onClick={e => e.stopPropagation()}>
                        <div className="db-delete-icon">🗑️</div>
                        <h3>Delete Post?</h3>
                        <p>This action cannot be undone. The post will be permanently removed.</p>
                        <div className="db-modal-actions">
                            <button className="db-cancel-btn" onClick={() => setDeleteConfirm(null)}>Cancel</button>
                            <button className="db-save-btn danger-btn" onClick={() => handleDeletePost(deleteConfirm)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6" /><path d="M14 11v6" /></svg>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;

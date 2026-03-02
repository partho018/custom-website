import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './Blogs.css';

function Blogs() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        setLoading(true);
        const q = query(
            collection(db, 'blog_posts'),
            where('status', '==', 'published'),
            orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedPosts = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(fetchedPosts);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching posts: ", error);
            setLoading(false);
        });

        window.scrollTo(0, 0);
        return () => unsubscribe();
    }, []);

    const allCategories = ['All', ...Array.from(new Set(posts.map(p => p.category).filter(Boolean)))];

    const filtered = posts.filter(p => {
        const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.shortDesc?.toLowerCase().includes(search.toLowerCase()) ||
            p.tags?.toLowerCase().includes(search.toLowerCase());
        const matchCat = activeCategory === 'All' || p.category === activeCategory;
        return matchSearch && matchCat;
    });

    const featured = filtered[0];
    const rest = filtered.slice(1);

    return (
        <div className="blogs-page">
            {/* Back to home */}
            <a href="/" className="blogs-back-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                Back to Home
            </a>

            {/* Hero Header */}
            <div className="blogs-hero">
                <div className="blogs-hero-glow"></div>
                <div className="blogs-hero-badge">
                    <span>📝</span> Our Blog
                </div>
                <h1 className="blogs-hero-title">
                    Insights & <span className="blogs-gradient-text">Ideas</span>
                </h1>
                <p className="blogs-hero-sub">
                    Explore our latest articles on design, development, and digital strategy.
                </p>

                {/* Search */}
                <div className="blogs-search-wrap">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        className="blogs-search"
                        type="text"
                        placeholder="Search articles..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="blogs-container">
                {/* Loading State */}
                {loading && (
                    <div className="blogs-loading">
                        <div className="blogs-spinner"></div>
                        <p>Fetching latest articles...</p>
                    </div>
                )}

                {/* Category Filter */}
                {!loading && allCategories.length > 1 && (
                    <div className="blogs-categories">
                        {allCategories.map(cat => (
                            <button
                                key={cat}
                                className={`blogs-cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {!loading && filtered.length === 0 && (
                    <div className="blogs-empty">
                        <div className="blogs-empty-icon">
                            {posts.length === 0 ? '📭' : '🔍'}
                        </div>
                        <h2>{posts.length === 0 ? 'No posts yet' : 'No results found'}</h2>
                        <p>
                            {posts.length === 0
                                ? 'Check back soon — we\'re writing something amazing!'
                                : 'Try searching with different keywords or select a different category.'}
                        </p>
                        {posts.length === 0 && (
                            <a href="/dashboard" className="blogs-dashboard-link">
                                Go to Dashboard →
                            </a>
                        )}
                    </div>
                )}

                {/* Featured Post */}
                {!loading && featured && (
                    <div className="blogs-featured">
                        <div className="blogs-featured-img-wrap">
                            {featured.thumbnail
                                ? <img src={featured.thumbnail} alt={featured.title} className="blogs-featured-img" />
                                : <div className="blogs-featured-img-placeholder">✍️</div>
                            }
                            <div className="blogs-featured-label">Featured</div>
                        </div>
                        <div className="blogs-featured-body">
                            <div className="blogs-featured-meta">
                                {featured.category && <span className="blogs-cat-tag">{featured.category}</span>}
                                {featured.date && <span className="blogs-date">📅 {featured.date}</span>}
                            </div>
                            <h2 className="blogs-featured-title">{featured.title}</h2>
                            <p className="blogs-featured-desc">{featured.shortDesc || featured.content?.substring(0, 160) + '...'}</p>
                            <div className="blogs-featured-footer">
                                {featured.author && (
                                    <div className="blogs-author">
                                        <div className="blogs-author-avatar">{featured.author.charAt(0).toUpperCase()}</div>
                                        <span>{featured.author}</span>
                                    </div>
                                )}
                                {featured.tags && (
                                    <div className="blogs-tags">
                                        {featured.tags.split(',').slice(0, 3).map(t => (
                                            <span key={t} className="blogs-tag">{t.trim()}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Rest of posts grid */}
                {!loading && rest.length > 0 && (
                    <div className="blogs-grid">
                        {rest.map((post, i) => (
                            <article key={post.id} className="blogs-card" style={{ animationDelay: `${i * 0.08}s` }}>
                                <div className="blogs-card-img-wrap">
                                    {post.thumbnail
                                        ? <img src={post.thumbnail} alt={post.title} className="blogs-card-img" />
                                        : <div className="blogs-card-img-placeholder">📝</div>
                                    }
                                    {post.category && <span className="blogs-card-cat">{post.category}</span>}
                                </div>
                                <div className="blogs-card-body">
                                    <div className="blogs-card-meta">
                                        {post.date && <span className="blogs-date">📅 {post.date}</span>}
                                        {post.author && <span className="blogs-date">✍️ {post.author}</span>}
                                    </div>
                                    <h3 className="blogs-card-title">{post.title}</h3>
                                    <p className="blogs-card-desc">
                                        {post.shortDesc || post.content?.substring(0, 120) + '...'}
                                    </p>
                                    {post.tags && (
                                        <div className="blogs-tags">
                                            {post.tags.split(',').slice(0, 2).map(t => (
                                                <span key={t} className="blogs-tag">{t.trim()}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                )}

                {/* Post Count */}
                {!loading && filtered.length > 0 && (
                    <div className="blogs-count">
                        Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'article' : 'articles'}
                        {activeCategory !== 'All' && ` in "${activeCategory}"`}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Blogs;

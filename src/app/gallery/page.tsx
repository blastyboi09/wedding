'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const categories = ['All', 'Engagement', 'Pre-Wedding', 'Events'];

const photos = [
    { id: 1, category: 'Engagement', placeholder: '💍' },
    { id: 2, category: 'Engagement', placeholder: '💕' },
    { id: 3, category: 'Pre-Wedding', placeholder: '📸' },
    { id: 4, category: 'Events', placeholder: '🎉' },
    { id: 5, category: 'Pre-Wedding', placeholder: '🌸' },
    { id: 6, category: 'Engagement', placeholder: '💑' },
    { id: 7, category: 'Events', placeholder: '🥂' },
    { id: 8, category: 'Pre-Wedding', placeholder: '🌺' },
    { id: 9, category: 'Events', placeholder: '✨' },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const filteredPhotos = activeCategory === 'All'
        ? photos
        : photos.filter(p => p.category === activeCategory);

    useEffect(() => {
        document.body.style.overflow = selectedPhoto !== null ? 'hidden' : 'auto';
    }, [selectedPhoto]);

    return (
        <main className="gallery">
            <Navbar />

            <section className="gallery__hero">
                <div className="gallery__hero-bg"></div>
                <div className="gallery__hero-overlay"></div>
                <div className="gallery__hero-content">
                    <span className="gallery__hero-label">Our Memories</span>
                    <h1 className="gallery__hero-title">Photo Gallery</h1>
                    <p className="gallery__hero-subtitle">A glimpse into our journey together</p>
                </div>
            </section>

            <section className="gallery__content">
                <div className="gallery__container">
                    <div className="gallery__filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`gallery__filter ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="gallery__grid">
                        {filteredPhotos.map((photo) => (
                            <div
                                key={photo.id}
                                className="gallery__item"
                                onClick={() => setSelectedPhoto(photo.id)}
                            >
                                <div className="gallery__item-inner">
                                    <span className="gallery__item-emoji">{photo.placeholder}</span>
                                    <p className="gallery__item-category">{photo.category}</p>
                                </div>
                                <div className="gallery__item-overlay">
                                    <span>View</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="gallery__note">
                        <p>📷 More photos coming soon after the wedding!</p>
                    </div>
                </div>
            </section>

            {selectedPhoto !== null && (
                <div className="gallery__lightbox" onClick={() => setSelectedPhoto(null)}>
                    <button className="gallery__lightbox-close">×</button>
                    <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <div className="gallery__lightbox-image">
                            <span>{photos.find(p => p.id === selectedPhoto)?.placeholder}</span>
                            <p>Photo Placeholder</p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
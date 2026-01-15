'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const galleryImages = [
    { id: 1, alt: 'JD and Joi Photo 1', category: 'engagement' },
    { id: 2, alt: 'JD and Joi Photo 2', category: 'engagement' },
    { id: 3, alt: 'JD and Joi Photo 3', category: 'prenup' },
    { id: 4, alt: 'JD and Joi Photo 4', category: 'prenup' },
    { id: 5, alt: 'JD and Joi Photo 5', category: 'prenup' },
    { id: 6, alt: 'JD and Joi Photo 6', category: 'casual' },
    { id: 7, alt: 'JD and Joi Photo 7', category: 'casual' },
    { id: 8, alt: 'JD and Joi Photo 8', category: 'casual' },
    { id: 9, alt: 'JD and Joi Photo 9', category: 'engagement' },
];

const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'engagement', label: 'Engagement' },
    { id: 'prenup', label: 'Pre-nup' },
    { id: 'casual', label: 'Casual' },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const filteredImages = activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    const openLightbox = (id: number) => {
        setSelectedImage(id);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <main className="gallery">
            <Navbar />

            {/* Hero Section */}
            <section className="gallery__hero">
                <div className="gallery__hero-content">
                    <h1 className="gallery__title">Our Gallery</h1>
                    <div className="gallery__divider">
                        <span>❀</span>
                    </div>
                    <p className="gallery__subtitle">
                        Moments captured, memories cherished forever
                    </p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery__section">
                {/* Category Filter */}
                <div className="gallery__filters">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`gallery__filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <div className="gallery__grid">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="gallery__item"
                            onClick={() => openLightbox(image.id)}
                        >
                            {/* Placeholder - replace with actual Image component */}
                            <div className="gallery__placeholder">
                                <span className="gallery__placeholder-icon">📸</span>
                                <span className="gallery__placeholder-text">Photo {index + 1}</span>
                            </div>
                            <div className="gallery__item-overlay">
                                <span>View Photo</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="gallery__empty">
                        <p>No photos in this category yet.</p>
                    </div>
                )}
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div className="gallery__lightbox" onClick={closeLightbox}>
                    <button className="gallery__lightbox-close" onClick={closeLightbox}>
                        ✕
                    </button>
                    <div className="gallery__lightbox-content" onClick={e => e.stopPropagation()}>
                        <div className="gallery__lightbox-placeholder">
                            <span>📸</span>
                            <p>Photo {selectedImage}</p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}

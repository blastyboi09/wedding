'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const categories = ['All', 'Engagement', 'Pre-Wedding', 'Events'];

const photos = [
    { id: 1, category: 'Engagement', title: 'The Ring' },
    { id: 2, category: 'Engagement', title: 'Soft Smiles' },
    { id: 3, category: 'Pre-Wedding', title: 'Morning Light' },
    { id: 4, category: 'Events', title: 'Celebration' },
    { id: 5, category: 'Pre-Wedding', title: 'Garden Walk' },
    { id: 6, category: 'Engagement', title: 'Together' },
    { id: 7, category: 'Events', title: 'Toasts' },
    { id: 8, category: 'Pre-Wedding', title: 'Blue Hour' },
    { id: 9, category: 'Events', title: 'Sparkle' },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

    const filteredPhotos = activeCategory === 'All' ? photos : photos.filter((photo) => photo.category === activeCategory);
    const selected = photos.find((photo) => photo.id === selectedPhoto);

    useEffect(() => {
        document.body.style.overflow = selectedPhoto !== null ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedPhoto]);

    return (
        <main className="gallery">
            <Navbar />

            <section className="gallery__hero">
                <div className="gallery__hero-content">
                    <span>Our Memories</span>
                    <h1>Photo Gallery</h1>
                    <p>A glimpse into our journey together.</p>
                </div>
            </section>

            <section className="gallery__content">
                <div className="gallery__container">
                    <div className="gallery__filters">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`gallery__filter ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                                type="button"
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="gallery__grid">
                        {filteredPhotos.map((photo, index) => (
                            <button
                                key={photo.id}
                                className={`gallery__item gallery__item--${(index % 5) + 1}`}
                                onClick={() => setSelectedPhoto(photo.id)}
                                type="button"
                            >
                                <span>{photo.category}</span>
                                <strong>{photo.title}</strong>
                            </button>
                        ))}
                    </div>

                    <div className="gallery__note">
                        <p>More photos coming soon after the wedding.</p>
                    </div>
                </div>
            </section>

            {selected && (
                <div className="gallery__lightbox" onClick={() => setSelectedPhoto(null)}>
                    <button className="gallery__lightbox-close" type="button" aria-label="Close photo preview">x</button>
                    <div className="gallery__lightbox-content" onClick={(event) => event.stopPropagation()}>
                        <span>{selected.category}</span>
                        <h2>{selected.title}</h2>
                        <p>Photo placeholder</p>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}

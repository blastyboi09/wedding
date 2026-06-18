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

const formatFileSize = (size: number) => {
    if (size < 1024 * 1024) {
        return `${Math.max(1, Math.round(size / 1024))} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
    const [momentFiles, setMomentFiles] = useState<File[]>([]);
    const [shareStatus, setShareStatus] = useState('');

    const filteredPhotos = activeCategory === 'All' ? photos : photos.filter((photo) => photo.category === activeCategory);
    const selected = photos.find((photo) => photo.id === selectedPhoto);

    useEffect(() => {
        document.body.style.overflow = selectedPhoto !== null ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedPhoto]);

    const handleMomentFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMomentFiles(Array.from(event.target.files ?? []));
        setShareStatus('');
    };

    const handleShareMoments = async () => {
        if (!momentFiles.length) {
            setShareStatus('Choose photos or videos first.');
            return;
        }

        const shareData: ShareData = {
            title: 'JD & Joi Wedding Moments',
            text: 'Sharing moments from JD and Joi wedding celebration.',
            files: momentFiles,
        };

        if (navigator.share && navigator.canShare?.(shareData)) {
            try {
                await navigator.share(shareData);
                setShareStatus('Moments ready to send.');
            } catch (error) {
                if (!(error instanceof DOMException && error.name === 'AbortError')) {
                    setShareStatus('Sharing was not completed.');
                }
            }
            return;
        }

        setShareStatus('Media sharing is available from supported mobile browsers.');
    };

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

                    <section id="share-moments" className="gallery__share">
                        <div className="gallery__share-copy">
                            <span>Wedding Day Moments</span>
                            <h2>Share Your Photos &amp; Videos</h2>
                            <p>Send the little moments, candid smiles, and dance floor clips from the celebration.</p>
                        </div>

                        <div className="gallery__share-panel">
                            <div className="gallery__share-actions">
                                <label htmlFor="moment-upload">Choose Media</label>
                                <input
                                    id="moment-upload"
                                    type="file"
                                    accept="image/*,video/*"
                                    multiple
                                    onChange={handleMomentFiles}
                                />
                                <button type="button" onClick={handleShareMoments} disabled={!momentFiles.length}>
                                    Share Selected
                                </button>
                            </div>

                            <div className="gallery__share-list" aria-live="polite">
                                {momentFiles.length ? (
                                    momentFiles.slice(0, 6).map((file) => (
                                        <p key={`${file.name}-${file.lastModified}`}>
                                            <span>{file.name}</span>
                                            <small>{formatFileSize(file.size)}</small>
                                        </p>
                                    ))
                                ) : (
                                    <p>
                                        <span>No moments selected yet</span>
                                        <small>Photos and videos</small>
                                    </p>
                                )}
                            </div>

                            {shareStatus && <p className="gallery__share-status">{shareStatus}</p>}
                        </div>
                    </section>

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

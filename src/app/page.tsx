'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import './page.scss';

const WEDDING_DATE = '2026-06-21T15:00:00';

// SVG flower templates
const createFlowerSVG = (color: string, type: number): string => {
    const flowers: { [key: number]: string } = {
        // Cherry blossom - 5 petals
        0: `<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow)">
                <ellipse cx="25" cy="12" rx="8" ry="12" fill="${color}" transform="rotate(0 25 25)"/>
                <ellipse cx="25" cy="12" rx="8" ry="12" fill="${color}" transform="rotate(72 25 25)"/>
                <ellipse cx="25" cy="12" rx="8" ry="12" fill="${color}" transform="rotate(144 25 25)"/>
                <ellipse cx="25" cy="12" rx="8" ry="12" fill="${color}" transform="rotate(216 25 25)"/>
                <ellipse cx="25" cy="12" rx="8" ry="12" fill="${color}" transform="rotate(288 25 25)"/>
                <circle cx="25" cy="25" r="5" fill="#FFE066"/>
                <circle cx="23" cy="24" r="1" fill="#FF9500"/>
                <circle cx="27" cy="24" r="1" fill="#FF9500"/>
                <circle cx="25" cy="27" r="1" fill="#FF9500"/>
            </g>
            <defs><filter id="shadow"><feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.15"/></filter></defs>
        </svg>`,

        // Daisy - many thin petals
        1: `<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow)">
                ${Array.from({length: 12}, (_, i) =>
            `<ellipse cx="25" cy="8" rx="3" ry="10" fill="${color}" transform="rotate(${i * 30} 25 25)"/>`
        ).join('')}
                <circle cx="25" cy="25" r="6" fill="#FFD700"/>
                <circle cx="25" cy="25" r="4" fill="#FFA500"/>
            </g>
            <defs><filter id="shadow"><feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.15"/></filter></defs>
        </svg>`,

        // Rose-like swirl
        2: `<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow)">
                <ellipse cx="25" cy="10" rx="10" ry="14" fill="${color}" opacity="0.9"/>
                <ellipse cx="38" cy="20" rx="10" ry="14" fill="${color}" opacity="0.85" transform="rotate(60 38 20)"/>
                <ellipse cx="38" cy="35" rx="10" ry="14" fill="${color}" opacity="0.8" transform="rotate(120 38 35)"/>
                <ellipse cx="25" cy="42" rx="10" ry="14" fill="${color}" opacity="0.85" transform="rotate(180 25 42)"/>
                <ellipse cx="12" cy="35" rx="10" ry="14" fill="${color}" opacity="0.9" transform="rotate(240 12 35)"/>
                <ellipse cx="12" cy="20" rx="10" ry="14" fill="${color}" opacity="0.95" transform="rotate(300 12 20)"/>
                <circle cx="25" cy="25" r="8" fill="${color}"/>
                <circle cx="25" cy="25" r="5" fill="${color}" opacity="0.7"/>
            </g>
            <defs><filter id="shadow"><feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.15"/></filter></defs>
        </svg>`,

        // Simple 4-petal flower
        3: `<svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow)">
                <ellipse cx="25" cy="12" rx="9" ry="13" fill="${color}"/>
                <ellipse cx="38" cy="25" rx="9" ry="13" fill="${color}" transform="rotate(90 38 25)"/>
                <ellipse cx="25" cy="38" rx="9" ry="13" fill="${color}"/>
                <ellipse cx="12" cy="25" rx="9" ry="13" fill="${color}" transform="rotate(90 12 25)"/>
                <circle cx="25" cy="25" r="6" fill="#FFFACD"/>
                <circle cx="25" cy="25" r="3" fill="#FFD700"/>
            </g>
            <defs><filter id="shadow"><feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.15"/></filter></defs>
        </svg>`,

        // Single petal / sakura petal
        4: `<svg viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow)">
                <path d="M15 0 C25 10 28 25 15 40 C2 25 5 10 15 0" fill="${color}"/>
                <path d="M15 5 C15 15 15 30 15 35" stroke="white" stroke-width="0.5" opacity="0.4"/>
            </g>
            <defs><filter id="shadow"><feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-opacity="0.15"/></filter></defs>
        </svg>`,

        // Tulip-like
        5: `<svg viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow)">
                <ellipse cx="20" cy="20" rx="12" ry="18" fill="${color}"/>
                <ellipse cx="10" cy="22" rx="8" ry="15" fill="${color}" opacity="0.8"/>
                <ellipse cx="30" cy="22" rx="8" ry="15" fill="${color}" opacity="0.8"/>
                <ellipse cx="20" cy="18" rx="6" ry="10" fill="${color}" opacity="0.6"/>
            </g>
            <defs><filter id="shadow"><feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.15"/></filter></defs>
        </svg>`,

        // Small leaf
        6: `<svg viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow)">
                <path d="M12.5 0 C22 8 25 20 12.5 40 C0 20 3 8 12.5 0" fill="#98D8AA"/>
                <path d="M12.5 5 L12.5 35" stroke="#7CB899" stroke-width="1"/>
                <path d="M12.5 12 L8 16 M12.5 18 L17 22 M12.5 24 L8 28" stroke="#7CB899" stroke-width="0.5" opacity="0.6"/>
            </g>
            <defs><filter id="shadow"><feDropShadow dx="0" dy="1" stdDeviation="0.5" flood-opacity="0.15"/></filter></defs>
        </svg>`,
    };

    return flowers[type] || flowers[0];
};

const PASTEL_COLORS = [
    '#FFB6C1', // Light pink
    '#FFC0CB', // Pink
    '#FFD1DC', // Pastel pink
    '#E8B4BC', // Dusty rose
    '#DDA0DD', // Plum
    '#E6E6FA', // Lavender
    '#D8BFD8', // Thistle
    '#FFDAB9', // Peach
    '#FFE4E1', // Misty rose
    '#FFF0F5', // Lavender blush
    '#FFFAF0', // Floral white
    '#F8E1E7', // Light rose
];

export default function Home() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const flowersContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Falling flowers effect
    useEffect(() => {
        const container = flowersContainerRef.current;
        if (!container) return;

        const createFlower = () => {
            const flower = document.createElement('div');
            const type = Math.floor(Math.random() * 7); // 7 flower types (0-6)
            const color = PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)];

            flower.className = 'falling-flower';
            flower.innerHTML = createFlowerSVG(color, type);
            flower.style.left = `${Math.random() * 100}%`;
            flower.style.animationDuration = `${10 + Math.random() * 10}s`;
            flower.style.animationDelay = `${Math.random() * 2}s`;

            // Random size variation
            const size = 20 + Math.random() * 30; // 20-50px
            flower.style.width = `${size}px`;
            flower.style.height = `${size}px`;
            flower.style.opacity = `${0.5 + Math.random() * 0.4}`;

            container.appendChild(flower);

            // Remove flower after animation
            setTimeout(() => {
                flower.remove();
            }, 22000);
        };

        // Create initial batch
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createFlower(), i * 200);
        }

        // Continue creating flowers
        const interval = setInterval(createFlower, 600);

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="home">
            <Navbar />

            <section className="hero">
                <div className="hero__parallax" ref={parallaxRef}>
                    <div className="hero__bg-pattern"></div>
                </div>
                <div className="hero__overlay"></div>

                {/* Falling flowers container */}
                <div className="hero__flowers" ref={flowersContainerRef}></div>

                <div className="hero__content">
                    <div className="hero__badge">We&apos;re Getting Married</div>

                    <h1 className="hero__title">
                        <span className="hero__name">JD</span>
                        <span className="hero__ampersand">&</span>
                        <span className="hero__name">Joi</span>
                    </h1>

                    <div className="hero__divider">
                        <span></span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span></span>
                    </div>

                    <p className="hero__date">
                        <span className="hero__date-day">Sunday</span>
                        <span className="hero__date-full">June 21, 2026</span>
                    </p>
                    <p className="hero__venue">Esperanza Ilaya, Alfonso, Cavite</p>

                    <div className="hero__countdown">
                        <CountdownTimer targetDate={WEDDING_DATE} variant="light" />
                    </div>

                    <div className="hero__cta">
                        <Link href="/rsvp" className="hero__button hero__button--primary">RSVP Now</Link>
                        <Link href="/our-story" className="hero__button hero__button--outline">Our Story</Link>
                    </div>
                </div>

                <div className="hero__scroll-indicator">
                    <span>Scroll</span>
                    <div className="hero__scroll-line"></div>
                </div>

                <div className="hero__float hero__float--1"></div>
                <div className="hero__float hero__float--2"></div>
            </section>

            <section className="welcome">
                <div className="welcome__container">
                    <div className="welcome__content reveal">
                        <span className="welcome__label">Welcome</span>
                        <h2 className="welcome__title">Join Us in Celebration</h2>
                        <div className="welcome__divider"></div>
                        <p className="welcome__text">
                            With hearts full of joy and gratitude, we invite you to share in our happiness
                            as we unite in marriage. Your presence would make our special day even more
                            meaningful and memorable.
                        </p>
                        <p className="welcome__text">
                            Together with our families, we look forward to celebrating this beautiful
                            milestone surrounded by the people we love most.
                        </p>
                        <div className="welcome__signature">
                            <span>With love,</span>
                            <span className="welcome__signature-names">JD & Joi</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="events">
                <div className="events__container">
                    <div className="events__header reveal">
                        <span className="events__label">Save the Date</span>
                        <h2 className="events__title">Wedding Events</h2>
                    </div>

                    <div className="events__grid">
                        <div className="events__card reveal">
                            <div className="events__card-icon">💒</div>
                            <span className="events__card-label">The Ceremony</span>
                            <h3 className="events__card-title">Holy Matrimony</h3>
                            <div className="events__card-time">3:00 PM</div>
                            <p className="events__card-venue">Church Ceremony</p>
                            <p className="events__card-address">Alfonso, Cavite</p>
                        </div>

                        <div className="events__card events__card--featured reveal">
                            <div className="events__card-badge">Main Event</div>
                            <div className="events__card-date">
                                <span className="events__card-date-month">June</span>
                                <span className="events__card-date-day">21</span>
                                <span className="events__card-date-year">2026</span>
                            </div>
                            <div className="events__card-hearts">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                </svg>
                            </div>
                        </div>

                        <div className="events__card reveal">
                            <div className="events__card-icon">🎉</div>
                            <span className="events__card-label">The Celebration</span>
                            <h3 className="events__card-title">Reception Party</h3>
                            <div className="events__card-time">5:00 PM</div>
                            <p className="events__card-venue">Dinner & Dancing</p>
                            <p className="events__card-address">Same Venue</p>
                        </div>
                    </div>

                    <div className="events__cta reveal">
                        <Link href="/event-details" className="events__button">
                            View Full Details
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="quote-section">
                <div className="quote-section__parallax"></div>
                <div className="quote-section__overlay"></div>
                <div className="quote-section__content">
                    <blockquote className="quote-section__quote reveal">
                        <p>Whatever our souls are made of, his and mine are the same.</p>
                        <cite>— Emily Brontë</cite>
                    </blockquote>
                </div>
            </section>

            <section className="rsvp-section">
                <div className="rsvp-section__container">
                    <div className="rsvp-section__content reveal">
                        <span className="rsvp-section__label">Be Our Guest</span>
                        <h2 className="rsvp-section__title">Join Our Celebration</h2>
                        <p className="rsvp-section__text">
                            We would be honored to have you celebrate with us. Please let us know
                            if you can make it by May 21, 2026.
                        </p>
                        <Link href="/rsvp" className="rsvp-section__button">RSVP Now</Link>
                    </div>
                </div>
                <div className="rsvp-section__bg-text">RSVP</div>
            </section>

            <Footer />
        </main>
    );
}
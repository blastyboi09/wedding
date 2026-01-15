'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import './page.scss';

const WEDDING_DATE = '2026-06-21T15:00:00';

export default function Home() {
    const parallaxRef = useRef<HTMLDivElement>(null);

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

    return (
        <main className="home">
            <Navbar />

            <section className="hero">
                <div className="hero__parallax" ref={parallaxRef}>
                    <div className="hero__bg-pattern"></div>
                </div>
                <div className="hero__overlay"></div>
                
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

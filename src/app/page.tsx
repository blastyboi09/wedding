'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('active')),
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="home">
            <Navbar />

            <section className="hero">
                <div className="hero__content">
                    <p className="hero__kicker">Together with their families</p>
                    <h1 className="hero__title">
                        <span>JD</span>
                        <small>and</small>
                        <span>Joi</span>
                    </h1>
                    <div className="hero__rule" />
                    <p className="hero__invitation">Invite you to celebrate their wedding</p>
                    <p className="hero__date">Sunday, June 21, 2026</p>
                    <p className="hero__venue">Maple Events by Solange, Esperanza Ilaya, Alfonso, Cavite</p>
                    <div className="hero__cta">
                        <Link href="/event-details" className="hero__button hero__button--primary">Wedding Details</Link>
                        <Link href="/our-story" className="hero__button hero__button--outline">Our Story</Link>
                    </div>
                </div>
            </section>

            <section className="quick-details">
                <div className="quick-details__container">
                    <Link href="/event-details" className="quick-details__item reveal">
                        <span>Ceremony</span>
                        <strong>3:00 PM</strong>
                        <small>Garden Area</small>
                    </Link>
                    <Link href="/event-details" className="quick-details__item reveal">
                        <span>Reception</span>
                        <strong>5:00 PM</strong>
                        <small>Reception Area</small>
                    </Link>
                    <Link href="/event-details" className="quick-details__item reveal">
                        <span>Place</span>
                        <strong>Alfonso, Cavite</strong>
                        <small>Esperanza Ilaya</small>
                    </Link>
                </div>
            </section>

            <section className="welcome">
                <div className="welcome__container">
                    <div className="welcome__content reveal">
                        <span className="welcome__label">Welcome</span>
                        <h2 className="welcome__title">Join Us in Celebration</h2>
                        <p>
                            With hearts full of joy and gratitude, we invite you to share in our happiness
                            as we unite in marriage. Your presence would make our special day even more
                            meaningful and memorable.
                        </p>
                        <p>
                            Together with our families, we look forward to celebrating this beautiful
                            milestone surrounded by the people we love most.
                        </p>
                    </div>
                    <div className="welcome__photo reveal">
                        <span>Photo soon</span>
                    </div>
                </div>
            </section>

            <section className="events">
                <div className="events__container">
                    <div className="events__header reveal">
                        <span>Save the Date</span>
                        <h2>Wedding Events</h2>
                    </div>

                    <div className="events__grid">
                        <article className="events__card reveal">
                            <span className="events__number">I</span>
                            <p className="events__label">The Ceremony</p>
                            <h3>Holy Matrimony</h3>
                            <strong>3:00 PM</strong>
                            <p>Maple Events by Solange - Garden Area</p>
                        </article>

                        <article className="events__date-card reveal">
                            <span>June</span>
                            <strong>21</strong>
                            <span>2026</span>
                            <p>Two become one</p>
                        </article>

                        <article className="events__card reveal">
                            <span className="events__number">II</span>
                            <p className="events__label">The Celebration</p>
                            <h3>Reception Party</h3>
                            <strong>5:00 PM</strong>
                            <p>Maple Events by Solange - Reception Area</p>
                        </article>
                    </div>

                    <div className="events__cta reveal">
                        <Link href="/event-details" className="events__button">View Full Details</Link>
                    </div>
                </div>
            </section>

            <section className="quote-section">
                <blockquote className="quote-section__quote reveal">
                    <p>Whatever our souls are made of, his and mine are the same.</p>
                    <cite>Emily Bronte</cite>
                </blockquote>
            </section>

            <Footer />
        </main>
    );
}

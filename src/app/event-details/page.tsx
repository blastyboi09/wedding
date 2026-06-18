'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/14.5522688,121.0482688/14.11471,120.8809/@14.116519,120.8766189,17.4z';

const schedule = [
    { time: '2:30 PM', event: 'Guests Arrive' },
    { time: '3:00 PM', event: 'Wedding Ceremony' },
    { time: '4:00 PM', event: 'Cocktail Hour' },
    { time: '5:00 PM', event: 'Reception Begins' },
    { time: '6:00 PM', event: 'Dinner Service' },
    { time: '8:00 PM', event: 'Party & Dancing' },
    { time: '10:00 PM', event: 'Send Off' },
];

const colors = [
    { name: 'Dusty Blue', color: '#9EB7CF' },
    { name: 'Pastel Pink', color: '#EFB7C8' },
    { name: 'Sage', color: '#C9D9C9' },
    { name: 'Lavender', color: '#E6D8F2' },
    { name: 'Cream', color: '#FFFDF8' },
];

export default function EventDetails() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('active')),
            { threshold: 0.1 }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="details">
            <Navbar />

            <section className="details__hero">
                <div className="details__hero-content">
                    <span>Save The Date</span>
                    <h1>Event Details</h1>
                    <p>June 21, 2026 / Alfonso, Cavite</p>
                </div>
            </section>

            <section className="details__events">
                <div className="details__events-container">
                    <article className="details__event-card reveal">
                        <span className="details__event-number">I</span>
                        <p className="details__event-label">The Ceremony</p>
                        <h2>Holy Matrimony</h2>
                        <strong>3:00 PM</strong>
                        <p>Maple Events by Solange - Garden Area</p>
                        <small>Esperanza Ilaya, Alfonso, Cavite</small>
                        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">View on Map</a>
                    </article>

                    <article className="details__date-card reveal">
                        <span>June</span>
                        <strong>21</strong>
                        <span>2026</span>
                        <p>Two become one</p>
                    </article>

                    <article className="details__event-card reveal">
                        <span className="details__event-number">II</span>
                        <p className="details__event-label">The Celebration</p>
                        <h2>Reception Party</h2>
                        <strong>5:00 PM</strong>
                        <p>Maple Events by Solange - Reception Area</p>
                        <small>Esperanza Ilaya, Alfonso, Cavite</small>
                        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">View on Map</a>
                    </article>
                </div>
            </section>

            <section className="details__schedule">
                <div className="details__schedule-container">
                    <div className="details__section-header reveal">
                        <span>Timeline</span>
                        <h2>Day Schedule</h2>
                    </div>
                    <div className="details__schedule-list">
                        {schedule.map((item, index) => (
                            <article key={item.time} className="details__schedule-item reveal">
                                <small>{String(index + 1).padStart(2, '0')}</small>
                                <strong>{item.time}</strong>
                                <span>{item.event}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="details__dresscode">
                <div className="details__dresscode-content reveal">
                    <span>What to Wear</span>
                    <h2>Dress Code</h2>
                    <h3>Semi-Formal / Garden Chic</h3>
                    <p>
                        We kindly request our guests to dress in semi-formal attire.
                        Think elegant and comfortable, perfect for a beautiful garden celebration.
                    </p>
                    <div className="details__colors">
                        {colors.map((color) => (
                            <div key={color.name} className="details__color">
                                <i style={{ background: color.color }} />
                                <span>{color.name}</span>
                            </div>
                        ))}
                    </div>
                    <p className="details__note">Please avoid wearing white or ivory as these are reserved for the bride.</p>
                </div>
            </section>

            <section className="details__map-section">
                <div className="details__map-container">
                    <div className="details__map-info reveal">
                        <span>Location</span>
                        <h2>Find Your Way</h2>
                        <p><strong>Esperanza Ilaya</strong><br />Alfonso, Cavite, Philippines</p>
                        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </div>
                    <div className="details__map-embed reveal">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.1!2d120.8809!3d14.11471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA2JzUzLjAiTiAxMjDCsDUyJzUxLjIiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                            title="Wedding Venue Map"
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

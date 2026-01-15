'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/14.5522688,121.0482688/14.11471,120.8809/@14.116519,120.8766189,17.4z';

const schedule = [
    { time: '2:30 PM', event: 'Guests Arrive', icon: '🚗' },
    { time: '3:00 PM', event: 'Wedding Ceremony', icon: '💒' },
    { time: '4:00 PM', event: 'Cocktail Hour', icon: '🥂' },
    { time: '5:00 PM', event: 'Reception Begins', icon: '🎉' },
    { time: '6:00 PM', event: 'Dinner Service', icon: '🍽️' },
    { time: '8:00 PM', event: 'Party & Dancing', icon: '💃' },
    { time: '10:00 PM', event: 'Send Off', icon: '✨' },
];

const colors = [
    { name: 'Sage', color: '#9CAF88' },
    { name: 'Blush', color: '#E8D5D3' },
    { name: 'Lavender', color: '#C9C0D3' },
    { name: 'Cream', color: '#F5F1EC' },
    { name: 'Gold', color: '#C4A77D' },
];

export default function EventDetails() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="details">
            <Navbar />

            <section className="details__hero">
                <div className="details__hero-bg"></div>
                <div className="details__hero-overlay"></div>
                <div className="details__hero-content">
                    <span className="details__hero-label">Save The Date</span>
                    <h1 className="details__hero-title">Event Details</h1>
                    <p className="details__hero-date">June 21, 2026 • Alfonso, Cavite</p>
                </div>
            </section>

            <section className="details__events">
                <div className="details__events-container">
                    <div className="details__event-card reveal">
                        <div className="details__event-icon">💒</div>
                        <span className="details__event-label">The Ceremony</span>
                        <h2 className="details__event-title">Holy Matrimony</h2>
                        <div className="details__event-time">3:00 PM</div>
                        <p className="details__event-venue">Church Ceremony</p>
                        <p className="details__event-address">Esperanza Ilaya, Alfonso, Cavite</p>
                        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="details__event-map">
                            📍 View on Map
                        </a>
                    </div>

                    <div className="details__event-card details__event-card--featured reveal">
                        <div className="details__event-date">
                            <span className="details__event-date-day">21</span>
                            <span className="details__event-date-month">June</span>
                            <span className="details__event-date-year">2026</span>
                        </div>
                        <div className="details__event-divider"></div>
                        <p className="details__event-tagline">Two become one</p>
                    </div>

                    <div className="details__event-card reveal">
                        <div className="details__event-icon">🎉</div>
                        <span className="details__event-label">The Celebration</span>
                        <h2 className="details__event-title">Reception Party</h2>
                        <div className="details__event-time">5:00 PM</div>
                        <p className="details__event-venue">Dinner & Dancing</p>
                        <p className="details__event-address">Same Venue</p>
                        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="details__event-map">
                            📍 View on Map
                        </a>
                    </div>
                </div>
            </section>

            <section className="details__schedule">
                <div className="details__schedule-container">
                    <div className="details__schedule-header reveal">
                        <span className="details__schedule-label">Timeline</span>
                        <h2 className="details__schedule-title">Day Schedule</h2>
                    </div>

                    <div className="details__schedule-grid">
                        {schedule.map((item, index) => (
                            <div key={index} className="details__schedule-item reveal">
                                <span className="details__schedule-icon">{item.icon}</span>
                                <div className="details__schedule-content">
                                    <span className="details__schedule-time">{item.time}</span>
                                    <span className="details__schedule-event">{item.event}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="details__dresscode">
                <div className="details__dresscode-container">
                    <div className="details__dresscode-content reveal">
                        <span className="details__dresscode-label">What to Wear</span>
                        <h2 className="details__dresscode-title">Dress Code</h2>
                        <h3 className="details__dresscode-type">Semi-Formal / Garden Chic</h3>
                        <p className="details__dresscode-text">
                            We kindly request our guests to dress in semi-formal attire. 
                            Think elegant and comfortable – perfect for a beautiful celebration.
                        </p>

                        <div className="details__colors">
                            <h4>Suggested Colors</h4>
                            <div className="details__colors-grid">
                                {colors.map((c) => (
                                    <div key={c.name} className="details__color" style={{ background: c.color }}>
                                        <span>{c.name}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="details__colors-note">
                                Please avoid wearing white or ivory as these are reserved for the bride.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="details__map-section">
                <div className="details__map-container">
                    <div className="details__map-info reveal">
                        <span className="details__map-label">Location</span>
                        <h2 className="details__map-title">Find Your Way</h2>
                        <div className="details__map-address">
                            <p><strong>Esperanza Ilaya</strong></p>
                            <p>Alfonso, Cavite, Philippines</p>
                        </div>
                        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="details__map-button">
                            Get Directions →
                        </a>
                    </div>
                    <div className="details__map-embed reveal">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.1!2d120.8809!3d14.11471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA2JzUzLjAiTiAxMjDCsDUyJzUxLjIiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                            width="100%"
                            height="400"
                            style={{ border: 0, borderRadius: '20px' }}
                            allowFullScreen
                            loading="lazy"
                            title="Wedding Venue Map"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

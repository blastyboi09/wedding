import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

export default function EventDetails() {
    return (
        <main className="event-details">
            <Navbar />

            {/* Hero Section */}
            <section className="event-details__hero">
                <div className="event-details__hero-content">
                    <h1 className="event-details__title">Event Details</h1>
                    <div className="event-details__divider">
                        <span>❀</span>
                    </div>
                    <p className="event-details__subtitle">
                        June 21, 2026 • Manila, Philippines
                    </p>
                </div>
            </section>

            {/* Events Section */}
            <section className="event-details__events">
                <div className="event-details__events-container">
                    
                    {/* Ceremony Card */}
                    <div className="event-details__card">
                        <div className="event-details__card-icon">💒</div>
                        <h2 className="event-details__card-title">The Ceremony</h2>
                        <div className="event-details__card-divider"></div>
                        
                        <div className="event-details__info">
                            <div className="event-details__info-item">
                                <span className="event-details__info-icon">🕐</span>
                                <div>
                                    <h4>Time</h4>
                                    <p>2:00 PM</p>
                                </div>
                            </div>
                            
                            <div className="event-details__info-item">
                                <span className="event-details__info-icon">📍</span>
                                <div>
                                    <h4>Venue</h4>
                                    <p>Church Name Here</p>
                                    <p className="event-details__address">
                                        123 Church Street, City, Philippines
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="https://maps.google.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="event-details__map-btn"
                        >
                            View on Map →
                        </a>
                    </div>

                    {/* Reception Card */}
                    <div className="event-details__card">
                        <div className="event-details__card-icon">🎉</div>
                        <h2 className="event-details__card-title">The Reception</h2>
                        <div className="event-details__card-divider"></div>
                        
                        <div className="event-details__info">
                            <div className="event-details__info-item">
                                <span className="event-details__info-icon">🕐</span>
                                <div>
                                    <h4>Time</h4>
                                    <p>5:00 PM - 10:00 PM</p>
                                </div>
                            </div>
                            
                            <div className="event-details__info-item">
                                <span className="event-details__info-icon">📍</span>
                                <div>
                                    <h4>Venue</h4>
                                    <p>Reception Venue Name</p>
                                    <p className="event-details__address">
                                        456 Venue Avenue, City, Philippines
                                    </p>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="https://maps.google.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="event-details__map-btn"
                        >
                            View on Map →
                        </a>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="event-details__schedule">
                <h2 className="event-details__section-title">Day Schedule</h2>
                <div className="event-details__section-divider">
                    <span>🌿</span>
                </div>

                <div className="event-details__schedule-container">
                    <div className="event-details__schedule-item">
                        <span className="event-details__schedule-time">1:30 PM</span>
                        <span className="event-details__schedule-dot"></span>
                        <span className="event-details__schedule-event">Guests Arrive at Church</span>
                    </div>
                    <div className="event-details__schedule-item">
                        <span className="event-details__schedule-time">2:00 PM</span>
                        <span className="event-details__schedule-dot"></span>
                        <span className="event-details__schedule-event">Wedding Ceremony</span>
                    </div>
                    <div className="event-details__schedule-item">
                        <span className="event-details__schedule-time">3:30 PM</span>
                        <span className="event-details__schedule-dot"></span>
                        <span className="event-details__schedule-event">Photo Session</span>
                    </div>
                    <div className="event-details__schedule-item">
                        <span className="event-details__schedule-time">5:00 PM</span>
                        <span className="event-details__schedule-dot"></span>
                        <span className="event-details__schedule-event">Cocktail Hour</span>
                    </div>
                    <div className="event-details__schedule-item">
                        <span className="event-details__schedule-time">6:00 PM</span>
                        <span className="event-details__schedule-dot"></span>
                        <span className="event-details__schedule-event">Reception & Dinner</span>
                    </div>
                    <div className="event-details__schedule-item">
                        <span className="event-details__schedule-time">8:00 PM</span>
                        <span className="event-details__schedule-dot"></span>
                        <span className="event-details__schedule-event">Party & Dancing</span>
                    </div>
                    <div className="event-details__schedule-item">
                        <span className="event-details__schedule-time">10:00 PM</span>
                        <span className="event-details__schedule-dot"></span>
                        <span className="event-details__schedule-event">Send Off</span>
                    </div>
                </div>
            </section>

            {/* Dress Code Section */}
            <section className="event-details__dresscode">
                <div className="event-details__dresscode-container">
                    <h2 className="event-details__section-title">Dress Code</h2>
                    <div className="event-details__section-divider">
                        <span>👗</span>
                    </div>

                    <div className="event-details__dresscode-content">
                        <h3>Semi-Formal / Garden Chic</h3>
                        <p>
                            We kindly request our guests to dress in semi-formal attire. 
                            Think elegant and comfortable – perfect for a beautiful garden celebration.
                        </p>

                        <div className="event-details__color-palette">
                            <h4>Suggested Color Palette</h4>
                            <div className="event-details__colors">
                                <div className="event-details__color" style={{ background: '#9CAF88' }}>
                                    <span>Sage</span>
                                </div>
                                <div className="event-details__color" style={{ background: '#E8D5D3' }}>
                                    <span>Blush</span>
                                </div>
                                <div className="event-details__color" style={{ background: '#D4C4DB' }}>
                                    <span>Lavender</span>
                                </div>
                                <div className="event-details__color" style={{ background: '#FDF8F5' }}>
                                    <span>Cream</span>
                                </div>
                                <div className="event-details__color" style={{ background: '#C9A86C' }}>
                                    <span>Gold</span>
                                </div>
                            </div>
                            <p className="event-details__color-note">
                                Please avoid wearing white or ivory, as these are reserved for the bride.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

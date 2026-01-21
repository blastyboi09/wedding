'use client';

import React, { useEffect, useState } from 'react';
import './page.scss';

const WEDDING_DATE = new Date('2026-06-21T15:00:00');

const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'details', label: 'Details' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'rsvp', label: 'RSVP' },
];

// Clean watercolor flower components
const WatercolorCornflower = ({ size = 60, className = '' }: { size?: number; className?: string }) => (
    <svg width={size} height={size * 1.5} viewBox="0 0 60 90" className={`watercolor-flower ${className}`}>
        <defs>
            <filter id="watercolorBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
            </filter>
            <radialGradient id="cornflowerGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8BB8D9" />
                <stop offset="70%" stopColor="#6A9FC9" />
                <stop offset="100%" stopColor="#5889B8" stopOpacity="0.8" />
            </radialGradient>
        </defs>
        <g filter="url(#watercolorBlur)">
            {/* Petals */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <ellipse
                    key={i}
                    cx="30"
                    cy="15"
                    rx="6"
                    ry="15"
                    fill="url(#cornflowerGrad)"
                    opacity={0.85 - (i % 2) * 0.1}
                    transform={`rotate(${angle} 30 30)`}
                />
            ))}
            {/* Center */}
            <circle cx="30" cy="30" r="8" fill="#5080A8" />
            <circle cx="30" cy="30" r="4" fill="#FFE57A" opacity="0.9" />
        </g>
        {/* Stem */}
        <path d="M30 45 Q28 60 30 85" stroke="#6B9E7A" strokeWidth="2" fill="none" opacity="0.7" />
        <ellipse cx="24" cy="65" rx="5" ry="10" fill="#8FBC8F" opacity="0.5" transform="rotate(-25 24 65)" />
    </svg>
);

const WatercolorDaisy = ({ size = 50, className = '' }: { size?: number; className?: string }) => (
    <svg width={size} height={size * 1.4} viewBox="0 0 50 70" className={`watercolor-flower ${className}`}>
        <defs>
            <filter id="daisyBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
            </filter>
            <radialGradient id="daisyGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="80%" stopColor="#FFF8F0" />
                <stop offset="100%" stopColor="#F0E8E0" stopOpacity="0.7" />
            </radialGradient>
        </defs>
        <g filter="url(#daisyBlur)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                <ellipse
                    key={i}
                    cx="25"
                    cy="10"
                    rx="4"
                    ry="12"
                    fill="url(#daisyGrad)"
                    opacity={0.92 - (i % 3) * 0.05}
                    transform={`rotate(${angle} 25 25)`}
                />
            ))}
            <circle cx="25" cy="25" r="7" fill="#FFD640" />
            <circle cx="23" cy="23" r="2" fill="#FFBF00" opacity="0.5" />
        </g>
        <path d="M25 38 Q23 50 25 65" stroke="#7AAE7A" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
);

const WatercolorForgetMeNot = ({ size = 25, className = '' }: { size?: number; className?: string }) => (
    <svg width={size} height={size * 1.6} viewBox="0 0 25 40" className={`watercolor-flower ${className}`}>
        <defs>
            <radialGradient id="forgetGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#B8D4F0" />
                <stop offset="100%" stopColor="#90B8D8" stopOpacity="0.8" />
            </radialGradient>
        </defs>
        {[0, 72, 144, 216, 288].map((angle, i) => (
            <ellipse
                key={i}
                cx="12.5"
                cy="6"
                rx="4"
                ry="7"
                fill="url(#forgetGrad)"
                opacity="0.85"
                transform={`rotate(${angle} 12.5 12.5)`}
            />
        ))}
        <circle cx="12.5" cy="12.5" r="3" fill="#FFE566" />
        <path d="M12.5 20 Q11 28 12.5 38" stroke="#7CB889" strokeWidth="1" fill="none" opacity="0.5" />
    </svg>
);

const WatercolorButtercup = ({ size = 35, className = '' }: { size?: number; className?: string }) => (
    <svg width={size} height={size * 1.4} viewBox="0 0 35 50" className={`watercolor-flower ${className}`}>
        <defs>
            <radialGradient id="butterGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF8D0" />
                <stop offset="100%" stopColor="#FFE566" stopOpacity="0.85" />
            </radialGradient>
        </defs>
        {[0, 72, 144, 216, 288].map((angle, i) => (
            <ellipse
                key={i}
                cx="17.5"
                cy="7"
                rx="5"
                ry="9"
                fill="url(#butterGrad)"
                opacity="0.88"
                transform={`rotate(${angle} 17.5 17.5)`}
            />
        ))}
        <circle cx="17.5" cy="17.5" r="4" fill="#FFB830" />
        <path d="M17.5 26 Q16 36 17.5 48" stroke="#8AAE8A" strokeWidth="1.2" fill="none" opacity="0.5" />
    </svg>
);

export default function Home() {
    const [activeSection, setActiveSection] = useState('home');
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    // Countdown
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = WEDDING_DATE.getTime() - now;
            if (distance > 0) {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Scroll observer for active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveSection(entry.target.id);
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.section').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="wedding-site">
            {/* Navigation */}
            <nav className="nav">
                <div className="nav__logo" onClick={() => scrollTo('home')}>J & J</div>
                <ul className="nav__links">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.id}>
                            <button
                                className={`nav__link ${activeSection === item.id ? 'active' : ''}`}
                                onClick={() => scrollTo(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Scroll Container */}
            <div className="scroll-container">

                {/* ==================== HOME ==================== */}
                <section id="home" className="section section--home">
                    {/* Organic curves */}
                    <svg className="organic-curve curve-left-1" viewBox="0 0 400 1000" preserveAspectRatio="none">
                        <path d="M0,0 L150,0 C200,150 180,300 220,450 C260,600 200,750 250,900 C280,1000 200,1000 0,1000 Z" fill="#F5D6DC"/>
                    </svg>
                    <svg className="organic-curve curve-left-2" viewBox="0 0 350 1000" preserveAspectRatio="none">
                        <path d="M0,0 L100,0 C150,120 120,280 160,420 C200,560 140,720 180,880 C200,1000 100,1000 0,1000 Z" fill="#FAE4E8"/>
                    </svg>
                    <svg className="organic-curve curve-right-1" viewBox="0 0 400 1000" preserveAspectRatio="none">
                        <path d="M400,0 L250,0 C200,130 230,290 190,440 C150,590 210,740 160,890 C130,1000 250,1000 400,1000 Z" fill="#F5D6DC"/>
                    </svg>
                    <svg className="organic-curve curve-right-2" viewBox="0 0 350 1000" preserveAspectRatio="none">
                        <path d="M350,0 L280,0 C230,100 260,250 220,400 C180,550 240,700 200,850 C170,1000 280,1000 350,1000 Z" fill="#FAE4E8"/>
                    </svg>

                    {/* Flower decorations - clean positioning */}
                    <div className="flowers flowers--top-right">
                        <WatercolorCornflower size={55} className="flower-1" />
                        <WatercolorDaisy size={45} className="flower-2" />
                        <WatercolorForgetMeNot size={22} className="flower-3" />
                        <WatercolorForgetMeNot size={18} className="flower-4" />
                        <WatercolorButtercup size={28} className="flower-5" />
                    </div>
                    <div className="flowers flowers--top-left">
                        <WatercolorCornflower size={50} className="flower-1" />
                        <WatercolorForgetMeNot size={20} className="flower-2" />
                        <WatercolorDaisy size={40} className="flower-3" />
                    </div>
                    <div className="flowers flowers--bottom">
                        <WatercolorCornflower size={60} className="flower-1" />
                        <WatercolorDaisy size={50} className="flower-2" />
                        <WatercolorCornflower size={55} className="flower-3" />
                        <WatercolorForgetMeNot size={25} className="flower-4" />
                        <WatercolorButtercup size={32} className="flower-5" />
                        <WatercolorDaisy size={45} className="flower-6" />
                        <WatercolorForgetMeNot size={22} className="flower-7" />
                        <WatercolorCornflower size={50} className="flower-8" />
                    </div>

                    {/* Central card */}
                    <div className="central-card">
                        <svg className="card-bg" viewBox="0 0 380 520" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <filter id="cardShadow">
                                    <feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="#5A7A9A" floodOpacity="0.35"/>
                                </filter>
                            </defs>
                            <path
                                d="M40,0 L340,0 L340,380 Q340,480 190,510 Q40,480 40,380 Z"
                                fill="#A8C5D8"
                                filter="url(#cardShadow)"
                            />
                        </svg>
                        <div className="card-content">
                            <p className="intro">By the grace of God<br/>and with a joyful heart</p>
                            <p className="we">We,</p>
                            <h1 className="names">
                                <span className="name-1">JD</span>
                                <span className="name-and">and</span>
                                <span className="name-2">Joi</span>
                            </h1>
                            <p className="invite">Invite you to witness the beginning of our<br/>forever as we exchange vows and<br/>celebrate our love.</p>
                            <div className="date-info">
                                <span className="day-name">Sunday</span>
                                <span className="full-date">June 21, 2026</span>
                                <span className="venue">Esperanza Ilaya, Alfonso, Cavite</span>
                            </div>
                            <div className="countdown">
                                <div className="countdown-item">
                                    <span className="num">{timeLeft.days}</span>
                                    <span className="label">Days</span>
                                </div>
                                <span className="sep">:</span>
                                <div className="countdown-item">
                                    <span className="num">{String(timeLeft.hours).padStart(2, '0')}</span>
                                    <span className="label">Hours</span>
                                </div>
                                <span className="sep">:</span>
                                <div className="countdown-item">
                                    <span className="num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                    <span className="label">Min</span>
                                </div>
                                <span className="sep">:</span>
                                <div className="countdown-item">
                                    <span className="num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                    <span className="label">Sec</span>
                                </div>
                            </div>
                            <button className="cta-btn" onClick={() => scrollTo('rsvp')}>RSVP Now</button>
                        </div>
                    </div>

                    <div className="scroll-hint">
                        <span>Scroll</span>
                        <div className="arrow"></div>
                    </div>
                </section>

                {/* ==================== OUR STORY ==================== */}
                <section id="story" className="section section--story">
                    <svg className="organic-curve curve-accent-left" viewBox="0 0 300 1000" preserveAspectRatio="none">
                        <path d="M0,0 C100,200 80,400 120,600 C160,800 60,1000 0,1000 Z" fill="#D4E8D4"/>
                    </svg>
                    <svg className="organic-curve curve-accent-right" viewBox="0 0 300 1000" preserveAspectRatio="none">
                        <path d="M300,0 C200,180 220,380 180,580 C140,780 240,1000 300,1000 Z" fill="#E4EEF4"/>
                    </svg>

                    <div className="flowers flowers--corner-tl">
                        <WatercolorCornflower size={45} className="flower-1" />
                        <WatercolorForgetMeNot size={20} className="flower-2" />
                    </div>
                    <div className="flowers flowers--corner-br">
                        <WatercolorDaisy size={42} className="flower-1" />
                        <WatercolorButtercup size={28} className="flower-2" />
                    </div>

                    <div className="content">
                        <div className="section-title">
                            <span className="tag">Our Journey</span>
                            <h2>Our Love Story</h2>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="year">2020</div>
                                <div className="card">
                                    <h3>First Met</h3>
                                    <p>Our paths crossed for the first time, and little did we know it would change our lives forever.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="year">2021</div>
                                <div className="card">
                                    <h3>First Date</h3>
                                    <p>What started as a simple coffee turned into hours of conversation and the beginning of something beautiful.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="year">2024</div>
                                <div className="card">
                                    <h3>The Proposal</h3>
                                    <p>With hearts full of love, we decided to spend forever together.</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="year">2026</div>
                                <div className="card">
                                    <h3>Forever Begins</h3>
                                    <p>We can&apos;t wait to say &quot;I do&quot; and start our greatest adventure yet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================== DETAILS ==================== */}
                <section id="details" className="section section--details">
                    <svg className="organic-curve curve-soft-left" viewBox="0 0 350 1000" preserveAspectRatio="none">
                        <path d="M0,0 C120,150 80,350 140,550 C200,750 80,900 0,1000 Z" fill="#FAE8EC"/>
                    </svg>
                    <svg className="organic-curve curve-soft-right" viewBox="0 0 350 1000" preserveAspectRatio="none">
                        <path d="M350,0 C250,180 290,400 220,600 C150,800 280,950 350,1000 Z" fill="#E8F4E8"/>
                    </svg>

                    <div className="flowers flowers--side-left">
                        <WatercolorCornflower size={48} className="flower-1" />
                        <WatercolorForgetMeNot size={22} className="flower-2" />
                    </div>
                    <div className="flowers flowers--side-right">
                        <WatercolorDaisy size={44} className="flower-1" />
                        <WatercolorButtercup size={26} className="flower-2" />
                    </div>

                    <div className="content">
                        <div className="section-title">
                            <span className="tag">Save The Date</span>
                            <h2>Wedding Details</h2>
                        </div>
                        <div className="event-cards">
                            <div className="event-card">
                                <div className="icon">💒</div>
                                <h3>The Ceremony</h3>
                                <p className="time">3:00 PM</p>
                                <p>Church Ceremony</p>
                                <p className="address">Alfonso, Cavite</p>
                            </div>
                            <div className="event-card event-card--main">
                                <div className="date-display">
                                    <span className="month">June</span>
                                    <span className="day">21</span>
                                    <span className="year">2026</span>
                                </div>
                                <div className="heart">♥</div>
                            </div>
                            <div className="event-card">
                                <div className="icon">🎉</div>
                                <h3>The Reception</h3>
                                <p className="time">5:00 PM</p>
                                <p>Dinner & Dancing</p>
                                <p className="address">Esperanza Ilaya</p>
                            </div>
                        </div>
                        <div className="dress-code">
                            <h3>Dress Code</h3>
                            <p>Semi-formal / Garden Attire</p>
                            <div className="colors">
                                <span style={{background: '#F5D6DC'}}></span>
                                <span style={{background: '#A8C5D8'}}></span>
                                <span style={{background: '#C4DCC4'}}></span>
                                <span style={{background: '#FFF5CC'}}></span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ==================== GALLERY ==================== */}
                <section id="gallery" className="section section--gallery">
                    <svg className="organic-curve curve-gallery-top" viewBox="0 0 1000 200" preserveAspectRatio="none">
                        <path d="M0,0 L1000,0 L1000,100 Q750,180 500,120 Q250,60 0,150 Z" fill="#E8F0F8"/>
                    </svg>
                    <svg className="organic-curve curve-gallery-bottom" viewBox="0 0 1000 200" preserveAspectRatio="none">
                        <path d="M0,200 L1000,200 L1000,100 Q750,20 500,80 Q250,140 0,50 Z" fill="#F0E8EC"/>
                    </svg>

                    <div className="flowers flowers--gallery-tl">
                        <WatercolorDaisy size={40} className="flower-1" />
                    </div>
                    <div className="flowers flowers--gallery-br">
                        <WatercolorCornflower size={45} className="flower-1" />
                    </div>

                    <div className="content">
                        <div className="section-title">
                            <span className="tag">Memories</span>
                            <h2>Our Gallery</h2>
                        </div>
                        <div className="gallery-grid">
                            {[1, 2, 3, 4, 5, 6].map((num) => (
                                <div key={num} className={`gallery-item item-${num}`}>
                                    <div className="placeholder">Photo {num}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ==================== RSVP ==================== */}
                <section id="rsvp" className="section section--rsvp">
                    <svg className="organic-curve curve-rsvp-left" viewBox="0 0 400 1000" preserveAspectRatio="none">
                        <path d="M0,0 C150,200 100,450 180,650 C260,850 120,1000 0,1000 Z" fill="#E4F0E4"/>
                    </svg>
                    <svg className="organic-curve curve-rsvp-right" viewBox="0 0 400 1000" preserveAspectRatio="none">
                        <path d="M400,0 C280,180 340,420 260,640 C180,860 320,1000 400,1000 Z" fill="#F8E8F0"/>
                    </svg>

                    <div className="flowers flowers--rsvp-bottom">
                        <WatercolorCornflower size={52} className="flower-1" />
                        <WatercolorDaisy size={46} className="flower-2" />
                        <WatercolorForgetMeNot size={24} className="flower-3" />
                        <WatercolorButtercup size={30} className="flower-4" />
                        <WatercolorCornflower size={48} className="flower-5" />
                    </div>

                    <div className="content">
                        <div className="section-title">
                            <span className="tag">Be Our Guest</span>
                            <h2>RSVP</h2>
                        </div>
                        <p className="rsvp-text">
                            We would be honored to have you celebrate with us.<br/>
                            Please let us know if you can make it by <strong>May 21, 2026</strong>.
                        </p>
                        <form className="rsvp-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <input type="text" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email Address" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <select required defaultValue="">
                                        <option value="" disabled>Will you attend?</option>
                                        <option value="yes">Joyfully Accept</option>
                                        <option value="no">Regretfully Decline</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="number" placeholder="Number of Guests" min="0" max="5" />
                                </div>
                            </div>
                            <div className="form-group full">
                                <textarea placeholder="Message for the Couple (Optional)" rows={3}></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Send RSVP</button>
                        </form>
                    </div>
                </section>

            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-content">
                    <span className="monogram">J & J</span>
                    <p>June 21, 2026 • Alfonso, Cavite</p>
                    <p className="love">Made with ♥ for our special day</p>
                </div>
            </footer>
        </main>
    );
}
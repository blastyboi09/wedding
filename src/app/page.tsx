import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';
import Link from 'next/link';
import './page.scss';

// UPDATE THIS DATE to your actual wedding date!
const WEDDING_DATE = '2026-03-15T14:00:00';

export default function Home() {
    return (
        <main className="home">
            <Navbar />
            
            {/* Hero Section */}
            <section className="hero">
                <div className="hero__overlay"></div>
                <div className="hero__content">
                    <p className="hero__subtitle">We&apos;re Getting Married!</p>
                    <h1 className="hero__title">JD & Joi</h1>
                    <div className="hero__divider">
                        <span>❀</span>
                    </div>
                    <p className="hero__date">March 15, 2026</p>
                    <p className="hero__venue">Manila, Philippines</p>
                    
                    <CountdownTimer targetDate={WEDDING_DATE} />
                    
                    <Link href="/rsvp" className="hero__cta">
                        RSVP Now
                    </Link>
                </div>

                {/* Decorative elements */}
                <div className="hero__floral hero__floral--left">🌸</div>
                <div className="hero__floral hero__floral--right">🌸</div>
            </section>

            {/* Welcome Section */}
            <section className="welcome">
                <div className="welcome__container">
                    <h2 className="welcome__title">Welcome to Our Wedding</h2>
                    <div className="welcome__divider">
                        <span>🌿</span>
                    </div>
                    <p className="welcome__text">
                        With joyful hearts, we invite you to celebrate with us as we begin our 
                        journey together as husband and wife. Your presence would make our 
                        special day even more meaningful.
                    </p>
                    <p className="welcome__text">
                        We can&apos;t wait to share this beautiful moment with our beloved family and friends. 
                        Thank you for being part of our love story.
                    </p>
                    <Link href="/our-story" className="welcome__link">
                        Read Our Story →
                    </Link>
                </div>
            </section>

            {/* Quick Info Cards */}
            <section className="quick-info">
                <div className="quick-info__container">
                    <div className="quick-info__card">
                        <span className="quick-info__icon">💒</span>
                        <h3 className="quick-info__title">The Ceremony</h3>
                        <p className="quick-info__text">2:00 PM</p>
                        <p className="quick-info__detail">Church Name Here</p>
                    </div>
                    
                    <div className="quick-info__card">
                        <span className="quick-info__icon">🎉</span>
                        <h3 className="quick-info__title">The Reception</h3>
                        <p className="quick-info__text">5:00 PM</p>
                        <p className="quick-info__detail">Venue Name Here</p>
                    </div>
                    
                    <div className="quick-info__card">
                        <span className="quick-info__icon">👔</span>
                        <h3 className="quick-info__title">Dress Code</h3>
                        <p className="quick-info__text">Semi-Formal</p>
                        <p className="quick-info__detail">Garden Chic Attire</p>
                    </div>
                </div>
                
                <div className="quick-info__cta">
                    <Link href="/event-details" className="quick-info__button">
                        View Full Details
                    </Link>
                </div>
            </section>

            {/* RSVP Banner */}
            <section className="rsvp-banner">
                <div className="rsvp-banner__content">
                    <h2 className="rsvp-banner__title">Join Us on Our Special Day</h2>
                    <p className="rsvp-banner__text">
                        Please let us know if you can make it by February 15, 2026
                    </p>
                    <Link href="/rsvp" className="rsvp-banner__button">
                        RSVP Here
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}

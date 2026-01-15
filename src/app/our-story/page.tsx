'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const timeline = [
    { year: '2020', title: 'We First Met', description: 'Tell the story of how you first met. Was it at work? Through friends? Share the moment that started it all.' },
    { year: '2021', title: 'First Date', description: 'Describe your first date. Where did you go? What did you do? What made it memorable?' },
    { year: '2022', title: 'Made It Official', description: 'When did you become exclusive? Share that special moment when you knew this was something real.' },
    { year: '2024', title: 'The Proposal', description: 'Tell the story of the proposal. How did JD pop the question? What made it special?' },
    { year: '2026', title: 'Forever Begins', description: "And now, we're getting married! We can't wait to start this new chapter with all of you." },
];

export default function OurStory() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="story">
            <Navbar />

            <section className="story__hero">
                <div className="story__hero-bg"></div>
                <div className="story__hero-overlay"></div>
                <div className="story__hero-content">
                    <span className="story__hero-label">Our Journey</span>
                    <h1 className="story__hero-title">Our Love Story</h1>
                    <p className="story__hero-subtitle">Every love story is beautiful, but ours is our favorite</p>
                </div>
            </section>

            <section className="story__intro">
                <div className="story__intro-container">
                    <div className="story__intro-image reveal">
                        <div className="story__placeholder">
                            <span>📸</span>
                            <p>Couple Photo</p>
                        </div>
                    </div>
                    <div className="story__intro-content reveal">
                        <span className="story__intro-label">How It All Began</span>
                        <h2 className="story__intro-title">Two Hearts, One Story</h2>
                        <p className="story__intro-text">
                            Write a brief introduction to your love story here. How did fate bring you together? 
                            What made you realize this person was special?
                        </p>
                        <p className="story__intro-text">
                            Share your journey from strangers to soulmates. Your guests will love reading about 
                            the beautiful path that led you to this moment.
                        </p>
                        <div className="story__intro-signature">
                            <span>With all our love,</span>
                            <span className="story__intro-names">JD & Joi</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story__timeline">
                <div className="story__timeline-header reveal">
                    <span className="story__timeline-label">The Journey</span>
                    <h2 className="story__timeline-title">Our Milestones</h2>
                </div>

                <div className="story__timeline-container">
                    <div className="story__timeline-line"></div>
                    
                    {timeline.map((item, index) => (
                        <div key={index} className={`story__timeline-item story__timeline-item--${index % 2 === 0 ? 'left' : 'right'} reveal`}>
                            <div className="story__timeline-dot">
                                <span>{item.year}</span>
                            </div>
                            <div className="story__timeline-card">
                                <h3 className="story__timeline-card-title">{item.title}</h3>
                                <p className="story__timeline-card-text">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="story__quote">
                <div className="story__quote-bg"></div>
                <div className="story__quote-overlay"></div>
                <div className="story__quote-content reveal">
                    <blockquote>
                        &ldquo;In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.&rdquo;
                    </blockquote>
                    <cite>— Maya Angelou</cite>
                </div>
            </section>

            <Footer />
        </main>
    );
}

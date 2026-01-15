'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const timeline = [
    {
        year: '10.30.2016',
        title: 'It All Started',
        description: 'What began as a playful deal—just a game to see if Joi could even have a boyfriend—turned into something neither of us expected. Little did we know, this "not serious" arrangement would become the greatest love story of our lives.'
    },
    {
        year: '09.09.2016',
        title: 'First Date',
        description: 'Our first official date was at Infinitea on Bayani Road (now closed, but forever in our hearts). Over milk tea and conversation, we discovered that maybe this wasn\'t just a game after all.'
    },
    {
        year: '01.30.2017',
        title: 'Made It Official',
        description: 'In our classroom, JD knelt down with a promise ring and a box of Pepero. That moment, surrounded by our classmates, we knew this was real. No more games—just us, choosing each other for real this time.'
    },
    {
        year: '10.21.2025',
        title: 'The Proposal',
        description: 'After 9 years together, JD planned a surprise proposal on a rooftop in Palawan. Dark clouds threatened to ruin the moment, but as if by divine intervention, the sky cleared to reveal a perfect sunset. As JD knelt once more, this time with an engagement ring, Joi said yes!'
    },
    {
        year: '06.21.2026',
        title: 'Forever Begins',
        description: 'From a playful deal in 2016 to saying "I do" in 2026—10 years of laughter, growth, and love. We can\'t wait to start this new chapter and celebrate with all of you!'
    },
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

'use client';

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const timeline = [
    {
        year: '09.09.2016',
        title: 'First Date',
        description: 'Our first official date was at Infinitea on Bayani Road. Over milk tea and conversation, we discovered that maybe this was not just a game after all.',
    },
    {
        year: '10.30.2016',
        title: 'It All Started',
        description: 'What began as a playful deal turned into something neither of us expected. Little by little, the arrangement became the greatest love story of our lives.',
    },
    {
        year: '01.30.2017',
        title: 'Made It Official',
        description: 'In our classroom, JD knelt down with a promise ring and a box of Pepero. Surrounded by classmates, we knew this was real.',
    },
    {
        year: '10.21.2025',
        title: 'The Proposal',
        description: 'After 9 years together, JD planned a surprise proposal on a rooftop in Palawan. The clouds cleared into a perfect sunset, and Joi said yes.',
    },
    {
        year: '06.21.2026',
        title: 'Forever Begins',
        description: 'From a playful deal in 2016 to saying "I do" in 2026: 10 years of laughter, growth, and love.',
    },
];

export default function OurStory() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('active')),
            { threshold: 0.1 }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <main className="story">
            <Navbar />

            <section className="story__hero">
                <div className="story__hero-content">
                    <span>Our Journey</span>
                    <h1>Our Love Story</h1>
                    <p>Every love story is beautiful, but ours is our favorite.</p>
                </div>
            </section>

            <section className="story__intro">
                <div className="story__intro-container">
                    <div className="story__photo reveal">
                        <span>Couple photo soon</span>
                    </div>
                    <div className="story__copy reveal">
                        <span>How It All Began</span>
                        <h2>Two Hearts, One Story</h2>
                        <p>
                            Our story started with laughter, a little teasing, and a simple question:
                            what if this became something real?
                        </p>
                        <p>
                            Ten years later, we are still choosing each other through every season,
                            every dream, and every ordinary day that became special because we shared it.
                        </p>
                        <strong>JD & Joi</strong>
                    </div>
                </div>
            </section>

            <section className="story__timeline">
                <div className="story__timeline-header reveal">
                    <span>The Journey</span>
                    <h2>Our Milestones</h2>
                </div>

                <div className="story__timeline-list">
                    {timeline.map((item, index) => (
                        <article key={item.year} className="story__timeline-item reveal">
                            <div className="story__timeline-date">
                                <small>{String(index + 1).padStart(2, '0')}</small>
                                <span>{item.year}</span>
                            </div>
                            <div className="story__timeline-card">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="story__quote">
                <blockquote className="reveal">
                    <p>In all the world, there is no heart for me like yours.</p>
                    <cite>Maya Angelou</cite>
                </blockquote>
            </section>

            <Footer />
        </main>
    );
}

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

export default function OurStory() {
    const timeline = [
        {
            year: '2020',
            title: 'We First Met',
            description: 'Tell the story of how you first met. Was it at work? Through friends? Online? Share the special moment that started it all.',
            icon: '💫'
        },
        {
            year: '2021',
            title: 'First Date',
            description: 'Describe your first date. Where did you go? What did you do? What made it memorable?',
            icon: '☕'
        },
        {
            year: '2022',
            title: 'Made It Official',
            description: 'When did you become exclusive? Share that special moment when you knew this was something real.',
            icon: '💑'
        },
        {
            year: '2024',
            title: 'The Proposal',
            description: 'Tell the story of the proposal. How did JD pop the question? What made it special?',
            icon: '💍'
        },
        {
            year: '2026',
            title: 'Forever Begins',
            description: "And now, we're getting married! We can't wait to start this new chapter together with all of you.",
            icon: '💒'
        }
    ];

    return (
        <main className="our-story">
            <Navbar />

            {/* Hero Section */}
            <section className="our-story__hero">
                <div className="our-story__hero-content">
                    <h1 className="our-story__title">Our Love Story</h1>
                    <div className="our-story__divider">
                        <span>❀</span>
                    </div>
                    <p className="our-story__subtitle">
                        Every love story is beautiful, but ours is our favorite
                    </p>
                </div>
            </section>

            {/* Story Introduction */}
            <section className="our-story__intro">
                <div className="our-story__intro-container">
                    <div className="our-story__intro-image">
                        {/* Replace with actual couple photo */}
                        <div className="our-story__placeholder-image">
                            <span>📸</span>
                            <p>Couple Photo</p>
                        </div>
                    </div>
                    <div className="our-story__intro-text">
                        <h2>How It All Began</h2>
                        <p>
                            Write a brief introduction to your love story here. 
                            How did fate bring you together? What made you realize 
                            this person was special?
                        </p>
                        <p>
                            Share your journey from strangers to soulmates. 
                            Your guests will love reading about the beautiful 
                            path that led you to this moment.
                        </p>
                        <div className="our-story__signature">
                            - JD & Joi
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="our-story__timeline">
                <h2 className="our-story__timeline-title">Our Journey Together</h2>
                <div className="our-story__timeline-divider">
                    <span>🌿</span>
                </div>
                
                <div className="our-story__timeline-container">
                    {timeline.map((item, index) => (
                        <div 
                            key={index} 
                            className={`our-story__timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="our-story__timeline-content">
                                <span className="our-story__timeline-icon">{item.icon}</span>
                                <span className="our-story__timeline-year">{item.year}</span>
                                <h3 className="our-story__timeline-heading">{item.title}</h3>
                                <p className="our-story__timeline-text">{item.description}</p>
                            </div>
                        </div>
                    ))}
                    
                    {/* Timeline line */}
                    <div className="our-story__timeline-line"></div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="our-story__quote">
                <div className="our-story__quote-container">
                    <blockquote>
                        &quot;In all the world, there is no heart for me like yours. 
                        In all the world, there is no love for you like mine.&quot;
                    </blockquote>
                    <cite>- Maya Angelou</cite>
                </div>
            </section>

            <Footer />
        </main>
    );
}

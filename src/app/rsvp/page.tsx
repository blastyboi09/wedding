'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

export default function RSVP() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        attending: '',
        guests: '1',
        dietary: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('RSVP Data:', formData);
        setIsSubmitted(true);
    };

    return (
        <main className="rsvp">
            <Navbar />

            <section className="rsvp__hero">
                <div className="rsvp__hero-bg"></div>
                <div className="rsvp__hero-overlay"></div>
                <div className="rsvp__hero-content">
                    <span className="rsvp__hero-label">We Hope You Can Make It</span>
                    <h1 className="rsvp__hero-title">RSVP</h1>
                    <p className="rsvp__hero-subtitle">Please respond by May 21, 2026</p>
                </div>
            </section>

            <section className="rsvp__content">
                <div className="rsvp__container">
                    {!isSubmitted ? (
                        <form className="rsvp__form reveal" onSubmit={handleSubmit}>
                            <div className="rsvp__form-header">
                                <h2>Will You Be Joining Us?</h2>
                                <p>Kindly fill out the form below to let us know if you&apos;ll be attending our special day.</p>
                            </div>

                            <div className="rsvp__form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="rsvp__form-group">
                                <label htmlFor="email">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="rsvp__form-group">
                                <label>Will you be attending? *</label>
                                <div className="rsvp__radio-group">
                                    <label className={`rsvp__radio ${formData.attending === 'yes' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="attending"
                                            value="yes"
                                            checked={formData.attending === 'yes'}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span className="rsvp__radio-icon">✓</span>
                                        <span>Joyfully Accept</span>
                                    </label>
                                    <label className={`rsvp__radio ${formData.attending === 'no' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="attending"
                                            value="no"
                                            checked={formData.attending === 'no'}
                                            onChange={handleChange}
                                        />
                                        <span className="rsvp__radio-icon">✕</span>
                                        <span>Regretfully Decline</span>
                                    </label>
                                </div>
                            </div>

                            {formData.attending === 'yes' && (
                                <>
                                    <div className="rsvp__form-group">
                                        <label htmlFor="guests">Number of Guests</label>
                                        <select
                                            id="guests"
                                            name="guests"
                                            value={formData.guests}
                                            onChange={handleChange}
                                        >
                                            {[1, 2, 3, 4, 5].map(n => (
                                                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="rsvp__form-group">
                                        <label htmlFor="dietary">Dietary Restrictions</label>
                                        <input
                                            type="text"
                                            id="dietary"
                                            name="dietary"
                                            value={formData.dietary}
                                            onChange={handleChange}
                                            placeholder="Any allergies or dietary requirements?"
                                        />
                                    </div>
                                </>
                            )}

                            <div className="rsvp__form-group">
                                <label htmlFor="message">Message for the Couple</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Share your wishes or any notes..."
                                ></textarea>
                            </div>

                            <button type="submit" className="rsvp__submit">
                                Send RSVP
                            </button>
                        </form>
                    ) : (
                        <div className="rsvp__success reveal active">
                            <div className="rsvp__success-icon">💝</div>
                            <h2>Thank You!</h2>
                            <p>Your RSVP has been received. We can&apos;t wait to celebrate with you!</p>
                            <div className="rsvp__success-details">
                                <p><strong>Name:</strong> {formData.name}</p>
                                <p><strong>Response:</strong> {formData.attending === 'yes' ? 'Attending' : 'Not Attending'}</p>
                                {formData.attending === 'yes' && <p><strong>Guests:</strong> {formData.guests}</p>}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="rsvp__contact">
                <div className="rsvp__contact-container">
                    <div className="rsvp__contact-content reveal">
                        <h3>Questions?</h3>
                        <p>If you have any questions, feel free to reach out to us.</p>
                        <a href="mailto:jddizon30@gmail.com" className="rsvp__contact-email">
                            jddizon30@gmail.com
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

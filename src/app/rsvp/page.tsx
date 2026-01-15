'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

export default function RSVP() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        attendance: '',
        guests: '1',
        guestNames: '',
        dietaryRestrictions: '',
        songRequest: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        // Replace this with your actual form submission logic
        // You can use Netlify Forms, Google Forms, or your own API
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <main className="rsvp">
                <Navbar />
                <section className="rsvp__hero">
                    <div className="rsvp__hero-content">
                        <h1 className="rsvp__title">Thank You!</h1>
                        <div className="rsvp__divider">
                            <span>💕</span>
                        </div>
                    </div>
                </section>

                <section className="rsvp__success">
                    <div className="rsvp__success-container">
                        <span className="rsvp__success-icon">✓</span>
                        <h2>Your RSVP Has Been Received!</h2>
                        <p>
                            Thank you for letting us know, {formData.name}! 
                            {formData.attendance === 'yes' 
                                ? " We can't wait to celebrate with you!"
                                : " We'll miss you, but we appreciate you letting us know."}
                        </p>
                        <p className="rsvp__success-note">
                            A confirmation email has been sent to {formData.email}
                        </p>
                    </div>
                </section>

                <Footer />
            </main>
        );
    }

    return (
        <main className="rsvp">
            <Navbar />

            {/* Hero Section */}
            <section className="rsvp__hero">
                <div className="rsvp__hero-content">
                    <h1 className="rsvp__title">RSVP</h1>
                    <div className="rsvp__divider">
                        <span>❀</span>
                    </div>
                    <p className="rsvp__subtitle">
                        Please respond by February 15, 2026
                    </p>
                </div>
            </section>

            {/* RSVP Form Section */}
            <section className="rsvp__form-section">
                <div className="rsvp__form-container">
                    <div className="rsvp__form-intro">
                        <h2>Will You Join Us?</h2>
                        <p>
                            We would be honored to have you celebrate our special day with us. 
                            Please fill out the form below to let us know if you can make it.
                        </p>
                    </div>

                    <form className="rsvp__form" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="rsvp__field">
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

                        {/* Email */}
                        <div className="rsvp__field">
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

                        {/* Phone */}
                        <div className="rsvp__field">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                            />
                        </div>

                        {/* Attendance */}
                        <div className="rsvp__field">
                            <label>Will you be attending? *</label>
                            <div className="rsvp__radio-group">
                                <label className="rsvp__radio">
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value="yes"
                                        checked={formData.attendance === 'yes'}
                                        onChange={handleChange}
                                        required
                                    />
                                    <span className="rsvp__radio-custom"></span>
                                    <span>Joyfully Accept</span>
                                </label>
                                <label className="rsvp__radio">
                                    <input
                                        type="radio"
                                        name="attendance"
                                        value="no"
                                        checked={formData.attendance === 'no'}
                                        onChange={handleChange}
                                    />
                                    <span className="rsvp__radio-custom"></span>
                                    <span>Regretfully Decline</span>
                                </label>
                            </div>
                        </div>

                        {/* Conditional fields when attending */}
                        {formData.attendance === 'yes' && (
                            <>
                                {/* Number of Guests */}
                                <div className="rsvp__field">
                                    <label htmlFor="guests">Number of Guests *</label>
                                    <select
                                        id="guests"
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="1">1 (Just me)</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5+</option>
                                    </select>
                                </div>

                                {/* Guest Names */}
                                {parseInt(formData.guests) > 1 && (
                                    <div className="rsvp__field">
                                        <label htmlFor="guestNames">Names of Additional Guests</label>
                                        <textarea
                                            id="guestNames"
                                            name="guestNames"
                                            value={formData.guestNames}
                                            onChange={handleChange}
                                            placeholder="Please list the names of your guests"
                                            rows={3}
                                        />
                                    </div>
                                )}

                                {/* Dietary Restrictions */}
                                <div className="rsvp__field">
                                    <label htmlFor="dietaryRestrictions">Dietary Restrictions</label>
                                    <input
                                        type="text"
                                        id="dietaryRestrictions"
                                        name="dietaryRestrictions"
                                        value={formData.dietaryRestrictions}
                                        onChange={handleChange}
                                        placeholder="Any allergies or dietary requirements?"
                                    />
                                </div>

                                {/* Song Request */}
                                <div className="rsvp__field">
                                    <label htmlFor="songRequest">Song Request 🎵</label>
                                    <input
                                        type="text"
                                        id="songRequest"
                                        name="songRequest"
                                        value={formData.songRequest}
                                        onChange={handleChange}
                                        placeholder="What song will get you on the dance floor?"
                                    />
                                </div>
                            </>
                        )}

                        {/* Message */}
                        <div className="rsvp__field">
                            <label htmlFor="message">Message for the Couple</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Share your well wishes or any message for us!"
                                rows={4}
                            />
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            className="rsvp__submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit RSVP'}
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}

'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const faqs = [
    {
        question: 'When is the RSVP deadline?',
        answer: 'Please RSVP by May 21, 2026, one month before the wedding. This helps us finalize arrangements with our vendors.',
    },
    {
        question: 'What is the dress code?',
        answer: 'The dress code is Semi-Formal / Garden Chic. We suggest wearing elegant, comfortable attire in sage green, blush pink, lavender, cream, or gold. Please avoid white or ivory.',
    },
    {
        question: 'Can I bring a plus one?',
        answer: 'Due to venue capacity, we can only accommodate guests listed on the invitation. If you received a plus one, it will be noted on your invitation.',
    },
    {
        question: 'Are children welcome?',
        answer: 'While we love your little ones, our wedding will be an adults-only celebration. We hope you understand and can arrange for childcare.',
    },
    {
        question: 'Will the ceremony and reception be at the same location?',
        answer: 'Yes! Both the ceremony and reception will take place at Esperanza Ilaya, Alfonso, Cavite. No need to travel between venues.',
    },
    {
        question: 'Is there parking available?',
        answer: 'Yes, complimentary parking is available at the venue. There will be attendants to guide you to the parking area.',
    },
    {
        question: 'What time should I arrive?',
        answer: 'We recommend arriving by 2:30 PM. The ceremony will begin promptly at 3:00 PM.',
    },
    {
        question: 'Can I take photos during the ceremony?',
        answer: 'We kindly ask for an unplugged ceremony. Please turn off phones and cameras during the ceremony so everyone can be fully present. Our photographer will capture all the special moments!',
    },
    {
        question: 'Will there be food options for dietary restrictions?',
        answer: 'Yes! Please let us know about any dietary restrictions when you RSVP, and we will do our best to accommodate your needs.',
    },
    {
        question: 'How do I get to the venue?',
        answer: 'Directions can be found on the Event Details page. We recommend using Google Maps or Waze. The venue is approximately 2 hours from Metro Manila.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.1 }
        );
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="faq">
            <Navbar />

            <section className="faq__hero">
                <div className="faq__hero-bg"></div>
                <div className="faq__hero-overlay"></div>
                <div className="faq__hero-content">
                    <span className="faq__hero-label">Got Questions?</span>
                    <h1 className="faq__hero-title">FAQ</h1>
                    <p className="faq__hero-subtitle">Everything you need to know about our big day</p>
                </div>
            </section>

            <section className="faq__content">
                <div className="faq__container">
                    <div className="faq__list">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`faq__item reveal ${isOpen ? 'faq__item--open' : ''}`}
                                >
                                    <button
                                        className="faq__question"
                                        onClick={() => toggleAccordion(index)}
                                        type="button"
                                        aria-expanded={isOpen}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="faq__icon">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>
                                    <div
                                        className="faq__answer"
                                        style={{
                                            maxHeight: isOpen ? '500px' : '0px',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease',
                                        }}
                                    >
                                        <div style={{ padding: '0 24px 24px' }}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="faq__contact">
                <div className="faq__contact-container">
                    <div className="faq__contact-content reveal">
                        <h3>Still Have Questions?</h3>
                        <p>Feel free to reach out to us directly.</p>
                        <a href="mailto:jddizon30@gmail.com" className="faq__contact-email">
                            jddizon30@gmail.com
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
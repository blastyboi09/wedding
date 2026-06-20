'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const faqs = [
    { question: 'What is the dress code?', answer: 'The dress code is Semi-Formal / Garden Chic. We suggest elegant, comfortable attire in dusty blue, pastel pink, sage green, lavender, cream, or other soft colors. Please avoid white or ivory.' },
    { question: 'Can I bring a plus one?', answer: 'Due to venue capacity, we can only accommodate guests listed on the invitation. If you received a plus one, it will be noted on your invitation.' },
    { question: 'Are children welcome?', answer: 'Yes, children are welcome! We kindly ask parents and guardians to help keep the ceremony peaceful. If your child becomes restless, noisy, or starts crying, please gently guide them or step outside with them until they are settled.' },
    { question: 'Will the ceremony and reception be at the same location?', answer: 'Yes. Both the ceremony and reception will take place at Esperanza Ilaya, Alfonso, Cavite.' },
    { question: 'Is there parking available?', answer: 'Yes, complimentary parking is available at the venue. There will be attendants to guide you to the parking area.' },
    { question: 'What time should I arrive?', answer: 'We recommend arriving by 2:00 PM. The ceremony will begin promptly at 3:00 PM.' },
    {
        question: 'Can I take photos during the ceremony?',
        answer: 'Yes, phones are allowed, and photos and videos are encouraged. As much as possible, please keep arms and phones away from the aisle during the ceremony. We would be happy if you would share your captured moments with us after the celebration.',
        action: { href: '/gallery#share-moments', label: 'Share Photos & Videos' },
    },
    { question: 'Will there be food options for dietary restrictions?', answer: 'Yes. Please reach out to us directly about any dietary restrictions, and we will do our best to accommodate your needs.' },
    { question: 'How do I get to the venue?', answer: 'Directions can be found on the Event Details page. We recommend using Google Maps or Waze. The venue is approximately 2 hours from Metro Manila.' },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="faq">
            <Navbar />

            <section className="faq__hero">
                <div className="faq__hero-content">
                    <span>Got Questions?</span>
                    <h1>FAQ</h1>
                    <p>Everything you need to know about our big day.</p>
                </div>
            </section>

            <section className="faq__content">
                <div className="faq__container">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <article key={faq.question} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                                <button
                                    className="faq__question"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    type="button"
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.question}</span>
                                    <strong>{isOpen ? '-' : '+'}</strong>
                                </button>
                                <div className="faq__answer">
                                    <p>{faq.answer}</p>
                                    {'action' in faq && faq.action && (
                                        <Link className="faq__answer-action" href={faq.action.href}>
                                            {faq.action.label}
                                        </Link>
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="faq__contact">
                <div className="faq__contact-content">
                    <h3>Still Have Questions?</h3>
                    <p>Feel free to reach out to us directly.</p>
                    <a href="mailto:jddizon30@gmail.com">jddizon30@gmail.com</a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

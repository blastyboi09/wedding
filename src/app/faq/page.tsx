'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const faqs = [
    {
        question: 'What is the dress code?',
        answer: 'The dress code is Semi-Formal / Garden Chic. We suggest pastel colors like sage green, blush pink, lavender, or cream. Please avoid wearing white or ivory as these are reserved for the bride.'
    },
    {
        question: 'Can I bring a plus one?',
        answer: 'Due to venue capacity, we can only accommodate guests who have been formally invited. Please refer to your invitation for the number of seats reserved in your name.'
    },
    {
        question: 'Are children welcome?',
        answer: 'While we love your little ones, our wedding will be an adults-only celebration. We hope you understand and can use this as an opportunity for a fun night out!'
    },
    {
        question: 'What time should I arrive?',
        answer: 'The ceremony begins at 2:00 PM. We kindly ask guests to arrive by 1:30 PM to allow time for seating. The ceremony will start promptly at 2:00 PM.'
    },
    {
        question: 'Where can I park?',
        answer: 'Both the church and reception venue have complimentary parking available. There will be signs directing you to the designated parking areas.'
    },
    {
        question: 'Will the ceremony and reception be indoors or outdoors?',
        answer: 'The ceremony will be held indoors at the church. The reception will be a mix of indoor and outdoor spaces at the venue. In case of inclement weather, we have backup plans in place.'
    },
    {
        question: 'Can I take photos during the ceremony?',
        answer: 'We kindly ask that you keep your phones and cameras put away during the ceremony. We want everyone to be fully present in the moment! Our professional photographers will capture everything. You are welcome to take photos during the reception.'
    },
    {
        question: 'Is there a gift registry?',
        answer: 'Your presence at our wedding is the greatest gift of all! However, if you wish to honor us with a gift, we have a registry at [Registry Name]. We also welcome monetary gifts for our honeymoon fund.'
    },
    {
        question: 'When is the RSVP deadline?',
        answer: 'Please RSVP by February 15, 2026. This helps us finalize our headcount for catering and seating arrangements. You can RSVP directly on this website!'
    },
    {
        question: 'What if I have dietary restrictions?',
        answer: 'Please let us know of any dietary restrictions or allergies when you RSVP. We will do our best to accommodate your needs and ensure there are options available for you.'
    },
    {
        question: 'Will there be transportation provided?',
        answer: 'We will not be providing transportation between the ceremony and reception venues. They are located approximately 15 minutes apart. If you need help arranging transportation, please contact us.'
    },
    {
        question: 'Who can I contact if I have more questions?',
        answer: 'If you have any other questions, please feel free to reach out to us at jdandjoi2026@gmail.com or contact our wedding coordinator at [Coordinator Phone].'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="faq">
            <Navbar />

            {/* Hero Section */}
            <section className="faq__hero">
                <div className="faq__hero-content">
                    <h1 className="faq__title">FAQ</h1>
                    <div className="faq__divider">
                        <span>❀</span>
                    </div>
                    <p className="faq__subtitle">
                        Frequently Asked Questions
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq__section">
                <div className="faq__container">
                    <div className="faq__intro">
                        <h2>Got Questions?</h2>
                        <p>
                            We&apos;ve compiled answers to some common questions. 
                            If you can&apos;t find what you&apos;re looking for, feel free to reach out!
                        </p>
                    </div>

                    <div className="faq__list">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className={`faq__item ${openIndex === index ? 'open' : ''}`}
                            >
                                <button 
                                    className="faq__question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span>{faq.question}</span>
                                    <span className="faq__icon">
                                        {openIndex === index ? '−' : '+'}
                                    </span>
                                </button>
                                <div className="faq__answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="faq__contact">
                        <h3>Still have questions?</h3>
                        <p>
                            Feel free to reach out to us at{' '}
                            <a href="mailto:jdandjoi2026@gmail.com">jdandjoi2026@gmail.com</a>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

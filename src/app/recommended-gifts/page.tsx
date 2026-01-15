'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const giftCategories = [
    {
        id: 'monetary',
        emoji: '💸',
        title: 'Monetary Gifts',
        subtitle: 'Help us build our future',
        description: 'Your generous cash gifts will help us save for our dream home, honeymoon adventures, and building our life together.',
        items: [
            { name: 'House Fund', emoji: '🏠', note: 'Every peso brings us closer to our dream home!' },
            { name: 'Honeymoon Fund', emoji: '✈️', note: 'Help us create unforgettable memories' },
            { name: 'Savings Fund', emoji: '🐷', note: 'For our future family adventures' },
        ],
        paymentMethods: [
            { method: 'GCash', detail: '0917-XXX-XXXX (Joi Dizon)' },
            { method: 'BPI', detail: 'XXXX-XXXX-XX (JD Dizon)' },
            { method: 'Cash', detail: 'On the wedding day 💕' },
        ]
    },
    {
        id: 'appliances',
        emoji: '🔌',
        title: 'Home Appliances',
        subtitle: 'For our new home',
        description: 'Help us equip our future home with these essentials. We promise to think of you every time we use them!',
        items: [
            { name: 'Air Conditioner', emoji: '❄️', note: 'To keep our love cool (and our home!)' },
            { name: 'Refrigerator', emoji: '🧊', note: 'For midnight snack runs' },
            { name: 'Washing Machine', emoji: '🫧', note: 'Because adulting is real' },
            { name: 'Rice Cooker', emoji: '🍚', note: 'Essential Filipino household item!' },
            { name: 'Microwave', emoji: '📻', note: 'For reheating leftover wedding cake' },
            { name: 'Electric Fan', emoji: '💨', note: 'Backup for the AC (you know how it is)' },
        ]
    },
    {
        id: 'furniture',
        emoji: '🛋️',
        title: 'Furniture',
        subtitle: 'Make our house a home',
        description: 'These pieces will fill our home with comfort and memories. Each one will have a special place!',
        items: [
            { name: 'Sofa Set', emoji: '🛋️', note: 'For movie marathons and lazy Sundays' },
            { name: 'Dining Table Set', emoji: '🪑', note: 'Where family dinners will happen' },
            { name: 'Bed Frame & Mattress', emoji: '🛏️', note: 'For sweet dreams together' },
            { name: 'Wardrobe Cabinet', emoji: '🚪', note: 'To organize our growing collection' },
            { name: 'Shoe Rack', emoji: '👟', note: 'Joi has... a lot of shoes 😅' },
        ]
    },
    {
        id: 'kitchen',
        emoji: '🍳',
        title: 'Kitchen Essentials',
        subtitle: 'Cook up some love',
        description: 'For all the home-cooked meals and burnt experiments ahead. We\'re learning!',
        items: [
            { name: 'Cookware Set', emoji: '🍳', note: 'Time to learn cooking for real' },
            { name: 'Dinnerware Set', emoji: '🍽️', note: 'For hosting future dinner parties' },
            { name: 'Kitchen Utensils', emoji: '🥄', note: 'The basics we definitely need' },
            { name: 'Blender', emoji: '🥤', note: 'Smoothies and milkshakes!' },
            { name: 'Air Fryer', emoji: '🍟', note: 'Healthy-ish fried food' },
        ]
    },
    {
        id: 'dreams',
        emoji: '✨',
        title: 'Dream Gifts',
        subtitle: 'If you\'re feeling extra generous',
        description: 'We\'re not expecting these, but hey, a couple can dream right? 😂',
        items: [
            { name: 'House & Lot', emoji: '🏡', note: 'We promise to invite you over!' },
            { name: 'Car', emoji: '🚗', note: 'For family road trips' },
            { name: 'Land Title', emoji: '📜', note: 'Anywhere in Taguig is fine 😂' },
            { name: 'Investment Fund', emoji: '📈', note: 'Help us retire early lol' },
            { name: 'Lifetime Supply of Milk Tea', emoji: '🧋', note: 'In memory of our first date' },
        ]
    },
];

export default function Gifts() {
    const [activeCategory, setActiveCategory] = useState('monetary');
    const activeGift = giftCategories.find(c => c.id === activeCategory);

    return (
        <main className="gifts">
            <Navbar />

            <section className="gifts__hero">
                <div className="gifts__hero-bg"></div>
                <div className="gifts__hero-overlay"></div>
                <div className="gifts__hero-content">
                    <span className="gifts__hero-label">Your Presence is Enough</span>
                    <h1 className="gifts__hero-title">Gift Registry</h1>
                    <p className="gifts__hero-subtitle">But if you insist... here are some ideas 😉</p>
                </div>
            </section>

            <section className="gifts__intro">
                <div className="gifts__intro-container">
                    <div className="gifts__intro-content">
                        <h2>A Note from Us</h2>
                        <p>
                            First and foremost, your presence at our wedding is the greatest gift we could ask for.
                            We're so blessed to have you celebrate this special day with us!
                        </p>
                        <p>
                            However, many of you have asked how you can help us start our new life together.
                            So we've put together this little wishlist—from practical necessities to some
                            totally-not-serious dream items. No pressure at all! 💕
                        </p>
                    </div>
                </div>
            </section>

            <section className="gifts__content">
                <div className="gifts__container">
                    <div className="gifts__tabs">
                        {giftCategories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`gifts__tab ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                <span className="gifts__tab-emoji">{cat.emoji}</span>
                                <span className="gifts__tab-title">{cat.title}</span>
                            </button>
                        ))}
                    </div>

                    {activeGift && (
                        <div className="gifts__panel">
                            <div className="gifts__panel-header">
                                <span className="gifts__panel-emoji">{activeGift.emoji}</span>
                                <h3 className="gifts__panel-title">{activeGift.title}</h3>
                                <p className="gifts__panel-subtitle">{activeGift.subtitle}</p>
                                <p className="gifts__panel-description">{activeGift.description}</p>
                            </div>

                            <div className="gifts__items">
                                {activeGift.items.map((item, index) => (
                                    <div key={index} className="gifts__item">
                                        <span className="gifts__item-emoji">{item.emoji}</span>
                                        <div className="gifts__item-info">
                                            <h4>{item.name}</h4>
                                            <p>{item.note}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {activeGift.paymentMethods && (
                                <div className="gifts__payment">
                                    <h4>Send Your Gift</h4>
                                    <div className="gifts__payment-methods">
                                        {activeGift.paymentMethods.map((pm, index) => (
                                            <div key={index} className="gifts__payment-method">
                                                <span className="gifts__payment-label">{pm.method}</span>
                                                <span className="gifts__payment-detail">{pm.detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <section className="gifts__note">
                <div className="gifts__note-container">
                    <div className="gifts__note-content">
                        <span className="gifts__note-emoji">🙏</span>
                        <h3>Thank You!</h3>
                        <p>
                            Whatever you choose to give—whether it's your presence, your prayers,
                            or a gift from this list—we are incredibly grateful. Your love and support
                            mean the world to us as we begin this new chapter together.
                        </p>
                        <p className="gifts__note-signature">With love, JD & Joi 💕</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
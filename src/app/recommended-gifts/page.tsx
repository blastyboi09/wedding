'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './page.scss';

const giftCategories = [
    {
        id: 'monetary',
        mark: '01',
        title: 'Monetary Gifts',
        subtitle: 'Help us build our future',
        description: 'Your generous cash gifts will help us save for our dream home, honeymoon adventures, and building our life together.',
        items: [
            { name: 'House Fund', note: 'Every peso brings us closer to our dream home.' },
            { name: 'Honeymoon Fund', note: 'Help us create unforgettable memories.' },
            { name: 'Savings Fund', note: 'For our future family adventures.' },
        ],
        paymentMethods: [
            { method: 'GCash', detail: '0917-XXX-XXXX (Joi Dizon)' },
            { method: 'BPI', detail: 'XXXX-XXXX-XX (JD Dizon)' },
            { method: 'Cash', detail: 'On the wedding day' },
        ],
    },
    {
        id: 'appliances',
        mark: '02',
        title: 'Home Appliances',
        subtitle: 'For our new home',
        description: 'Help us equip our future home with essentials we will use every day.',
        items: [
            { name: 'Air Conditioner', note: 'To keep our home cool and comfortable.' },
            { name: 'Refrigerator', note: 'For midnight snack runs.' },
            { name: 'Washing Machine', note: 'Because adulting is real.' },
            { name: 'Rice Cooker', note: 'Essential Filipino household item.' },
            { name: 'Microwave', note: 'For reheating leftover wedding cake.' },
            { name: 'Electric Fan', note: 'A practical backup for warm days.' },
        ],
    },
    {
        id: 'furniture',
        mark: '03',
        title: 'Furniture',
        subtitle: 'Make our house a home',
        description: 'These pieces will fill our home with comfort, routines, and future memories.',
        items: [
            { name: 'Sofa Set', note: 'For movie marathons and lazy Sundays.' },
            { name: 'Dining Table Set', note: 'Where family dinners will happen.' },
            { name: 'Bed Frame & Mattress', note: 'For sweet dreams together.' },
            { name: 'Wardrobe Cabinet', note: 'To organize our growing collection.' },
            { name: 'Shoe Rack', note: 'Joi has a lot of shoes.' },
        ],
    },
    {
        id: 'kitchen',
        mark: '04',
        title: 'Kitchen Essentials',
        subtitle: 'Cook up some love',
        description: 'For home-cooked meals and the experiments we will learn from along the way.',
        items: [
            { name: 'Cookware Set', note: 'Time to learn cooking for real.' },
            { name: 'Dinnerware Set', note: 'For hosting future dinner parties.' },
            { name: 'Kitchen Utensils', note: 'The basics we definitely need.' },
            { name: 'Blender', note: 'Smoothies and milkshakes.' },
            { name: 'Air Fryer', note: 'Healthy-ish fried food.' },
        ],
    },
    {
        id: 'dreams',
        mark: '05',
        title: 'Dream Gifts',
        subtitle: 'If you are feeling extra generous',
        description: 'We are not expecting these, but a couple can dream.',
        items: [
            { name: 'House & Lot', note: 'We promise to invite you over.' },
            { name: 'Car', note: 'For family road trips.' },
            { name: 'Land Title', note: 'Anywhere in Taguig is fine.' },
            { name: 'Investment Fund', note: 'Help us plan for the long term.' },
            { name: 'Lifetime Supply of Milk Tea', note: 'In memory of our first date.' },
        ],
    },
];

export default function Gifts() {
    const [activeCategory, setActiveCategory] = useState('monetary');
    const activeGift = giftCategories.find((category) => category.id === activeCategory) ?? giftCategories[0];

    return (
        <main className="gifts">
            <Navbar />

            <section className="gifts__hero">
                <div className="gifts__hero-content">
                    <span>Your Presence is Enough</span>
                    <h1>Gift Registry</h1>
                    <p>But if you insist, here are some ideas.</p>
                </div>
            </section>

            <section className="gifts__intro">
                <div className="gifts__intro-content">
                    <span>A Note from Us</span>
                    <h2>Thank you for loving us so generously.</h2>
                    <p>
                        First and foremost, your presence at our wedding is the greatest gift we could ask for.
                        Many of you have asked how you can help us start our new life together, so we put
                        together this little wishlist with zero pressure attached.
                    </p>
                </div>
            </section>

            <section className="gifts__content">
                <div className="gifts__container">
                    <div className="gifts__tabs" aria-label="Gift categories">
                        {giftCategories.map((category) => (
                            <button
                                key={category.id}
                                className={`gifts__tab ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                                type="button"
                            >
                                <span>{category.mark}</span>
                                <strong>{category.title}</strong>
                            </button>
                        ))}
                    </div>

                    <div className="gifts__panel">
                        <div className="gifts__panel-header">
                            <span>{activeGift.mark}</span>
                            <h3>{activeGift.title}</h3>
                            <p className="gifts__subtitle">{activeGift.subtitle}</p>
                            <p>{activeGift.description}</p>
                        </div>

                        <div className="gifts__items">
                            {activeGift.items.map((item) => (
                                <article key={item.name} className="gifts__item">
                                    <h4>{item.name}</h4>
                                    <p>{item.note}</p>
                                </article>
                            ))}
                        </div>

                        {activeGift.paymentMethods && (
                            <div className="gifts__payment">
                                <h4>Send Your Gift</h4>
                                <div className="gifts__payment-methods">
                                    {activeGift.paymentMethods.map((payment) => (
                                        <div key={payment.method} className="gifts__payment-method">
                                            <span>{payment.method}</span>
                                            <strong>{payment.detail}</strong>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="gifts__note">
                <div className="gifts__note-content">
                    <h3>Thank You!</h3>
                    <p>
                        Whatever you choose to give, whether it is your presence, your prayers,
                        or a gift from this list, we are incredibly grateful.
                    </p>
                    <strong>With love, JD & Joi</strong>
                </div>
            </section>

            <Footer />
        </main>
    );
}

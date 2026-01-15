'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/our-story', label: 'Our Story' },
        { href: '/event-details', label: 'Event Details' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/faq', label: 'FAQ' },
        { href: '/rsvp', label: 'RSVP' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__container">
                <Link href="/" className="navbar__logo">
                    J & J
                </Link>

                {/* Desktop Menu */}
                <ul className="navbar__menu">
                    {navLinks.map((link) => (
                        <li key={link.href} className="navbar__item">
                            <Link href={link.href} className="navbar__link">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className={`navbar__mobile-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="navbar__mobile-list">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="navbar__mobile-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/our-story', label: 'Our Story' },
        { href: '/event-details', label: 'Details' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/faq', label: 'FAQ' },
    ];

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__container">
                    <Link href="/" className="navbar__logo">
                        <span className="navbar__logo-text">J</span>
                        <span className="navbar__logo-ampersand">&</span>
                        <span className="navbar__logo-text">J</span>
                    </Link>

                    <ul className="navbar__menu">
                        {navLinks.map((link) => (
                            <li key={link.href} className="navbar__item">
                                <Link href={link.href} className={`navbar__link ${pathname === link.href ? 'active' : ''}`}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Link href="/rsvp" className="navbar__rsvp">RSVP</Link>

                    <button
                        className={`navbar__hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu__content">
                    <div className="mobile-menu__logo">JD & Joi</div>
                    <nav className="mobile-menu__nav">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="mobile-menu__link">
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/rsvp" className="mobile-menu__rsvp">RSVP Now</Link>
                    </nav>
                    <div className="mobile-menu__footer">
                        <p>June 21, 2026</p>
                        <p>Alfonso, Cavite</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

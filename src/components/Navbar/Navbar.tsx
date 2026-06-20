'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Navbar.scss';

const navLinks = [
    { href: '/', label: 'Home' },
    // { href: '/our-story', label: 'Our Story' },
    { href: '/event-details', label: 'Details' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/faq', label: 'FAQ' },
    { href: '/recommended-gifts', label: 'Gifts' },
];

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
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
                <div className="navbar__container">
                    <Link href="/" className="navbar__logo">
                        <span className="navbar__logo-text">JD</span>
                        <span className="navbar__logo-ampersand">&amp;</span>
                        <span className="navbar__logo-text">Joi</span>
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

                    <button
                        className={`navbar__hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu__content">
                    <div className="mobile-menu__logo">JD &amp; Joi</div>
                    <p className="mobile-menu__date">June 21, 2026</p>
                    <nav className="mobile-menu__nav">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`mobile-menu__link ${pathname === link.href ? 'active' : ''}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="mobile-menu__footer">
                        <p>Alfonso, Cavite</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

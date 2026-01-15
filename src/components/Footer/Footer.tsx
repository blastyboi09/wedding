import React from 'react';
import Link from 'next/link';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <span className="footer__names">JD & Joi</span>
                    <span className="footer__date">June 21, 2026</span>
                </div>

                <div className="footer__divider">
                    <span></span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span></span>
                </div>

                <nav className="footer__nav">
                    <Link href="/">Home</Link>
                    <Link href="/our-story">Our Story</Link>
                    <Link href="/event-details">Details</Link>
                    <Link href="/gallery">Gallery</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/rsvp">RSVP</Link>
                </nav>

                <div className="footer__location">
                    <p>Esperanza Ilaya, Alfonso, Cavite, Philippines</p>
                </div>

                <div className="footer__bottom">
                    <p>Made with love for our special day</p>
                    <p className="footer__copyright">© 2026 JD & Joi Wedding</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

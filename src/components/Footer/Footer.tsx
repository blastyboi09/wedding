import React from 'react';
import Link from 'next/link';
import './Footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    JD & Joi
                </div>
                
                <p className="footer__tagline">
                    Two hearts, one love, forever together
                </p>

                <div className="footer__divider">
                    <span className="footer__flower">❀</span>
                </div>

                <nav className="footer__nav">
                    <Link href="/">Home</Link>
                    <Link href="/our-story">Our Story</Link>
                    <Link href="/event-details">Event Details</Link>
                    <Link href="/rsvp">RSVP</Link>
                </nav>

                <p className="footer__copyright">
                    © 2026 JD & Joi Wedding. Made with love 💕
                </p>
            </div>

            {/* Decorative floral corners */}
            <div className="footer__decor footer__decor--left">🌿</div>
            <div className="footer__decor footer__decor--right">🌿</div>
        </footer>
    );
};

export default Footer;

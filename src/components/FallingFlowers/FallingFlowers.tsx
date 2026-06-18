'use client';

import type { CSSProperties } from 'react';
import './FallingFlowers.scss';

const flowers = [
    { left: '4%', delay: '0s', duration: '18s', size: '34px', color: '#efd0da', drift: '42px', rotate: '24deg' },
    { left: '10%', delay: '5s', duration: '22s', size: '24px', color: '#e8f0f6', drift: '-28px', rotate: '-18deg' },
    { left: '17%', delay: '2s', duration: '20s', size: '30px', color: '#f7e4ec', drift: '34px', rotate: '34deg' },
    { left: '25%', delay: '8s', duration: '24s', size: '22px', color: '#dfe9f2', drift: '-46px', rotate: '-28deg' },
    { left: '32%', delay: '1s', duration: '19s', size: '38px', color: '#f3d7e1', drift: '30px', rotate: '22deg' },
    { left: '41%', delay: '6s', duration: '23s', size: '26px', color: '#f5e4cc', drift: '-38px', rotate: '-24deg' },
    { left: '49%', delay: '3s', duration: '21s', size: '32px', color: '#e7dff0', drift: '48px', rotate: '30deg' },
    { left: '58%', delay: '10s', duration: '25s', size: '24px', color: '#f9e4d9', drift: '-30px', rotate: '-16deg' },
    { left: '66%', delay: '4s', duration: '20s', size: '36px', color: '#e8f0f6', drift: '36px', rotate: '26deg' },
    { left: '74%', delay: '7s', duration: '23s', size: '28px', color: '#efd0da', drift: '-44px', rotate: '-32deg' },
    { left: '83%', delay: '2.5s', duration: '19s', size: '31px', color: '#f8edf2', drift: '26px', rotate: '18deg' },
    { left: '92%', delay: '9s', duration: '26s', size: '25px', color: '#dce8f1', drift: '-34px', rotate: '-20deg' },
];

export default function FallingFlowers() {
    return (
        <div className="falling-flowers" aria-hidden="true">
            {flowers.map((flower, index) => (
                <span
                    key={`${flower.left}-${flower.delay}`}
                    className={`falling-flowers__item falling-flowers__item--${index % 3}`}
                    style={{
                        '--flower-left': flower.left,
                        '--flower-delay': flower.delay,
                        '--flower-duration': flower.duration,
                        '--flower-size': flower.size,
                        '--flower-color': flower.color,
                        '--flower-drift': flower.drift,
                        '--flower-rotate': flower.rotate,
                    } as CSSProperties}
                >
                    <svg viewBox="0 0 64 64" role="presentation">
                        <g>
                            <ellipse cx="32" cy="18" rx="9" ry="17" />
                            <ellipse cx="45" cy="28" rx="9" ry="17" transform="rotate(72 45 28)" />
                            <ellipse cx="40" cy="45" rx="9" ry="17" transform="rotate(144 40 45)" />
                            <ellipse cx="24" cy="45" rx="9" ry="17" transform="rotate(216 24 45)" />
                            <ellipse cx="19" cy="28" rx="9" ry="17" transform="rotate(288 19 28)" />
                            <circle cx="32" cy="32" r="6" />
                        </g>
                    </svg>
                </span>
            ))}
        </div>
    );
}

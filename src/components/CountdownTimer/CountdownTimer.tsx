'use client';

import React, { useState, useEffect } from 'react';
import './CountdownTimer.scss';

interface CountdownTimerProps {
    targetDate: string;
    variant?: 'light' | 'dark';
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, variant = 'light' }) => {
    const [mounted, setMounted] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setMounted(true);
        
        const calculateTime = () => {
            const diff = new Date(targetDate).getTime() - Date.now();
            if (diff > 0) {
                setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
                setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
                setMinutes(Math.floor((diff / (1000 * 60)) % 60));
                setSeconds(Math.floor((diff / 1000) % 60));
            }
        };

        calculateTime();
        const timer = setInterval(calculateTime, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const units = [
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: minutes, label: 'Minutes' },
        { value: seconds, label: 'Seconds' },
    ];

    return (
        <div className={`countdown countdown--${variant}`}>
            <div className="countdown__grid">
                {units.map((unit, index) => (
                    <React.Fragment key={unit.label}>
                        <div className="countdown__item">
                            <div className="countdown__number">
                                <span>{mounted ? String(unit.value).padStart(2, '0') : '--'}</span>
                            </div>
                            <span className="countdown__label">{unit.label}</span>
                        </div>
                        {index < units.length - 1 && (
                            <div className="countdown__separator">:</div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;

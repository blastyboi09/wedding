'use client';

import React, { useCallback, useState, useEffect } from 'react';
import './CountdownTimer.scss';

interface CountdownTimerProps {
    targetDate: string;
    variant?: 'light' | 'dark';
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, variant = 'light' }) => {
    const calculateTime = useCallback(() => {
        const diff = new Date(targetDate).getTime() - Date.now();
        if (diff <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };
    }, [targetDate]);

    const [timeLeft, setTimeLeft] = useState(calculateTime);

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(calculateTime()), 1000);
        return () => clearInterval(timer);
    }, [calculateTime]);

    const units = [
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Minutes' },
        { value: timeLeft.seconds, label: 'Seconds' },
    ];

    return (
        <div className={`countdown countdown--${variant}`}>
            <div className="countdown__grid">
                {units.map((unit, index) => (
                    <React.Fragment key={unit.label}>
                        <div className="countdown__item">
                            <div className="countdown__number">
                                <span>{String(unit.value).padStart(2, '0')}</span>
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

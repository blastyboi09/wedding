'use client';

import React, { useState, useEffect } from 'react';
import './CountdownTimer.scss';

interface CountdownTimerProps {
    targetDate: string; // ISO date string e.g., "2026-03-15T14:00:00"
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        const calculateTimeLeft = (): TimeLeft => {
            const difference = new Date(targetDate).getTime() - new Date().getTime();

            if (difference <= 0) {
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }

            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!mounted) {
        return (
            <div className="countdown">
                <div className="countdown__container">
                    {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
                        <div key={label} className="countdown__item">
                            <span className="countdown__number">--</span>
                            <span className="countdown__label">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="countdown">
            <div className="countdown__container">
                <div className="countdown__item">
                    <span className="countdown__number">{timeLeft.days}</span>
                    <span className="countdown__label">Days</span>
                </div>
                <div className="countdown__separator">:</div>
                <div className="countdown__item">
                    <span className="countdown__number">{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="countdown__label">Hours</span>
                </div>
                <div className="countdown__separator">:</div>
                <div className="countdown__item">
                    <span className="countdown__number">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="countdown__label">Minutes</span>
                </div>
                <div className="countdown__separator">:</div>
                <div className="countdown__item">
                    <span className="countdown__number">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="countdown__label">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;

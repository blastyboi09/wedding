'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { programFlowNotes, programFlowSections } from '@/data/programFlow';
import { seatingMapItems, seatingTables } from '@/data/seatingPlan';
import './page.scss';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/dir/14.5522688,121.0482688/14.11471,120.8809/@14.116519,120.8766189,17.4z';
const WAZE_URL = 'https://ul.waze.com/ul?venue_id=79233165.792200580.3407736&overview=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location';

const schedule = [
    { time: '2:00 PM', event: 'Guests Arrive' },
    { time: '3:00 PM', event: 'Wedding Ceremony' },
    { time: '4:00 PM', event: 'Cocktail Hour' },
    { time: '5:00 PM', event: 'Reception Begins' },
    { time: '6:00 PM', event: 'Dinner Service' },
    { time: '8:00 PM', event: 'Party & Dancing' },
    { time: '10:00 PM', event: 'Send Off' },
];

const colors = [
    { name: 'Dusty Blue', color: '#9EB7CF' },
    { name: 'Pastel Pink', color: '#EFB7C8' },
    { name: 'Sage', color: '#C9D9C9' },
    { name: 'Lavender', color: '#E6D8F2' },
    { name: 'Cream', color: '#FFFDF8' },
];

const normalizeSeatText = (value: string) =>
    value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

const compactSeatText = (value: string) => normalizeSeatText(value).replace(/\s/g, '');

const getInitials = (value: string) =>
    normalizeSeatText(value)
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .join('');

const getSeatSearchTexts = (value: string) => {
    const variants = [normalizeSeatText(value)];
    const commaIndex = value.indexOf(',');

    if (commaIndex > -1) {
        const surname = value.slice(0, commaIndex).trim();
        const givenNames = value.slice(commaIndex + 1).trim();
        const surnameText = normalizeSeatText(surname);
        const givenNameParts = normalizeSeatText(givenNames).split(' ').filter(Boolean);

        variants.push(normalizeSeatText(`${givenNames} ${surname}`));

        if (surnameText && givenNameParts.length) {
            variants.push(`${givenNameParts[0]} ${surnameText}`);

            if (givenNameParts.length > 1) {
                variants.push(`${givenNameParts[givenNameParts.length - 1]} ${surnameText}`);
                variants.push(`${givenNameParts.map((part) => part[0]).join('')} ${surnameText}`);
            }
        }
    }

    return Array.from(new Set(variants.filter(Boolean)));
};

const getSeatLabel = (label: string) => {
    if (label.startsWith('Table ')) {
        return (
            <>
                <span>Table</span>
                <strong>{label.replace('Table ', '')}</strong>
            </>
        );
    }

    return <span>{label}</span>;
};

export default function EventDetails() {
    const [seatSearch, setSeatSearch] = useState('');
    const [selectedTableId, setSelectedTableId] = useState('table-1');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('active')),
            { threshold: 0.1 }
        );

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const seatMatches = useMemo(() => {
        const query = normalizeSeatText(seatSearch);
        const compactQuery = compactSeatText(seatSearch);

        if (!query) {
            return [];
        }

        const queryParts = query.split(' ').filter(Boolean);

        const collectMatches = (includeInitials: boolean) =>
            seatingTables.flatMap((table) =>
                table.guests
                    .filter((guest) => {
                        const guestSearchTexts = getSeatSearchTexts(guest);

                        return guestSearchTexts.some((guestName) => {
                            const guestCompact = guestName.replace(/\s/g, '');
                            const guestInitials = getInitials(guestName);

                            return (
                                guestName.includes(query) ||
                                guestCompact.includes(compactQuery) ||
                                queryParts.every((part) => guestName.includes(part)) ||
                                (includeInitials && guestInitials.includes(compactQuery))
                            );
                        });
                    })
                    .map((guest) => ({ guest, tableId: table.id, tableLabel: table.label }))
            );

        const directMatches = collectMatches(false);

        return directMatches.length ? directMatches : collectMatches(true);
    }, [seatSearch]);

    const matchingTableIds = useMemo(() => new Set(seatMatches.map((match) => match.tableId)), [seatMatches]);
    const hasSeatSearch = seatSearch.trim().length > 0;
    const activeTableId = hasSeatSearch && seatMatches.length > 0 && !matchingTableIds.has(selectedTableId)
        ? seatMatches[0].tableId
        : selectedTableId;
    const activeTable = seatingTables.find((table) => table.id === activeTableId) ?? seatingTables[2];
    const listedTables = seatingTables.filter((table) => table.guests.length > 0);

    return (
        <main className="details">
            <Navbar />

            <section className="details__hero">
                <div className="details__hero-content">
                    <span>Save The Date</span>
                    <h1>Event Details</h1>
                    <p>June 21, 2026 / Alfonso, Cavite</p>
                </div>
            </section>

            <section className="details__events">
                <div className="details__events-container">
                    <article className="details__event-card reveal">
                        <span className="details__event-number">I</span>
                        <p className="details__event-label">The Ceremony</p>
                        <h2>Wedding Ceremony</h2>
                        <strong>3:00 PM</strong>
                        <p>Maple Events by Solange - Garden Area</p>
                        <small>Esperanza Ilaya, Alfonso, Cavite</small>
                        <div className="details__direction-links">
                            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">Google Maps</a>
                            <a href={WAZE_URL} target="_blank" rel="noopener noreferrer">Waze</a>
                        </div>
                    </article>

                    <article className="details__date-card reveal">
                        <span>June</span>
                        <strong>21</strong>
                        <span>2026</span>
                        <p>Two become one</p>
                    </article>

                    <article className="details__event-card reveal">
                        <span className="details__event-number">II</span>
                        <p className="details__event-label">The Celebration</p>
                        <h2>Reception Party</h2>
                        <strong>5:00 PM</strong>
                        <p>Maple Events by Solange - Reception Area</p>
                        <small>Esperanza Ilaya, Alfonso, Cavite</small>
                        <div className="details__direction-links">
                            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">Google Maps</a>
                            <a href={WAZE_URL} target="_blank" rel="noopener noreferrer">Waze</a>
                        </div>
                    </article>
                </div>
            </section>

            <section className="details__schedule">
                <div className="details__schedule-container">
                    <div className="details__section-header reveal">
                        <span>Timeline</span>
                        <h2>Day Schedule</h2>
                    </div>
                    <div className="details__schedule-list">
                        {schedule.map((item, index) => (
                            <article key={item.time} className="details__schedule-item reveal">
                                <small>{String(index + 1).padStart(2, '0')}</small>
                                <strong>{item.time}</strong>
                                <span>{item.event}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="seat-finder" className="details__seating">
                <div className="details__seating-container">
                    <div className="details__section-header reveal">
                        <span>Seat Finder</span>
                        <h2>Find Your Table</h2>
                    </div>

                    <div className="details__seating-shell">
                        <div className="details__seat-panel reveal">
                            <div className="details__seat-search">
                                <label htmlFor="seat-search" className="details__sr-only">Search guest name</label>
                                <input
                                    id="seat-search"
                                    type="search"
                                    value={seatSearch}
                                    onChange={(event) => setSeatSearch(event.target.value)}
                                    placeholder="Search guest name"
                                    autoComplete="off"
                                />
                                {seatSearch && (
                                    <button type="button" onClick={() => setSeatSearch('')}>
                                        Clear
                                    </button>
                                )}
                            </div>

                            <div className={`details__seat-result ${hasSeatSearch && seatMatches.length ? 'is-found' : ''}`}>
                                {hasSeatSearch ? (
                                    seatMatches.length ? (
                                        <>
                                            <span>Match Found</span>
                                            <h3>{seatMatches[0].guest}</h3>
                                            <p>{seatMatches.length === 1 ? activeTable.label : `${seatMatches.length} matches found`}</p>
                                        </>
                                    ) : (
                                        <>
                                            <span>No Match Yet</span>
                                            <h3>No guest found</h3>
                                            <p>Try another spelling or nickname.</p>
                                        </>
                                    )
                                ) : (
                                    <>
                                        <span>Guest Seating</span>
                                        <h3>{activeTable.label}</h3>
                                        <p>{activeTable.guests.length ? `${activeTable.guests.length} guests listed` : 'Guest list coming soon'}</p>
                                    </>
                                )}
                            </div>

                            <div className="details__seat-companions">
                                <span>Seated With</span>
                                <div>
                                    {activeTable.guests.length ? (
                                        activeTable.guests.map((guest) => (
                                            <p
                                                key={guest}
                                                className={seatMatches.some((match) => match.guest === guest) ? 'is-match' : ''}
                                            >
                                                {guest}
                                            </p>
                                        ))
                                    ) : (
                                        <p>Guest list coming soon</p>
                                    )}
                                </div>
                            </div>

                            {hasSeatSearch && seatMatches.length > 1 && (
                                <div className="details__seat-match-list">
                                    {seatMatches.slice(0, 5).map((match) => (
                                        <button
                                            type="button"
                                            key={`${match.tableId}-${match.guest}`}
                                            onClick={() => setSelectedTableId(match.tableId)}
                                        >
                                            <span>{match.guest}</span>
                                            <strong>{match.tableLabel}</strong>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="details__seating-map-wrap reveal">
                            <div className="details__seating-map" aria-label="Reception seating layout">
                                {seatingMapItems.map((item) => {
                                    const table = seatingTables.find((seatTable) => seatTable.id === item.id);
                                    const isSeat = Boolean(table);
                                    const isMatched = matchingTableIds.has(item.id);
                                    const isActive = activeTable.id === item.id;
                                    const className = [
                                        'details__map-item',
                                        `details__map-item--${item.type}`,
                                        `details__map-item--${item.id}`,
                                        isMatched ? 'is-match' : '',
                                        isActive ? 'is-active' : '',
                                    ].filter(Boolean).join(' ');

                                    if (isSeat) {
                                        return (
                                            <button
                                                type="button"
                                                key={item.id}
                                                className={className}
                                                aria-pressed={isActive}
                                                onClick={() => {
                                                    setSelectedTableId(item.id);
                                                    setSeatSearch('');
                                                }}
                                            >
                                                {getSeatLabel(item.label)}
                                            </button>
                                        );
                                    }

                                    return (
                                        <div key={item.id} className={className}>
                                            <span>{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="details__table-roster reveal">
                        {listedTables.map((table) => (
                            <button
                                type="button"
                                key={table.id}
                                className={activeTable.id === table.id ? 'is-active' : ''}
                                onClick={() => {
                                    setSelectedTableId(table.id);
                                    setSeatSearch('');
                                }}
                            >
                                <strong>{table.label}</strong>
                                <span>{table.guests.join(' / ')}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="details__program">
                <div className="details__program-container">
                    <div className="details__section-header reveal">
                        <span>Detailed Flow</span>
                        <h2>Program Guide</h2>
                        <p>
                            A full-day guide from preparation to reception, based on the official wedding timeline.
                        </p>
                        <a href="/program-flow.pdf" download className="details__download">
                            Download Cute PDF
                        </a>
                    </div>

                    <div className="details__program-flow">
                        {programFlowSections.map((section) => (
                            <article key={section.title} className="details__program-section reveal">
                                <h3>{section.title}</h3>
                                <div className="details__program-list">
                                    {section.items.map((item, index) => (
                                        <div key={`${section.title}-${index}`} className="details__program-item">
                                            <time>{item.time ?? 'Note'}</time>
                                            <p>{item.activity}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="details__program-notes reveal">
                        {programFlowNotes.map((note) => (
                            <p key={note}>{note}</p>
                        ))}
                    </div>
                </div>
            </section>

            <section className="details__dresscode">
                <div className="details__dresscode-content reveal">
                    <span>What to Wear</span>
                    <h2>Dress Code</h2>
                    <h3>Semi-Formal / Garden Chic</h3>
                    <p>
                        We kindly request our guests to dress in semi-formal attire.
                        Think elegant and comfortable, perfect for a beautiful garden celebration.
                    </p>
                    <div className="details__colors">
                        {colors.map((color) => (
                            <div key={color.name} className="details__color">
                                <i style={{ background: color.color }} />
                                <span>{color.name}</span>
                            </div>
                        ))}
                    </div>
                    <p className="details__note">Please avoid wearing white or ivory as these are reserved for the bride.</p>
                </div>
            </section>

            <section id="directions" className="details__map-section">
                <div className="details__map-container">
                    <div className="details__map-info reveal">
                        <span>Location</span>
                        <h2>Find Your Way</h2>
                        <p><strong>Esperanza Ilaya</strong><br />Alfonso, Cavite, Philippines</p>
                        <div className="details__direction-links details__direction-links--map">
                            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">Google Maps</a>
                            <a href={WAZE_URL} target="_blank" rel="noopener noreferrer">Waze</a>
                        </div>
                    </div>
                    <div className="details__map-embed reveal">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.1!2d120.8809!3d14.11471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA2JzUzLjAiTiAxMjDCsDUyJzUxLjIiRQ!5e0!3m2!1sen!2sph!4v1234567890"
                            title="Wedding Venue Map"
                            loading="lazy"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

"use client";

import React from 'react';
import styles from './stories.module.scss';
import Image from 'next/image';

// Mock Data
const reviews = [
    { text: "A masterpiece of restraint. Enrique doesn't shout luxury; it whispers it.", author: "James T., Architect" },
    { text: "The weight on the wrist feels like a commitment to excellence.", author: "Elena R., Curator" },
    { text: "Finally, a watch that understands the value of silence in design.", author: "Marcus L., Entrepreneur" }
];

const snippets = [
    {
        source: "The Financial Journal",
        date: "Oct 12, 2025",
        headline: "Enrique Redefines Modern Horology",
        content: "In a market saturated with excess, Enrique Maison brings a refreshing return to fundamental elegance. The new 'Originals' collection has silenced critics with its bold minimalism."
    },
    {
        source: "Daily Style",
        date: "Nov 05, 2025",
        headline: "The Quiet Revolution",
        content: "Why are the world's most influential CEOs trading their flashiest timepieces for Enrique? Because true power doesn't need to show off. It simply is."
    },
    {
        source: "Watch & Wonder",
        date: "Jan 20, 2026",
        headline: "Beyond Time",
        content: "With the release of the 010 series, Enrique proves that materials are not just structural—they are emotional. A triumph of ceramic and steel engineering."
    }
];

export default function StoriesPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <h1>Stories of Enrique</h1>
                <p>The chronicles of our journey, told by those who walk with us.</p>
            </section>

            {/* Media Centre - Newspaper Snippets */}
            <section className={styles.section}>
                <h2>Media Centre</h2>
                <div className={styles.mediaGrid}>
                    {snippets.map((snippet, i) => (
                        <div
                            key={i}
                            className={styles.newspaperSnippet}
                            style={{ '--rotation': `${i % 2 === 0 ? '1deg' : '-1deg'}` } as React.CSSProperties}
                        >
                            <div className={styles.paperHeader}>
                                <span>{snippet.source}</span>
                                <span>{snippet.date}</span>
                            </div>
                            <h3>{snippet.headline}</h3>
                            <div className={styles.snippetBody}>
                                {snippet.content}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Customer Persona Data */}
            <section className={styles.section}>
                <h2>The Enrique Persona</h2>
                <div className={styles.personaSection}>
                    <div className={styles.personaContent}>
                        <h3>The Architect of Their Own Fate</h3>
                        <p>
                            They are the silent observers in a room full of noise. They speak less, but when they do, the room listens.
                            The Enrique individual values time not as a currency to be spent, but as a canvas to be filled with intent.
                        </p>
                        <p>
                            Unyielding in their principles, impeccable in their taste. They do not seek validation from the crowd;
                            their confidence is intrinsic, forged like the steel on their wrist to withstand the pressures of the modern world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className={styles.section}>
                <h2>Voices of the Maison</h2>
                <div className={styles.reviewsGrid}>
                    {reviews.map((review, i) => (
                        <div key={i} className={styles.reviewCard}>
                            <p className={styles.reviewText}>"{review.text}"</p>
                            <p className={styles.reviewer}>— {review.author}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

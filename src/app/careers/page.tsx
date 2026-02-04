import React from 'react';
import Image from 'next/image';
import styles from './Careers.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers | Enrique Legacy',
    description: 'Meet the artisans and leaders behind the Enrique Watch Company.',
};

const administration = [
    {
        id: 1,
        name: 'Alexandre Enrique',
        role: 'Chief Executive Officer',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2600&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Isabella Rossi',
        role: 'Director of Heritage',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2600&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'James Sterling',
        role: 'Global Marketing Director',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2600&auto=format&fit=crop'
    }
];

const artisans = [
    {
        id: 4,
        name: 'Henri Dubois',
        role: 'Master Watchmaker',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2600&auto=format&fit=crop'
    },
    {
        id: 5,
        name: 'Sophie Laurent',
        role: 'Head of Complications',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=2600&auto=format&fit=crop'
    },
    {
        id: 6,
        name: 'Marcus Thorne',
        role: 'Lead Designer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2600&auto=format&fit=crop'
    }
];

const Careers = () => {
    return (
        <div className={`container ${styles.container}`}>
            <section className={styles.hero}>
                <h1>Custodians of Time</h1>
                <p>Meet the team behind the legacy</p>
            </section>

            <section className={styles.department}>
                <h2>Administration</h2>
                <div className={styles.grid}>
                    {administration.map(member => (
                        <div key={member.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image src={member.image} alt={member.name} fill />
                            </div>
                            <div className={styles.info}>
                                <h3>{member.name}</h3>
                                <h4>{member.role}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.department}>
                <h2>Atelier & Design</h2>
                <div className={styles.grid}>
                    {artisans.map(member => (
                        <div key={member.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image src={member.image} alt={member.name} fill />
                            </div>
                            <div className={styles.info}>
                                <h3>{member.name}</h3>
                                <h4>{member.role}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Careers;

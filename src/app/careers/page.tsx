import React from 'react';
import Image from 'next/image';
import styles from './Careers.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers | Enrique Legacy',
    description: 'Meet the artisans and leaders behind the Enrique Watch Company.',
};

const teamMembers = [
    {
        id: 1,
        name: 'Tejas Kr. Punyap',
        role: 'Co-Founder & Director',
        image: '/images/team/tejas.png',
        bio: 'Visionary leader dedicated to preserving the heritage of artisanal horology while embracing modern innovation.'
    },
    {
        id: 2,
        name: 'Sanjeev Kumar',
        role: 'Co-Founder & Creative Lead',
        image: '/images/team/sanjeev.png',
        bio: 'Master of aesthetic precision, ensuring every Enrique timepiece tells a story of elegance and technical mastery.'
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
                <h2>Our Team</h2>
                <div className={styles.grid}>
                    {teamMembers.map(member => (
                        <div key={member.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image src={member.image} alt={member.name} fill />
                            </div>
                            <div className={styles.info}>
                                <h3>{member.name}</h3>
                                <h4>{member.role}</h4>
                                <p className={styles.bio}>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* The Enrique School Section */}
            <section className={styles.school}>
                <div className={styles.schoolImageWrapper}>
                    <Image
                        src="/images/watchmaking-school.png"
                        alt="Watchmaking School"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className={styles.schoolContent}>
                    <h2>The Enrique School</h2>
                    <p>To preserve the art of fine watchmaking, we offer full scholarships to aspiring horologists.</p>
                    <p>Our 3-year intense program covers:</p>
                    <ul>
                        <li>Micro-mechanics and restoration.</li>
                        <li>Traditional finishing techniques (Anglage, Perlage).</li>
                        <li>Design and movement assembly.</li>
                    </ul>
                    <p>Graduates are offered apprenticeships within our atelier or placement in the luxury industry.</p>
                </div>
            </section>
        </div>
    );
};

export default Careers;

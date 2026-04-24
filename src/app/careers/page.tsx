"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Careers.module.scss';
import { motion } from 'framer-motion';

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

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
} as any;

const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.2
        }
    },
    viewport: { once: true }
};

const Careers = () => {
    return (
        <div className={`container ${styles.container}`}>
            <motion.section 
                className={styles.hero}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            >
                <h1>Custodians of Time</h1>
                <p>Meet the team behind the legacy</p>
            </motion.section>

            <section className={styles.department}>
                <motion.h2 {...fadeInUp}>Our Team</motion.h2>
                <motion.div 
                    className={styles.grid}
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                >
                    {teamMembers.map(member => (
                        <motion.div 
                            key={member.id} 
                            className={styles.card}
                            variants={fadeInUp}
                        >
                            <div className={styles.imageWrapper}>
                                <Image src={member.image} alt={member.name} fill sizes="(max-width: 768px) 100vw, 50vw" />
                            </div>
                            <div className={styles.info}>
                                <h3>{member.name}</h3>
                                <h4>{member.role}</h4>
                                <p className={styles.bio}>{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Craftsmanship Section */}
            <motion.section 
                className={styles.craftsmanship}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            >
                <div className={styles.craftHeader}>
                    <motion.h2 {...fadeInUp}>Craftsmanship at Heart</motion.h2>
                    <motion.p {...fadeInUp} transition={{ delay: 0.2, duration: 0.8 }}>
                        Every Enrique timepiece is the result of thousands of hours of dedicated artistry and technical innovation.
                    </motion.p>
                </div>
                <motion.div 
                    className={styles.craftImageFull}
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
                >
                    <Image 
                        src="/images/about/craftsmanship.png" 
                        alt="Watchmaking Craftsmanship" 
                        fill 
                        sizes="100vw"
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
            </motion.section>

            {/* The Enrique School Section */}
            <motion.section 
                className={styles.school}
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div 
                    className={styles.schoolImageWrapper}
                    variants={{
                        initial: { opacity: 0, x: -50 },
                        whileInView: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
                >
                    <Image
                        src="/images/about/school.jpg"
                        alt="The Enrique School of Horology"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                    />
                </motion.div>
                <motion.div className={styles.schoolContent} variants={fadeInUp}>
                    <h2>The Enrique School of Horology</h2>
                    <p>To preserve the art of fine watchmaking, we offer full scholarships to talented students from disadvantaged backgrounds. Our 3-year intense program covers:</p>
                    <p>Our 3-year intense program covers:</p>
                    <ul>
                        <li>Micro-mechanics and restoration.</li>
                        <li>Traditional finishing techniques (Anglage, Perlage).</li>
                        <li>Design and movement assembly.</li>
                    </ul>
                    <p>Graduates are offered apprenticeships within our ateliers or partner manufactures, ensuring a sustainable career in the luxury industry.</p>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default Careers;

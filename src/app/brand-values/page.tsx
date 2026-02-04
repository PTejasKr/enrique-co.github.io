import React from 'react';
import Image from 'next/image';
import styles from './BrandValues.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brand Values | Enrique Legacy',
    description: 'Discover the 200-year legacy of Enrique Watch Company.',
};

const BrandValues = () => {
    return (
        <div className={`container ${styles.container}`}>
            <section className={styles.hero}>
                <h1>Our Legacy</h1>
                <p>&quot;To break the rules, you must first master them.&quot;</p>
                <div style={{ width: '60px', height: '2px', background: '#c6a664', margin: '30px auto' }}></div>
            </section>

            <section className={styles.section}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1584208124296-628d02d083b4?q=80&w=2600&auto=format&fit=crop"
                        alt="Vintage Watchmaking Tools"
                        fill
                    />
                </div>
                <div className={styles.content}>
                    <h2>200 Years of Mastery</h2>
                    <p>
                        Established in 1824, Enrique Watch Company began as a humble atelier in the heart of Vallée de Joux.
                        For two centuries, we have remained independent, family-owned, and dedicated to the art of high horology.
                    </p>
                    <p>
                        Our story is one of resilience and innovation. From the first minute repeater to the thinnest perpetual calendar,
                        Enrique has pushed the boundaries of what is possible in mechanical watchmaking, all while preserving the
                        traditional techniques passed down through generations.
                    </p>
                </div>
            </section>

            <section className={`${styles.section} ${styles.reverse}`}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1612152605332-94bc5424cdfb?q=80&w=2600&auto=format&fit=crop"
                        alt="Watchmaker Hands"
                        fill
                    />
                </div>
                <div className={styles.content}>
                    <h2>The Art of Connection</h2>
                    <p>
                        A watch is more than a device to tell time; it is a vessel of emotion. Every Enrique timepiece is hand-finished
                        to perfections, ensuring that the human touch is evident in every bevel and bridge.
                    </p>
                    <p>
                        We believe in creating objects that last forever. Our commitment to sustainability ensures that an Enrique watch
                        is not just for today, but an heirloom for the future.
                    </p>
                </div>
            </section>

            <section>
                <div className={styles.hero} style={{ marginBottom: '40px' }}>
                    <h2>Our Core Values</h2>
                </div>
                <div className={styles.valuesgrid}>
                    <div className={styles.valueCard}>
                        <h3>Tradition</h3>
                        <p>Respecting the past while embracing the future. We honor our heritage in every innovation.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Excellence</h3>
                        <p>Pursuing perfection in every detail, from the hidden movement components to the polished case.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <h3>Family</h3>
                        <p>We remain independent and family-run, treating our clients and artisans as part of the Enrique kin.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BrandValues;

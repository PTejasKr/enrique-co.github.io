import React from 'react';
import Image from 'next/image';
import styles from './Foundation.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Enrique Foundation | Philanthropy',
    description: 'Supporting underprivileged children and the future of watchmaking.',
};

const Foundation = () => {
    return (
        <div>
            <div className={`container ${styles.container}`}>
                <section className={styles.hero}>
                    <h1>The Enrique Foundation</h1>
                    <p>
                        We believe that time is the most valuable gift one can give.
                        The Enrique Foundation serves to empower the next generation through education,
                        care, and the preservation of artisanal crafts.
                    </p>
                </section>

                <section className={styles.missionSection}>
                    <h2>Our Mission</h2>
                    <p>
                        Since 1924, the Enrique family has dedicated a portion of its annual revenue to social causes.
                        Today, the Foundation operates globally, focusing on two key pillars: holistic child welfare
                        and vocational training in the horological arts.
                    </p>
                </section>
            </div>

            <section className={styles.initiative}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2600&auto=format&fit=crop"
                        alt="Supporting Children"
                        fill
                    />
                </div>
                <div className={styles.content}>
                    <h3>The Hope Orphanage</h3>
                    <p>
                        Located in the serene hills of the Swiss Jura and expanding to regions in need,
                        The Hope Orphanage provides a safe haven for underprivileged children. We ensure that
                        every child receives:
                    </p>
                    <ul>
                        <li>Quality education and healthcare.</li>
                        <li>A nurturing family-like environment.</li>
                        <li>Psychological support and extra-curricular activities.</li>
                    </ul>
                    <p>
                        We measure success not in numbers, but in the smiles and futures we help secure.
                    </p>
                </div>
            </section>

            <section className={styles.initiative}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1596525737118-8f85f3922339?q=80&w=2600&auto=format&fit=crop"
                        alt="Watchmaking School"
                        fill
                    />
                </div>
                <div className={styles.content}>
                    <h3>The Enrique School of Horology</h3>
                    <p>
                        To preserve the art of fine watchmaking, we offer full scholarships to talented students
                        from disadvantaged backgrounds. Our 3-year intense program covers:
                    </p>
                    <ul>
                        <li>Micro-mechanics and restoration.</li>
                        <li>Traditional finishing techniques (Anglage, Perlage).</li>
                        <li>Design and movement assembly.</li>
                    </ul>
                    <p>
                        Graduates are offered apprenticeships within our ateliers or partner manufactures,
                        ensuring a sustainable career in the luxury industry.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Foundation;

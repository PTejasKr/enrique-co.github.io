import React from 'react';
import styles from './our-world.module.scss';

export const metadata = {
    title: "Our World | ENRIQUE",
    description: "Discover the philosophy of quiet luxury and enduring design.",
};

export default function OurWorldPage() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <video className={styles.videoBackground} autoPlay loop muted playsInline>
                    <source src="/videos/our-world-bg.mp4" type="video/mp4" />
                </video>
                <div className={styles.heroContent}>
                    <h1>The Art of Restraint</h1>
                    <p>Luxury is not declared. It is recognized.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.block}>
                    <h2>Philosophy</h2>
                    <p>
                        In a world of noise, Enrique chooses silence. We believe that true luxury
                        does not need to shout. It is found in the weight of steel, the matte finish
                        of ceramic, and the precision of a movement that will outlast its wearer.
                    </p>
                </div>

                <div className={styles.block}>
                    <h2>Craftsmanship</h2>
                    <p>
                        Every Enrique timepiece is assembled with an obsession for detail that borders on
                        reverence. From our Swiss-engineered movements to our hand-finished cases,
                        we honor the centuries-old tradition of horology while embracing the materials of tomorrow.
                    </p>
                </div>
            </section>
        </div>
    );
}

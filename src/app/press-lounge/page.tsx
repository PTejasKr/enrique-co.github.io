import React from 'react';
import Image from 'next/image';
import styles from './PressLounge.module.scss';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Press Lounge | Enrique In The News',
    description: 'Latest reviews and celebrity sightings of Enrique timepieces.',
};

const items = [
    {
        type: 'review',
        text: "It is rare to see a brand weave history and modernity so seamlessly. The Enrique Royal Oak remains the gold standard of luxury sports watches.",
        author: "The Horological Journal"
    },
    {
        type: 'image',
        src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2600&auto=format&fit=crop",
        caption: "Actor James Dean sporting the Royal Oak Offshore at the Cannes Film Festival."
    },
    {
        type: 'review',
        text: "Enrique's return to the ultra-thin complication market is nothing short of a triumph. A masterclass in engineering.",
        author: "Time & Tide"
    },
    {
        type: 'image',
        src: "https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=2600&auto=format&fit=crop",
        caption: "Tennis champion Roger V. celebrating victory with the EWC Perpetual Calendar."
    },
    {
        type: 'review',
        text: "An audacious display of craftsmanship. The openworked dial reveals a universe of mechanical perfection.",
        author: "Hodinkee"
    },
    {
        type: 'image',
        src: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=2600&auto=format&fit=crop",
        caption: "Musician Alicia K. wearing the custom EWC Concept Tourbillon."
    }
];

const PressLounge = () => {
    return (
        <div className={`container ${styles.container}`}>
            <section className={styles.hero}>
                <h1>In The Spotlight</h1>
                <p>Global Acclaim & Red Carpet Moments</p>
                <div style={{ width: '60px', height: '2px', background: '#c6a664', margin: '30px auto' }}></div>
            </section>

            <div className={styles.grid}>
                {items.map((item, index) => (
                    item.type === 'review' ? (
                        <div key={index} className={styles.reviewCard}>
                            <blockquote>&quot;{item.text}&quot;</blockquote>
                            <cite>— {item.author}</cite>
                        </div>
                    ) : (
                        <div key={index} className={styles.imageCard}>
                            <Image src={item.src || ''} alt="Celebrity Sighting" fill />
                            <div className={styles.caption}>
                                <p>{item.caption}</p>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default PressLounge;

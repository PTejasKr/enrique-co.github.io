import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './StoryCard.module.scss';

interface StoryProps {
    data: {
        id: number;
        title: string;
        category: string;
        date: string;
        excerpt: string;
        image: string;
        link: string;
    };
}

const StoryCard: React.FC<StoryProps> = ({ data }) => {
    return (
        <Link href={data.link} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <span>{data.category}</span>
                    <span>•</span>
                    <span>{data.date}</span>
                </div>
                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.excerpt}>{data.excerpt}</p>
                <div className={styles.readMore}>Read Article</div>
            </div>
        </Link>
    );
};

export default StoryCard;

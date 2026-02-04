import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CollectionCard.module.scss';

interface CollectionProps {
    data: {
        id: number;
        title: string;
        description: string;
        image: string;
        link: string;
    };
}

const CollectionCard: React.FC<CollectionProps> = ({ data }) => {
    return (
        <Link href={data.link} className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={data.image}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.description}>{data.description}</p>
            </div>
        </Link>
    );
};

export default CollectionCard;

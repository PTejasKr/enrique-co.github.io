import React from 'react';
import Image from 'next/image';
import styles from './StoreCard.module.scss';

interface StoreProps {
    data: {
        id: number;
        city: string;
        name: string;
        address: string;
        phone: string;
        image: string;
        mapUrl?: string;
    };
}

const StoreCard: React.FC<StoreProps> = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            <div className={styles.content}>
                <span className={styles.city}>{data.city}</span>
                <h3 className={styles.name}>{data.name}</h3>
                <div className={styles.info}>
                    <p>{data.address}</p>
                    <p>{data.phone}</p>
                </div>
                <a
                    href={data.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    Get Directions
                </a>
            </div>
        </div>
    );
};

export default StoreCard;

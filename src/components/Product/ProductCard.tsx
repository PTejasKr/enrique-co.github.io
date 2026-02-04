import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';

interface ProductProps {
    data: {
        id: number;
        name: string;
        reference: string;
        material: string;
        image: string;
        price: string;
    };
}

const ProductCard: React.FC<ProductProps> = ({ data }) => {
    return (
        <Link href="#" className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </div>
            <div className={styles.info}>
                <span className={styles.reference}>{data.reference}</span>
                <h3 className={styles.name}>{data.name}</h3>
                <span className={styles.material}>{data.material}</span>
                <span className={styles.price}>{data.price}</span>
            </div>
        </Link>
    );
};

export default ProductCard;

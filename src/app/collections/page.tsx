import { Metadata } from 'next';
import styles from './collections.module.scss';
import CollectionCard from '@/components/Collection/CollectionCard';
import { collections } from '@/constants/collections';

export const metadata: Metadata = {
    title: 'Collections | ENRIQUE',
    description: 'Explore our range of precision engineering instruments.',
};

export default function CollectionsPage() {
    return (
        <main className={styles.page}>
            <div className="container">
                <div className={styles.intro}>
                    <h1>The Collections</h1>
                    <p>
                        From the architectural 007 to the experimental 009,
                        explore the distinct character of our engineering families.
                    </p>
                </div>

                <div className={styles.grid}>
                    {collections.map((collection) => (
                        <CollectionCard key={collection.id} data={collection} />
                    ))}
                </div>
            </div>
        </main>
    );
}

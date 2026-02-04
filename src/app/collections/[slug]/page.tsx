import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './detail.module.scss';
import ProductCard from '@/components/Product/ProductCard';
import { collections } from '@/constants/collections';
import { watches } from '@/constants/watches';

// Generate static params for all collections
export async function generateStaticParams() {
    return collections.map((collection) => ({
        slug: collection.link.split('/').pop(),
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = (await params).slug;
    const collection = collections.find(c => c.link.endsWith(slug));

    if (!collection) {
        return { title: 'Collection Not Found' };
    }

    return {
        title: `${collection.title} | ENRIQUE`,
        description: collection.description,
    };
}

export default async function CollectionDetailPage({ params }: { params: { slug: string } }) {
    const slug = (await params).slug;
    const collection = collections.find(c => c.link.endsWith(slug));
    const collectionWatches = watches.filter(w => w.collectionSlug === slug);

    if (!collection) {
        notFound();
    }

    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>{collection.title}</h1>
                    <p>{collection.description}</p>
                </div>
            </section>

            <div className="container">
                {collectionWatches.length > 0 ? (
                    <div className={styles.grid}>
                        {collectionWatches.map(watch => (
                            <ProductCard key={watch.id} data={watch} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.emptyState}>
                        <h2>Coming Soon</h2>
                        <p>We are currently updating our catalogue for {collection.title}.</p>
                    </div>
                )}
            </div>
        </main>
    );
}

import { Metadata } from 'next';
import Image from 'next/image';
import styles from './stores.module.scss';
import StoreCard from '@/components/Store/StoreCard';
import { boutiques } from '@/constants/boutiques';

export const metadata: Metadata = {
    title: 'Find a Boutique | Enrique Clone',
    description: 'Locate your nearest Enrique boutique or service center.',
};

export default function StoresPage() {
    return (
        <main className={styles.page}>
            <div className={styles.layout}>
                {/* Left Panel: List */}
                <div className={styles.listPanel}>
                    <h1 className={styles.title}>Boutiques</h1>
                    <div className={styles.grid}>
                        {boutiques.map((store) => (
                            <StoreCard key={store.id} data={store} />
                        ))}
                    </div>
                </div>

                {/* Right Panel: Map Stub */}
                <div className={styles.mapPanel}>
                    {/* Static map placeholder */}
                    <Image
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2600&auto=format&fit=crop"
                        alt="Map"
                        fill
                        className={styles.fakeMap}
                        priority
                    />

                    {/* Simulated pins based on rough relative positioning approx for demo */}
                    {/* In a real app, use Google Maps API or Leaflet */}
                    {boutiques.map((store, index) => (
                        <div
                            key={store.id}
                            className={styles.mapPin}
                            style={{
                                top: `${40 + (index * 8)}%`, // Arbitrary scatter for visual demo
                                left: `${30 + (index * 12)}%`
                            }}
                            title={store.city}
                        ></div>
                    ))}
                </div>
            </div>
        </main>
    );
}

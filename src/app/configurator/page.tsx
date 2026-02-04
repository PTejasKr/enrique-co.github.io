import { Metadata } from 'next';
import Configurator from '@/components/Configurator/Configurator';

export const metadata: Metadata = {
    title: 'EWC Atelier | Configure Your Timepiece',
    description: 'Customize your personal Enrique timepiece in our exclusive digital atelier.',
};

export default function ConfiguratorPage() {
    return (
        <main>
            <Configurator />
        </main>
    );
}

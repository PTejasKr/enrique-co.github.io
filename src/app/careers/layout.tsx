import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers | Enrique Legacy',
    description: 'Meet the artisans and leaders behind the Enrique Watch Company.',
};

export default function CareersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

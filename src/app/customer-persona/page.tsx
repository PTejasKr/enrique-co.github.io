import React from 'react';
import CustomerPersonaDashboard from '../../components/Analytics/CustomerPersonaDashboard';
import ContentCalendar from '../../components/Analytics/ContentCalendar';
import styles from './page.module.scss';

export default function CustomerPersonaPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <CustomerPersonaDashboard />
                <ContentCalendar />
            </div>
        </main>
    );
}

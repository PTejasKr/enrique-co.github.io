"use client";

import React from 'react';
import styles from './EditorialSection.module.scss';
import StoryCard from './StoryCard';
import { stories } from '../../constants/stories';
import Button from '../ui/Button';
import { useEntranceAnimation } from '@/hooks/useEntranceAnimation';

const EditorialSection = () => {
    const sectionRef = useEntranceAnimation<HTMLElement>({ threshold: 0.2 });

    return (
        <section className={styles.section} ref={sectionRef}>

            <div className={`container ${styles.contentOverlay}`}>
                <div className={styles.header}>
                    <p>Inside Enrique</p>
                    <h2>THE JOURNAL</h2>
                </div>

                <div className={styles.grid}>
                    {stories.map((story) => (
                        <StoryCard key={story.id} data={story} />
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '80px' }}>
                    <Button variant="outline" isDarkOutline={false} href="/stories">Read the Journal</Button>
                </div>
            </div>
        </section>
    );
};

export default EditorialSection;

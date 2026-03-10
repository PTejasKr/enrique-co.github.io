"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from './FeaturedCollections.module.scss';
import CollectionCard from './CollectionCard';
import { collections } from '../../constants/collections';
import { useEntranceAnimation } from '../../hooks/useEntranceAnimation';

const FeaturedCollections = () => {
    const headerRef = useEntranceAnimation<HTMLDivElement>({ delay: 0.2, yOffset: 30 });
    const carouselRef = useEntranceAnimation<HTMLDivElement>({ delay: 0.4, yOffset: 50 });

    return (
        <section className={styles.section}>

            <div className={`container ${styles.contentOverlay}`}>
                <div className={styles.header} ref={headerRef}>
                    <p>Curated Mastery</p>
                    <h2>THE COLLECTIONS</h2>
                </div>

                <div className={styles.carouselContainer} ref={carouselRef}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2.5,
                            },
                            1400: {
                                slidesPerView: 3,
                            }
                        }}
                        style={{ paddingBottom: '50px' }}
                    >


                        {collections.map((collection) => (
                            <SwiperSlide key={collection.id}>
                                <CollectionCard data={collection} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    );
};

export default FeaturedCollections;

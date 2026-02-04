"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './FeaturedCollections.module.scss';
import CollectionCard from './CollectionCard';
import { collections } from '../../constants/collections';

const FeaturedCollections = () => {
    return (
        <section className={styles.section}>

            <div className={`container ${styles.contentOverlay}`}>
                <div className={styles.header}>
                    <p>Curated Mastery</p>
                    <h2>THE COLLECTIONS</h2>
                </div>

                <div className={styles.carouselContainer}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2.2,
                                centeredSlides: false,
                            },
                            1024: {
                                slidesPerView: 3.5,
                                centeredSlides: false,
                            },
                            1400: {
                                slidesPerView: 4,
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

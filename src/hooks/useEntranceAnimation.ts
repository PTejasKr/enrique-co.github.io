import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimationConfig {
    delay?: number;
    duration?: number;
    yOffset?: number;
    threshold?: number;
}

export const useEntranceAnimation = <T extends HTMLElement = HTMLDivElement>(config: AnimationConfig = {}) => {
    const elementRef = useRef<T>(null);

    // Default Config
    const {
        delay = 0,
        duration = 1.0,
        yOffset = 50
    } = config;

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(element,
                {
                    opacity: 0,
                    y: yOffset
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: duration,
                    ease: 'power3.out',
                    delay: delay,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%', // Start animation when top of element hits 85% of viewport height
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        return () => ctx.revert();
    }, [delay, duration, yOffset]);

    return elementRef;
};

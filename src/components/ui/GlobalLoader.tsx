"use client";

import React, { useState, useEffect } from "react";
import KineticDotsLoader from "@/components/ui/kinetic-dots-loader";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        // Simulate initial load or route change load
        // For a real app, you might only show this on first visit
        // or trigger it based on specific route transitions.
        // Here we show it briefly on initial mount.

        // Check session storage to only show once per session if desired
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (!hasVisited) {
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem("hasVisited", "true");
            }, 2500); // 2.5s duration for the animation to play out
            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
        }

    }, []);

    if (!isLoading) return null;

    return <KineticDotsLoader />;
}

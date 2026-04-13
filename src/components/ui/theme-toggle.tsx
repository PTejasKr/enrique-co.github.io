"use client"

import { useTheme } from "@/context/ThemeContext"
import { Moon, Sun } from "lucide-react"
import styles from "./ThemeToggle.module.scss"

interface ThemeToggleProps {
    className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            className={`${styles.toggleButton} ${className || ''}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {/* Animated Background Overlay */}
            <div 
                className={`${styles.backgroundOverlay} ${isDark ? styles.overlayDark : styles.overlayLight}`}
            />

            <div className={styles.innerContainer}>
                {/* Knob */}
                <div
                    className={`${styles.knob} ${isDark ? styles.knobDark : styles.knobLight}`}
                >
                    {isDark ? (
                        <Moon className={`${styles.icon} ${styles.knobIconDark}`} strokeWidth={2.5} />
                    ) : (
                        <Sun className={`${styles.icon} ${styles.knobIconLight}`} strokeWidth={2.5} />
                    )}
                </div>

                {/* Icons Behind Knob */}
                <div className={`${styles.iconBehind} ${styles.iconMoonBehind} ${isDark ? styles.opacityZero : styles.opacityForty}`}>
                    <Moon className={styles.icon} strokeWidth={2} />
                </div>
                <div className={`${styles.iconBehind} ${styles.iconSunBehind} ${isDark ? styles.opacityForty : styles.opacityZero}`}>
                    <Sun className={styles.icon} strokeWidth={2} />
                </div>
            </div>
        </button>
    )
}

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

import { useTheme } from '@/context/ThemeContext';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'COLLECTIONS', href: '/collections' },
        { name: 'OUR WORLD', href: '/our-world' },
        { name: 'CONFIGURATOR', href: '/configurator' },
        { name: 'STORES', href: '/stores' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled || isMobileMenuOpen ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    ENRIQUE
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.navLink}>
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={toggleTheme} className={styles.themeToggle}>
                        {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <div className={styles.mobileActions}>
                    <button onClick={toggleTheme} className={styles.themeToggleMobile}>
                        {theme === 'dark' ? '☀' : '☾'}
                    </button>
                    <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={styles.navLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;

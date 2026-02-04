"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

import { ThemeToggle } from '../ui/theme-toggle';
import { MapPin, User, Search } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        { name: 'Watches', href: '/collections' },
        { name: 'Our World', href: '/our-world' },
        { name: 'Stories', href: '#' },
        { name: 'Services', href: '#' },
    ];

    return (
        <header className={`${styles.header} ${isScrolled || isMobileMenuOpen ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>

                {/* Left: Navigation */}
                <nav className={styles.leftNav}>
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={styles.navLink}>
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Center: Logo */}
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logo}>
                        ENRIQUE
                    </Link>
                </div>

                {/* Right: Actions */}
                <div className={styles.rightActions}>
                    <Link href="/stores" className={styles.iconLink}>
                        <MapPin className="w-5 h-5" strokeWidth={1.5} />
                    </Link>
                    <button className={styles.iconLink}>
                        <User className="w-5 h-5" strokeWidth={1.5} />
                    </button>
                    <ThemeToggle />

                    {/* Mobile Toggle Trigger */}
                    <div className={styles.mobileToggle} onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? 'CLOSE' : 'MENU'}
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={styles.mobileNavLink}
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

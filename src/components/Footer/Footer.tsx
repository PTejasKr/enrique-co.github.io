import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.newsletter}>
                        <h3>Newsletter</h3>
                        <p>Subscribe to receive the latest news from Enrique.</p>
                        <form className={styles.form}>
                            <input type="email" placeholder="Email Address" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>

                    <div className={styles.column}>
                        <h4>Collections</h4>
                        <ul>
                            <li><Link href="/collections/007">007</Link></li>
                            <li><Link href="/collections/008">008</Link></li>
                            <li><Link href="/collections/009">009</Link></li>
                            <li><Link href="/collections/010">010</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Corporate</h4>
                        <ul>
                            <li><Link href="/brand-values">Brand Values</Link></li>
                            <li><Link href="/foundation">Foundation</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/press-lounge">Press Lounge</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.legalLinks}>
                        <Link href="#">Legal Notice</Link>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Accessibility</Link>
                    </div>
                    <div className={styles.copyright}>
                        © {new Date().getFullYear()} Enrique. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

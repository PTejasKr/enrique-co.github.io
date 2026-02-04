import React, { useState } from 'react';
import { X, Mail, Lock, ArrowRight } from 'lucide-react';
import styles from './LoginModal.module.scss';
import ReactDOM from 'react-dom';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    // Use portal to render outside the DOM hierarchy for better z-index handling
    // Assuming 'body' is available, or we could strict it to a portal root if one exists
    // For simplicity in Next.js/React, rendering inline with fixed position often works, 
    // but Portal is cleaner for Modals. 
    // We will render standard fixed overlay for now.

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
        // Handle login logic here
        onClose();
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={20} />
                </button>

                <div className={styles.header}>
                    <h2>Welcome Back</h2>
                    <p>Sign in to your Enrique account</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <Mail className={styles.icon} size={18} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <Lock className={styles.icon} size={18} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.actions}>
                        <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        <span>Sign In</span>
                        <ArrowRight size={18} />
                    </button>
                </form>

                <div className={styles.footer}>
                    <p>Don't have an account? <a href="#">Create one</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;

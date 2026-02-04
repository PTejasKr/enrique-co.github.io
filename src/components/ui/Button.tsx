import React from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    href?: string;
    onClick?: () => void;
    className?: string;
    isDarkOutline?: boolean; // For outline variant on light background
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    isDarkOutline = false
}) => {
    const combinedClassName = `
    ${styles.button} 
    ${styles[variant]} 
    ${isDarkOutline && variant === 'outline' ? styles.dark : ''}
    ${className}
  `.trim();

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;

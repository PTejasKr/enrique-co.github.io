"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Configurator.module.scss';
import { materials } from '../../constants/materials';
import Button from '../ui/Button';


type Category = 'case' | 'dial' | 'strap';

interface MaterialItem {
    id: string;
    name: string;
    color: string;
}

const Configurator = () => {
    const [activeTab, setActiveTab] = useState<Category>('case');
    const [selection, setSelection] = useState({
        case: materials.case[0],
        dial: materials.dial[0],
        strap: materials.strap[0],
    });

    const handleSelect = (category: Category, item: MaterialItem) => {
        setSelection(prev => ({ ...prev, [category]: item }));
    };

    // Dynamic style to tint the watch image based on selection
    // NOTE: In a real production app, we would overlay multiple transparent PNGs.
    // Here, we use a CSS filter and overlay blending to demonstrate the concept.
    const getOverlayStyle = () => {
        return {
            // Very basic simulation using background gradient mix
            background: `
        linear-gradient(135deg, 
          ${selection.case.color}80 0%, 
          ${selection.dial.color}80 50%, 
          ${selection.strap.color === 'match-case' ? selection.case.color : selection.strap.color}80 100%)
      `
        };
    };

    return (
        <div className={styles.configurator}>
            {/* Visualizer Area */}
            <div className={styles.visualizer}>

                <div className={styles.watchContainer}>
                    {/* Base Watch Image - An 'Untitled' or Sketch style works best for tinting */}
                    <Image
                        src="https://images.unsplash.com/photo-1614164185128-e48992479480?q=80&w=1200&auto=format&fit=crop"
                        alt="Custom Timepiece"
                        fill
                        className={styles.baseImage}
                    />
                    {/* Color Simulation Layer */}
                    <div className={styles.overlay} style={getOverlayStyle()}></div>
                </div>

                {/* Floating Label */}
                <div style={{ position: 'absolute', bottom: '40px', textAlign: 'center', width: '100%', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '12px', zIndex: 3 }}>
                    EWC Atelier Exclusif
                </div>
            </div>

            {/* Controls Area */}
            <div className={styles.controls}>
                <h2 className={styles.sectionTitle}>Configure Your Timepiece</h2>

                <div className={styles.tabs}>
                    {(['case', 'dial', 'strap'] as Category[]).map(cat => (
                        <div
                            key={cat}
                            className={`${styles.tab} ${activeTab === cat ? styles.active : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </div>
                    ))}
                </div>

                <div className={styles.optionsGrid}>
                    {materials[activeTab].map((item) => (
                        <div
                            key={item.id}
                            className={`${styles.option} ${selection[activeTab].id === item.id ? styles.active : ''}`}
                            onClick={() => handleSelect(activeTab, item)}
                        >
                            <div
                                className={styles.swatch}
                                style={{ backgroundColor: item.color === 'match-case' ? selection.case.color : item.color }}
                            />
                            <span className={styles.optionName}>{item.name}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.summary}>
                    <h4>Values</h4>
                    <p>
                        {selection.case.name} / {selection.dial.name} / {selection.strap.name}
                    </p>
                    <Button variant="primary" onClick={() => alert('Configuration Saved. Contacting Boutique...')}>
                        Request Allocation
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Configurator;

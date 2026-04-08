import React from 'react';
import styles from './ContentCalendar.module.scss';

const categories = [
  { id: 'editorial', name: 'EDITORIAL', color: '#10B981' },
  { id: 'promotional', name: 'PROMOTIONAL', color: '#3B82F6' },
  { id: 'platform', name: 'PLATFORM', color: '#F59E0B' },
  { id: 'future', name: 'FUTURE IDEAS', color: '#EF4444' }
];

const items = [
  {
    id: 1,
    categoryId: 'editorial',
    title: 'Why Modern Collectors Are Rejecting Legacy Premiums',
    lines: [60, 80, 40]
  },
  {
    id: 2,
    categoryId: 'promotional',
    title: 'The Enrique Core Series Showcase',
    lines: [40, 90, 60]
  },
  {
    id: 3,
    categoryId: 'platform',
    title: 'Movement in Motion (15s Reel)',
    lines: [30, 70, 50]
  }
];

const ContentCalendar = () => {
  // Mock days 1-31
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.dateHeader}>March 14</div>
        <div className={styles.calendarItems}>
          {items.map((item) => {
            const category = categories.find(c => c.id === item.categoryId);
            const color = category ? category.color : '#fff';
            return (
              <div key={item.id} className={styles.itemCard}>
                <div className={styles.itemDot} style={{ backgroundColor: color }}></div>
                <div className={styles.itemContent}>
                  <div className={styles.itemTitle} style={{ color: color }}>
                    {item.title}
                  </div>
                  <div className={styles.itemLines}>
                    {item.lines.map((width, idx) => (
                      <div 
                        key={idx} 
                        className={styles.line} 
                        style={{ backgroundColor: color, width: `${width}%` }} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className={styles.rightPanel}>
        <div className={styles.calendarNav}>
          <button>&lt;</button>
          <span>MARCH</span>
          <button>&gt;</button>
        </div>
        
        <div className={styles.calendarGrid}>
          {days.map((day) => (
            <span key={day} className={day === 14 ? styles.active : ''}>
              {day}
            </span>
          ))}
        </div>
        
        <div className={styles.legend}>
          {categories.map(cat => (
            <div key={cat.id} className={styles.legendItem}>
              <div className={styles.itemDot} style={{ backgroundColor: cat.color }}></div>
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCalendar;

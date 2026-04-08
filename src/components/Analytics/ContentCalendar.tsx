"use client";
import React, { useState } from 'react';
import styles from './ContentCalendar.module.scss';
import { 
  Instagram, Globe, Linkedin, Video, MessageCircle, Eye, Tag,
  Edit3, ChevronLeft, ChevronRight, Share, Filter, MoreHorizontal,
  PlusSquare, Image as ImageIcon, Calendar, List, CheckCircle,
  XCircle, TrendingUp, Search
} from 'lucide-react';

type Platform = 'Instagram' | 'Website' | 'LinkedIn' | 'Reels';

interface PostData {
  day: number;
  time: string;
  platform: Platform;
  type: string;
  description: string;
}

const contentData: PostData[] = [
  // Week 1 – Brand Identity
  { day: 1, time: '12:30 PM', platform: 'Reels', type: 'Video', description: 'Brand story reel' },
  { day: 2, time: '7:30 PM', platform: 'Instagram', type: 'Carousel', description: 'Hero product showcase' },
  { day: 3, time: '10:30 PM', platform: 'Instagram', type: 'Carousel', description: '“What defines luxury?” carousel' },
  { day: 4, time: '12:30 PM', platform: 'Website', type: 'Blog', description: 'BTS (design process)' },
  { day: 5, time: '7:30 PM', platform: 'Instagram', type: 'Post', description: 'Watch styling guide' },
  { day: 6, time: '10:30 PM', platform: 'LinkedIn', type: 'Post', description: 'Founder vision' },
  { day: 7, time: '12:30 PM', platform: 'Instagram', type: 'Story', description: 'Weekly recap + poll' },
  
  // Week 2 – Product Authority
  { day: 8, time: '12:30 PM', platform: 'Instagram', type: 'Post', description: 'Macro product shots' },
  { day: 9, time: '7:30 PM', platform: 'Instagram', type: 'Carousel', description: 'Material breakdown (steel/leather)' },
  { day: 10, time: '10:30 PM', platform: 'Instagram', type: 'Post', description: 'Competitor comparison' },
  { day: 11, time: '12:30 PM', platform: 'Instagram', type: 'Post', description: 'Wrist shots (lifestyle)' },
  { day: 12, time: '7:30 PM', platform: 'Reels', type: 'Video', description: '“Day in life with Enrique”' },
  { day: 13, time: '10:30 PM', platform: 'Instagram', type: 'Post', description: 'Testimonials (mock or early users)' },
  { day: 14, time: '12:30 PM', platform: 'Website', type: 'Blog', description: 'Blog push' },

  // Week 3 – Desire Creation
  { day: 15, time: '12:30 PM', platform: 'Reels', type: 'Video', description: 'Luxury lifestyle reel' },
  { day: 16, time: '7:30 PM', platform: 'Instagram', type: 'Carousel', description: 'Outfit pairing carousel' },
  { day: 17, time: '10:30 PM', platform: 'Instagram', type: 'Post', description: 'Influencer-style edit (even staged)' },
  { day: 18, time: '12:30 PM', platform: 'Instagram', type: 'Post', description: 'Limited drop teaser' },
  { day: 19, time: '7:30 PM', platform: 'Instagram', type: 'Post', description: 'Emotional storytelling post' },
  { day: 20, time: '10:30 PM', platform: 'Website', type: 'Blog', description: '“Why watches still matter”' },
  { day: 21, time: '12:30 PM', platform: 'Instagram', type: 'Post', description: 'Community engagement post' },

  // Week 4 – Conversion Push
  { day: 22, time: '12:30 PM', platform: 'Instagram', type: 'Post', description: 'Product benefits breakdown' },
  { day: 23, time: '7:30 PM', platform: 'Instagram', type: 'Post', description: 'Scarcity messaging' },
  { day: 24, time: '10:30 PM', platform: 'LinkedIn', type: 'Post', description: 'Pricing psychology post' },
  { day: 25, time: '12:30 PM', platform: 'Instagram', type: 'Post', description: 'Comparison vs fast fashion watches' },
  { day: 26, time: '7:30 PM', platform: 'Instagram', type: 'Post', description: 'Offer/launch teaser' },
  { day: 27, time: '10:30 PM', platform: 'Website', type: 'Page', description: 'Landing page push' },
  { day: 28, time: '12:30 PM', platform: 'Instagram', type: 'Carousel', description: 'Testimonials again' },
  { day: 29, time: '7:30 PM', platform: 'Instagram', type: 'Story', description: 'Countdown' },
  { day: 30, time: '10:30 PM', platform: 'Instagram', type: 'Post', description: 'Launch / CTA' }
];

const extendedContentData: PostData[] = [];
for (let cycleStartWeek = 0; cycleStartWeek < 104; cycleStartWeek += 12) {
  const startDayOffset = cycleStartWeek * 7;
  contentData.forEach(post => {
    extendedContentData.push({
      ...post,
      day: post.day + startDayOffset
    });
  });
}

const getPlatformIcon = (platform: Platform, size = 16) => {
  switch (platform) {
    case 'Instagram': return <Instagram size={size} color="#E1306C" />;
    case 'Website': return <Globe size={size} color="#8B949E" />;
    case 'LinkedIn': return <Linkedin size={size} color="#0077B5" />;
    case 'Reels': return <Video size={size} color="#E1306C" />;
    default: return <Instagram size={size} />;
  }
};

type ViewMode = 'List' | 'Week' | 'Month' | 'Year';

const ContentCalendar = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('Week');
  const [currentWeek, setCurrentWeek] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(1);
  const [currentYear, setCurrentYear] = useState(1);

  const handlePrev = () => {
    if (viewMode === 'Week') setCurrentWeek(p => Math.max(1, p - 1));
    if (viewMode === 'Month') setCurrentMonth(p => Math.max(1, p - 1));
    if (viewMode === 'Year') setCurrentYear(p => Math.max(1, p - 1));
  };

  const handleNext = () => {
    if (viewMode === 'Week') setCurrentWeek(p => Math.min(104, p + 1));
    if (viewMode === 'Month') setCurrentMonth(p => Math.min(24, p + 1));
    if (viewMode === 'Year') setCurrentYear(p => Math.min(2, p + 1));
  };

  let title = "";
  let viewDays: number[] = [];
  
  if (viewMode === 'Week') {
    const startDay = (currentWeek - 1) * 7 + 1;
    viewDays = Array.from({ length: 7 }, (_, i) => startDay + i);
    const cycleWeek = ((currentWeek - 1) % 12) + 1;
    let label = "Planning / Gap Phase";
    if (cycleWeek === 1) label = "Brand Identity";
    if (cycleWeek === 2) label = "Product Authority";
    if (cycleWeek === 3) label = "Desire Creation";
    if (cycleWeek === 4) label = "Conversion Push";
    title = `Week ${currentWeek} – ${label}`;
  } else if (viewMode === 'Month') {
    const startDay = (currentMonth - 1) * 28 + 1;
    // We'll show 28 days for a 4-week month view
    viewDays = Array.from({ length: 28 }, (_, i) => startDay + i);
    title = `Month ${currentMonth}`;
  } else if (viewMode === 'Year') {
    title = `Year ${currentYear}`;
  } else if (viewMode === 'List') {
    title = `All Posts (${extendedContentData.length})`;
  }

  const renderPost = (post: PostData, idx: number) => (
    <div key={idx} className={styles.postCard}>
      <div className={styles.cardHeader}>
        <div className={styles.platformBadge}>
          {getPlatformIcon(post.platform)}
          <span className={styles.platformName}>@{post.platform.toLowerCase()}</span>
        </div>
        <span className={styles.time}>{post.time}</span>
      </div>
      
      <div className={styles.cardBody}>
        <p className={styles.postDescription}>{post.description}</p>
        {post.platform !== 'Website' && post.platform !== 'LinkedIn' && (
          <div className={styles.imagePlaceholder}>
            <ImageIcon size={20} color="rgba(255,255,255,0.2)" />
          </div>
        )}
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.footerActions}>
          <MessageCircle size={14} />
          <Share size={14} />
          <Eye size={14} />
          <Tag size={14} />
        </div>
        <Edit3 size={14} className={styles.editIcon} />
      </div>
    </div>
  );

  return (
    <div className={styles.appContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>
          <div className={styles.brandLogo}>E</div>
          <div>
            <h3>Enrique Co.</h3>
            <span>Publishing</span>
          </div>
        </div>

        <nav className={styles.navMenu}>
          <div className={`${styles.navItem} ${styles.active}`}>
            <Calendar size={18} />
            <span>Calendar</span>
          </div>
          <div className={styles.navItem}>
            <List size={18} />
            <span>Enrique Queue</span>
          </div>
          <div className={styles.navItem}>
            <Edit3 size={18} />
            <span>Drafts</span>
          </div>
          <div className={styles.navItem}>
            <CheckCircle size={18} />
            <span>Needs Approval</span>
          </div>
          <div className={styles.navItem}>
            <XCircle size={18} />
            <span>Rejected</span>
          </div>
          
          <div className={styles.navDivider}></div>
          
          <div className={styles.navItem}>
            <TrendingUp size={18} />
            <span>Campaigns</span>
          </div>
          <div className={styles.navItem}>
            <Search size={18} />
            <span>Find Content</span>
          </div>
          <div className={styles.navItem}>
            <ImageIcon size={18} />
            <span>Asset Library</span>
          </div>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <header className={styles.topBar}>
          <div className={styles.weekSelector}>
            {viewMode !== 'List' && (
              <button className={styles.iconBtn} onClick={handlePrev}>
                <ChevronLeft size={20} />
              </button>
            )}
            <span className={styles.currentWeekTitle}>{title}</span>
            {viewMode !== 'List' && (
              <button className={styles.iconBtn} onClick={handleNext}>
                <ChevronRight size={20} />
              </button>
            )}
          </div>

          <div className={styles.headerActions}>
            <div className={styles.viewToggle}>
              <button 
                onClick={() => setViewMode('List')} 
                className={viewMode === 'List' ? styles.active : ''}
              >List</button>
              <button 
                onClick={() => setViewMode('Week')}
                className={viewMode === 'Week' ? styles.active : ''}
              >Week</button>
              <button 
                onClick={() => setViewMode('Month')}
                className={viewMode === 'Month' ? styles.active : ''}
              >Month</button>
              <button 
                onClick={() => setViewMode('Year')}
                className={viewMode === 'Year' ? styles.active : ''}
              >Year</button>
            </div>
            <button className={styles.iconBtn}><MoreHorizontal size={20} /></button>
            <button className={styles.actionBtn}>
              <Share size={16} /> Share
            </button>
            <button className={styles.actionBtn}>
              <Filter size={16} /> Filters
            </button>
          </div>
        </header>

        <div className={styles.calendarArea}>
           {(viewMode === 'Week' || viewMode === 'Month') && (
             <div className={`${styles.weekGrid} ${viewMode === 'Month' ? styles.monthGrid : ''}`}>
               {viewDays.map((day) => {
                 const dayPosts = extendedContentData.filter(p => p.day === day);
                 return (
                   <div key={day} className={styles.dayColumn}>
                     <div className={styles.dayHeader}>Day {day}</div>
                     <button className={styles.addNoteBtn}>
                       <PlusSquare size={14} /> Add Note
                     </button>
                     <div className={styles.postList}>
                       {dayPosts.map((post, idx) => renderPost(post, idx))}
                     </div>
                   </div>
                 )
               })}
             </div>
           )}

           {viewMode === 'Year' && (
              <div className={styles.yearGrid}>
                {Array.from({ length: 12 }, (_, i) => {
                   const mStart = (currentYear - 1) * 365 + (i * 30) + 1; // approx days
                   const mEnd = mStart + 29;
                   const mPosts = extendedContentData.filter(p => p.day >= mStart && p.day <= mEnd);
                   return (
                     <div key={i} className={styles.monthBox}>
                        <h3>Month {(currentYear - 1) * 12 + i + 1}</h3>
                        <p>{mPosts.length} post{mPosts.length !== 1 ? 's' : ''} planned</p>
                        <div className={styles.details}>
                           <span>{mPosts.filter(p => p.platform === 'Instagram').length} ig</span>
                           <span>{mPosts.filter(p => p.platform === 'Website').length} site</span>
                           <span>{mPosts.filter(p => p.platform === 'LinkedIn').length} li</span>
                        </div>
                     </div>
                   )
                })}
              </div>
           )}

           {viewMode === 'List' && (
              <div className={styles.listGrid}>
                 {extendedContentData.map((post, idx) => (
                    <div key={idx} className={styles.listItem}>
                        <div className={styles.listDayBadge}>
                          <div>Day {post.day}</div>
                        </div>
                        <div className={styles.listPostWrapper}>
                          {renderPost(post, idx)}
                        </div>
                    </div>
                 ))}
              </div>
           )}
        </div>
      </main>
    </div>
  );
};

export default ContentCalendar;


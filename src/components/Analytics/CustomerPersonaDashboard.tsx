"use client";

import React, { useState, useMemo } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell, Sector
} from 'recharts';
import {
    Users, DollarSign, TrendingUp, Activity,
    Calendar, Download, ChevronDown, Award,
    Briefcase, MapPin, Zap, Target
} from 'lucide-react';
import styles from './CustomerPersonaDashboard.module.scss';

// --- MOCK DATA ---
const personas = [
    { id: 'tech_innovator', name: 'Tech Innovator', description: 'Early adopters seeking cutting-edge mechanics and materials.' },
    { id: 'luxury_connoisseur', name: 'Luxury Connoisseur', description: 'HNWIs prioritizing exclusivity, heritage, and brand prestige.' },
    { id: 'aspiring_professional', name: 'Aspiring Professional', description: 'Upwardly mobile professionals viewing watches as status milestones.' }
];

const mockData = {
    tech_innovator: {
        kpi: {
            marketSize: '2.5M',
            avgSalary: '₹45L',
            conversionRate: '3.2%',
            clv: '₹12.5L'
        },
        age: [
            { name: '18-24', value: 15 },
            { name: '25-34', value: 45 },
            { name: '35-44', value: 30 },
            { name: '45+', value: 10 },
        ],
        gender: [
            { name: 'Male', value: 70 },
            { name: 'Female', value: 25 },
            { name: 'Non-binary', value: 5 },
        ],
        education: [
            { name: 'High School', value: 10 },
            { name: 'Bachelor', value: 50 },
            { name: 'Master', value: 35 },
            { name: 'PhD', value: 5 },
        ],
        salary: [
            { name: '<₹5L', value: 5 },
            { name: '₹5–10L', value: 10 },
            { name: '₹10–25L', value: 35 },
            { name: '₹25L+', value: 50 },
        ],
        industry: [
            { name: 'Tech', value: 55 },
            { name: 'Finance', value: 20 },
            { name: 'Creative', value: 15 },
            { name: 'Other', value: 10 },
        ],
        insights: {
            buyingFrequency: 'High (12-18mo)',
            priceSensitivity: 'Low',
            preferredChannel: 'Online/App',
            decisionDriver: 'Features/Innovation'
        },
        painPoints: ['Availability of limited editions', 'Service turnaround time', 'App integration'],
        motivations: ['Status', 'Technological appreciation', 'Investment value']
    },
    luxury_connoisseur: { // Data variation for visual difference
        kpi: {
            marketSize: '0.8M',
            avgSalary: '₹1.2Cr',
            conversionRate: '5.8%',
            clv: '₹45.0L'
        },
        age: [
            { name: '18-24', value: 5 },
            { name: '25-34', value: 15 },
            { name: '35-44', value: 40 },
            { name: '45+', value: 40 },
        ],
        gender: [
            { name: 'Male', value: 60 },
            { name: 'Female', value: 40 },
            { name: 'Non-binary', value: 0 },
        ],
        education: [
            { name: 'High School', value: 5 },
            { name: 'Bachelor', value: 40 },
            { name: 'Master', value: 45 },
            { name: 'PhD', value: 10 },
        ],
        salary: [
            { name: '<₹5L', value: 0 },
            { name: '₹5–10L', value: 2 },
            { name: '₹10–25L', value: 8 },
            { name: '₹25L+', value: 90 },
        ],
        industry: [
            { name: 'Finance', value: 45 },
            { name: 'Real Estate', value: 25 },
            { name: 'Law/Medical', value: 20 },
            { name: 'Other', value: 10 },
        ],
        insights: {
            buyingFrequency: 'Medium (2-3yrs)',
            priceSensitivity: 'Very Low',
            preferredChannel: 'Boutique',
            decisionDriver: 'Exclusivity/Heritage'
        },
        painPoints: ['Waitlists', 'Personalization options', 'Privacy'],
        motivations: ['Legacy', 'Artistry', 'Social signaling']
    },
    aspiring_professional: {
        kpi: {
            marketSize: '5.5M',
            avgSalary: '₹18L',
            conversionRate: '1.5%',
            clv: '₹5.5L'
        },
        age: [
            { name: '18-24', value: 30 },
            { name: '25-34', value: 50 },
            { name: '35-44', value: 15 },
            { name: '45+', value: 5 },
        ],
        gender: [
            { name: 'Male', value: 55 },
            { name: 'Female', value: 45 },
            { name: 'Non-binary', value: 0 },
        ],
        education: [
            { name: 'High School', value: 15 },
            { name: 'Bachelor', value: 65 },
            { name: 'Master', value: 20 },
            { name: 'PhD', value: 0 },
        ],
        salary: [
            { name: '<₹5L', value: 20 },
            { name: '₹5–10L', value: 40 },
            { name: '₹10–25L', value: 35 },
            { name: '₹25L+', value: 5 },
        ],
        industry: [
            { name: 'Corporate', value: 50 },
            { name: 'Sales', value: 25 },
            { name: 'Tech', value: 15 },
            { name: 'Other', value: 10 },
        ],
        insights: {
            buyingFrequency: 'Low (5+ yrs)',
            priceSensitivity: 'High',
            preferredChannel: 'Online/Retail',
            decisionDriver: 'Brand Recognition'
        },
        painPoints: ['Price point entry', 'Financing options', 'Complexity'],
        motivations: ['Career milestone', 'Aspiring lifestyle', 'Reliability']
    }
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
const ACCENT_COLOR = '#4f46e5'; // Slate/Indigo accent

// --- COMPONENTS ---

const Card = ({ title, children, className = '' }: { title?: string, children: React.ReactNode, className?: string }) => (
    <div className={`${styles.card} ${className}`}>
        {title && <h3 className={styles.cardTitle}>{title}</h3>}
        {children}
    </div>
);

const KPICard = ({ title, value, icon: Icon, change }: { title: string, value: string, icon: any, change?: string }) => (
    <div className={styles.kpiCard}>
        <div className={styles.kpiHeader}>
            <span className={styles.kpiTitle}>{title}</span>
            <Icon size={18} className={styles.kpiIcon} />
        </div>
        <div className={styles.kpiValue}>{value}</div>
        {change && <span className={styles.kpiChange}>{change}</span>}
    </div>
);

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.chartTooltip}>
                <p className={styles.tooltipLabel}>{`${label} : ${payload[0].value}%`}</p>
            </div>
        );
    }
    return null;
};

// --- MAIN DASHBOARD ---

const CustomerPersonaDashboard = () => {
    const [selectedPersona, setSelectedPersona] = useState('tech_innovator');
    const data = mockData[selectedPersona as keyof typeof mockData];
    const currentPersona = personas.find(p => p.id === selectedPersona);

    return (
        <div className={styles.dashboardContainer}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <h1 className={styles.pageTitle}>Customer Persona Audit</h1>
                    <div className={styles.personaSelector}>
                        <Users size={16} />
                        <select
                            value={selectedPersona}
                            onChange={(e) => setSelectedPersona(e.target.value)}
                            className={styles.dropdown}
                        >
                            {personas.map(p => (
                                <option key={p.id} value={p.id}>{p.name}</option>
                            ))}
                        </select>
                        <ChevronDown size={14} className={styles.dropdownIcon} />
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.datePicker}>
                        <Calendar size={16} />
                        <span>Last 30 Days</span>
                    </div>
                    <button className={styles.exportBtn}>
                        <Download size={16} />
                        Export
                    </button>
                </div>
            </header>

            {/* KPI Summary */}
            <div className={styles.kpiRow}>
                <KPICard title="Market Size" value={data.kpi.marketSize} icon={Users} change="+12% YoY" />
                <KPICard title="Avg. Yearly Salary" value={data.kpi.avgSalary} icon={DollarSign} />
                <KPICard title="Conversion Rate" value={data.kpi.conversionRate} icon={TrendingUp} change="+0.8%" />
                <KPICard title="Lifetime Value" value={data.kpi.clv} icon={Activity} />
            </div>

            {/* Main Content Grid */}
            <div className={styles.mainGrid}>
                {/* Left Column: Demographics & Income */}
                <div className={styles.leftCol}>
                    <Card title="Demographics Overview">
                        <div className={styles.chartsGrid}>
                            <div className={styles.chartWrapper}>
                                <h4>Age Distribution</h4>
                                <ResponsiveContainer width="100%" height={180}>
                                    <BarChart data={data.age}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                                        <YAxis fontSize={10} tickLine={false} axisLine={false} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Bar dataKey="value" fill={ACCENT_COLOR} radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className={styles.chartWrapper}>
                                <h4>Gender Split</h4>
                                <ResponsiveContainer width="100%" height={180}>
                                    <PieChart>
                                        <Pie
                                            data={data.gender}
                                            innerRadius={50}
                                            outerRadius={70}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {data.gender.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend iconSize={8} fontSize={10} layout="vertical" verticalAlign="middle" align="right" />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className={styles.chartWrapper} style={{ marginTop: '20px' }}>
                            <h4>Education Level</h4>
                            <ResponsiveContainer width="100%" height={150}>
                                <BarChart data={data.education} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                                    <XAxis type="number" hide />
                                    <YAxis dataKey="name" type="category" width={90} fontSize={10} tickLine={false} axisLine={false} />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Bar dataKey="value" fill="#82ca9d" radius={[0, 4, 4, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    <Card title="Income & Profession">
                        <div className={styles.chartsGrid}>
                            <div className={styles.chartWrapper}>
                                <h4>Salary Bands</h4>
                                <ResponsiveContainer width="100%" height={200}>
                                    <BarChart data={data.salary}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                                        <YAxis fontSize={10} tickLine={false} axisLine={false} />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className={styles.chartWrapper}>
                                <h4>Industry Distribution</h4>
                                <ResponsiveContainer width="100%" height={200}>
                                    <PieChart>
                                        <Pie
                                            data={data.industry}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={70}
                                            dataKey="value"
                                            label={({ percent }: { percent?: number }) => `${((percent || 0) * 100).toFixed(0)}%`}
                                            labelLine={false}
                                        >
                                            {data.industry.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Column: Insights & Summary */}
                <div className={styles.rightCol}>
                    <Card>
                        <div className={styles.summaryCard}>
                            <div className={styles.summaryHeader}>
                                <div className={styles.avatarPlaceholder}>{currentPersona?.name.charAt(0)}</div>
                                <div>
                                    <h2 className={styles.personaName}>{currentPersona?.name}</h2>
                                    <p className={styles.personaDesc}>{currentPersona?.description}</p>
                                </div>
                            </div>
                            <div className={styles.actionBox}>
                                <strong>Recommended Action:</strong>
                                <p>Launch targeted email campaign focusing on technical specifications and innovation heritage.</p>
                            </div>
                        </div>
                    </Card>

                    <Card title="Behavioral Insights">
                        <div className={styles.insightsGrid}>
                            <div className={styles.insightItem}>
                                <div className={styles.insightIcon}><Briefcase size={16} /></div>
                                <div className={styles.insightContent}>
                                    <span className={styles.insightLabel}>Buying Freq.</span>
                                    <span className={styles.insightValue}>{data.insights.buyingFrequency}</span>
                                </div>
                            </div>
                            <div className={styles.insightItem}>
                                <div className={styles.insightIcon}><DollarSign size={16} /></div>
                                <div className={styles.insightContent}>
                                    <span className={styles.insightLabel}>Price Sens.</span>
                                    <span className={styles.insightValue}>{data.insights.priceSensitivity}</span>
                                </div>
                            </div>
                            <div className={styles.insightItem}>
                                <div className={styles.insightIcon}><MapPin size={16} /></div>
                                <div className={styles.insightContent}>
                                    <span className={styles.insightLabel}>Channel</span>
                                    <span className={styles.insightValue}>{data.insights.preferredChannel}</span>
                                </div>
                            </div>
                            <div className={styles.insightItem}>
                                <div className={styles.insightIcon}><Zap size={16} /></div>
                                <div className={styles.insightContent}>
                                    <span className={styles.insightLabel}>Key Driver</span>
                                    <span className={styles.insightValue}>{data.insights.decisionDriver}</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card title="Pain Points & Motivations">
                        <div className={styles.listsContainer}>
                            <div className={styles.listGroup}>
                                <h4><Target size={14} /> Motivations</h4>
                                <div className={styles.chipContainer}>
                                    {data.motivations.map((m, i) => (
                                        <span key={i} className={styles.chipGreen}>{m}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.listGroup}>
                                <h4><Activity size={14} /> Pain Points</h4>
                                <ul className={styles.rankedList}>
                                    {data.painPoints.map((p, i) => (
                                        <li key={i}>
                                            <span className={styles.rankNum}>{i + 1}</span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CustomerPersonaDashboard;

'use client';

import React from 'react';
import styles from './HeroBanner.module.css';
import { Package, Calendar, Utensils, Plus } from 'lucide-react';

export type CategoryType = 'paquetes' | 'eventos' | 'gastronomia' | 'servicios_aparte';

interface HeroBannerProps {
  activeCategory: CategoryType;
  onSelectCategory: (category: CategoryType) => void;
}

export default function HeroBanner({ activeCategory, onSelectCategory }: HeroBannerProps) {
  const tabs = [
    {
      id: 'paquetes' as CategoryType,
      label: 'Paquetes',
      icon: <Package size={20} strokeWidth={2.2} />,
    },
    {
      id: 'eventos' as CategoryType,
      label: 'Eventos',
      icon: <Calendar size={20} strokeWidth={2.2} />,
    },
    {
      id: 'gastronomia' as CategoryType,
      label: 'Gastronomía',
      icon: <Utensils size={20} strokeWidth={2.2} />,
    },
    {
      id: 'servicios_aparte' as CategoryType,
      label: 'Servicios aparte',
      icon: <Plus size={20} strokeWidth={2.4} />,
    },
  ];

  return (
    <section className={styles.heroContainer} aria-label="Categorías principales">
      <div className={styles.heroCard}>
        {/* Subtle geometric circles background */}
        <div className={styles.bgDecoration} aria-hidden="true">
          <div className={styles.circleArcLeft1} />
          <div className={styles.circleArcLeft2} />
          <div className={styles.circleDarkRight1} />
          <div className={styles.circleDarkRight2} />
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabsWrapper}>
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                className={`${styles.tabButton} ${isActive ? styles.active : ''}`}
                onClick={() => onSelectCategory(tab.id)}
                aria-pressed={isActive}
              >
                <span className={styles.tabIcon}>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

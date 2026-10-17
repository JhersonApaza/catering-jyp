'use client';

import React from 'react';
import styles from './PackageCard.module.css';
import { Camera, ChevronRight } from 'lucide-react';

export interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  price: string;
}

interface PackageCardProps {
  item: PackageItem;
  onCotizar: (item: PackageItem) => void;
}

export default function PackageCard({ item, onCotizar }: PackageCardProps) {
  return (
    <article className={styles.card}>
      {/* Top Image Placeholder Area */}
      <div className={styles.imageArea} aria-hidden="true">
        <div className={styles.cornerDecoTopRight} />
        <div className={styles.cornerDecoBottomLeft} />
        <div className={styles.cameraIconWrapper}>
          <Camera size={34} strokeWidth={1.4} />
        </div>
      </div>

      {/* Card Content Body */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardSubtitle}>{item.subtitle}</p>

        {/* Inclusions list */}
        <ul className={styles.featuresList}>
          {item.features.map((feature, idx) => (
            <li key={idx} className={styles.featureItem}>
              {feature}
            </li>
          ))}
        </ul>

        {/* Card Footer */}
        <div className={styles.cardFooter}>
          <span className={styles.priceText}>{item.price}</span>
          <button
            type="button"
            className={styles.cotizarBtn}
            onClick={() => onCotizar(item)}
          >
            <span>Mandar a Cotizar</span>
            <ChevronRight size={15} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </article>
  );
}

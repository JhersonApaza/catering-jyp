'use client';

import React from 'react';
import styles from './FoodCard.module.css';
import { Camera, ChevronRight } from 'lucide-react';

export interface FoodItem {
  id: string;
  title: string;
  description: string;
  price: string;
  hasUnderline?: boolean;
}

interface FoodCardProps {
  item: FoodItem;
  onCotizar: (item: FoodItem) => void;
}

export default function FoodCard({ item, onCotizar }: FoodCardProps) {
  return (
    <article className={styles.card}>
      {/* Top Image Placeholder Area with Camera Icon */}
      <div className={styles.imageArea} aria-hidden="true">
        <div className={styles.cornerDecoTopRight} />
        <div className={styles.cornerDecoBottomLeft} />
        <div className={styles.cameraIconWrapper}>
          <Camera size={34} strokeWidth={1.4} />
        </div>
      </div>

      {/* Card Content Body */}
      <div className={styles.cardBody}>
        <div className={styles.titleWrapper}>
          <h3
            className={`${styles.cardTitle} ${
              item.hasUnderline ? styles.cardTitleUnderline : ''
            }`}
          >
            {item.title}
          </h3>
        </div>

        <p className={styles.cardDescription}>{item.description}</p>

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

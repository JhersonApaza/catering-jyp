'use client';

import React from 'react';
import styles from './EventCard.module.css';
import { ChevronRight } from 'lucide-react';

export interface EventItem {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

interface EventCardProps {
  item: EventItem;
  onCotizar: (item: EventItem) => void;
}

export default function EventCard({ item, onCotizar }: EventCardProps) {
  return (
    <article className={styles.card}>
      {/* Top Image Placeholder Area with Circular Badge */}
      <div className={styles.imageArea} aria-hidden="true">
        <div className={styles.cornerDecoTopRight} />
        <div className={styles.cornerDecoBottomLeft} />
        <div className={styles.badgeCircle}>
          {item.icon}
        </div>
      </div>

      {/* Card Content Body */}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
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

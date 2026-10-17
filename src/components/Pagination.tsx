'use client';

import React from 'react';
import styles from './Pagination.module.css';
import { ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages = 5,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className={styles.paginationWrapper} aria-label="Paginación de resultados">
      {pages.map((p) => {
        const isActive = p === currentPage;
        return (
          <button
            key={p}
            type="button"
            className={`${styles.pageButton} ${isActive ? styles.active : ''}`}
            onClick={() => onPageChange(p)}
            aria-current={isActive ? 'page' : undefined}
          >
            {p}
          </button>
        );
      })}

      <button
        type="button"
        className={styles.arrowButton}
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
        aria-label="Página siguiente"
        disabled={currentPage >= totalPages}
      >
        <ChevronRight size={18} strokeWidth={2.4} />
      </button>
    </nav>
  );
}

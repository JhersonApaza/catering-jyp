'use client';

import React from 'react';
import styles from './Header.module.css';
import { User, Menu } from 'lucide-react';

interface HeaderProps {
  activeTab?: string;
  loginButtonText?: string;
  onOpenLogin?: () => void;
  onNavigateTab?: (tab: string) => void;
}

export function CateringLogoIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Catering Icon"
    >
      {/* Fork */}
      <path
        d="M6 3V9C6 9.8 6.5 10.5 7.2 10.8V21H8.8V10.8C9.5 10.5 10 9.8 10 9V3H8.8V7.5H7.2V3H6Z"
        fill="currentColor"
      />
      {/* Knife / Spoon */}
      <path
        d="M14 3C12.9 3 12 4.1 12 5.5C12 7.7 13.5 9.5 15 10.3V21H16.6V3.2C15.8 3.1 14.9 3 14 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Header({
  onOpenLogin,
  activeTab = 'servicios',
  loginButtonText = 'Iniciar Sesión',
  onNavigateTab,
}: HeaderProps) {
  const navItems = [
    { label: 'Servicios', id: 'servicios' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Mi cotización', id: 'cotizacion' },
    { label: 'Ayuda', id: 'ayuda' },
  ];

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        {/* Brand Logo */}
        <div
          className={styles.logoArea}
          onClick={() => onNavigateTab?.('servicios')}
        >
          <div className={styles.logoIcon}>
            <CateringLogoIcon size={30} />
          </div>
          <span className={styles.logoText}>Catering</span>
        </div>

        {/* Navigation items */}
        <nav>
          <ul className={styles.navLinks}>
            {navItems.map((item) => {
              const isActive =
                activeTab.toLowerCase() === item.id.toLowerCase() ||
                activeTab.toLowerCase() === item.label.toLowerCase();
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateTab?.(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action: Iniciar Sesión / Registrarse */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            className={styles.loginBtn}
            onClick={onOpenLogin}
            id="btn-login"
          >
            <User size={18} strokeWidth={2.2} />
            <span>{loginButtonText}</span>
          </button>

          <button
            type="button"
            className={styles.menuToggle}
            aria-label="Abrir menú"
            onClick={onOpenLogin}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}

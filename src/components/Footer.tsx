'use client';

import React from 'react';
import styles from './Footer.module.css';
import { CateringLogoIcon } from './Header';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigateTab?: (tab: string) => void;
}

export default function Footer({ onNavigateTab }: FooterProps) {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Brand info */}
          <div className={styles.brandCol}>
            <div
              className={styles.logoRow}
              style={{ cursor: 'pointer' }}
              onClick={() => onNavigateTab?.('servicios')}
            >
              <CateringLogoIcon size={26} />
              <span className={styles.logoText}>Catering</span>
            </div>
            <p className={styles.brandDesc}>
              Especialistas en banquetes, experiencias gastronómicas y organización integral de eventos inolvidables.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={styles.colTitle}>Navegación</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <a
                  href="#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab?.('servicios');
                  }}
                >
                  Servicios
                </a>
              </li>
              <li className={styles.linkItem}>
                <a
                  href="#nosotros"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab?.('nosotros');
                  }}
                >
                  Nosotros
                </a>
              </li>
              <li className={styles.linkItem}>
                <a
                  href="#cotizacion"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab?.('cotizacion');
                  }}
                >
                  Mi cotización
                </a>
              </li>
              <li className={styles.linkItem}>
                <a
                  href="#ayuda"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab?.('ayuda');
                  }}
                >
                  Centro de Ayuda
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className={styles.colTitle}>Servicios</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}>
                <a
                  href="#paquetes"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab?.('servicios');
                  }}
                >
                  Paquetes de Cumpleaños
                </a>
              </li>
              <li className={styles.linkItem}>
                <a
                  href="#bodas"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab?.('servicios');
                  }}
                >
                  Bodas y Aniversarios
                </a>
              </li>
              <li className={styles.linkItem}>
                <a
                  href="#corporativos"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab?.('servicios');
                  }}
                >
                  Eventos Corporativos
                </a>
              </li>
              <li className={styles.linkItem}>
                <a
                  href="#personalizados"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateTab?.('servicios');
                  }}
                >
                  Servicios Personalizados
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className={styles.colTitle}>Contacto</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Phone size={16} className={styles.contactIcon} />
                <span>+51 987 654 321</span>
              </li>
              <li className={styles.contactItem}>
                <Mail size={16} className={styles.contactIcon} />
                <span>contacto@cateringjyp.com</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={16} className={styles.contactIcon} />
                <span>Av. Principal 123, Lima - Perú</span>
              </li>
              <li className={styles.contactItem}>
                <Clock size={16} className={styles.contactIcon} />
                <span>Lun - Sáb: 8:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyrightRow}>
          <span>© 2026 Catering JyP. Todos los derechos reservados.</span>
          <span>Diseño y Frontend Premium con Next.js</span>
        </div>
      </div>
    </footer>
  );
}

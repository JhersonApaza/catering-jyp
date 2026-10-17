'use client';

import React from 'react';
import styles from './AboutView.module.css';
import { Target, Gem, Camera } from 'lucide-react';

interface AboutViewProps {
  onGoToServices: () => void;
}

export default function AboutView({ onGoToServices }: AboutViewProps) {
  const teamMembers = [
    {
      role: 'CHEF EJECUTIVA / FUNDADORA',
      name: 'Sofía Alpin',
      bio: 'Lidera nuestra cocina con pasión y creatividad, diseñando menús exclusivos que transforman ingredientes de la más alta calidad en experiencias gastronómicas inolvidables.',
    },
    {
      role: 'COORDINADOR DE EVENTOS',
      name: 'Javier Mendoza',
      bio: 'Se encarga de planificar y ejecutar cada detalle logístico, asegurando que tu evento fluya con total perfección, puntualidad y sin contratiempos.',
    },
    {
      role: 'SERVICIO & MONTAJE',
      name: 'Martina Vega',
      bio: 'Dedicada a brindar una atención cálida y personalizada, creando montajes impecables para garantizar la máxima satisfacción de cada uno de tus invitados.',
    },
  ];

  return (
    <div className={styles.aboutContainer}>
      {/* 1. Hero: Sobre Nosotros / Quienes Somos */}
      <section className={styles.heroCard}>
        <div className={styles.bgDecoration} aria-hidden="true">
          <div className={styles.circleArcLeft} />
          <div className={styles.circleDarkRight} />
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.heroBadge}>SOBRE NOSOTROS</span>
            <h1 className={styles.heroTitle}>¿QUIENES SOMOS?</h1>
            <p className={styles.heroTextLeft}>
              En Catering, transformamos eventos en experiencias gastronómicas memorables.
            </p>
            <button
              type="button"
              className={styles.heroBtn}
              onClick={onGoToServices}
            >
              Ver nuestros servicios
            </button>
          </div>

          <div>
            <p className={styles.heroRightText}>
              Nos encargamos de cada detalle culinario y logístico para que disfrutes de tu celebración con la máxima calidad y frescura.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Misión & Visión */}
      <section className={styles.missionVisionGrid}>
        <div className={styles.mvCard}>
          <div className={styles.mvHeader}>
            <span className={styles.mvIcon}>
              <Target size={24} strokeWidth={2} />
            </span>
            <h2 className={styles.mvTitle}>Misión</h2>
          </div>
          <p className={styles.mvText}>
            Brindar un servicio de catering integral y de alta calidad, combinando gastronomía de excelencia, puntualidad y atención personalizada para superar las expectativas de nuestros clientes en cada evento.
          </p>
        </div>

        <div className={styles.mvCard}>
          <div className={styles.mvHeader}>
            <span className={styles.mvIcon}>
              <Gem size={24} strokeWidth={2} />
            </span>
            <h2 className={styles.mvTitle}>Visión</h2>
          </div>
          <p className={styles.mvText}>
            Ser reconocidos como el catering de referencia en nuestra región por nuestra innovación culinaria, impecable logística y compromiso con la satisfacción del cliente.
          </p>
        </div>
      </section>

      {/* 3. Team: Quiénes hacen posible la magia */}
      <section className={styles.teamSection}>
        <div className={styles.teamBadge}>
          Quiénes hacen posible la magia
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, i) => (
            <div key={i} className={styles.teamCard}>
              <span className={styles.teamRole}>{member.role}</span>
              <h3 className={styles.teamName}>{member.name}</h3>

              <div className={styles.teamPhotoPlaceholder}>
                <Camera size={30} strokeWidth={1.5} />
              </div>

              <p className={styles.teamBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

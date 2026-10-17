'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './FilterBar.module.css';
import { Filter, ChevronDown, Search, X } from 'lucide-react';
import { CategoryType } from './HeroBanner';

interface FilterBarProps {
  activeCategory: CategoryType;
  // Generic filters
  filterType: string;
  onSelectFilterType: (val: string) => void;
  filterSecondary?: string;
  onSelectFilterSecondary?: (val: string) => void;
  // Radio option for Servicios Aparte
  serviceRadioOption?: 'personal' | 'alquiler';
  onSelectServiceRadioOption?: (val: 'personal' | 'alquiler') => void;
  // Search
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function FilterBar({
  activeCategory,
  filterType,
  onSelectFilterType,
  filterSecondary = '',
  onSelectFilterSecondary,
  serviceRadioOption = 'alquiler',
  onSelectServiceRadioOption,
  searchQuery,
  onSearchChange,
}: FilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<'primary' | 'secondary' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Options for Eventos
  const eventOptions = [
    'Seleccione',
    'Bodas',
    'Cumpleaños',
    'Corporativos',
    'Graduaciones',
    'Aniversarios',
    'Baby Shower',
    'Conferencias',
    'Quinceañeros',
    'Reuniones Familiares',
  ];

  // Options for Paquetes
  const packageOptions = [
    'Seleccione',
    'Cumpleaños',
    'Bodas',
    'Quinceaños',
    'Corporativos',
    'Graduaciones',
  ];

  const guestOptions = [
    'Seleccione',
    'Hasta 30 personas',
    '30 a 50 personas',
    '50 a 100 personas',
    '100 a 200 personas',
    'Más de 200 personas',
  ];

  // Options for Gastronomía
  const foodEventOptions = [
    'Seleccione',
    'Bodas',
    'Cumpleaños',
    'Corporativos',
    'Almuerzos Ejecutivos',
    'Cenas de Gala',
  ];

  const foodTypeOptions = [
    'Seleccione',
    'Platos de Fondo',
    'Entradas',
    'Postres & Dulces',
    'Buffet Criollo',
    'Bocaditos & Cocteles',
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className={styles.filterSection} ref={containerRef}>
      <div className={styles.filterCard}>
        {/* Left Side: Filter controls */}
        <div className={styles.leftControls}>
          <div className={styles.filterLabelGroup}>
            <span className={styles.filterIcon}>
              <Filter size={18} strokeWidth={2.4} />
            </span>
            <span>Filtrar por:</span>
          </div>

          {/* 1. Categoría: PAQUETES */}
          {activeCategory === 'paquetes' && (
            <>
              <div
                className={styles.customSelectWrapper}
                onClick={() =>
                  setOpenDropdown(openDropdown === 'primary' ? null : 'primary')
                }
              >
                <span className={styles.selectLabel}>Tipo de Paquetes:</span>
                <div className={styles.selectValueRow}>
                  <span>{filterType || 'Seleccione'}</span>
                  <ChevronDown size={16} strokeWidth={2.2} />
                </div>
                {openDropdown === 'primary' && (
                  <ul className={styles.selectDropdown}>
                    {packageOptions.map((opt) => (
                      <li
                        key={opt}
                        className={`${styles.dropdownItem} ${
                          filterType === opt ? styles.selected : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectFilterType(opt === 'Seleccione' ? '' : opt);
                          setOpenDropdown(null);
                        }}
                      >
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {onSelectFilterSecondary && (
                <div
                  className={styles.customSelectWrapper}
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'secondary' ? null : 'secondary')
                  }
                >
                  <span className={styles.selectLabel}>Cantidad de personas:</span>
                  <div className={styles.selectValueRow}>
                    <span>{filterSecondary || 'Seleccione'}</span>
                    <ChevronDown size={16} strokeWidth={2.2} />
                  </div>
                  {openDropdown === 'secondary' && (
                    <ul className={styles.selectDropdown}>
                      {guestOptions.map((opt) => (
                        <li
                          key={opt}
                          className={`${styles.dropdownItem} ${
                            filterSecondary === opt ? styles.selected : ''
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectFilterSecondary(opt === 'Seleccione' ? '' : opt);
                            setOpenDropdown(null);
                          }}
                        >
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </>
          )}

          {/* 2. Categoría: EVENTOS */}
          {activeCategory === 'eventos' && (
            <div
              className={styles.customSelectWrapper}
              onClick={() =>
                setOpenDropdown(openDropdown === 'primary' ? null : 'primary')
              }
            >
              <span className={styles.selectLabel}>Tipo de evento:</span>
              <div className={styles.selectValueRow}>
                <span>{filterType || 'Seleccione'}</span>
                <ChevronDown size={16} strokeWidth={2.2} />
              </div>
              {openDropdown === 'primary' && (
                <ul className={styles.selectDropdown}>
                  {eventOptions.map((opt) => (
                    <li
                      key={opt}
                      className={`${styles.dropdownItem} ${
                        filterType === opt ? styles.selected : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectFilterType(opt === 'Seleccione' ? '' : opt);
                        setOpenDropdown(null);
                      }}
                    >
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* 3. Categoría: GASTRONOMÍA */}
          {activeCategory === 'gastronomia' && (
            <>
              <div
                className={styles.customSelectWrapper}
                onClick={() =>
                  setOpenDropdown(openDropdown === 'primary' ? null : 'primary')
                }
              >
                <span className={styles.selectLabel}>Para q tipo de evento?</span>
                <div className={styles.selectValueRow}>
                  <span>{filterType || 'Seleccione'}</span>
                  <ChevronDown size={16} strokeWidth={2.2} />
                </div>
                {openDropdown === 'primary' && (
                  <ul className={styles.selectDropdown}>
                    {foodEventOptions.map((opt) => (
                      <li
                        key={opt}
                        className={`${styles.dropdownItem} ${
                          filterType === opt ? styles.selected : ''
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectFilterType(opt === 'Seleccione' ? '' : opt);
                          setOpenDropdown(null);
                        }}
                      >
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {onSelectFilterSecondary && (
                <div
                  className={styles.customSelectWrapper}
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'secondary' ? null : 'secondary')
                  }
                >
                  <span className={styles.selectLabel}>Tipo de alimento</span>
                  <div className={styles.selectValueRow}>
                    <span>{filterSecondary || 'Seleccione'}</span>
                    <ChevronDown size={16} strokeWidth={2.2} />
                  </div>
                  {openDropdown === 'secondary' && (
                    <ul className={styles.selectDropdown}>
                      {foodTypeOptions.map((opt) => (
                        <li
                          key={opt}
                          className={`${styles.dropdownItem} ${
                            filterSecondary === opt ? styles.selected : ''
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectFilterSecondary(opt === 'Seleccione' ? '' : opt);
                            setOpenDropdown(null);
                          }}
                        >
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </>
          )}

          {/* 4. Categoría: SERVICIOS APARTE */}
          {activeCategory === 'servicios_aparte' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span className={styles.serviceTypeLabel}>Tipo de Servicios:</span>
              <div className={styles.radioGroup}>
                <label
                  className={styles.radioOption}
                  onClick={() => onSelectServiceRadioOption?.('personal')}
                >
                  <div
                    className={`${styles.radioCircle} ${
                      serviceRadioOption === 'personal' ? styles.selected : ''
                    }`}
                  >
                    {serviceRadioOption === 'personal' && <div className={styles.radioDot} />}
                  </div>
                  <span>Personal</span>
                </label>

                <label
                  className={styles.radioOption}
                  onClick={() => onSelectServiceRadioOption?.('alquiler')}
                >
                  <div
                    className={`${styles.radioCircle} ${
                      serviceRadioOption === 'alquiler' ? styles.selected : ''
                    }`}
                  >
                    {serviceRadioOption === 'alquiler' && <div className={styles.radioDot} />}
                  </div>
                  <span>Alquiler</span>
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Search Bar */}
        <div className={styles.searchWrapper}>
          <span className={styles.searchIcon}>
            <Search size={18} strokeWidth={2} />
          </span>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Buscar servicio"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className={styles.clearSearchBtn}
              onClick={() => onSearchChange('')}
              aria-label="Limpiar búsqueda"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

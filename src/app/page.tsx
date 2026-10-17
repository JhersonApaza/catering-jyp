'use client';

import React, { useState, useMemo } from 'react';
import styles from './page.module.css';
import Header from '@/components/Header';
import HeroBanner, { CategoryType } from '@/components/HeroBanner';
import FilterBar from '@/components/FilterBar';
import PackageCard, { PackageItem } from '@/components/PackageCard';
import EventCard, { EventItem } from '@/components/EventCard';
import FoodCard, { FoodItem } from '@/components/FoodCard';
import Pagination from '@/components/Pagination';
import Footer from '@/components/Footer';
import QuoteModal, { QuotableItem } from '@/components/QuoteModal';
import LoginModal from '@/components/LoginModal';

// Views
import AboutView from '@/components/AboutView';
import QuoteView from '@/components/QuoteView';
import HelpView from '@/components/HelpView';
import LoginView from '@/components/LoginView';
import RegisterView from '@/components/RegisterView';

import {
  Gem,
  Cake,
  Briefcase,
  GraduationCap,
  Heart,
  Gift,
  Presentation,
  Sparkles,
  Users,
} from 'lucide-react';

/* 1. EVENTOS DATA */
const EVENT_ITEMS: EventItem[] = [
  {
    id: 'evt-bodas',
    title: 'Bodas',
    description:
      'Catering especializado para bodas, con opciones de menú, bebidas, decoración, y atención durante el evento.',
    price: 'S/000.00',
    icon: <Gem size={24} strokeWidth={1.9} />,
  },
  {
    id: 'evt-cumpleanos',
    title: 'Cumpleaños',
    description:
      'Opciones de Catering para que celebres cumpleaños de niños, jóvenes y adultos.',
    price: 'S/000.00',
    icon: <Cake size={24} strokeWidth={1.9} />,
  },
  {
    id: 'evt-corporativos',
    title: 'Corporativos',
    description:
      'Servicios de alimentación para reuniones, capacitaciones y celebraciones empresariales',
    price: 'S/000.00',
    icon: <Briefcase size={24} strokeWidth={1.9} />,
  },
  {
    id: 'evt-graduaciones',
    title: 'Graduaciones',
    description:
      'Alternativas gastronómicas para celebrar un logro académico junto a tus familiares y amigos.',
    price: 'S/000.00',
    icon: <GraduationCap size={24} strokeWidth={1.9} />,
  },
  {
    id: 'evt-aniversarios',
    title: 'Aniversarios',
    description:
      'Servicio de Catering para celebraciones familiares y aniversarios especiales.',
    price: 'S/000.00',
    icon: <Heart size={24} strokeWidth={1.9} />,
  },
  {
    id: 'evt-baby-shower',
    title: 'Baby Shower',
    description:
      'Opciones de comida, bebidas y atención para reuniones familiares',
    price: 'S/000.00',
    icon: <Gift size={24} strokeWidth={1.9} />,
  },
  {
    id: 'evt-conferencias',
    title: 'Conferencias',
    description:
      'Servicio de catering para conferencias, charlas y seminarios, con opciones de alimentación para los asistentes.',
    price: 'S/000.00',
    icon: <Presentation size={24} strokeWidth={1.9} />,
  },
  {
    id: 'evt-quinceaneros',
    title: 'Quinceañeros',
    description:
      'Catering para celebraciones de quince años, con opciones de comida, bebidas y atención para los invitados.',
    price: 'S/000.00',
    icon: <Sparkles size={24} strokeWidth={1.9} />,
  },
  {
    id: 'evt-reuniones-familiares',
    title: 'Reuniones Familiares',
    description:
      'Opciones de catering para reuniones familiares, con variedad de comidas y bebidas para compartir en un ambiente especial.',
    price: 'S/000.00',
    icon: <Users size={24} strokeWidth={1.9} />,
  },
];

/* 2. PAQUETES DATA */
const BASE_FEATURES = [
  '30 postres',
  '30 bebidas',
  '30 mesas',
  '30 sillas',
  'Decoración básica',
  '30 platos principales',
  '30 meseros',
  '30 juegos de cubiertos',
];

const INITIAL_PACKAGES: PackageItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: `pkg-${i + 1}`,
  title: 'Paquete de Cumpleaños',
  subtitle: 'Para 30 personas',
  features: BASE_FEATURES,
  price: 'S/000.00',
}));

/* 3. GASTRONOMÍA DATA */
const FOOD_DESCRIPTION =
  'Arroz verde y sazonado, acompañado de un jugoso pollo y servido con frescas verduras. Un clásico lleno de sabor y tradición peruana.';

const GASTRONOMIA_ITEMS: FoodItem[] = Array.from({ length: 9 }, (_, i) => ({
  id: `food-${i + 1}`,
  title: 'Arroz con pollo',
  description: FOOD_DESCRIPTION,
  price: 'S/000.00',
  hasUnderline: true,
}));

/* 4. SERVICIOS APARTE DATA */
const SERVICIOS_APARTE_ITEMS: FoodItem[] = [
  {
    id: 'srv-bodas',
    title: 'Bodas',
    description:
      'Catering especializado para bodas, con opciones de menu, bebidas, decoracion, y atencion durante el evento.',
    price: 'S/000.00',
    hasUnderline: false,
  },
  {
    id: 'srv-cumpleanos',
    title: 'Cumpleaños',
    description:
      'Opciones de Catering para que ccelebres cumpleaños de niños, jovenes y adultos.',
    price: 'S/000.00',
    hasUnderline: false,
  },
  {
    id: 'srv-corporativos',
    title: 'Corporativos',
    description:
      'Servicios de alimentacion para reuniones, capacitaciones y celebraciones empresariales',
    price: 'S/000.00',
    hasUnderline: false,
  },
  {
    id: 'srv-graduaciones',
    title: 'Graduaciones',
    description:
      'Alternativas gastronomicas para celebrar un logro academico junto a tus familiares y amigos.',
    price: 'S/000.00',
    hasUnderline: false,
  },
  {
    id: 'srv-aniversarios',
    title: 'Aniversarios',
    description:
      'Servicio de Catering para celebraciones familiares y aniversarios especiales.',
    price: 'S/000.00',
    hasUnderline: false,
  },
  {
    id: 'srv-baby-shower',
    title: 'Baby Shower',
    description:
      'Opciones de comida, bebidas y atencion para reuniones familiares',
    price: 'S/000.00',
    hasUnderline: false,
  },
  {
    id: 'srv-conferencias',
    title: 'Conferencias',
    description:
      'Servicio de catering para conferencias, charlas y seminarios, con opciones de alimentacion para los asistentes.',
    price: 'S/000.00',
    hasUnderline: false,
  },
  {
    id: 'srv-quinceaneros',
    title: 'Quinceañeros',
    description:
      'Catering para celebraciones de quince años, con opciones de comida, bebidas y atencion para los invitados.',
    price: 'S/000.00',
    hasUnderline: false,
  },
  {
    id: 'srv-reuniones-familiares',
    title: 'Reuniones Familiares',
    description:
      'Opciones de catering para reuniones familiares, con variedad de comidas y bebidas para compartir en un ambiente especial.',
    price: 'S/000.00',
    hasUnderline: false,
  },
];

type MainSectionType = 'servicios' | 'nosotros' | 'cotizacion' | 'ayuda' | 'login' | 'register';

export default function Home() {
  // Navigation - Default to 'register' to show the newly requested Crear cuenta view
  const [mainSection, setMainSection] = useState<MainSectionType>('register');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('gastronomia');
  const [filterType, setFilterType] = useState<string>('');
  const [filterSecondary, setFilterSecondary] = useState<string>('');
  const [serviceRadioOption, setServiceRadioOption] = useState<'personal' | 'alquiler'>('alquiler');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Modals state
  const [selectedItem, setSelectedItem] = useState<QuotableItem | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  // Section title based on active category
  const sectionTitle = useMemo(() => {
    switch (activeCategory) {
      case 'eventos':
        return 'Servicio de Eventos';
      case 'gastronomia':
        return 'Servicio de Gastronomía';
      case 'servicios_aparte':
        return 'Servicios Apartes';
      case 'paquetes':
      default:
        return 'Servicio de Paquetes';
    }
  }, [activeCategory]);

  // Filtered Gastronomía
  const displayedGastronomia = useMemo(() => {
    let items = GASTRONOMIA_ITEMS;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (f) =>
          f.title.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [searchQuery]);

  // Filtered Servicios Aparte
  const displayedServiciosAparte = useMemo(() => {
    let items = SERVICIOS_APARTE_ITEMS;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [searchQuery]);

  // Filtered Events
  const displayedEvents = useMemo(() => {
    let items = EVENT_ITEMS;
    if (filterType) {
      items = items.filter(
        (ev) => ev.title.toLowerCase() === filterType.toLowerCase()
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (ev) =>
          ev.title.toLowerCase().includes(q) ||
          ev.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [filterType, searchQuery]);

  // Filtered Packages
  const displayedPackages = useMemo(() => {
    let items = INITIAL_PACKAGES.map((pkg, index) => {
      let title = pkg.title;
      if (filterType) {
        title = `Paquete de ${filterType}`;
      }
      let subtitle = pkg.subtitle;
      if (filterSecondary) {
        subtitle = filterSecondary;
      }
      return {
        ...pkg,
        id: `${pkg.id}-${currentPage}-${index}`,
        title,
        subtitle,
      };
    });

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.features.some((f) => f.toLowerCase().includes(q))
      );
    }
    return items;
  }, [filterType, filterSecondary, searchQuery, currentPage]);

  const handleResetFilters = () => {
    setFilterType('');
    setFilterSecondary('');
    setSearchQuery('');
  };

  const handleNavigate = (tab: string) => {
    const clean = tab.toLowerCase();
    if (clean.includes('servicio') || clean === 'servicios') {
      setMainSection('servicios');
    } else if (clean.includes('nosotros')) {
      setMainSection('nosotros');
    } else if (clean.includes('cotiza') || clean === 'cotizacion') {
      setMainSection('cotizacion');
    } else if (clean.includes('ayuda')) {
      setMainSection('ayuda');
    } else if (clean.includes('login') || clean.includes('sesion')) {
      setMainSection('login');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.mainContainer}>
      {/* 1. Header / Navbar with live section navigation */}
      <Header
        activeTab={mainSection === 'register' ? 'cotizacion' : mainSection}
        loginButtonText={mainSection === 'login' ? 'Registrarse' : 'Iniciar sesión'}
        onOpenLogin={() => {
          if (mainSection === 'login') {
            setMainSection('register');
          } else {
            setMainSection('login');
          }
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigateTab={handleNavigate}
      />

      {/* 2. MAIN SECTION RENDERER */}

      {/* A. VIEW: NOSOTROS (Image 1) */}
      {mainSection === 'nosotros' && (
        <AboutView onGoToServices={() => setMainSection('servicios')} />
      )}

      {/* B. VIEW: MI COTIZACIÓN (Images 2 & 4) */}
      {mainSection === 'cotizacion' && <QuoteView />}

      {/* C. VIEW: AYUDA (Image 3) */}
      {mainSection === 'ayuda' && <HelpView />}

      {/* D. VIEW: INICIAR SESIÓN (Image 5) */}
      {mainSection === 'login' && (
        <LoginView
          onSuccess={() => setMainSection('servicios')}
          onGoToRegister={() => {
            setMainSection('register');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}

      {/* E. VIEW: CREAR CUENTA (Latest Image) */}
      {mainSection === 'register' && (
        <RegisterView
          onGoToLogin={() => {
            setMainSection('login');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onSuccess={() => setMainSection('servicios')}
        />
      )}

      {/* F. VIEW: SERVICIOS (Catalog with 4 category tabs) */}
      {mainSection === 'servicios' && (
        <>
          {/* Hero / Category Banner with tabs */}
          <HeroBanner
            activeCategory={activeCategory}
            onSelectCategory={(cat) => {
              setActiveCategory(cat);
              setFilterType('');
              setFilterSecondary('');
              setCurrentPage(1);
            }}
          />

          {/* Filter & Search Bar */}
          <FilterBar
            activeCategory={activeCategory}
            filterType={filterType}
            onSelectFilterType={setFilterType}
            filterSecondary={filterSecondary}
            onSelectFilterSecondary={setFilterSecondary}
            serviceRadioOption={serviceRadioOption}
            onSelectServiceRadioOption={setServiceRadioOption}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          {/* Section Title & Cards Grid */}
          <main className={styles.contentWrapper}>
            <div className={styles.sectionHeader}>
              <div className={styles.titleGroup}>
                <div className={styles.verticalGoldBar} />
                <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
              </div>
              <div className={styles.horizontalDivider} />
            </div>

            <div className={styles.cardsGrid}>
              {/* TAB 1: GASTRONOMÍA */}
              {activeCategory === 'gastronomia' && (
                displayedGastronomia.length > 0 ? (
                  displayedGastronomia.map((item) => (
                    <FoodCard
                      key={item.id}
                      item={item}
                      onCotizar={(food) =>
                        setSelectedItem({
                          id: food.id,
                          title: food.title,
                          description: food.description,
                          price: food.price,
                        })
                      }
                    />
                  ))
                ) : (
                  <div className={styles.emptyState}>
                    <h3 className={styles.emptyStateTitle}>No se encontraron platos</h3>
                    <p className={styles.emptyStateText}>
                      No hay resultados para la búsqueda.
                    </p>
                    <button
                      type="button"
                      className={styles.resetFiltersBtn}
                      onClick={handleResetFilters}
                    >
                      Restablecer
                    </button>
                  </div>
                )
              )}

              {/* TAB 2: SERVICIOS APARTE */}
              {activeCategory === 'servicios_aparte' && (
                displayedServiciosAparte.length > 0 ? (
                  displayedServiciosAparte.map((item) => (
                    <FoodCard
                      key={item.id}
                      item={item}
                      onCotizar={(srv) =>
                        setSelectedItem({
                          id: srv.id,
                          title: srv.title,
                          description: srv.description,
                          price: srv.price,
                        })
                      }
                    />
                  ))
                ) : (
                  <div className={styles.emptyState}>
                    <h3 className={styles.emptyStateTitle}>No se encontraron servicios</h3>
                    <p className={styles.emptyStateText}>
                      No hay resultados para la búsqueda.
                    </p>
                    <button
                      type="button"
                      className={styles.resetFiltersBtn}
                      onClick={handleResetFilters}
                    >
                      Restablecer
                    </button>
                  </div>
                )
              )}

              {/* TAB 3: EVENTOS */}
              {activeCategory === 'eventos' && (
                displayedEvents.length > 0 ? (
                  displayedEvents.map((item) => (
                    <EventCard
                      key={item.id}
                      item={item}
                      onCotizar={(ev) =>
                        setSelectedItem({
                          id: ev.id,
                          title: ev.title,
                          description: ev.description,
                          price: ev.price,
                        })
                      }
                    />
                  ))
                ) : (
                  <div className={styles.emptyState}>
                    <h3 className={styles.emptyStateTitle}>No se encontraron eventos</h3>
                    <p className={styles.emptyStateText}>
                      No hay resultados para los filtros seleccionados.
                    </p>
                    <button
                      type="button"
                      className={styles.resetFiltersBtn}
                      onClick={handleResetFilters}
                    >
                      Restablecer filtros
                    </button>
                  </div>
                )
              )}

              {/* TAB 4: PAQUETES */}
              {activeCategory === 'paquetes' && (
                displayedPackages.length > 0 ? (
                  displayedPackages.map((item) => (
                    <PackageCard
                      key={item.id}
                      item={item}
                      onCotizar={(pkg) => setSelectedItem(pkg)}
                    />
                  ))
                ) : (
                  <div className={styles.emptyState}>
                    <h3 className={styles.emptyStateTitle}>No se encontraron paquetes</h3>
                    <p className={styles.emptyStateText}>
                      No hay resultados para los filtros seleccionados.
                    </p>
                    <button
                      type="button"
                      className={styles.resetFiltersBtn}
                      onClick={handleResetFilters}
                    >
                      Restablecer filtros
                    </button>
                  </div>
                )
              )}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={5}
              onPageChange={(p) => {
                setCurrentPage(p);
                window.scrollTo({ top: 380, behavior: 'smooth' });
              }}
            />
          </main>
        </>
      )}

      {/* 3. Footer with navigation */}
      <Footer onNavigateTab={handleNavigate} />

      {/* Modals */}
      <QuoteModal
        packageItem={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}

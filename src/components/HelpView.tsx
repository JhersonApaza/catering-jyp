'use client';

import React, { useState } from 'react';
import styles from './HelpView.module.css';
import {
  Search,
  ChevronRight,
  Utensils,
  Calendar,
  FileText,
  User,
  CreditCard,
  CheckCircle2,
  Plus,
  Minus,
  Phone,
  Mail,
} from 'lucide-react';

export default function HelpView() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(1); // Index 1 is open by default as in screenshot
  const [searchTerm, setSearchTerm] = useState('');

  const horizontalSteps = [
    {
      num: '01',
      title: 'Explora',
      text: 'Revisa nuestros servicios y paquetes disponibles.',
    },
    {
      num: '02',
      title: 'Selecciona',
      text: 'Elige el servicio que deseas contratar.',
    },
    {
      num: '03',
      title: 'Iniciar sesión',
      text: 'Revisa nuestros servicios y paquetes disponibles.',
    },
    {
      num: '04',
      title: 'Cotiza',
      text: 'Ingresa los datos de tu evento y genera tu cotización.',
    },
    {
      num: '05',
      title: 'Confirma',
      text: 'Revisa la cotización, realiza el pago y confirma tu pedido.',
    },
  ];

  const verticalSteps = [
    {
      num: '1',
      icon: <Utensils size={20} strokeWidth={2} />,
      title: 'Elige tu servicio',
      desc: 'Explora nuestros servicios de catering y selecciona el que mejor se adapte a tu evento.',
    },
    {
      num: '2',
      icon: <Calendar size={20} strokeWidth={2} />,
      title: 'Personaliza tu evento',
      desc: 'Indica fecha, cantidad de invitados y las opciones que necesitas (menú, decoración, etc.).',
    },
    {
      num: '3',
      icon: <FileText size={20} strokeWidth={2} />,
      title: 'Recibe tu cotización',
      desc: 'Revisa el precio y todos los detalles de tu evento. Podrás ver un resumen de los servicios seleccionados.',
    },
    {
      num: '4',
      icon: <User size={20} strokeWidth={2} />,
      title: 'Inicia sesión o regístrate',
      desc: 'Para continuar con la contratación, deberás ingresar a tu cuenta. Si aún no tienes una, puedes registrarte en pocos pasos.',
    },
    {
      num: '5',
      icon: <CreditCard size={20} strokeWidth={2} />,
      title: 'Confirma tu pedido',
      desc: 'Revisa los datos, realiza el pago y confirma la contratación.',
    },
  ];

  const faqs = [
    {
      question: '¿Cuál es el servicio más solicitado?',
      answer:
        'Nuestros servicios más solicitados son el Paquete Completo de Cumpleaños y el Menú Criollo Gourmet para eventos corporativos y bodas.',
    },
    {
      question: '¿Necesito una cuenta para ver los servicios?',
      answer:
        'No, puedes explorar nuestros servicios y consultar su información sin iniciar sesión. Para cotizar o contratar un servicio deberás iniciar sesión o registrarse.',
    },
    {
      question: '¿Cuáles son los platos favoritos de nuestros clientes?',
      answer:
        'Entre los platos más aclamados destacan el Arroz con Pollo Criollo, Lomo Saltado Premium, y nuestra selección de bocaditos dulces y salados artesanales.',
    },
    {
      question: '¿Cómo puedo realizar una cotización?',
      answer:
        'Solo selecciona el paquete o plato de tu interés, haz clic en "Mandar a Cotizar", completa la fecha e invitados de tu evento y te enviaremos el presupuesto de inmediato.',
    },
    {
      question: '¿Puedo modificar mi cotización?',
      answer:
        'Sí, en la sección "Mi cotización" puedes ajustar cantidades, agregar platos adicionales o cambiar los servicios en cualquier momento antes de confirmar.',
    },
    {
      question: '¿Qué métodos de pago están disponibles?',
      answer:
        'Aceptamos transferencias bancarias (BCP, BBVA, Interbank), tarjetas de crédito/débito (Visa, Mastercard, Amex), y billeteras digitales (Yape, Plin).',
    },
  ];

  return (
    <div className={styles.helpContainer}>
      {/* 1. Hero */}
      <div>
        <section className={styles.heroCard}>
          <h1 className={styles.heroTitle}>Centro de Ayuda</h1>
          <p className={styles.heroSubtitle}>
            Encuentra respuestas y conoce cómo contratar nuestros servicios
          </p>
        </section>

        {/* Search Pill */}
        <div className={styles.searchPillWrapper}>
          <input
            type="text"
            className={styles.searchPillInput}
            placeholder="¿En qué podemos ayudarte?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={18} className={styles.searchPillIcon} />
        </div>
      </div>

      {/* 2. ¿Cómo funciona? */}
      <section>
        <h2 className={styles.sectionTitle}>¿Cómo funciona?</h2>
        <div className={styles.stepsHoriWrapper}>
          {horizontalSteps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className={styles.stepHoriCard}>
                <span className={styles.stepHoriNum}>{step.num} {step.title}</span>
                <p className={styles.stepHoriText}>{step.text}</p>
              </div>
              {idx < horizontalSteps.length - 1 && (
                <div className={styles.stepArrow}>
                  <ChevronRight size={18} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 3. ¿Cómo solicitar una cotización? */}
      <section>
        <h2 className={styles.sectionTitle}>¿Cómo solicitar una cotización?</h2>
        <p className={styles.sectionSubtitle}>
          Sigue estos pasos para obtener una cotización personalizada para tu evento.
        </p>

        <div className={styles.verticalStepsList}>
          {verticalSteps.map((v) => (
            <div key={v.num} className={styles.verticalStepItem}>
              <div className={styles.stepCircleNum}>{v.num}</div>
              <div className={styles.stepIconBadge}>{v.icon}</div>
              <div className={styles.stepTextGroup}>
                <h3 className={styles.stepHeading}>{v.title}</h3>
                <p className={styles.stepDesc}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Success Card */}
      <section className={styles.orderConfirmedCard}>
        <div className={styles.orderConfirmedLeft}>
          <CheckCircle2 size={32} className={styles.successCheckIcon} />
          <div>
            <h3 className={styles.orderConfirmedTitle}>¡LISTO!</h3>
            <p className={styles.orderConfirmedText}>
              Tu pedido ha sido confirmado. Nos pondremos en contacto contigo para los siguientes pasos
            </p>
          </div>
        </div>

        <button type="button" className={styles.viewOrdersBtn}>
          Ver mis pedidos
        </button>
      </section>

      {/* 5. Preguntas Frecuentes */}
      <section>
        <h2 className={styles.sectionTitle} style={{ marginBottom: '16px' }}>
          Preguntas frecuentes
        </h2>

        <div className={styles.faqList}>
          {faqs.map((faq, i) => {
            const isOpen = openFaqIndex === i;
            return (
              <div key={i} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqQuestionBtn}
                  onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                >
                  <span>{faq.question}</span>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {isOpen && <p className={styles.faqAnswer}>{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. ¿Necesitas más ayuda? */}
      <section className={styles.needHelpCard}>
        <div>
          <h2 className={styles.needHelpTitle}>¿Necesitas más ayuda?</h2>
          <p className={styles.needHelpSubtitle}>
            Nuestro equipo está disponible para ayudarte con tus cotizaciones, pedidos y servicios.
          </p>
        </div>

        <div className={styles.contactOptionsRow}>
          <div className={styles.contactOptionBox}>
            <Phone size={20} color="var(--dark-slate)" />
            <div style={{ textAlign: 'left' }}>
              <div className={styles.contactOptionLabel}>Soporte telefónico</div>
              <div className={styles.contactOptionVal}>+51 999 888 444</div>
            </div>
          </div>

          <div className={styles.contactOptionBox}>
            <Mail size={20} color="var(--dark-slate)" />
            <div style={{ textAlign: 'left' }}>
              <div className={styles.contactOptionLabel}>Correo electrónico</div>
              <div className={styles.contactOptionVal}>soporte@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

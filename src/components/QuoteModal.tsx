'use client';

import React, { useState } from 'react';
import styles from './Modal.module.css';
import { X, CheckCircle2, FileText } from 'lucide-react';

export interface QuotableItem {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  price: string;
}

interface QuoteModalProps {
  packageItem: QuotableItem | null;
  onClose: () => void;
}

export default function QuoteModal({ packageItem, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    guests: '30',
    notes: '',
  });

  if (!packageItem) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleGroup}>
            <span className={styles.modalTitleIcon}>
              <FileText size={20} strokeWidth={2.4} />
            </span>
            <h3 className={styles.modalTitle}>Solicitar Cotización</h3>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className={styles.modalBody}>
            <div className={styles.successBox}>
              <div className={styles.successIcon}>
                <CheckCircle2 size={32} />
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--dark-slate)' }}>
                ¡Solicitud Enviada con Éxito!
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Hemos recibido tu solicitud para el <strong>{packageItem.title}</strong>. Uno de nuestros asesores de Catering se pondrá en contacto contigo muy pronto.
              </p>
            </div>
            <div className={styles.modalFooter} style={{ justifyContent: 'center' }}>
              <button
                type="button"
                className={styles.submitBtn}
                onClick={onClose}
              >
                Aceptar y Continuar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.modalBody}>
              {/* Package summary preview */}
              <div className={styles.packageSummaryBox}>
                <div className={styles.packageSummaryTitle}>{packageItem.title}</div>
                <div className={styles.packageSummarySubtitle}>
                  {packageItem.subtitle} • {packageItem.price}
                </div>
              </div>

              {/* Form fields */}
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Nombre completo</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Carlos Mendoza"
                  className={styles.formInput}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Teléfono / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+51 987 654 321"
                    className={styles.formInput}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Fecha tentativa</label>
                  <input
                    type="date"
                    required
                    className={styles.formInput}
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Correo electrónico</label>
                  <input
                    type="email"
                    placeholder="ejemplo@correo.com"
                    className={styles.formInput}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Nro. estimado personas</label>
                  <input
                    type="number"
                    min="1"
                    className={styles.formInput}
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Comentarios o requerimientos adicionales</label>
                <textarea
                  rows={3}
                  placeholder="Tipo de decoración, preferencias de platos, lugar del evento..."
                  className={styles.formTextarea}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={onClose}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className={styles.submitBtn}
              >
                Mandar a Cotizar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import styles from './QuoteView.module.css';
import {
  Calendar,
  Clock,
  Pencil,
  FileText,
  CheckCircle2,
} from 'lucide-react';

export default function QuoteView() {
  const tableSections = [
    { title: 'Platillos', category: 'plato' },
    { title: 'Bebidas', category: 'bebida' },
    { title: 'Postres', category: 'postre' },
    { title: 'Alquiler de Objetos', category: 'alquiler' },
    { title: 'Servicios adicionales', category: 'servicio' },
  ];

  return (
    <div className={styles.quoteContainer}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Mi cotizacion</h1>
        <p className={styles.pageSubtitle}>
          Revisa el detalle de tu cotización antes de continuar.
        </p>
      </div>

      {/* 1. Datos del Evento Card */}
      <section className={styles.eventDataCard}>
        <div className={styles.cardHeaderTitle}>
          <Calendar size={20} strokeWidth={2.2} color="var(--primary-gold)" />
          <span>Datos del evento</span>
        </div>

        {/* Row 1: 4 columns */}
        <div className={styles.formGridRow4}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Tipo de evento</label>
            <input
              type="text"
              readOnly
              defaultValue="Evento fijo"
              className={`${styles.inputControl} ${styles.inputControlFixed}`}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Fecha</label>
            <input
              type="text"
              placeholder="Fecha"
              className={styles.inputControl}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Hora de inicio</label>
            <input
              type="text"
              placeholder="Fecha"
              className={styles.inputControl}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Hora de fin</label>
            <input
              type="text"
              placeholder="Fecha"
              className={styles.inputControl}
            />
          </div>
        </div>

        {/* Row 2: 3 columns */}
        <div className={styles.formGridRow3}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Numeros de invitados</label>
            <input
              type="text"
              placeholder="Fecha"
              className={styles.inputControl}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Numero</label>
            <input
              type="text"
              placeholder="Fecha"
              className={styles.inputControl}
            />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Persona encargada</label>
            <input
              type="text"
              placeholder="Fecha"
              className={styles.inputControl}
            />
          </div>
        </div>

        {/* Row 3: Dirección */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Direccion exacta</label>
          <input
            type="text"
            placeholder="Fecha"
            className={styles.inputControl}
          />
        </div>

        {/* Row 4: Requerimientos especiales */}
        <div className={styles.inputGroup}>
          <label className={styles.inputLabel}>Requerimientos especiales</label>
          <textarea
            placeholder="Fecha"
            className={`${styles.inputControl} ${styles.textareaControl}`}
          />
        </div>
      </section>

      {/* 2. Itemized Tables (Image 4) */}
      {tableSections.map((sec, idx) => (
        <section key={idx} className={styles.tableCard}>
          <div className={styles.tableHeaderRow}>
            <h3 className={styles.tableTitle}>{sec.title}</h3>
            <button
              type="button"
              className={styles.editBtn}
              aria-label={`Editar ${sec.title}`}
            >
              <Pencil size={18} strokeWidth={2} />
            </button>
          </div>

          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th style={{ width: '40px' }}>N.</th>
                <th>Nombre del ítem</th>
                <th>Categoría</th>
                <th>Cantidad</th>
                <th>Precio unitario</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((num) => (
                <tr key={num}>
                  <td>{num}</td>
                  <td>Nombre del ítem</td>
                  <td>{sec.category}</td>
                  <td>dato</td>
                  <td>dato</td>
                  <td>dato</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}

      {/* 3. Bottom Summary Row */}
      <div className={styles.bottomSummaryGrid}>
        {/* Validez de la oferta */}
        <div className={styles.validityCard}>
          <div className={styles.validityTitleRow}>
            <Clock size={18} strokeWidth={2.4} />
            <span>Validez de la oferta:</span>
          </div>
          <p className={styles.validityText}>
            Esta cotización es valida por 7 dias calendarios pasando este periodo, los precios y la disponibilidad de stock o personal quedan sujeto a reconfirmacion
          </p>
        </div>

        {/* Resumen de totales */}
        <div className={styles.totalsCard}>
          <h3 className={styles.totalsTitle}>Resumen de totales</h3>
          <div className={styles.totalRow}>
            <span>Subtotal:</span>
            <span>S/000.00</span>
          </div>
          <div className={styles.totalRow}>
            <span>Descuento aplicado:</span>
            <span>- S/000.0</span>
          </div>
          <div className={styles.totalRow}>
            <span>Impuestos (IGV 18%):</span>
            <span>S/000.00</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.totalEstimateRow}>
            <span>Total estimado:</span>
            <span className={styles.totalPrice}>S/000.00</span>
          </div>
        </div>
      </div>

      {/* 4. Action Buttons */}
      <div className={styles.actionsRow}>
        <button type="button" className={styles.actionBtnWhite}>
          <Pencil size={17} strokeWidth={2} />
          <span>Modificar cotización</span>
        </button>

        <button type="button" className={styles.actionBtnWhite}>
          <FileText size={17} strokeWidth={2} />
          <span>Descargar en pdf</span>
        </button>

        <button type="button" className={styles.actionBtnDark}>
          <CheckCircle2 size={17} strokeWidth={2} />
          <span>Proceder con el pedido</span>
        </button>
      </div>
    </div>
  );
}

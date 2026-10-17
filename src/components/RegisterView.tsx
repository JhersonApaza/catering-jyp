'use client';

import React, { useState } from 'react';
import styles from './RegisterView.module.css';
import { User, Mail, Lock } from 'lucide-react';

interface RegisterViewProps {
  onGoToLogin: () => void;
  onSuccess?: () => void;
}

export default function RegisterView({ onGoToLogin, onSuccess }: RegisterViewProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert('Por favor acepta los términos y condiciones.');
      return;
    }
    alert(`Cuenta creada exitosamente para: ${formData.firstName} ${formData.lastName}`);
    onSuccess?.();
  };

  return (
    <div className={styles.registerPageContainer}>
      <div className={styles.registerCard}>
        {/* Header */}
        <div className={styles.registerHeader}>
          <h1 className={styles.registerTitle}>Crear cuenta</h1>
          <p className={styles.registerSubtitle}>Registra tus datos para comenzar</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.registerForm}>
          {/* Row 1: Nombre completo y Apellidos completos */}
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Nombre completo</label>
              <div className={styles.inputFieldWrapper}>
                <User size={18} className={styles.inputIcon} />
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  className={styles.textInput}
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Apellidos completos</label>
              <div className={styles.inputFieldWrapper}>
                <User size={18} className={styles.inputIcon} />
                <input
                  type="text"
                  required
                  placeholder="Tus apellidos completos"
                  className={styles.textInput}
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Row 2: Correo electrónico y Contraseña */}
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Correo electrónico</label>
              <div className={styles.inputFieldWrapper}>
                <Mail size={18} className={styles.inputIcon} />
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className={styles.textInput}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Contraseña</label>
              <div className={styles.inputFieldWrapper}>
                <Lock size={18} className={styles.inputIcon} />
                <input
                  type="password"
                  required
                  placeholder="Crea una contraseña"
                  className={styles.textInput}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Terms checkbox */}
          <label className={styles.termsRow}>
            <input
              type="checkbox"
              required
              className={styles.checkbox}
              checked={formData.acceptTerms}
              onChange={(e) =>
                setFormData({ ...formData, acceptTerms: e.target.checked })
              }
            />
            <span>Acepto los terminos y condiciones</span>
          </label>

          {/* Submit: Crear cuenta */}
          <button type="submit" className={styles.submitBtn}>
            Crear cuenta
          </button>

          {/* Divider */}
          <div className={styles.dividerRow}>
            <span className={styles.dividerText}>¿Ya tienes una cuenta?</span>
          </div>

          {/* Iniciar sesión secondary button */}
          <button
            type="button"
            className={styles.loginRedirectBtn}
            onClick={onGoToLogin}
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

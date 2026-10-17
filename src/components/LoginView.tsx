'use client';

import React, { useState } from 'react';
import styles from './LoginView.module.css';
import { Mail, Lock } from 'lucide-react';

interface LoginViewProps {
  onSuccess?: () => void;
  onGoToRegister?: () => void;
}

export default function LoginView({ onSuccess, onGoToRegister }: LoginViewProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Sesión iniciada con: ${email}`);
    onSuccess?.();
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginCard}>
        {/* Header */}
        <div className={styles.loginHeader}>
          <h1 className={styles.loginTitle}>Iniciar sesión</h1>
          <p className={styles.loginSubtitle}>Ingresa a tu cuenta para continuar</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          {/* Correo electrónico */}
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Correo electrónico</label>
            <div className={styles.inputFieldWrapper}>
              <Mail size={18} className={styles.inputIcon} />
              <input
                type="email"
                required
                placeholder="tu@correo.com"
                className={styles.textInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Contraseña</label>
            <div className={styles.inputFieldWrapper}>
              <Lock size={18} className={styles.inputIcon} />
              <input
                type="password"
                required
                placeholder="Ingresa tu contraseña"
                className={styles.textInput}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Recordarme y Olvidaste */}
          <div className={styles.optionsRow}>
            <label className={styles.rememberMeLabel}>
              <input
                type="checkbox"
                style={{ accentColor: 'var(--primary-gold)' }}
              />
              <span>Recordarme</span>
            </label>

            <a href="#" className={styles.forgotPasswordLink}>
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón Ingresar */}
          <button type="submit" className={styles.submitBtn}>
            Ingresar
          </button>

          {/* Separador */}
          <div className={styles.dividerRow}>
            <span className={styles.dividerText}>¿No tienes una cuenta?</span>
          </div>

          {/* Botón Crear Cuenta */}
          <button
            type="button"
            className={styles.createAccountBtn}
            onClick={onGoToRegister}
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
}

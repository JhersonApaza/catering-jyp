import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catering - Servicio de Paquetes y Eventos",
  description: "Servicios de catering para eventos, paquetes de cumpleaños, gastronomía y atención especializada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

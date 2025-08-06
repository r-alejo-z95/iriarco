import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://iriarco.com"),
  title: {
    default: "Iriarco | Soluciones Eléctricas Integrales",
    template: "%s | Iriarco",
  },
  description: "Iriarco ofrece soluciones eléctricas de alta y media tensión, importación y comercialización de equipos eléctricos, y proyectos de ingeniería eléctrica con más de 20 años de experiencia en Ecuador.",
  keywords: ["Iriarco", "electricidad", "soluciones eléctricas", "alta tensión", "media tensión", "equipos eléctricos", "ingeniería eléctrica", "Ecuador", "cableado Hendrix", "paneles solares", "mantenimiento eléctrico"],
  openGraph: {
    title: "Iriarco | Soluciones Eléctricas Integrales",
    description: "Iriarco ofrece soluciones eléctricas de alta y media tensión, importación y comercialización de equipos eléctricos, y proyectos de ingeniería eléctrica con más de 20 años de experiencia en Ecuador.",
    url: "https://iriarco.com",
    siteName: "Iriarco",
    images: [
      {
        url: "https://iriarco.com/og-image.jpg", // You should create an actual og-image.jpg
        width: 1200,
        height: 630,
        alt: "Iriarco - Soluciones Eléctricas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iriarco | Soluciones Eléctricas Integrales",
    description: "Iriarco ofrece soluciones eléctricas de alta y media tensión, importación y comercialización de equipos eléctricos, y proyectos de ingeniería eléctrica con más de 20 años de experiencia en Ecuador.",
    images: ["https://iriarco.com/og-image.jpg"], // You should create an actual og-image.jpg
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

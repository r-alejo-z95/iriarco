import Contact from '@/components/Contact';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Iriarco",
  description: "Ponte en contacto con Iriarco para consultas, soporte o información sobre nuestros servicios y productos eléctricos.",
};

export default function ContactPage() {
  return <Contact />;
}
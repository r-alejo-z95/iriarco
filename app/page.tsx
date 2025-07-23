import AboutUsSnippet from "@/components/AboutUsSnippet";
import CallToAction from "@/components/CallToAction";
import FeaturedServices from "@/components/FeaturedServices";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iriarco | Soluciones Eléctricas Integrales",
  description: "Iriarco ofrece soluciones eléctricas de alta y media tensión, importación y comercialización de equipos eléctricos, y proyectos de ingeniería eléctrica con más de 20 años de experiencia en Ecuador.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <RecentProjects />
      <AboutUsSnippet />
      <CallToAction />
    </>
  );
}

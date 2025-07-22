import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="h-[2000px]">
        {/* Contenido de relleno para forzar el scroll */}
      </div>
    </>
  );
}

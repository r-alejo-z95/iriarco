import { type Viewport, type Metadata } from "next";

export const metadata: Metadata = {
  title: "404: Página no encontrada",
};

export function generateViewport(): Viewport {
  return {
    themeColor: "#ffffff",
  };
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
      <p className="mt-4 text-lg text-muted-foreground">Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
}

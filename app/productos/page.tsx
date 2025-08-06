import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
  description: "Explora el catálogo de productos de Iriarco: cableado eléctrico ecológico, cableados de redes compactas, equipos de medición Sensorlink, paneles solares y sistemas de puesta a tierra Stavol.",
};

const products = [
  {
    title: 'Sistemas de Cableado Eléctrico Ecológicos',
    description: 'Cables Hendrix, amigables con el medio ambiente y de alta eficiencia.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Cableados de Redes Compactas y Protegidas',
    description: 'Soluciones de cableado para redes de distribución eléctrica, optimizando el espacio y la seguridad.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Equipos de Medición Sensorlink',
    description: 'Amperímetros, voltímetros, y más para media y alta tensión.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Paneles Solares',
    description: 'Sistemas fotovoltaicos para autoconsumo y proyectos a gran escala.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Sistemas de Puesta a Tierra Stavol',
    description: 'Protección y seguridad para tus instalaciones eléctricas.',
    image: 'https://images.unsplash.com/photo-1598092655340-e281911919b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.title}>
            <Image src={product.image} alt={product.title} width={500} height={300} className="rounded-t-lg object-cover h-48 w-full" />
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

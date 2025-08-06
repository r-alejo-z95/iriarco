import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Iriarco',
    short_name: 'Iriarco',
    description: 'Iriarco ofrece soluciones eléctricas de alta y media tensión, importación y comercialización de equipos eléctricos, y proyectos de ingeniería eléctrica con más de 20 años de experiencia en Ecuador.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

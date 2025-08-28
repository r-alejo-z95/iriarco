# Iriarco Website

This repository contains the source code for the official Iriarco (an electrical solutions provider) website, a modern and responsive web application designed to showcase Iriarco's services, products, and projects. The site emphasizes performance, user experience, and a clean, professional design.

## Features

*   **Comprehensive Page Structure:** Dedicated pages for Home, About Us (`Nosotros`), Services (`Servicios`), Products (`Productos`), Projects (`Proyectos`), and Contact (`Contacto`), all with Spanish routes.
*   **Consistent Layout:** Integration of `NavBar.tsx` and `Footer.tsx` into `app/layout.tsx` for a uniform site-wide display.
*   **Branding & Styling:** Configured primary and secondary brand colors within `app/globals.css` to align with Iriarco's brand guidelines.
*   **Dynamic Content Displays:**
    *   Card-based layouts for `Productos` and `Servicios` to display categories with placeholder images and descriptions.
    *   A descriptive `Nosotros` page with text and a placeholder image.
    *   Card-based layout for `Proyectos` to showcase projects.
*   **Enhanced Navigation:** Mobile menu animation using `framer-motion` and refined desktop menu items.
*   **Detailed Footer:** Includes a "Designed and developed by Ramón Alejandro" signature with a GitHub link.
*   **Homepage Sections:** Implemented `FeaturedServices.tsx`, `RecentProjects.tsx`, `AboutUsSnippet.tsx`, and `CallToAction.tsx` for a rich homepage experience.
*   **Refined Contact Form:** Updated `Contact.tsx` with Iriarco-relevant texts, removed unnecessary fields, added a "Número de teléfono" field, and reordered fields for improved UI. Client-side and server-side Zod validation schemas were updated accordingly.
*   **Updated Hero Section:** Content in `Hero.tsx` is tailored to Iriarco's services, and the "Trabajamos con" section uses `next/image` with new EEQ logos.
*   **Optimized Logo:** Replaced the complex SVG logo in `components/Logo.tsx` with a simpler, more efficient version.

## Technologies Used

*   **Next.js:** React framework for production.
*   **React:** JavaScript library for building user interfaces.
*   **TypeScript:** Superset of JavaScript that adds static types.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
*   **Framer Motion:** A production-ready motion library for React.
*   **Zod:** TypeScript-first schema declaration and validation library.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your system.

*   Node.js (LTS recommended)
*   npm (comes with Node.js) or Yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/iriarco.git
    cd iriarco
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

### Starting Production Server

To start the production server after building:

```bash
npm run start
# or
yarn start
```

## Project Structure

*   `app/`: Contains Next.js application routes, pages, and API endpoints.
*   `components/`: Reusable React components used throughout the application.
*   `public/`: Static assets like images, favicons, and logos.
*   `lib/`: Utility functions.

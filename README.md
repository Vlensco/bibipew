<div align="center">

  <img src="public/images/penguin-mascot.png" alt="BibiPew Logo" width="120" />

  # 🐧 BibiPew — Food & Travel Platform

  **Honest food reviews, hidden gems, travel guides & exclusive merchandise across Singapore, Johor Bahru, Batam, and Thailand.**

  [![Laravel](https://img.shields.io/badge/Laravel-11.x-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
  [![Inertia.js](https://img.shields.io/badge/Inertia.js-React-9553E9?style=for-the-badge&logo=inertia&logoColor=white)](https://inertiajs.com)
  [![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
  [![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

</div>

---

## 🌟 Overview

**BibiPew** is a modern Single Page Application (SPA) web platform built for foodies and travel enthusiasts. It brings together video reviews, travel guides, curated food blog posts, exclusive brand merchandise, and brand collaboration media kits into a unified, interactive web experience.

Developed with **Laravel 11**, **Inertia.js**, **React**, and **Tailwind CSS**, the platform features smooth scroll animations, category filter tabs, interactive modals, responsive grid pagination, and a signature brand color system (`#0091ff`).

---

## ✨ Features & Highlights

- 🏠 **Home Page**:
  - Hero section with custom BibiPew penguin mascot illustrations.
  - Interactive audience stats bar (*430K+ Total Followers*, *8 Platforms*, *4 Countries*, *500+ Collaborations*).
  - Featured latest video adventures & quick social channel shortcuts.

- 🐧 **About Page**:
  - Personal creator journey timeline.
  - Core content creation pillars (Food Reviews, Travel Vlogs, Hidden Gems).
  - Consolidated demographic card highlight.

- 📹 **Videos Page**:
  - Filter videos by country (*Singapore*, *JB*, *Batam*, *Thailand*) and platform (*YouTube*, *TikTok*, *Instagram*, *Xiaohongshu*).
  - 3-column video card grid with play modal trigger.
  - Smooth key-based staggered entrance animations.

- 🍜 **Food Reviews (Blog)**:
  - Categorized reviews (*Hawker*, *Cafe*, *Restaurant*, *Street Food*, *Hidden Gems*).
  - Light blue thumbnail card grid with category badges.

- 🗺️ **Travel Guides**:
  - Detailed food guides per country with *"Must Try Foods"* & *"Top Food Spots"* tags.
  - Integrated, vertically-centered *"Plan Your Trip"* video callout cards.

- 🛍️ **Merch Store**:
  - Exclusive BibiPew merchandise catalog with product badges (*Coming Soon*, *Notify Me*).
  - Category pill filter bar & numbered pagination controls (`[<] [1] [2] [>]`).
  - Interactive add-to-cart counter simulation.
  - Full-width *"More Merch Coming Soon!"* banner.

- 🤝 **Collaborate Page**:
  - Comprehensive media kit metrics for brand partnerships.
  - Audience breakdown progress bars (90% Singaporean reach).
  - Previous brand collaboration showcase & downloadable media kit CTA.

- 📩 **Contact Page**:
  - Interactive inquiry form with selectable inquiry types (*Brand Collab*, *Media*, *Restaurant Invite*).
  - Quick contact details, social links, and response time notice.

---

## 🛠️ Tech Stack

- **Backend**: [Laravel 11](https://laravel.com)
- **Frontend**: [React 18](https://react.dev) + [Inertia.js](https://inertiajs.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Animations**: Custom `ScrollReveal` component using `IntersectionObserver` & CSS keyframes
- **Build Tool**: [Vite](https://vitejs.dev)

---

## 🚀 Quick Start & Installation

### Prerequisites

Ensure you have the following installed on your machine:
- **PHP** >= 8.2
- **Composer** >= 2.0
- **Node.js** >= 18.0 & **npm**

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vlensco/bibipew.git
   cd bibipew
   ```

2. **Install PHP dependencies**:
   ```bash
   composer install
   ```

3. **Install JavaScript dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment configuration**:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Start the development servers**:

   - In terminal 1 (Vite dev server):
     ```bash
     npm run dev
     ```

   - In terminal 2 (Laravel local server):
     ```bash
     php artisan serve
     ```

6. Open your browser and visit: `http://127.0.0.1:8000`

---

## 📁 Folder Structure

```
bibipew/
├── Asset/                     # Brand design assets & PDFs
├── public/                    # Public static files & images
│   ├── favicon.png            # Penguin mascot browser favicon
│   └── images/                # Mascot, stats, and page images
├── resources/
│   ├── css/
│   │   └── app.css            # Tailwind & global CSS styles
│   ├── js/
│   │   ├── Components/        # Navbar, Footer, ScrollReveal, Mascot
│   │   ├── Layouts/           # MainLayout SPA wrapper
│   │   ├── Pages/             # Home, About, Videos, Blog, Travel, Merch, Collaborate, Contact
│   │   ├── app.jsx            # Inertia app initialization & title resolver
│   └── views/
│       └── app.blade.php      # Main Blade template & head metadata
├── routes/
│   └── web.php                # Web routes mapping to Inertia pages
└── vite.config.js             # Vite build configuration
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

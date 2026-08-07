import '../css/app.css';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Collaborate from './Pages/Collaborate';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Merch from './Pages/Merch';
import TravelGuides from './Pages/TravelGuides';
import Videos from './Pages/Videos';
import { NAVIGATE_EVENT } from './lib/inertia';

const routes = {
  '/': Home,
  '/about': About,
  '/videos': Videos,
  '/blog': Blog,
  '/travel-guides': TravelGuides,
  '/merch': Merch,
  '/collaborate': Collaborate,
  '/contact': Contact,
};

function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => {
      setPathname(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleNavigation);
    window.addEventListener(NAVIGATE_EVENT, handleNavigation);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener(NAVIGATE_EVENT, handleNavigation);
    };
  }, []);

  const Page = routes[pathname] ?? Home;
  return <Page />;
}

createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

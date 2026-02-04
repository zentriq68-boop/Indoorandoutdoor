import React from 'react';
import { HashRouter, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Catalogue from './pages/Catalogue';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

// Simple ScrollToTop component to reset scroll on route change (alternative to ScrollRestoration which might behave differently in HashRouter)
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import MenuIndex from './pages/MenuIndex';
import CategoryPage from './pages/menu/CategoryPage';
import ReservationsPage from './pages/ReservationsPage';
import Eventos from './pages/Eventos';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();
  const isStandalone = location.pathname.startsWith('/reservations');

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      {!isStandalone && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuIndex />} />
          <Route path="/menu/:slug" element={<CategoryPage />} />
          {/* Ruta única de reservas — operada por Diezton SRL. */}
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/reservaciones" element={<ReservationsPage />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isStandalone && <Footer />}
      {!isStandalone && <WhatsAppFab />}
    </>
  );
}

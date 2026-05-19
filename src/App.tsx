import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import MenuIndex from './pages/MenuIndex';
import CategoryPage from './pages/menu/CategoryPage';
import Reservaciones from './pages/Reservaciones';
import Eventos from './pages/Eventos';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuIndex />} />
          <Route path="/menu/:slug" element={<CategoryPage />} />
          <Route path="/reservaciones" element={<Reservaciones />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

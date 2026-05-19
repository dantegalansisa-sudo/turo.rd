import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';
import { SITE } from '../data/menu';

const LINKS = [
  { to: '/menu', label: 'Menú' },
  { to: '/eventos', label: 'Experiencias' },
  { to: '/reservaciones', label: 'Reservar' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand brand-mark" aria-label="Inicio Turo Steakhouse">
          <span className="brand-mark__icon" aria-hidden="true">
            <img src="/assets/img/logo.png" alt="" />
          </span>
          <span className="brand-mark__word">TURO</span>
        </Link>

        <nav className="navbar__links">
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__cta">
          <MagneticButton href={SITE.whatsappLink} target="_blank" rel="noopener" className="btn btn--ghost btn--sm">
            Reservar
          </MagneticButton>
        </div>

        <button className="navbar__burger" aria-label="Abrir menú" onClick={() => setOpen(true)}>
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <button className="mobile-menu__close" onClick={() => setOpen(false)} aria-label="Cerrar">✕</button>
            <div className="mobile-menu__links">
              <NavLink to="/">Inicio</NavLink>
              {LINKS.map(l => <NavLink key={l.to} to={l.to}>{l.label}</NavLink>)}
            </div>
            <a href={SITE.whatsappLink} target="_blank" rel="noopener" className="btn btn--primary btn--block">
              Reservar por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import { Link } from 'react-router-dom';
import { SITE, MENU } from '../data/menu';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="brand-mark brand-mark--footer">
            <span className="brand-mark__icon" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M16 4c2 4 6 6 6 11 0 4-3 7-6 7s-6-3-6-7c0-5 4-7 6-11z" fill="currentColor"/>
                <path d="M16 11c1 2 3 3 3 6 0 2-1.5 3.5-3 3.5S13 19 13 17c0-3 2-4 3-6z" fill="#1a1612" opacity="0.5"/>
              </svg>
            </span>
            <span className="brand-mark__word">TURO</span>
          </div>
          <p className="footer__tagline">Steakhouse premium. Cortes USDA Prime, brasa de Josper, mesa que celebra.</p>
        </div>

        <div>
          <h4>Visítanos</h4>
          <p>{SITE.address}</p>
          {SITE.hours.map(h => (
            <p key={h.days}><span>{h.days}</span><br />{h.time}</p>
          ))}
        </div>

        <div>
          <h4>Menú</h4>
          <ul>
            {MENU.map(c => (
              <li key={c.slug}><Link to={`/menu/${c.slug}`}>{c.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contacto</h4>
          <p><a href={SITE.whatsappLink} target="_blank" rel="noopener">WhatsApp · {SITE.phone}</a></p>
          <p><a href={SITE.instagram} target="_blank" rel="noopener">Instagram · {SITE.handle}</a></p>
          <p><Link to="/reservaciones">Reservar mesa</Link></p>
          <p><Link to="/eventos">Experiencias & cenas privadas</Link></p>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Turo · Steakhouse Premium · Santo Domingo</span>
        <span className="footer__credit">Diseño NEXIX Tech Studio</span>
      </div>
    </footer>
  );
}

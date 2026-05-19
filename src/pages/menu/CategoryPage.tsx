import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from '../../components/RevealText';
import MagneticButton from '../../components/MagneticButton';
import { MENU, type Dish, SITE } from '../../data/menu';
import { containerVariants, cardVariants } from '../../utils/motionVariants';
import { EASINGS } from '../../utils/easings';

function DishCard({ dish }: { dish: Dish }) {
  return (
    <motion.article className="dish card" variants={cardVariants} whileHover={{ y: -2 }}>
      <div className="dish__media dish__media--logo">
        <img src="/assets/img/logo.png" alt="" loading="lazy" />
        <span className="dish__media-soon">Foto próximamente</span>
        {dish.tag === 'signature' && <span className="dish__tag">Signature</span>}
        {dish.tag === 'new' && <span className="dish__tag dish__tag--new">Nuevo</span>}
        {dish.tag === 'spicy' && <span className="dish__tag dish__tag--spicy">Picante</span>}
      </div>
      <div className="dish__body">
        <h3 className="dish__name">{dish.name}</h3>
        {dish.description && <p className="dish__desc">{dish.description}</p>}
        {dish.price && <span className="dish__price">{dish.price}</span>}
      </div>
    </motion.article>
  );
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const cat = MENU.find(c => c.slug === slug);
  if (!cat) return <Navigate to="/menu" replace />;

  const { scrollYProgress } = useScroll();
  const videoScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, 80]);

  const currentIndex = MENU.findIndex(c => c.slug === slug);
  const next = MENU[(currentIndex + 1) % MENU.length];
  const prev = MENU[(currentIndex - 1 + MENU.length) % MENU.length];

  return (
    <article className="category">
      {/* Portada con imagen + brasa animada */}
      <section className="category__cover">
        <motion.div className="category__video-wrap" style={{ scale: videoScale }}>
          <img
            className="category__video"
            src={cat.poster ?? '/assets/img/heros.jpg'}
            alt=""
          />
          <div className="category__video-overlay" />
          <div className="category__cover-grain" aria-hidden="true" />
        </motion.div>

        <motion.div className="category__cover-content" style={{ y: titleY }}>
          <motion.span
            className="category__breadcrumb"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASINGS.premium }}
          >
            <Link to="/menu">Menú</Link> · {cat.title}
          </motion.span>
          <RevealText tag="h1" className="category__title">{cat.title}</RevealText>
          <motion.p
            className="category__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASINGS.premium }}
          >
            {cat.tagline}
          </motion.p>
        </motion.div>

        <div className="category__scroll-hint" aria-hidden="true">
          <span>Carta abajo</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* Secciones del menú */}
      <div className="category__sections">
        {cat.sections.map((section) => (
          <section key={section.id} className="menu-section" id={section.id}>
            <header className="menu-section__head">
              <RevealText tag="h2" className="menu-section__title">{section.title}</RevealText>
              {section.subtitle && <p className="menu-section__subtitle">{section.subtitle}</p>}
            </header>

            <motion.div
              className="menu-section__grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {section.dishes.map((dish) => (
                <DishCard key={dish.name} dish={dish} />
              ))}
            </motion.div>
          </section>
        ))}
      </div>

      {/* CTA final */}
      <section className="category__cta">
        <RevealText tag="h2" className="section__title section__title--center">
          ¿Listos para vivirlo en mesa?
        </RevealText>
        <div className="category__cta-buttons">
          <MagneticButton href="/reservaciones" className="btn btn--primary">Reservar mesa</MagneticButton>
          <MagneticButton href={SITE.whatsappLink} target="_blank" rel="noopener" className="btn btn--ghost">
            WhatsApp directo
          </MagneticButton>
        </div>
      </section>

      {/* Navegación entre categorías */}
      <nav className="category__nav">
        <Link to={`/menu/${prev.slug}`} className="category__nav-link">
          <span>← Anterior</span>
          <strong>{prev.title}</strong>
        </Link>
        <Link to={`/menu/${next.slug}`} className="category__nav-link category__nav-link--right">
          <span>Siguiente →</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
    </article>
  );
}

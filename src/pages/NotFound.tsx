import { Link } from 'react-router-dom';
import RevealText from '../components/RevealText';

export default function NotFound() {
  return (
    <article className="page page--404">
      <div className="not-found">
        <span className="section__label">404</span>
        <RevealText tag="h1" className="page__title">Esta mesa</RevealText>
        <RevealText tag="h1" className="page__title page__title--italic" delay={0.15}>no existe.</RevealText>
        <p className="page__lead">Pero el menú entero te espera.</p>
        <Link to="/" className="btn btn--primary">Volver al inicio</Link>
      </div>
    </article>
  );
}

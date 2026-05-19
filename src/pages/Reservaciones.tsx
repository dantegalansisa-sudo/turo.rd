import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { SITE } from '../data/menu';

export default function Reservaciones() {
  const [form, setForm] = useState({
    nombre: '',
    personas: '2',
    fecha: '',
    hora: '19:00',
    ocasion: '',
    notas: '',
  });

  const buildMessage = () => {
    const lines = [
      `Hola Turo 👋, quisiera reservar una mesa:`,
      ``,
      `• Nombre: ${form.nombre || '—'}`,
      `• Personas: ${form.personas}`,
      `• Fecha: ${form.fecha || '—'}`,
      `• Hora: ${form.hora}`,
    ];
    if (form.ocasion) lines.push(`• Ocasión: ${form.ocasion}`);
    if (form.notas) lines.push(`• Notas: ${form.notas}`);
    lines.push('', '¡Gracias!');
    return lines.join('\n');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, '_blank', 'noopener');
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <article className="page page--reserva">
      <div className="reserva__grid">
        <aside className="reserva__aside">
          <span className="section__label">Reservaciones</span>
          <RevealText tag="h1" className="page__title">Asegurá</RevealText>
          <RevealText tag="h1" className="page__title page__title--italic" delay={0.15}>tu mesa.</RevealText>
          <p className="page__lead">
            Completá el formulario y te abrimos un chat de WhatsApp con todos los datos.
            Confirmamos en minutos.
          </p>

          <ul className="reserva__info">
            <li><span>Horario</span>{SITE.hours.map(h => <p key={h.days}>{h.days} · {h.time}</p>)}</li>
            <li><span>Dirección</span><p>{SITE.address}</p></li>
            <li><span>WhatsApp directo</span><a href={SITE.whatsappLink} target="_blank" rel="noopener">{SITE.phone}</a></li>
          </ul>
        </aside>

        <motion.form
          className="reserva__form card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <label className="field">
            <span>Tu nombre</span>
            <input required type="text" value={form.nombre} onChange={update('nombre')} placeholder="Ej. María González" />
          </label>

          <div className="field-row">
            <label className="field">
              <span>Personas</span>
              <select value={form.personas} onChange={update('personas')}>
                {[1,2,3,4,5,6,7,8,'+8'].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </label>

            <label className="field">
              <span>Fecha</span>
              <input required type="date" value={form.fecha} onChange={update('fecha')} min={new Date().toISOString().split('T')[0]} />
            </label>

            <label className="field">
              <span>Hora</span>
              <select value={form.hora} onChange={update('hora')}>
                {['17:00','18:00','19:00','20:00','21:00','22:00','23:00'].map(h => <option key={h} value={h}>{h}</option>)}
              </select>
            </label>
          </div>

          <label className="field">
            <span>Ocasión <em>(opcional)</em></span>
            <input type="text" value={form.ocasion} onChange={update('ocasion')} placeholder="Cumpleaños, aniversario, cena de negocios…" />
          </label>

          <label className="field">
            <span>Notas <em>(opcional)</em></span>
            <textarea rows={3} value={form.notas} onChange={update('notas')} placeholder="Preferencias, alergias, mesa específica…" />
          </label>

          <MagneticButton type="submit" className="btn btn--primary btn--block">
            Enviar por WhatsApp
          </MagneticButton>

          <p className="reserva__fineprint">
            Al enviar se abre WhatsApp con tu mensaje pre-llenado.
            Si preferís llamar: <a href={`tel:${SITE.phone}`}>{SITE.phone}</a>
          </p>
        </motion.form>
      </div>
    </article>
  );
}

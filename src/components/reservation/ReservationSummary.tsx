import type { Zone } from './StepZones';

interface Props {
  zone: Zone | null;
  date: Date | null;
  time: string | null;
  guests?: string;
  name?: string;
}

const formatDate = (d: Date) => d.toLocaleDateString('es-DO', {
  weekday: 'long', day: 'numeric', month: 'long',
});

export default function ReservationSummary({ zone, date, time, guests, name }: Props) {
  const items: { label: string; value: string }[] = [];
  if (zone) items.push({ label: 'Zona', value: zone });
  if (date) items.push({ label: 'Fecha', value: formatDate(date) });
  if (time) items.push({ label: 'Hora', value: time });
  if (guests) items.push({ label: 'Personas', value: guests });
  if (name) items.push({ label: 'A nombre de', value: name });

  if (items.length === 0) return null;

  return (
    <aside className="rsv-summary" aria-label="Resumen de la reserva">
      <span className="rsv-summary__title">Tu reserva</span>
      <ul className="rsv-summary__list">
        {items.map((it) => (
          <li key={it.label}>
            <span>{it.label}</span>
            <strong>{it.value}</strong>
          </li>
        ))}
      </ul>
    </aside>
  );
}

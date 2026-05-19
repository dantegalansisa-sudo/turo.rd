// TURO — Experiencias & Eventos privados.
// Editar este archivo para actualizar la experiencia destacada del momento.

export interface Event {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  dateLabel: string;
  time?: string;
  artist?: string;
  artistRole?: string;
  flyer: string;
  status: 'upcoming' | 'tonight' | 'past';
  sponsor?: string;
}

/**
 * Experiencia destacada de la temporada.
 * Aparece en el home y arriba de la página /eventos.
 */
export const CURRENT_EVENT: Event = {
  id: 'cena-maridaje-malbec-2026-05-22',
  title: 'Cena Maridaje',
  subtitle: 'Malbec & Brasa',
  date: '2026-05-22',
  dateLabel: 'Viernes 22 de Mayo',
  time: '8:00 PM',
  artist: 'Bodega Catena Zapata',
  artistRole: 'Cinco tiempos · cinco copas',
  flyer: '/assets/img/logo.png',
  status: 'tonight',
  sponsor: 'Catena Zapata',
};

/**
 * Próximas experiencias / agenda de la temporada.
 */
export const UPCOMING_EVENTS: Event[] = [
  {
    id: 'dry-aged-night',
    title: 'Dry Aged Night',
    date: '2026-05-29',
    dateLabel: 'Viernes 29 de Mayo',
    time: '8:00 PM',
    artistRole: 'Cortes madurados 30 / 45 / 60 días',
    flyer: '/assets/img/logo.png',
    status: 'upcoming',
  },
  {
    id: 'turo-brunch-edition',
    title: 'Turo Brunch Edition',
    date: '2026-06-01',
    dateLabel: 'Cada sábado & domingo',
    time: '10:00 AM – 1:00 PM',
    artistRole: 'Mimosas, Steak & Eggs, Raw Bar',
    flyer: '/assets/img/logo.png',
    status: 'upcoming',
  },
];

import type { ChangeEvent } from 'react';

export interface DetailsState {
  name: string;
  phone: string;
  guests: string;
  notes: string;
}

interface Props {
  details: DetailsState;
  onChange: (d: DetailsState) => void;
  onBack: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
}

export default function StepDetails({ details, onChange, onBack, onSubmit, canSubmit }: Props) {
  const set = (k: keyof DetailsState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    onChange({ ...details, [k]: e.target.value });

  return (
    <div className="rsv-step">
      <header className="rsv-step__head">
        <span className="rsv-step__eyebrow">Paso 03</span>
        <h2 className="rsv-step__title">
          Tus <em>datos</em>.
        </h2>
        <p className="rsv-step__lead">
          Confirmamos por WhatsApp en minutos. Sin spam, sin formularios eternos.
        </p>
      </header>

      <form className="rsv-form" onSubmit={(e) => { e.preventDefault(); if (canSubmit) onSubmit(); }}>
        <label className="rsv-field">
          <span className="rsv-field__label">Nombre completo</span>
          <input
            type="text"
            value={details.name}
            onChange={set('name')}
            placeholder="Ej. María Fernández"
            required
            autoComplete="name"
          />
        </label>

        <div className="rsv-field-row">
          <label className="rsv-field">
            <span className="rsv-field__label">Teléfono / WhatsApp</span>
            <input
              type="tel"
              value={details.phone}
              onChange={set('phone')}
              placeholder="+1 809 555 5555"
              required
              autoComplete="tel"
              inputMode="tel"
            />
          </label>

          <label className="rsv-field">
            <span className="rsv-field__label">Cantidad de personas</span>
            <select value={details.guests} onChange={set('guests')} required>
              {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
              ))}
              <option value="13+">13 o más (grupos)</option>
            </select>
          </label>
        </div>

        <label className="rsv-field">
          <span className="rsv-field__label">
            Solicitudes especiales <em>(opcional)</em>
          </span>
          <textarea
            value={details.notes}
            onChange={set('notes')}
            rows={3}
            placeholder="Alergias, cumpleaños, mesa específica, vino preferido…"
          />
        </label>

        <div className="rsv-step__actions">
          <button type="button" className="rsv-btn rsv-btn--ghost" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M11 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Atrás
          </button>
          <button type="submit" className="rsv-btn rsv-btn--primary" disabled={!canSubmit}>
            Confirmar reserva
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 21.8c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 012.2 12C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 7 2.9a9.8 9.8 0 010 13.8c-1.9 1.9-4.4 2.9-7 2.9zm5.4-7.4c-.3-.1-1.7-.8-2-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.7 1.1 2.9.1.2 2 3.1 4.9 4.4 1.8.7 2.5.8 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.2-.2-.4-.3z"/>
            </svg>
          </button>
        </div>

        <p className="rsv-form__fineprint">
          Al confirmar abrimos WhatsApp con tu reserva pre-llenada para
          <strong> Diezton SRL.</strong> — confirmación humana en pocos minutos.
        </p>
      </form>
    </div>
  );
}

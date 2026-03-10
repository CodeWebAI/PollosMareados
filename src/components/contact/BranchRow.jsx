export default function BranchRow({ branch, index, visible, reversed }) {
  const colors = {
    fire: {
      badge: 'bg-fire text-white',
      accent: 'text-fire',
      border: 'border-fire/15',
      dot: 'bg-fire',
      pill: 'bg-fire/8 text-fire border border-fire/20',
      mapLink: 'text-fire',
      divider: 'bg-fire/20',
    },
    gold: {
      badge: 'bg-gold text-smoke',
      accent: 'text-gold-dark',
      border: 'border-gold/20',
      dot: 'bg-gold',
      pill: 'bg-gold/10 text-gold-dark border border-gold/25',
      mapLink: 'text-gold-dark',
      divider: 'bg-gold/20',
    },
  }[branch.color];

  const InfoPanel = (
    <div
      className={`flex-1 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 ${colors.badge}`}>
        {branch.badge}
      </span>

      <h3 className="font-display text-4xl md:text-5xl font-bold text-smoke mb-6 leading-tight">
        Sucursal <span className="italic">{branch.name}</span>
      </h3>

      <div className="flex items-start gap-3 mb-8">
        <div className={`mt-1 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${colors.pill}`}>
          <LocationIcon />
        </div>
        <div>
          <p className="font-semibold text-smoke text-base leading-snug">{branch.address}</p>
          <p className="text-stone text-sm mt-0.5">{branch.neighborhood}</p>
          <p className="text-stone text-sm">{branch.city}</p>
        </div>
      </div>

      <a
        href={branch.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver ${branch.name} en Google Maps`}
        className={`inline-flex items-center gap-2 text-sm font-semibold group
          hover:gap-3 transition-all duration-300 ${colors.mapLink}`}
      >
        <span>Ver en Google Maps</span>
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );

  const DetailPanel = (
    <div
      className={`flex-1 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80 + 120}ms` }}
    >
      <div className={`rounded-2xl border ${colors.border} bg-white p-8 space-y-6 shadow-sm`}>

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-stone mb-3">
            Horario de Atención
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`} />
              <span className="text-smoke font-medium text-sm">Lunes a Domingo</span>
            </div>
            <span className={`font-display font-bold text-lg tabular-nums ${colors.accent}`}>
              {branch.schedule}
            </span>
          </div>
        </div>

        <div className={`h-px w-full ${colors.divider}`} />

        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-stone mb-3">
            {branch.whatsapp ? 'WhatsApp' : branch.phones ? 'Líneas Telefónicas' : branch.phone ? 'Llamada' : 'Contacto'}
          </p>
          {branch.whatsapp ? (
            <a
              href={`https://wa.me/${branch.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 font-display font-bold text-lg group
                hover:underline underline-offset-2 transition-all ${colors.accent}`}
            >
              <WhatsAppIcon />
              <span>{String(branch.whatsapp).replace(/\D/g, '').slice(-10).replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}</span>
            </a>
          ) : branch.phones ? (
            <div className="flex flex-col gap-3">
              {branch.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:+${String(phone).replace(/\D/g, '')}`}
                  className={`flex items-center gap-2 font-display font-bold text-lg group
                    hover:underline underline-offset-2 transition-all ${colors.accent}`}
                >
                  <PhoneIcon />
                  <span>{String(phone).replace(/\D/g, '').slice(-10).replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}</span>
                </a>
              ))}
            </div>
          ) : branch.phone ? (
            <a
              href={`tel:+${String(branch.phone).replace(/\D/g, '')}`}
              className={`flex items-center gap-2 font-display font-bold text-lg group
                hover:underline underline-offset-2 transition-all ${colors.accent}`}
            >
              <PhoneIcon />
              <span>{String(branch.phone).replace(/\D/g, '').slice(-10).replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}</span>
            </a>
          ) : (
            <div className="flex items-center gap-2">
              <WhatsAppIcon className={`w-5 h-5 ${colors.accent} opacity-50`} />
              <span className={`font-display font-bold text-lg ${colors.accent} opacity-60`}>
                Próximamente
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center py-14 border-b border-sand last:border-b-0 ${reversed ? 'md:flex-row-reverse' : ''}`}>
      {InfoPanel}
      {DetailPanel}
    </div>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────────
function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className ?? 'w-5 h-5'} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className ?? 'w-5 h-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

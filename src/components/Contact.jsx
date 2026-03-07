import { useScrollReveal } from '../hooks/useScrollReveal';

// ── Data ─────────────────────────────────────────────────────────────────────
const branches = [
  {
    id: 'san-lorenzo',
    badge: 'Sucursal 1',
    name: 'Matriz San Lorenzo',
    address: 'Federal Pte. 439',
    neighborhood: 'San Lorenzo Teotipilco',
    city: '75855 Tehuacán, Pue.',
    schedule: '10:30 – 19:00',
    whatsapp: 522371002226, // Próximamente
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Federal+Pte.+439+San+Lorenzo+Teotipilco+Tehuacan+Puebla',
    color: 'fire',
  },
  {
    id: 'coapan',
    badge: 'Sucursal 2',
    name: 'Coapan',
    address: 'Huajuapan - Tehuacán 10',
    neighborhood: 'Santa María Coapan',
    city: '75857 Tehuacán, Pue.',
    schedule: '9:30 – 19:30',
    whatsapp: 522381879853, // Próximamente
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Huajuapan+Tehuacan+10+Santa+Maria+Coapan+Tehuacan+Puebla',
    color: 'gold',
  },
  {
    id: 'chilac',
    badge: 'Sucursal 3',
    name: 'Sucursal de Chilac',
    address: 'Huajuapan - Tehuacán 10',
    neighborhood: 'Santa María Coapan',
    city: '75857 Tehuacán, Pue.',
    schedule: '9:30 – 19:30',
    whatsapp: 522381879853, // Próximamente
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Huajuapan+Tehuacan+10+Santa+Maria+Coapan+Tehuacan+Puebla',
    color: 'gold',
  }
];

// ── Component ────────────────────────────────────────────────────────────────
function Contact() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [branchesRef, branchesVisible] = useScrollReveal(0.06);

  return (
    <section id="contacto" className="relative py-24 md:py-40 bg-cream overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-16 right-0 w-600px h-600px bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-0 w-600px h-600px bg-fire/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* ── Section Header ── */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-fire" />
            <span className="section-label">Contáctanos</span>
            <div className="h-px w-16 bg-fire" />
          </div>
          <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Estamos listos para{' '}
            <span className="gradient-text italic block mt-2">servirte</span>
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Encuéntranos y disfruta del auténtico sabor a leña
          </p>
        </div>

        {/* ── Branches ── */}
        <div
          ref={branchesRef}
          className="space-y-0"
        >
          {/* Divider label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-sand" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <MapPinGroupIcon />
              <span className="section-label tracking-widest">Nuestras Sucursales</span>
            </div>
            <div className="h-px flex-1 bg-sand" />
          </div>

          {branches.map((branch, i) => (
            <BranchRow
              key={branch.id}
              branch={branch}
              index={i}
              visible={branchesVisible}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ── BranchRow ─────────────────────────────────────────────────────────────────
function BranchRow({ branch, index, visible, reversed }) {
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

  // Info panel (name + address + map link)
  const InfoPanel = (
    <div className={`flex-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: `${index * 80}ms` }}>
      {/* Badge */}
      <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 ${colors.badge}`}>
        {branch.badge}
      </span>

      {/* Name */}
      <h3 className="font-display text-4xl md:text-5xl font-bold text-smoke mb-6 leading-tight">
        Sucursal <span className="italic">{branch.name}</span>
      </h3>

      {/* Address */}
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

      {/* Maps link */}
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

  // Detail panel (schedule + whatsapp)
  const DetailPanel = (
    <div className={`flex-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`} style={{ transitionDelay: `${index * 80 + 120}ms` }}>
      <div className={`rounded-2xl border ${colors.border} bg-white p-8 space-y-6 shadow-sm`}>

        {/* Schedule */}
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

        {/* Divider */}
        <div className={`h-px w-full ${colors.divider}`} />

        {/* WhatsApp */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-stone mb-3">
            WhatsApp
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
              <span>{branch.whatsapp}</span>
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

// ── SVG Icons ─────
function LocationIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function MapPinGroupIcon() {
  return (
    <svg className="w-4 h-4 text-fire" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

export default Contact;

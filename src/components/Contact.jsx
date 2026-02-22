import { useScrollReveal } from '../hooks/useScrollReveal';

// ── Data ─────────────────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: 'phone',
    title: 'Teléfono',
    value: 'Próximamente',
    href: null,
    color: 'fire',
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    value: 'Próximamente',
    href: null,
    color: 'gold',
    external: true,
  },
];

const branches = [
  {
    id: 'san-lorenzo',
    badge: 'Sucursal 1',
    name: 'San Lorenzo',
    address: 'Federal Pte. 439',
    neighborhood: 'San Lorenzo Teotipilco',
    city: '75855 Tehuacán, Pue.',
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
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Huajuapan+Tehuacan+10+Santa+Maria+Coapan+Tehuacan+Puebla',
    color: 'gold',
  },
];

// ── Component ────────────────────────────────────────────────────────────────
function Contact() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal(0.08);
  const [branchesRef, branchesVisible] = useScrollReveal(0.08);
  const [scheduleRef, scheduleVisible] = useScrollReveal(0.08);

  return (
    <section id="contacto" className="relative py-24 md:py-40 bg-cream overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-16 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-0 w-[600px] h-[600px] bg-fire/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

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

        {/* ── Contact Chips ── */}
        <div
          ref={cardsRef}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-20"
        >
          {contactInfo.map((info, i) => (
            <ContactChip key={i} info={info} index={i} visible={cardsVisible} />
          ))}
        </div>

        {/* ── Branches Header ── */}
        <div
          ref={branchesRef}
          className={`transition-all duration-1000 ${branchesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-sand" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <MapPinGroupIcon />
              <span className="section-label tracking-widest">Nuestras Sucursales</span>
            </div>
            <div className="h-px flex-1 bg-sand" />
          </div>

          {/* ── Branch Cards ── */}
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {branches.map((branch, i) => (
              <BranchCard key={branch.id} branch={branch} index={i} visible={branchesVisible} />
            ))}
          </div>
        </div>

        {/* ── Schedule Card ── */}
        <div
          ref={scheduleRef}
          className={`max-w-2xl mx-auto transition-all duration-1000 delay-200 ${scheduleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="relative bg-white rounded-3xl p-10 md:p-14 shadow-xl overflow-hidden">
            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-fire/10 to-transparent rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/8 to-transparent rounded-tr-full pointer-events-none" />

            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-fire/5 rounded-2xl mb-6">
                <span className="text-5xl">🕐</span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-bold text-smoke mb-4">
                Horario de Atención
              </h3>
              <p className="text-stone mb-8">Abiertos todos los días para servirte</p>

              <div className="max-w-sm mx-auto space-y-3 mb-10">
                <div className="flex justify-between items-center py-4 border-t-2 border-sand">
                  <span className="text-stone font-medium">Lunes a Domingo</span>
                  <span className="font-display text-xl font-bold text-fire">Próximamente</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-8 border-t border-sand">
                <p className="text-stone mb-6">¿Tienes alguna pregunta o comentario?</p>
                <button
                  type="button"
                  className="bg-fire text-white font-bold px-8 py-4 rounded-full hover:bg-fire-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                >
                  Envíanos un mensaje
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ── ContactChip ───────────────────────────────────────────────────────────────
function ContactChip({ info, index, visible }) {
  const colorMap = {
    fire: {
      icon: 'bg-fire/10 text-fire',
      pill: 'border-fire/20 hover:border-fire hover:shadow-fire/20',
      value: 'text-fire',
    },
    gold: {
      icon: 'bg-gold/10 text-gold',
      pill: 'border-gold/20 hover:border-gold hover:shadow-gold/20',
      value: 'text-gold-dark',
    },
  };

  const Icon = { phone: PhoneIcon, whatsapp: WhatsAppIcon }[info.icon];
  const colors = colorMap[info.color];
  const Wrapper = info.href ? 'a' : 'div';
  const props = info.href
    ? { href: info.href, ...(info.external && { target: '_blank', rel: 'noopener noreferrer' }) }
    : {};

  return (
    <Wrapper
      {...props}
      className={`group flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border-2 shadow-sm
        transition-all duration-500 hover:shadow-lg hover:-translate-y-1
        ${colors.pill}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${info.href ? 'cursor-pointer' : ''}
      `}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${colors.icon}`}>
        <Icon />
      </div>
      <div className="text-left">
        <p className="text-xs font-semibold uppercase tracking-widest text-stone mb-0.5">{info.title}</p>
        <p className={`font-display text-lg font-bold ${colors.value}`}>{info.value}</p>
      </div>
    </Wrapper>
  );
}

// ── BranchCard ────────────────────────────────────────────────────────────────
function BranchCard({ branch, index, visible }) {
  const colorMap = {
    fire: {
      badge: 'bg-fire text-white',
      icon: 'bg-fire/10 text-fire',
      bar: 'bg-fire',
      hover: 'group-hover:text-fire',
      border: 'hover:border-fire/30',
      pin: 'text-fire',
    },
    gold: {
      badge: 'bg-gold text-smoke',
      icon: 'bg-gold/10 text-gold-dark',
      bar: 'bg-gold',
      hover: 'group-hover:text-gold-dark',
      border: 'hover:border-gold/30',
      pin: 'text-gold-dark',
    },
  };

  const colors = colorMap[branch.color];

  return (
    <a
      href={branch.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative bg-white rounded-3xl overflow-hidden border-2 border-transparent
        shadow-md hover:shadow-2xl hover:-translate-y-2
        transition-all duration-500
        ${colors.border}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
      aria-label={`Ver ubicación de Sucursal ${branch.name} en Google Maps`}
    >
      {/* Top color bar */}
      <div className={`h-1.5 w-full ${colors.bar}`} />

      <div className="p-8 md:p-10">
        {/* Badge */}
        <div className="flex items-start justify-between mb-6">
          <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${colors.badge}`}>
            {branch.badge}
          </span>
          {/* Map icon hint */}
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center opacity-40 group-hover:opacity-100 transition-all duration-300 ${colors.icon}`}
          >
            <ExternalLinkIcon />
          </div>
        </div>

        {/* Branch name */}
        <h3 className={`font-display text-3xl md:text-4xl font-bold text-smoke mb-6 transition-colors duration-300 ${colors.hover}`}>
          Sucursal <span className="italic">{branch.name}</span>
        </h3>

        {/* Address block */}
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${colors.icon} mt-0.5`}>
            <LocationIcon />
          </div>
          <div>
            <p className="font-semibold text-smoke text-base leading-snug">{branch.address}</p>
            <p className="text-stone text-sm mt-1">{branch.neighborhood}</p>
            <p className="text-stone text-sm">{branch.city}</p>
          </div>
        </div>

        {/* CTA footer */}
        <div className={`mt-8 pt-6 border-t border-sand flex items-center justify-between`}>
          <span className={`text-sm font-semibold ${colors.pin} flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300`}>
            <span>Ver en Google Maps</span>
          </span>
          <ArrowRightIcon className={`w-5 h-5 ${colors.pin} -translate-x-1 group-hover:translate-x-0 opacity-60 group-hover:opacity-100 transition-all duration-300`} />
        </div>
      </div>
    </a>
  );
}

// ── SVG Icons ─────────────────────────────────────────────────────────────────
function PhoneIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

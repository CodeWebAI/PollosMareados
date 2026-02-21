import { useScrollReveal } from '../hooks/useScrollReveal';

const contactInfo = [
  {
    icon: 'phone',
    title: 'Teléfono',
    value: 'Próximamente',
    href: 'tel:2454522978',
    color: 'fire'
  },
  {
    icon: 'whatsapp',
    title: 'WhatsApp',
    value: 'Próximamente',
    href: 'https://wa.me/522451051911',
    color: 'gold',
    external: true
  },
  {
    icon: 'location',
    title: 'Ubicación',
    value: 'Dirección por confirmar',
    description: 'En el corazón de la ciudad',
    color: 'wood'
  },
];

function Contact() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal(0.1);

  return (
    <section id="contacto" className="relative py-24 md:py-40 bg-cream overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-fire/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-fire"></div>
            <span className="section-label">Contáctanos</span>
            <div className="h-px w-16 bg-fire"></div>
          </div>
          <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Estamos listos para{' '}
            <span className="gradient-text italic block mt-2">servirte</span>
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Encuéntranos y disfruta del auténtico sabor a leña
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div
          ref={contentRef}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {contactInfo.map((info, i) => (
            <ContactCard key={i} info={info} index={i} visible={contentVisible} />
          ))}
        </div>

        {/* Schedule Card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative bg-white rounded-3xl p-10 md:p-16 shadow-xl overflow-hidden">
            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-fire/10 to-transparent rounded-bl-full"></div>
            
            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-fire/5 rounded-2xl mb-6">
                <span className="text-5xl">🕐</span>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl font-bold text-smoke mb-4">
                Horario de Atención
              </h3>
              
              <p className="text-stone mb-8">
                Abiertos para servirte
              </p>

              <div className="max-w-md mx-auto">
                <div className="flex justify-between items-center py-6 border-t-2 border-sand">
                  <span className="text-stone font-medium">Lunes a Domingo</span>
                  <span className="font-display text-xl font-bold text-fire">Próximamente</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-10 pt-8 border-t border-sand">
                <p className="text-stone mb-6">
                  ¿Tienes alguna pregunta o comentario?
                </p>
                <button className="bg-fire text-white font-bold px-8 py-4 rounded-full hover:bg-fire-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
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

function ContactCard({ info, index, visible }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  const Icon = {
    phone: PhoneIcon,
    whatsapp: WhatsAppIcon,
    location: LocationIcon
  }[info.icon];

  const colorClasses = {
    fire: 'bg-fire/10 text-fire group-hover:bg-fire group-hover:text-white',
    gold: 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white',
    wood: 'bg-wood/10 text-wood group-hover:bg-wood group-hover:text-white'
  }[info.color];

  const CardWrapper = info.href ? 'a' : 'div';
  const cardProps = info.href ? {
    href: info.href,
    ...(info.external && { target: '_blank', rel: 'noopener noreferrer' })
  } : {};

  return (
    <CardWrapper
      ref={ref}
      {...cardProps}
      className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${info.href ? 'cursor-pointer' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses} rounded-2xl mb-6 transition-all duration-300`}>
        <Icon />
      </div>

      {/* Content */}
      <h3 className="font-display text-2xl font-bold text-smoke mb-2">
        {info.title}
      </h3>
      
      <p className="text-fire font-semibold mb-2">
        {info.value}
      </p>

      {info.description && (
        <p className="text-stone text-sm">
          {info.description}
        </p>
      )}

      {/* Hover Arrow */}
      {info.href && (
        <div className="absolute bottom-8 right-8 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          <svg className="w-6 h-6 text-fire" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      )}
    </CardWrapper>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export default Contact;

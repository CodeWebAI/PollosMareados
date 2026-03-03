import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─────────────────────────────────────────────
   Datos de la línea del tiempo
───────────────────────────────────────────── */
const timelineEvents = [
  {
    year: '2002',
    title: 'El inicio del sueño',
    paragraphs: [
      'En San Lorenzo Teotipilco comenzaba algo que jamás imaginé que crecería tanto. No empezó como una gran empresa… empezó como un sueño, como la necesidad de salir adelante y darle algo mejor a mi familia.',
      'En aquel entonces nos llamábamos Pollos Alexa. Éramos pequeños, pero trabajábamos con el corazón grande. Con cada pollo que salía del asador llevaba esfuerzo, esperanza y muchas ganas de hacer las cosas bien.',
    ],
    images: ['/history/PM1.png'],
    icon: '🔥',
    color: 'from-amber-500 to-orange-600',
  },
  {
    year: 'El Nombre',
    title: '"Vamos con los pollos mareados"',
    paragraphs: [
      'Un día, la misma gente empezó a decir eso… por la forma tan particular en que asábamos el pollo a la leña.',
      'Y sin darnos cuenta, el nombre nació del cariño de nuestros propios clientes. Desde entonces entendí que este negocio ya no era solo mío… era de todos.',
      'Gracias al buen sabor, al trato directo, al respeto por cada persona que nos visita, fuimos creciendo. Tehuacán nos abrazó, y siempre estaremos agradecidos por ello.',
    ],
    images: ['/history/TM1.png'],
    icon: '🐔',
    color: 'from-orange-500 to-red-600',
  },
  {
    year: '2015',
    title: 'Licor de Maracuyá',
    paragraphs: [
      'Decidimos innovar con algo diferente: el delicioso Licor de Maracuyá. Fue todo un éxito.',
      'Ver cómo lo aceptaban con tanto gusto nos confirmó que cuando haces las cosas con pasión, la gente lo siente.',
    ],
    images: ['/history/TM2.png', '/history/PM3.png'],
    icon: '🍹',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    year: '2020',
    title: 'Sucursal Santa María Coapan',
    paragraphs: [
      'Ampliamos nuestra Matriz San Lorenzo y abrimos nuestra primera sucursal en Santa María Coapan.',
      'Cada sucursal no representa solo crecimiento… representa años de esfuerzo, sacrificios, madrugadas y sueños cumplidos.',
    ],
    images: ['/history/TM3.png'],
    icon: '📍',
    color: 'from-amber-600 to-orange-700',
  },
  {
    year: '2026',
    title: 'Sucursal "Y" de Chilac',
    paragraphs: [
      'Estamos abriendo nuestra nueva sucursal ubicada en la "Y" de Chilac.',
      'Mientras Dios me lo permita, seguiremos creciendo… pero sin perder nunca nuestra esencia.',
    ],
    images: ['/history/PM4.png', '/history/TM4.png'],
    icon: '⭐',
    color: 'from-amber-500 to-orange-600',
  },
];

/* ─────────────────────────────────────────────
   Galería de imágenes por evento
───────────────────────────────────────────── */
function EventImages({ images, title, icon }) {
  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div className="relative overflow-hidden rounded-2xl shadow-xl group">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'sepia(0.35) contrast(1.08) brightness(0.95)' }}
          onError={(e) => {
            e.target.parentElement.innerHTML = `
              <div class="w-full h-64 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white">
                <span class="text-6xl">${icon}</span>
              </div>
            `;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-amber-900/10 pointer-events-none rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="relative overflow-hidden rounded-2xl shadow-xl group">
        <img
          src={images[0]}
          alt={`${title} 1`}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'sepia(0.35) contrast(1.08) brightness(0.95)' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-amber-900/10 pointer-events-none rounded-2xl" />
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-xl group self-end">
        <img
          src={images[1]}
          alt={`${title} 2`}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.92)' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-amber-900/10 pointer-events-none rounded-2xl" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Item individual de la línea del tiempo
───────────────────────────────────────────── */
function TimelineItem({ event, index }) {
  const [ref, isVisible] = useScrollReveal(0.15);
  const isLeft = index % 2 === 0;

  const TextCard = () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-stone-100 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 leading-snug">
        {event.title}
      </h3>
      {event.paragraphs.map((p, i) => (
        <p key={i} className="text-stone-600 leading-relaxed mb-3 last:mb-0 text-sm md:text-base">
          {p}
        </p>
      ))}
    </div>
  );

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >

      {/* ── MOBILE: línea del tiempo izquierda ── */}
      <div className="md:hidden pl-14">
        {/* Punto + año en la izquierda */}
        <div className="absolute left-0 top-0 z-10 flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${event.color} text-white text-base flex items-center justify-center shadow-lg border-2 border-white`}>
            {event.icon}
          </div>
          <span className="mt-1 text-center text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-1.5 font-bold whitespace-nowrap" style={{ fontSize: '9px' }}>
            {event.year}
          </span>
        </div>
        {/* Contenido: texto + imagen apilados */}
        <div className="flex flex-col gap-4">
          <TextCard />
          <EventImages images={event.images} title={event.title} icon={event.icon} />
        </div>
      </div>

      {/* ── DESKTOP: línea del tiempo central alternada ── */}
      <div className="hidden md:block">
        {/* Punto central */}
        <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20 flex flex-col items-center">
          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} text-white text-2xl flex items-center justify-center shadow-2xl border-4 border-white`}>
            {event.icon}
          </div>
          <span className="mt-2 text-xs font-bold tracking-widest uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 whitespace-nowrap">
            {event.year}
          </span>
        </div>
        {/* Grid alternado */}
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className={isLeft ? 'order-1' : 'order-2'}>
            {isLeft ? <TextCard /> : <EventImages images={event.images} title={event.title} icon={event.icon} />}
          </div>
          <div className={isLeft ? 'order-2' : 'order-1'}>
            {isLeft ? <EventImages images={event.images} title={event.title} icon={event.icon} /> : <TextCard />}
          </div>
        </div>
      </div>

    </div>
  );
}

/* ─────────────────────────────────────────────
   Componente principal
───────────────────────────────────────────── */
function About() {
  const [titleRef, titleVisible] = useScrollReveal(0.2);
  const [closingRef, closingVisible] = useScrollReveal(0.2);

  return (
    <section id="nosotros" className="relative py-20 md:py-36 bg-stone-50 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Encabezado ── */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-600">
              Nuestra Historia
            </span>
            <div className="h-px w-12 bg-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
            Desde el corazón de{' '}
            <span className="gradient-text italic pr-2 pb-1 inline-block">quien comenzó este sueño</span>
          </h2>
          <p className="mt-4 text-stone-500 text-base md:text-lg max-w-xl mx-auto">
            Una historia de fuego lento, madera seleccionada y el amor por la tradición
            que nos define.
          </p>
        </div>

        {/* ── Línea del tiempo ── */}
        <div className="relative">
          {/* Hilo vertical izquierda (mobile) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 z-0" />
          {/* Hilo vertical central (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-200 via-amber-400 to-amber-200 z-0" />

          <div className="flex flex-col gap-20 md:gap-28">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        {/* ── Cierre emotivo ── */}
        <div
          ref={closingRef}
          className={`mt-24 transition-all duration-700 ${
            closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center overflow-hidden">
            <div className="absolute -top-8 -right-8 text-8xl opacity-10 select-none pointer-events-none">🐔</div>
            <div className="absolute -bottom-8 -left-8 text-8xl opacity-10 select-none pointer-events-none">🔥</div>
            <p className="text-stone-600 leading-relaxed text-base md:text-lg mb-4">
              Gracias por confiar en nosotros.
              <br />
              Gracias por ser parte de esta historia.
            </p>
            <p className="text-amber-700 font-bold text-lg md:text-xl">
              — Con cariño, La familia de Pollos Mareados 💛🐔🔥
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;

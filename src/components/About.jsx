import { useScrollReveal } from '../hooks/useScrollReveal';
import TimelineItem from './history/TimelineItem';
import { timelineEvents } from '../data/timelineData';

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
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber-200 via-amber-400 to-amber-200 z-0" />
          {/* Hilo vertical central (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber-200 via-amber-400 to-amber-200 z-0" />

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
          <div className="relative bg-linear-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center overflow-hidden">
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

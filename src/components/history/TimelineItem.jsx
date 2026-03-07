import { useScrollReveal } from '../../hooks/useScrollReveal';
import TextCard from './TextCard';
import EventImages from './EventImages';

export default function TimelineItem({ event, index }) {
  const [ref, isVisible] = useScrollReveal(0.15);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative transition-[opacity,transform] duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* ── MOBILE: línea del tiempo izquierda ── */}
      <div className="md:hidden pl-14">
        <div className="absolute left-0 top-0 z-10 flex flex-col items-center">
          <div className={`w-10 h-10 rounded-full bg-linear-to-br ${event.color} text-white text-base flex items-center justify-center shadow-lg border-2 border-white`}>
            {event.icon}
          </div>
          <span className="mt-1 text-center text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-1.5 font-bold whitespace-nowrap" style={{ fontSize: '9px' }}>
            {event.year}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <TextCard event={event} />
          <EventImages images={event.images} gallery={event.gallery} title={event.title} icon={event.icon} />
        </div>
      </div>

      {/* ── DESKTOP: línea del tiempo central alternada ── */}
      <div className="hidden md:block">
        <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20 flex flex-col items-center">
          <div className={`w-16 h-16 rounded-full bg-linear-to-br ${event.color} text-white text-2xl flex items-center justify-center shadow-2xl border-4 border-white`}>
            {event.icon}
          </div>
          <span className="mt-2 text-xs font-bold tracking-widest uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 whitespace-nowrap">
            {event.year}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className={isLeft ? 'order-1' : 'order-2'}>
            {isLeft ? <TextCard event={event} /> : <EventImages images={event.images} gallery={event.gallery} title={event.title} icon={event.icon} />}
          </div>
          <div className={isLeft ? 'order-2' : 'order-1'}>
            {isLeft ? <EventImages images={event.images} gallery={event.gallery} title={event.title} icon={event.icon} /> : <TextCard event={event} />}
          </div>
        </div>
      </div>
    </div>
  );
}

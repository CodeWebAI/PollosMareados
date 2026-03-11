import { useState, useEffect } from 'react';

/**
 * Muestra las imágenes de un evento de la línea del tiempo.
 * - Si `gallery` tiene imágenes: mini carrusel automático con flechas y dots.
 * - Si `images` tiene 2 fotos: grid de dos columnas.
 * - Si `images` tiene 1 foto: imagen simple.
 */
export default function EventImages({ images, gallery, title, icon }) {
  const slides = gallery && gallery.length > 0 ? gallery : images;
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  // Auto-avance cada 4 s solo cuando hay galería
  useEffect(() => {
    if (!gallery || gallery.length === 0) return;
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % slides.length);
        setFading(false);
      }, 700);
    }, 4000);
    return () => clearInterval(timer);
  }, [gallery, slides.length]);

  if (!slides || slides.length === 0) return null;

  /* ── Carrusel ── */
  if (gallery && gallery.length > 0) {
    const goTo = (i) => {
      setFading(true);
      setTimeout(() => { setCurrent(i); setFading(false); }, 700);
    };
    const prev = () => goTo((current - 1 + slides.length) % slides.length);
    const next = () => goTo((current + 1) % slides.length);

    return (
      <div className="relative overflow-hidden rounded-2xl shadow-xl group">
        {/* Imagen activa — altura fija igual para todas */}
        <div className="relative overflow-hidden rounded-2xl" style={{ height: '320px' }}>
          <img
            src={slides[current]}
            alt={`${title} ${current + 1}`}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            style={{
              filter: 'sepia(0.35) contrast(1.08) brightness(0.95)',
              opacity: fading ? 0 : 1,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
        </div>

        {/* Flechas */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Foto ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  /* ── Una sola imagen ── */
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
              <div class="w-full h-64 rounded-2xl bg-linear-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white">
                <span class="text-6xl">${icon}</span>
              </div>
            `;
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-amber-900/10 pointer-events-none rounded-2xl" />
      </div>
    );
  }

  /* ── Dos imágenes en grid ── */
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
        <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-amber-900/10 pointer-events-none rounded-2xl" />
      </div>
      <div className="relative overflow-hidden rounded-2xl shadow-xl group self-end">
        <img
          src={images[1]}
          alt={`${title} 2`}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'sepia(0.4) contrast(1.1) brightness(0.92)' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-amber-900/10 pointer-events-none rounded-2xl" />
      </div>
    </div>
  );
}

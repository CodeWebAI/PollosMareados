import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  { 
    icon: '🔥', 
    title: 'Fuego Auténtico',
    description: 'Leña natural de alta calidad'
  },
  { 
    icon: '⏱️', 
    title: 'Cocción Perfecta',
    description: 'Horas de dedicación y paciencia'
  },
  { 
    icon: '✨', 
    title: 'Sabor Único',
    description: 'Receta familiar guardada por generaciones'
  },
];

function Experience() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="relative py-24 md:py-40 bg-smoke overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute top-1/4 -left-64 w-150 h-150 bg-fire/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-64 w-150 h-150 bg-gold/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Wood Grain Texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v1H0zM0 20h100v1H0zM0 40h100v1H0zM0 60h100v1H0zM0 80h100v1H0z' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main CTA Card */}
        <div
          ref={ref}
          className={`relative bg-linear-to-br from-fire via-fire-dark to-wood/90 rounded-4xl lg:rounded-5xl overflow-hidden shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative px-8 md:px-16 lg:px-24 py-16 md:py-24 lg:py-32">
            {/* Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`text-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="text-6xl mb-4 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                    {item.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Main CTA Content */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-semibold tracking-wide uppercase">
                  Una tradición que perdura
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Vive la experiencia del{' '}
                <span className="italic block text-gold mt-2">
                  auténtico sabor
                </span>
              </h2>

              <p className="text-white/90 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                Más de 15 años perfeccionando nuestro arte. 
                Cada pollo es una obra maestra cocinada con pasión y dedicación.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <a
                  href="#contacto"
                  className="group relative bg-white text-smoke font-bold text-base md:text-lg px-10 py-4 rounded-full hover:bg-sand transition-all duration-300 min-w-50 text-center shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Visítanos hoy
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                
                <a
                  href="tel:+520000000000"
                  className="group text-white font-semibold text-base md:text-lg px-10 py-4 border-2 border-white/40 backdrop-blur-sm rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 min-w-50 text-center flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Llama ahora
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Fire Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-gold to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

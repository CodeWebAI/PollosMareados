import { useEffect, useState } from 'react';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hero-background.jpg" 
          alt="Pollos Mareados" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 50%, #2C2C2C 100%)';
          }}
        />
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-linear-to-br from-smoke/90 via-smoke/70 to-smoke/90"></div>
        <div className="absolute inset-0 bg-linear-to-t from-smoke via-transparent to-transparent"></div>
      </div>

      {/* Animated Fire Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-fire rounded-full opacity-40 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 bg-gold-light rounded-full opacity-50 animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Subtitle */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-gold"></div>
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Los Auténticos
              </span>
              <div className="h-px w-12 bg-linear-to-l from-transparent to-gold"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-[0.95] transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Pollos{' '}
            <span className="gradient-text block sm:inline">Mareados</span>
          </h1>

          {/* Flame Divider */}
          <div
            className={`flame-divider mb-8 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          ></div>

          {/* Description */}
          <p
            className={`text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            El arte del fuego y la madera, transformado en{' '}
            <span className="text-gold font-medium">sabor auténtico</span>.
            Donde cada pollo cuenta una historia de tradición y pasión.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-1000 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="#menu"
              className="group relative px-10 py-4 bg-fire text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-fire/30 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Descubrir Menú
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-fire-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
            
            <a
              href="#contacto"
              className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-full border border-white/20 hover:bg-white hover:text-smoke transition-all duration-300 hover:-translate-y-1"
            >
              Dónde Estamos
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-1100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-gold mb-2">15+</div>
              <div className="text-sm text-white/60 tracking-wider uppercase">Años</div>
            </div>
            <div className="text-center border-l border-r border-white/10">
              <div className="text-4xl font-display font-bold text-gold mb-2">100%</div>
              <div className="text-sm text-white/60 tracking-wider uppercase">Natural</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-gold mb-2">24/7</div>
              <div className="text-sm text-white/60 tracking-wider uppercase">Pasión</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-3 animate-float">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-white/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

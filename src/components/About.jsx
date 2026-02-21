import { useScrollReveal } from '../hooks/useScrollReveal';

function About() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal(0.1);
  const [imageRef, imageVisible] = useScrollReveal(0.2);

  return (
    <section id="nosotros" className="relative py-24 md:py-40 bg-sand overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-fire/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-fire"></div>
            <span className="section-label">Nuestra Historia</span>
          </div>
          <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl max-w-3xl">
            El sabor que nos{' '}
            <span className="gradient-text italic">hace volar</span>
          </h2>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Text Content - Larger Column */}
          <div
            ref={contentRef}
            className={`lg:col-span-7 space-y-8 transition-all duration-1000 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Main Story */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-smoke/80 leading-relaxed font-light">
                En <span className="font-display font-semibold text-smoke">Pollos Mareados</span>,
                cada pollo cuenta una historia. Una historia de fuego lento, madera seleccionada
                y el amor por la tradición que nos define.
              </p>
              
              <p className="text-lg text-stone leading-relaxed">
                Desde hace más de una década, hemos perfeccionado el arte de cocinar a la leña,
                creando una experiencia única que deleita los sentidos y conquista paladares.
                No es solo un pollo, es el resultado de horas de dedicación y pasión por lo auténtico.
              </p>

              <p className="text-lg text-stone leading-relaxed">
                Cada pieza se marina con nuestra receta secreta, se cocina lentamente sobre brasas
                de leña natural y se sirve con el orgullo de quien sabe que está ofreciendo lo mejor.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-fire/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-fire group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">🔥</span>
                </div>
                <h3 className="font-display text-xl font-bold text-smoke mb-2">Fuego Real</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Cocinado 100% sobre brasas de leña natural, sin atajos ni artificios.
                </p>
              </div>

              <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-wood/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-wood group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">🌲</span>
                </div>
                <h3 className="font-display text-xl font-bold text-smoke mb-2">Leña Selecta</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Utilizamos solo las mejores maderas para un sabor ahumado inigualable.
                </p>
              </div>

              <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">⏱️</span>
                </div>
                <h3 className="font-display text-xl font-bold text-smoke mb-2">Cocción Lenta</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Paciencia y dedicación en cada pieza para la textura perfecta.
                </p>
              </div>

              <div className="group bg-white/60 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-fire/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-fire group-hover:scale-110 transition-all duration-300">
                  <span className="text-3xl">❤️</span>
                </div>
                <h3 className="font-display text-xl font-bold text-smoke mb-2">Con Amor</h3>
                <p className="text-stone text-sm leading-relaxed">
                  Cada detalle cuidado con la pasión que nos caracteriza.
                </p>
              </div>
            </div>
          </div>

          {/* Image Column - Smaller, Offset */}
          <div
            ref={imageRef}
            className={`lg:col-span-5 transition-all duration-1000 delay-400 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="sticky top-32">
              <div className="relative">
                {/* Main Image */}
                <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/about-image.jpg" 
                    alt="Pollos Mareados - Tradición" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.parentElement.innerHTML = `
                        <div class="absolute inset-0 bg-linear-to-br from-fire via-wood to-fire-dark flex items-center justify-center">
                          <div class="text-center p-8">
                            <div class="text-7xl mb-6">🔥</div>
                            <p class="font-display text-3xl font-bold text-white mb-2">Tradición</p>
                            <p class="text-white/60 text-sm">El arte del fuego</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-linear-to-t from-smoke/40 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-50">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">⭐</span>
                    </div>
                    <div>
                      <div className="font-display text-3xl font-bold text-smoke">15+</div>
                      <div className="text-xs text-stone tracking-wider uppercase">Años</div>
                    </div>
                  </div>
                  <p className="text-sm text-stone/70 leading-snug">
                    De tradición y excelencia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

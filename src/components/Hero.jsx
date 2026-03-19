import { useEffect, useState } from 'react';
import imgFondo1 from '../img/ImagenesdFondo/PM.jpg';
//import imgFondo2 from '../img/ImagenesdFondo/PolloMFebrero.jpeg';
//import imgFondo3 from '../img/ImagenesdFondo/PolloMMarzo.jpeg';
import imgFondo4 from '../img/ImagenesdFondo/portada-web-p-m.jpg.jpeg';
import Background from '../img/ImagenesdFondo/background.jpeg';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    imgFondo1,
    //imgFondo2,
    //imgFondo3,
    imgFondo4,
    Background
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Hero Background Image Carousel — ocupa toda la pantalla */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentImage === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Pollos Mareados ${index + 1}`}
              className="w-full h-full object-cover object-center"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Degradado solo en la parte inferior para los botones */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/70 to-transparent" />
          </div>
        ))}
      </div>

      {/* Spacer para empujar los botones hacia abajo */}
      <div className="flex-1" />

      {/* Botones y dots — fijados en la parte inferior */}
      <div className="relative z-10 pb-10 flex flex-col items-center gap-5">
        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 px-6 w-full max-w-md sm:max-w-none transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#menu"
            className="group relative w-full sm:w-auto px-10 py-4 bg-fire text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-fire/30 hover:-translate-y-1 text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Descubrir Menú
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-fire-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>

          <a
            href="#contacto"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-full border border-white/20 hover:bg-white hover:text-smoke transition-all duration-300 hover:-translate-y-1 text-center"
          >
            Dónde Estamos
          </a>
        </div>

        {/* Carousel Dots */}
        <div
          className={`flex gap-2 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              aria-label={`Imagen ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImage === index ? 'w-8 bg-fire' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

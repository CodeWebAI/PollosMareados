import { useState, useEffect } from 'react';


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detectar sección activa
      const sections = ['inicio', 'nosotros', 'menu', 'contacto'];
      let currentSection = 'inicio';

      for (let sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Historia', href: '#nosotros' },
    { label: 'Menú', href: '#menu' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-lg py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            className="relative z-50 flex items-center"
            onClick={handleNavClick}
            aria-label="Pollos Mareados - Inicio"
          >
            <img
              src="/PollosLogoPNG.png"
              alt="Pollos Mareados"
              className={`h-16 lg:h-20 w-auto object-contain transition-all duration-500 drop-shadow-lg ${isScrolled ? 'brightness-100' : 'brightness-110'
                }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 group ${
                    isScrolled
                      ? 'text-stone group-hover:text-fire'
                      : 'text-white/90 group-hover:text-fire'
                  } ${isActive ? 'text-fire' : ''}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-fire ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}

            {/* Sucursales Dropdown (Desktop) */}
            <div className="relative group">
              <button
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-1 ${
                  isScrolled
                    ? 'text-stone group-hover:text-fire'
                    : 'text-white/90 group-hover:text-fire'
                }`}
              >
                Reservar
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fire transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Menú Desplegable */}
              <div className="absolute right-0 mt-4 w-48 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <a
                  href="https://api.whatsapp.com/send?phone=522384084770&text=Hola%20Pollos%20Mareados,%20quiero%20hacer%20una%20reserva%20en%20San%20Lorenzo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-fire hover:text-white transition-colors"
                >
                  📍 San Lorenzo
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=522383827599&text=Hola%20Pollos%20Mareados,%20quiero%20hacer%20una%20reserva%20en%20Coapan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-fire hover:text-white transition-colors"
                >
                  📍 Coapan
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=522382103554&text=Hola%20Pollos%20Mareados,%20quiero%20hacer%20una%20reserva%20en%20Chilac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-fire hover:text-white transition-colors"
                >
                  📍 Chilac
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menú"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  } ${isScrolled ? 'bg-smoke' : 'bg-white'}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  } ${isScrolled ? 'bg-smoke' : 'bg-white'}`}
              />
              <span
                className={`block h-0.5 w-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  } ${isScrolled ? 'bg-smoke' : 'bg-white'}`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-smoke z-40 transition-all duration-500 ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`relative text-4xl font-display font-bold transition-all duration-300 ${
                  isActive
                    ? 'text-fire'
                    : 'text-white hover:text-fire'
                } ${
                  isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 80 + 150}ms` : '0ms' }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 bg-fire transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            );
          })}
          <div className="w-full max-w-sm mt-6 flex flex-col gap-3">
            <h3 className={`text-white/60 text-sm tracking-widest uppercase text-center mb-2 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isMobileMenuOpen ? '400ms' : '0ms' }}>
              Reservar por Sucursal
            </h3>
            <a
              href="https://api.whatsapp.com/send?phone=522371002226&text=Hola%20Pollos%20Mareados,%20quiero%20hacer%20una%20reserva%20en%20San%20Lorenzo"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className={`flex items-center justify-center gap-2 px-8 py-3 bg-white/10 text-white border border-white/20 rounded-full hover:bg-fire hover:border-fire transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isMobileMenuOpen ? '450ms' : '0ms' }}
            >
              <span>📍 San Lorenzo</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=522381879853&text=Hola%20Pollos%20Mareados,%20quiero%20hacer%20una%20reserva%20en%20Coapan"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className={`flex items-center justify-center gap-2 px-8 py-3 bg-white/10 text-white border border-white/20 rounded-full hover:bg-fire hover:border-fire transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isMobileMenuOpen ? '500ms' : '0ms' }}
            >
              <span>📍 Coapan</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=522382103554&text=Hola%20Pollos%20Mareados,%20quiero%20hacer%20una%20reserva%20en%20Chilac"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className={`flex items-center justify-center gap-2 px-8 py-3 bg-white/10 text-white border border-white/20 rounded-full hover:bg-fire hover:border-fire transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: isMobileMenuOpen ? '550ms' : '0ms' }}
            >
              <span>📍 Chilac</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

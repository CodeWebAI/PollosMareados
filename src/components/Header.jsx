import { useState, useEffect } from 'react';


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
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
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 group ${isScrolled
                  ? 'text-stone hover:text-fire'
                  : 'text-white/90 hover:text-gold'
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-fire' : 'bg-gold'
                  }`}></span>
              </a>
            ))}

            <a
              href="tel:+520000000000"
              className={`relative px-8 py-3 rounded-full font-medium text-sm overflow-hidden group transition-all duration-300 ${isScrolled
                ? 'bg-fire text-white hover:bg-fire-dark'
                : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-fire'
                }`}
            >
              <span className="relative z-10">Reservar</span>
            </a>
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
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className={`text-4xl font-display font-bold text-white hover:text-gold transition-all duration-300 ${isMobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${i * 80 + 150}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+520000000000"
            onClick={handleNavClick}
            className={`mt-6 px-10 py-4 bg-fire text-white text-lg font-medium rounded-full hover:bg-fire-light transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            style={{ transitionDelay: isMobileMenuOpen ? '450ms' : '0ms' }}
          >
            Reservar
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;

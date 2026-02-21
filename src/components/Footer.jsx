function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-smoke text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-linear-to-r from-transparent via-fire to-transparent"></div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fire/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand - Takes more space */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <h3 className="font-display text-4xl font-bold gradient-text mb-3">
                Pollos Mareados
              </h3>
              <p className="text-gold/80 text-sm font-semibold tracking-widest uppercase">
                El Auténtico Sabor a Leña
              </p>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mb-8">
              Más de 15 años perfeccionando el arte de cocinar sobre fuego real. 
              Cada pollo es una obra maestra de dedicación y sabor.
            </p>

            {/* Fire Icon */}
            <div className="flex items-center gap-3 text-fire">
              <div className="text-4xl animate-float">🔥</div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wide">Cocinado con</p>
                <p className="font-display text-lg font-bold">Pasión & Tradición</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Menú', href: '#menu' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-fire transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-fire transition-all duration-300 group-hover:w-4"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4">
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Conéctate
            </h4>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              <SocialLink href="#" label="Facebook" icon="facebook" />
              <SocialLink href="#" label="Instagram" icon="instagram" />
              <SocialLink href="#" label="WhatsApp" icon="whatsapp" />
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-white/60">
              <p className="flex items-center gap-3">
                <svg className="w-4 h-4 text-fire shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Próximamente</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-4 h-4 text-fire shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dirección por confirmar</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider with Fire Effect */}
        <div className="relative mb-8">
          <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>
            © {currentYear} Pollos Mareados • Todos los derechos reservados
          </p>
          <p className="flex items-center gap-2">
            Hecho con
            <span className="text-fire animate-pulse">❤️</span>
            y mucha leña
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon }) {
  const icons = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    )
  };

  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-white/60 hover:bg-fire hover:text-white hover:border-fire transition-all duration-300 hover:scale-110"
    >
      {icons[icon]}
    </a>
  );
}

export default Footer;

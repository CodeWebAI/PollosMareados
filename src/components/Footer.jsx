import SocialLink from './footer/SocialLink';

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
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-center">
          {/* Brand */}
          <div className="md:col-span-4 text-center md:text-left">
            <div>
              <h3 className="font-display text-3xl font-bold gradient-text mb-2">
                Pollos Mareados
              </h3>
              <p className="text-gold/80 text-xs font-semibold tracking-widest uppercase">
                LOS AUTÉNTICOS POLLOS A LA LEÑA
              </p>
            </div>
          </div>

          {/* Logo - Center */}
          <div className="md:col-span-4 flex justify-center py-6 md:py-0">
            <div className="relative w-32 h-32 md:w-40 md:h-40 group">
              <div className="absolute inset-0 bg-fire/20 rounded-full blur-xl group-hover:bg-fire/40 transition-all duration-500"></div>
              <img 
                src="/PollosLogoPNG.png" 
                alt="Pollos Mareados Logo" 
                className="relative w-full h-full object-contain drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-4 flex items-center justify-center md:justify-end">
            <div className="text-center md:text-right">
              <h4 className="font-display text-lg font-bold text-white mb-4">
                Conéctate
              </h4>
              <div className="flex gap-3 justify-center md:justify-end">
                <SocialLink href="https://www.facebook.com/losautenticospollosmareados" label="Facebook" icon="facebook" />
                <SocialLink href="https://www.instagram.com/pollosmareados" label="Instagram" icon="instagram" />
                <SocialLink href="#" label="WhatsApp" icon="whatsapp" />
                <SocialLink href="https://www.tiktok.com/@pollos.mareados" label="TikTok" icon="tiktok" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Fire Effect */}
        <div className="relative mb-8">
          <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-center items-center text-sm text-white/40">
          <p>© {currentYear} Pollos Mareados • Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

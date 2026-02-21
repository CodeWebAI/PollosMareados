import { useScrollReveal } from '../hooks/useScrollReveal';

const menuItems = [
  {
    id: 1,
    name: 'Pollo Entero',
    subtitle: 'La Obra Maestra',
    description: 'Marinado durante horas, cocinado lentamente sobre brasas de leña natural. Piel dorada y crujiente, carne jugosa y tierna.',
    price: '$$$',
    image: '/productos/pollo-entero.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Medio Pollo',
    subtitle: 'Porción Perfecta',
    description: 'Todo el sabor auténtico de nuestro pollo a la leña en la porción ideal para una persona.',
    price: '$$',
    image: '/productos/medio-pollo.jpg',
  },
  {
    id: 3,
    name: 'Cuarto de Pollo',
    subtitle: 'Individual',
    description: 'Una porción generosa con todo el sabor ahumado que nos caracteriza.',
    price: '$',
    image: '/productos/cuarto-pollo.jpg',
  },
  {
    id: 4,
    name: 'Paquete Familiar',
    subtitle: 'Para Compartir',
    description: 'Dos pollos enteros con guarniciones para disfrutar en familia o con amigos.',
    price: '$$$$$',
    image: '/productos/familiar.jpg',
  },
];

const sides = [
  { icon: '🌽', name: 'Tortillas Artesanales', desc: 'Hechas a mano' },
  { icon: '🥗', name: 'Ensalada Fresca', desc: 'Del día' },
  { icon: '🌶️', name: 'Salsas Especiales', desc: 'Receta secreta' },
  { icon: '🥤', name: 'Bebidas Naturales', desc: 'Aguas frescas' },
];

function Menu() {
  const [titleRef, titleVisible] = useScrollReveal();

  return (
    <section id="menu" className="relative py-24 md:py-40 bg-white overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-fire"></div>
            <span className="section-label">Nuestro Menú</span>
            <div className="h-px w-16 bg-fire"></div>
          </div>
          <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Maestría en{' '}
            <span className="gradient-text italic">cada pieza</span>
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Cada producto es el resultado de horas de dedicación,
            fuego lento y pasión por lo auténtico
          </p>
        </div>

        {/* Premium Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {menuItems.map((item, index) => (
            <ProductCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Sides Section */}
        <div className="relative">
          <div className="flame-divider mb-12"></div>
          <h3 className="font-display text-4xl font-bold text-center text-smoke mb-12">
            Complementos Perfectos
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {sides.map((side, i) => (
              <SideCard key={i} side={side} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ item, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`group relative bg-sand rounded-3xl overflow-hidden premium-card ${
        item.featured ? 'lg:col-span-2' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${
        item.featured ? 'aspect-21/9' : 'aspect-square'
      }`}>
        <img 
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.parentElement.innerHTML = `
              <div class="absolute inset-0 bg-linear-to-br from-fire/20 via-wood/20 to-fire-dark/20 flex items-center justify-center">
                <div class="text-center p-6">
                  <div class="text-7xl mb-4">🔥</div>
                  <p class="font-display text-2xl font-bold text-smoke">${item.name}</p>
                  <p class="text-stone text-sm mt-2">Imagen próximamente</p>
                </div>
              </div>
            `;
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-smoke via-smoke/40 to-transparent opacity-80"></div>
        
        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-6 right-6 bg-gold text-smoke text-xs font-bold px-4 py-2 rounded-full tracking-wider uppercase shadow-lg">
            ⭐ Especialidad
          </div>
        )}

        {/* Price Badge */}
        <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-fire font-display text-2xl font-bold px-5 py-3 rounded-xl shadow-xl">
          {item.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-4">
          <div className="text-fire text-sm font-semibold tracking-wider uppercase mb-2">
            {item.subtitle}
          </div>
          <h3 className="font-display text-3xl font-bold text-smoke mb-3 group-hover:text-fire transition-colors duration-300">
            {item.name}
          </h3>
          <p className="text-stone leading-relaxed">
            {item.description}
          </p>
        </div>

        <button className="flex items-center gap-2 text-fire font-semibold text-sm group/btn">
          <span>Ordenar ahora</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function SideCard({ side, index }) {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`group bg-sand/50 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="text-5xl mb-3 transition-transform duration-300 group-hover:scale-110">
        {side.icon}
      </div>
      <h4 className="font-display text-lg font-bold text-smoke mb-1">
        {side.name}
      </h4>
      <p className="text-stone text-sm">
        {side.desc}
      </p>
    </div>
  );
}

export default Menu;

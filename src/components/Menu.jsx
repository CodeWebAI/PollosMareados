import { useState, useMemo, memo } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { menuData } from '../data/menuData';

// Utility for class merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const optimizeImage = (src) => src; // Placeholder for future optimization logic

const MenuCard = memo(({ item }) => {
  return (
    <div 
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-fire border border-ash/50"
      role="article"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-cream">
        <img
          src={optimizeImage(item.src)}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-500 will-change-transform group-hover:scale-110 p-4"
          width="400"
          height="300"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-t from-smoke/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 text-xl font-bold font-display tracking-tight text-smoke group-hover:text-fire transition-colors">
          {item.title}
        </h3>
        <p className="text-sm font-body text-stone leading-relaxed mb-4 grow">
          {item.description}
        </p>
        <div className="mt-auto pt-4 border-t border-ash/50">
           <button className="w-full rounded-full bg-sand px-4 py-2 text-sm font-semibold font-body text-wood-dark transition-colors hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-fire focus:ring-offset-2">
            Ver Detalle
          </button>
        </div>
      </div>
    </div>
  );
});

MenuCard.displayName = 'MenuCard';

const SectionHeader = memo(({ title, subtitle }) => (
  <div className="mb-12 text-center max-w-2xl mx-auto px-4 animate-slide-up">
    <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-fire font-body">
      {subtitle}
    </span>
    <h2 className="text-3xl font-extrabold font-display text-smoke sm:text-4xl lg:text-5xl tracking-tight">
      {title}
    </h2>
    <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-fire" />
  </div>
));

SectionHeader.displayName = 'SectionHeader';

const CategoryTabs = ({ categories, currentCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12 px-4 sticky top-24 z-30 py-4 bg-white/95 backdrop-blur-sm shadow-sm md:static md:bg-transparent md:shadow-none md:py-0">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={cn(
            "rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 ring-1 ring-inset font-body",
            currentCategory === cat.id
              ? "bg-fire text-white ring-fire shadow-fire transform scale-105"
              : "bg-white text-stone ring-ash hover:bg-sand hover:text-wood-dark hover:ring-sand"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todo el Menú' },
    { id: 'combos', label: '🔥 Combos' },
    { id: 'especialidades', label: '🍗 Especialidades' },
    { id: 'antojos', label: '😋 Antojitos' },
    { id: 'extras', label: '🍟 Extras' },
  ];

  /* 
    Memoize the filtered items to avoid recalculation on every render.
    This improves performance significantly when toggling categories.
  */
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      // Flatten all categories into one array for "All" view
      return [
        ...menuData.combos,
        ...menuData.especialidades,
        ...menuData.antojos,
        ...menuData.extras
      ];
    }
    return menuData[activeCategory] || [];
  }, [activeCategory]);

  return (
    <section id="menu" className="relative py-20 bg-cream min-h-screen overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03] pattern-grid-lg pointer-events-none" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-fire/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader 
          title="Nuestro Delicioso Menú" 
          subtitle="Sabor que enamora" 
        />

        <CategoryTabs 
          categories={categories} 
          currentCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />

        {/* 
          Using CSS Grid for layout. 
          Performance tip: content-visibility: auto can be added to off-screen sections if this list grows huge.
        */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 animate-fade-in">
          {filteredItems.map((item, idx) => (
            <MenuCard key={`${item.category}-${item.id}`} item={item} index={idx} />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-stone text-lg font-body">No hay elementos en esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  );
}

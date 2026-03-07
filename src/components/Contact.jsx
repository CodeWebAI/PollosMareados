import { useScrollReveal } from '../hooks/useScrollReveal';
import { branches } from '../data/contactData';
import BranchRow from './contact/BranchRow';

// ── Component ────────────────────────────────────────────────────────────────
function Contact() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [branchesRef, branchesVisible] = useScrollReveal(0.06);

  return (
    <section id="contacto" className="relative py-24 md:py-40 bg-cream overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute top-16 right-0 w-600px h-600px bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-0 w-600px h-600px bg-fire/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">

        {/* ── Section Header ── */}
        <div
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-fire" />
            <span className="section-label">Contáctanos</span>
            <div className="h-px w-16 bg-fire" />
          </div>
          <h2 className="section-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Estamos listos para{' '}
            <span className="gradient-text italic block mt-2">servirte</span>
          </h2>
          <p className="text-lg text-stone max-w-2xl mx-auto">
            Encuéntranos y disfruta del auténtico sabor a leña
          </p>
        </div>

        {/* ── Branches ── */}
        <div
          ref={branchesRef}
          className="space-y-0"
        >
          {/* Divider label */}
          <div className="flex items-center gap-4 mb-16">
            <div className="h-px flex-1 bg-sand" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">          
              <span className="section-label tracking-widest">Nuestras Sucursales</span>
            </div>
            <div className="h-px flex-1 bg-sand" />
          </div>

          {branches.map((branch, i) => (
            <BranchRow
              key={branch.id}
              branch={branch}
              index={i}
              visible={branchesVisible}
              reversed={i % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Contact;

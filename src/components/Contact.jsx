import { useScrollReveal } from '../hooks/useScrollReveal';
import { branches } from '../data/contactData';
import BranchRow from './contact/BranchRow';

// ── Component ────────────────────────────────────────────────────────────────
function Contact() {
  const [titleRef, titleVisible] = useScrollReveal();
  const [branchesRef, branchesVisible] = useScrollReveal(0.06);
  const [ctaRef, ctaVisible] = useScrollReveal(0.12);

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

        <div
          ref={ctaRef}
          className={`mt-14 md:mt-18 transition-all duration-1000 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-fire/20 bg-white p-8 md:p-10 shadow-soft">
            <div className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-fire/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="section-label mb-2">Apertura Sucursal Y de Chilac</p>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-smoke leading-tight">
                  Conoce la membresia de lanzamiento
                </h3>
                <p className="mt-3 max-w-2xl text-stone">
                  Revisa terminos y condiciones, beneficios, mecanica del concurso y reglas de participacion.
                </p>
              </div>

              <a
                href="#membresia-terminos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-fire px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-fire-dark hover:shadow-fire"
                aria-label="Ver terminos y condiciones de membresia"
              >
                Ver terminos y bases
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default Contact;

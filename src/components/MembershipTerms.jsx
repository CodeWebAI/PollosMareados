import TermsSectionsResponsive from './membership/TermsSectionsResponsive'
import {
  legalNotice,
  membershipMeta,
  membershipSections,
  supportCardData,
} from '../data/membershipTermsData'
import { useScrollReveal } from '../hooks/useScrollReveal'

function MembershipTerms() {
  const [titleRef, titleVisible] = useScrollReveal(0.16)
  const [contentRef, contentVisible] = useScrollReveal(0.08)

  return (
    <section id="membresia-terminos" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="relative mx-auto max-w-350 px-4 sm:px-6 lg:px-10">
        <div
          ref={titleRef}
          className={`mb-10 space-y-4 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="section-label">{membershipMeta.headingTag}</span>
          <h2 className="section-heading text-4xl leading-tight md:text-6xl">
            {membershipMeta.title}
            <span className="gradient-text mt-2 block italic">{membershipMeta.titleAccent}</span>
          </h2>
          <p className="max-w-3xl text-base text-stone md:text-lg">{membershipMeta.description}</p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-1000 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="h-px w-full bg-linear-to-r from-fire/80 via-gold to-fire/80" />

          <div className="grid gap-4 py-8 md:grid-cols-3 md:gap-8 md:py-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-stone">Sucursal</p>
              <p className="mt-1 text-xl font-semibold text-smoke">Y de Chilac</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-stone">Inicio de entrega</p>
              <p className="mt-1 text-xl font-semibold text-smoke">12:00 del dia de inauguracion</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-stone">Membresias disponibles</p>
              <p className="mt-1 text-xl font-semibold text-smoke">70 membresias promocionales</p>
            </div>
          </div>

          <div className="space-y-12">
            <TermsSectionsResponsive sections={membershipSections} />

            <section className="grid gap-8 border-t border-sand pt-8 md:grid-cols-2">
              <div>
                <h3 className="font-display text-3xl font-bold text-smoke">Aviso legal</h3>
                <p className="mt-3 text-base leading-relaxed text-stone">{legalNotice}</p>
              </div>

              <div>
                <h3 className="font-display text-3xl font-bold text-smoke">{supportCardData.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-stone">{supportCardData.description}</p>
                <a
                  href={supportCardData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-b border-fire text-base font-semibold text-fire transition-colors hover:text-fire-dark"
                >
                  {supportCardData.buttonLabel}
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembershipTerms

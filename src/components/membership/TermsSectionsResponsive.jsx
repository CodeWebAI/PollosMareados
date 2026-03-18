import { useState } from 'react'
import SectionCard from './SectionCard'

function getSectionLabel(title) {
  const match = title.match(/^(\d+)\./)
  if (!match) return null
  return `Punto ${match[1]}`
}

function getSectionTitle(title) {
  const parts = title.split('. ')
  if (parts.length > 1) return parts.slice(1).join('. ')
  return title
}

export default function TermsSectionsResponsive({ sections }) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!sections?.length) {
    return null
  }

  const activeSection = sections[activeIndex]

  return (
    <>
      <div className="space-y-4 md:hidden">
        <label htmlFor="membership-section-selector" className="text-[11px] font-semibold uppercase tracking-widest text-stone">
          Selecciona un punto
        </label>
        <div className="relative">
          <select
            id="membership-section-selector"
            value={activeIndex}
            onChange={(event) => setActiveIndex(Number(event.target.value))}
            className="w-full appearance-none rounded-xl border border-ash bg-white px-4 py-3 pr-10 text-sm font-semibold text-smoke shadow-soft"
          >
            {sections.map((section, index) => (
              <option key={section.title} value={index}>
                {section.title}
              </option>
            ))}
          </select>
          <ChevronIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone" />
        </div>

        <div className="border-l-2 border-fire pl-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-fire">
            {getSectionLabel(activeSection.title) || `Punto ${activeIndex + 1}`}
          </p>
          <p className="font-display text-xl font-bold text-smoke">{getSectionTitle(activeSection.title)}</p>
        </div>

        <SectionCard
          title={activeSection.title}
          description={activeSection.description}
          bullets={activeSection.bullets}
          description2={activeSection.description2}
          hideTitle
        />
      </div>

      <div className="hidden gap-10 md:grid md:grid-cols-[320px_1fr]">
        <aside className="md:sticky md:top-28 md:self-start md:max-h-[68vh] md:overflow-y-auto md:pr-3">
          <div className="mb-3 px-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-stone">Indice de terminos</p>
            <p className="text-sm text-stone">Selecciona un punto para ver su detalle.</p>
          </div>

          <nav className="space-y-1" aria-label="Puntos de terminos y condiciones">
            {sections.map((section, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={section.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`w-full rounded-xl px-3 py-3 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-l-2 border-fire bg-white/70 text-smoke'
                      : 'border-l-2 border-transparent text-smoke hover:border-fire/40 hover:bg-white/50'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-fire">
                    {getSectionLabel(section.title) || `Punto ${index + 1}`}
                  </p>
                  <p className="font-display text-lg font-bold leading-tight">{getSectionTitle(section.title)}</p>
                </button>
              )
            })}
          </nav>
        </aside>

        <section className="space-y-5">
          <div className="border-l-2 border-fire pl-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone">
              {getSectionLabel(activeSection.title) || `Punto ${activeIndex + 1}`} de {sections.length}
            </p>
            <h3 className="font-display text-2xl font-bold text-smoke">
              {getSectionTitle(activeSection.title)}
            </h3>
          </div>

          <SectionCard
            title={activeSection.title}
            description={activeSection.description}
            bullets={activeSection.bullets}
            description2={activeSection.description2}
            hideTitle
          />
        </section>
      </div>
    </>
  )
}

function ChevronIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

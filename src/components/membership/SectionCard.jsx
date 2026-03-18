export default function SectionCard({ title, description, bullets, description2, hideTitle = false }) {
  return (
    <section className="rounded-3xl border border-ash bg-cream/60 p-6 md:p-8">
      {!hideTitle ? <h2 className="mb-2 font-display text-3xl font-bold text-smoke">{title}</h2> : null}
      <p className="mb-5 text-sm text-stone md:text-base">{description}</p>
      <ul className="space-y-3">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-smoke md:text-base">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-fire" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {description2 ? (
        <p className="mt-5 text-sm leading-relaxed text-stone md:text-base">{description2}</p>
      ) : null}
    </section>
  )
}

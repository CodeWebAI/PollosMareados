export default function ContestRulesCard({ eyebrow, title, description, rules }) {
  return (
    <div className="rounded-3xl border border-gold/25 bg-linear-to-br from-gold/10 via-white to-fire/5 p-6">
      <p className="section-label mb-3">{eyebrow}</p>
      <h2 className="mb-3 font-display text-3xl font-bold leading-tight text-smoke">{title}</h2>
      <p className="mb-4 text-sm text-stone">{description}</p>
      <ul className="space-y-3 text-sm text-smoke">
        {rules.map((rule, index) => (
          <li key={rule} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-fire" />
            <span>
              <strong className="font-semibold">{index + 1}.</strong> {rule}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

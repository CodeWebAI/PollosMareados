export default function InfoChip({ title, value }) {
  return (
    <div className="rounded-2xl border border-ash bg-cream px-4 py-4">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-stone">{title}</p>
      <p className="mt-1 text-sm font-semibold text-smoke">{value}</p>
    </div>
  )
}

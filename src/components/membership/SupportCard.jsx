function PhoneIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

export default function SupportCard({ title, description, whatsappUrl, buttonLabel }) {
  return (
    <div className="rounded-3xl border border-ash bg-white p-6">
      <h3 className="mb-2 font-display text-2xl font-bold text-smoke">{title}</h3>
      <p className="mb-4 text-sm text-stone">{description}</p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-fire px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-fire-dark hover:shadow-fire"
      >
        <PhoneIcon className="h-4 w-4" />
        {buttonLabel}
      </a>
    </div>
  )
}

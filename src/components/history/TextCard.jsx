export default function TextCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-stone-100 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl md:text-2xl font-bold text-stone-800 mb-4 leading-snug">
        {event.title}
      </h3>
      {event.paragraphs.map((p, i) => (
        <p key={i} className="text-stone-600 leading-relaxed mb-3 last:mb-0 text-sm md:text-base">
          {p}
        </p>
      ))}
    </div>
  );
}

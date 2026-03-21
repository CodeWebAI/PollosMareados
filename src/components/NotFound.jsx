function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cream px-6 py-16 flex items-center justify-center">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-fire/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <section className="relative w-full max-w-2xl rounded-3xl border border-sand/70 bg-white/95 shadow-xl px-8 py-14 text-center backdrop-blur-sm">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-fire mb-4">Error 404</p>
        <h1 className="font-display text-5xl md:text-6xl font-extrabold text-smoke leading-tight">
          Esta página no existe
        </h1>
        <p className="mt-5 text-stone text-base md:text-lg max-w-xl mx-auto">
          A veces perderse también es parte del camino.
          Regresa al inicio y descubre de nuevo el sabor, la historia y la pasión de Pollos Mareados.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-fire px-8 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105 hover:bg-fire/90"
          >
            Volver al inicio
          </a>
          <a
            href="/#contacto"
            className="inline-flex items-center justify-center rounded-full border border-sand bg-white px-8 py-3 font-semibold text-smoke transition-colors duration-300 hover:bg-cream"
          >
            Ir a contacto
          </a>
        </div>
      </section>
    </main>
  );
}

export default NotFound;

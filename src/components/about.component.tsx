export function AboutComponent() {
  return (
    <div className="w-full flex justify-center my-4 z-50">
      <article className="glass-card animate-fade-up rounded-3xl p-6 sm:p-8 max-w-2xl w-max">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Portfólio
        </p>
        <h1 className="f-display mb-3 text-4xl font-extrabold leading-tight text-[var(--text-main)] sm:text-5xl">
          Diego Araujo
        </h1>
        <p className="mb-5 text-base font-medium text-[var(--text-muted)] sm:text-lg">
          Tenho {new Date().getFullYear() - 2006} anos e estudo programação, com
          foco em desenvolvimento backend para web.
        </p>
        <div className="flex justify-around">
          <div className="inline-flex rounded-full border border-[#c4a3ff4d] bg-[#c4a3ff1f] px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
              Aprendendo backend
            </span>
          </div>
          <div className="inline-flex rounded-full border border-[#c4a3ff4d] bg-[#c4a3ff1f] px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent-strong)]">
              Aprendendo TypeScript/JavaScript
            </span>
          </div>
        </div>
      </article>
    </div>
  );
}

export function SkillsComponent() {
  const conhecimentos = [
    "TypeScript / JavaScript",
    "HTML / CSS",
    "MongoDB",
    "Express",
    "React",
  ];

  return (
    <div className="w-full flex justify-center z-50">
      <section className="animate-fade-up-delayed overflow-hidden rounded-3xl border border-[#c4a3ff4a] bg-[#120a22e6] shadow-[0_16px_40px_rgba(0,0,0,0.38)] w-full max-w-2xl ">
        <header className="flex items-center justify-between border-b border-[#c4a3ff38] bg-[#1c1033d9] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b7a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffcc66]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#59d38a]" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c9badf]">
            conhecimentos.sh
          </p>
        </header>

        <div className="space-y-3 p-5 font-mono text-sm sm:p-6">
          <p className="text-[#b493ff]">
            <span className="text-[#7fd8ff]">diegoarauj0@~/portfolio</span>
            <span className="text-[#f2ebff]">:</span>
            <span className="text-[#59d38a]">~</span>
            <span className="text-[#f2ebff]">$ cat conhecimentos.txt</span>
            <span className="terminal-cursor ml-1 inline-block text-[#c4a3ff]">
              |
            </span>
          </p>

          <div className="space-y-1 text-[#d9cfff]">
            {conhecimentos.map((conhecimento) => (
              <p key={conhecimento}>
                <span className="mr-2 text-[#9a6bff]">-</span>
                {conhecimento}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

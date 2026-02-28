export function ProjectsComponent() {
  const projects: {
    src: string;
    name: string;
    href: string;
    github: string;
  }[] = [
    {
      name: "mercury",
      href: "https://mercury-web-2s24.onrender.com",
      src: "/screenshots/mercury.png",
      github: "https://github.com/diegoarauj0/mercury-web",
    },
    {
      name: "flatinstall",
      href: "https://diegoarauj0.github.io/flatInstall-web/",
      src: "/screenshots/flatinstall.png",
      github: "https://github.com/diegoarauj0/flatInstall-web",
    },
  ];

  return (
    <div className="w-full flex justify-center max-w-1xl z-50">
      <section className="flex flex-wrap justify-around w-full">
        {projects.map(({ href, name, src, github }) => (
          <div className="animate-fade-up-delayed max-w-2xl border-[#c4a3ff4a] border-2 rounded-2xl m-2">
            <header className="flex items-center justify-center rounded-t-2xl relative border-b border-[#c4a3ff38] bg-[#1c1033d9] px-4 py-3">
              <div className="flex items-center gap-2 left-3 absolute">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b7a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffcc66]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#59d38a]" />
              </div>
              <a
                href={github}
                className="right-2 absolute"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/icons/github.png" alt="github" className="h-[25px] invert" />
              </a>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#c9badf] underline">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              </p>
            </header>
            <div></div>
            <img src={src} alt={name} className="rounded-b-2xl" />
          </div>
        ))}
      </section>
    </div>
  );
}

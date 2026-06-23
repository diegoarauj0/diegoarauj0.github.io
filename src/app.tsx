import { SocialLinksContentComponent } from "./components/socialLinksContent.component";
import { ProjectsContentComponent } from "./components/projectsContent.component";
import { SkillsContentComponent } from "./components/skillsContent.component";

export function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#111318] text-slate-100">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(118,139,255,0.12),transparent_34%),linear-gradient(180deg,rgba(17,19,24,0)_0%,#111318_88%)]" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-7 grid h-24 w-24 place-items-center rounded-full border border-purple-400/80 bg-[#171a21] p-1 shadow-[0_0_50px_rgba(244,114,182,0.25)]">
            <div className="grid h-full w-full place-items-center rounded-full bg-[linear-gradient(135deg,#1e293b,#111827_48%,#334155)] text-2xl font-extrabold text-white">
              <img src="/favicon.png" alt="Favicon" className="rounded-full" />
            </div>
          </div>

          <p className="mb-4 font-['Sora'] text-xl font-medium tracking-[0.18em] text-slate-100">
            Ola! Meu nome e <span className="text-purple-300">Diego Araujo</span> e eu sou
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Tenho 20 anos e estudo programacao com foco em desenvolvimento backend para web. Crio interfaces objetivas,
            APIs bem organizadas e experiencias digitais pensadas para serem rapidas, acessiveis e faceis de evoluir.
          </p>

          <SkillsContentComponent />

          <hr className="w-full border-white/10 mt-9" />

          <SocialLinksContentComponent />

          <a
            href="#projects"
            className="absolute -bottom-16 grid h-11 w-11 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-white/30 hover:text-white"
            aria-label="Ver projetos"
          >
            <span className="h-3 w-3 rotate-45 border-b-2 border-r-2 border-current" />
          </a>
        </div>
      </section>

      <section id="projects" className="relative px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-['Sora'] text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Projetos</p>
              <h2 className="mt-3 font-['Sora'] text-3xl font-extrabold text-white sm:text-4xl">Projetos recentes</h2>
            </div>
          </div>

          <ProjectsContentComponent />
        </div>
      </section>
    </main>
  );
}

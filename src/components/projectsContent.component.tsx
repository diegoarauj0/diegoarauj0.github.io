interface InterfaceProject {
  name: string;
  image: string;
  description: string;
  repositories: {
    name: string;
    href: string;
  }[];
}

const projects: InterfaceProject[] = [
  {
    name: "Mercury",
    image: "/screenshots/mercury.png",
    description: "Encurtador de URLs com uma experiencia simples para transformar links longos em enderecos curtos.",
    repositories: [{ name: "Repositorio Mercury", href: "https://github.com/diegoarauj0/mercury-web" }],
  },
  {
    name: "PocketBlog",
    image: "/screenshots/pocketblog.png",
    description: "Blog compacto para publicar e ler posts curtos em Markdown com uma interface direta e agradavel.",
    repositories: [{ name: "Repositorio PocketBlog", href: "https://github.com/diegoarauj0/pocketblog-web" }],
  },
  {
    name: "FlatInstall",
    image: "/screenshots/flatinstall.png",
    description: "Ferramenta para montar um script de instalacao Flatpak e facilitar a configuracao de aplicativos.",
    repositories: [{ name: "Repositorio FlatInstall", href: "https://github.com/diegoarauj0/flatinstall-web" }],
  },
  {
    name: "DeepLocal",
    image: "/screenshots/deeplocal.png",
    description:
      "Sistema para organizar links por usuario, com uma interface web dedicada ao gerenciamento do conteudo.",
    repositories: [
      { name: "Repositorio DeepLocal Client", href: "https://github.com/diegoarauj0/deeplocal-client" },
      { name: "Repositorio DeepLocal Server", href: "https://github.com/diegoarauj0/deeplocal-server" },
    ],
  },
];

function ProjectContentComponent({ description, image, name, repositories }: InterfaceProject): React.ReactNode {
  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-[#171a21] shadow-2xl shadow-black/20">
      <div className="aspect-[16/9] overflow-hidden bg-[#0d0f14]">
        <img className="h-full w-full transition duration-500" src={image} alt={`Screenshot do projeto ${name}`} />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-['Sora'] text-xl font-bold text-white">{name}</h3>
          <div className="flex items-center gap-2">
            {repositories.map((repository) => (
              <a
                href={repository.href}
                target="_blank"
                rel="noreferrer"
                aria-label={repository.name}
                title={repository.name}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.07] transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10"
                key={repository.href}
              >
                <img src="https://skillicons.dev/icons?i=github" alt="Github" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
      </div>
    </article>
  );
}

export function ProjectsContentComponent(): React.ReactNode {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectContentComponent
          description={project.description}
          image={project.image}
          name={project.name}
          repositories={project.repositories}
          key={project.name}
        />
      ))}
    </div>
  );
}

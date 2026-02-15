import { AboutComponent } from "./components/about.component";
import { BackgroundComponent } from "./components/background.component";
import { ContactComponent } from "./components/contact.component";
import { ProjectsComponent } from "./components/projects.component";
import { RepositoryComponent } from "./components/repository.component";
import { SkillsComponent } from "./components/skills.component";

export function App() {
  return (
    <main className="relative min-h-screen w-full">
      <RepositoryComponent />
      <BackgroundComponent />
      <section className="relative z-10 flex min-h-screen w-full flex-wrap items-start content-start justify-center gap-5 px-4 py-10 sm:px-8">
        <AboutComponent />
        <ContactComponent />
        <SkillsComponent />
        <ProjectsComponent />
      </section>
    </main>
  );
}

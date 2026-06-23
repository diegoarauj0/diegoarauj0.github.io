interface InterfaceSkills {
  name: string;
  icon: string;
}

const skills: InterfaceSkills[] = [
  { name: "Javascript", icon: "js" },
  { name: "Typescript", icon: "ts" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "React", icon: "react" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Nestjs", icon: "nestjs" },
  { name: "Docker", icon: "docker" },
];

function SkillContentComponent({ icon, name }: InterfaceSkills): React.ReactNode {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs flex items-center font-semibold text-slate-300 shadow-lg shadow-black/10 backdrop-blur">
      <img src={`https://skillicons.dev/icons?i=${icon}`} alt={name} className="w-6 mr-2" />
      <p>{name}</p>
    </div>
  );
}

export function SkillsContentComponent(): React.ReactNode {
  return (
    <div className="mt-9 flex flex-wrap justify-center gap-3">
      {skills.map((skill) => (
        <SkillContentComponent icon={skill.icon} name={skill.name} key={skill.name} />
      ))}
    </div>
  );
}

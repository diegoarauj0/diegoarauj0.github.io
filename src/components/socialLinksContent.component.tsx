interface InterfaceSocialLink {
  name: string;
  href: string;
  icon: string;
}

const socialLinks: InterfaceSocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/diegoarauj0",
    icon: "github",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_diego.arauj0",
    icon: "instagram",
  },
  {
    name: "X (Twitter)",
    href: "https://www.x.com/NegativoDdz",
    icon: "twitter",
  },
];

export function SocialLinkContentComponent({ href, icon, name }: InterfaceSocialLink): React.ReactNode {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-11 items-center gap-3 rounded-full border border-white/10 bg-white/[0.07] px-5 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white"
    >
      <img src={`https://skillicons.dev/icons?i=${icon}`} alt={name} className="w-6 mr-2" />
      <p>{name}</p>
    </a>
  );
}

export function SocialLinksContentComponent(): React.ReactNode {
  return (
    <div className="mt-9 flex flex-wrap justify-center gap-3">
      {socialLinks.map((socialLink) => (
        <SocialLinkContentComponent
          icon={socialLink.icon}
          name={socialLink.name}
          href={socialLink.href}
          key={socialLink.name}
        />
      ))}
    </div>
  );
}

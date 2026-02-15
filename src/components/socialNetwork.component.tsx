interface ISocialNetworkProps {
  name: string;
  src: string;
  href: string;
}

export function SocialNetworkComponent({ src, name, href }: ISocialNetworkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-[#ffffff24] bg-[#1a1330bf] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c4a3ff75] hover:bg-[#231946d9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4a3ff]"
    >
      <div className="rounded-xl bg-[#2b1f4aa8] p-2">
        <img src={src} alt={name} className="h-6 w-6 invert transition-transform duration-300 group-hover:scale-110" />
      </div>
      <p className="text-sm font-semibold tracking-wide text-[var(--text-main)]">
        {name}
      </p>
    </a>
  );
}

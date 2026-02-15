import { SocialNetworkComponent } from "./socialNetwork.component";

export function ContactComponent() {
  return (
    <div className="w-full flex justify-center my-4 z-50">
      <section className="glass-card animate-fade-up-delayed rounded-3xl p-5 sm:p-6 w-full max-w-2xl">
        <h2 className="mb-4 text-lg font-bold text-[var(--text-main)]">
          Redes
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <SocialNetworkComponent
            name="GitHub - @diegoarauj0"
            href="https://github.com/diegoarauj0"
            src="/icons/github.png"
          />
          <SocialNetworkComponent
            name="YouTube - @negativoddz"
            href="https://www.youtube.com/@negativoddz"
            src="/icons/youtube.png"
          />
          <SocialNetworkComponent
            name="X (Twitter) - @NegativoDdz"
            href="https://x.com/NegativoDdz"
            src="/icons/twitter.png"
          />
          <SocialNetworkComponent
            name="Instagram - @_diego.arauj0"
            href="https://www.instagram.com/_diego.arauj0"
            src="/icons/instagram.png"
          />
        </div>
      </section>
    </div>
  );
}

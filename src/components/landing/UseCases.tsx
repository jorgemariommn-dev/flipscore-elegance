import ScrollReveal from "./ScrollReveal";

const cases = [
  { who: "Clubs", benefit: "Elevate the player and spectator experience with refined court details." },
  { who: "Coaches", benefit: "Manage matches and training sessions with ease." },
  { who: "Players", benefit: "Stay focused on the game — not the score." },
];

const UseCases = () => (
  <section className="bg-muted/50 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          Built for Every Court.
        </h2>
      </ScrollReveal>
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {cases.map((c, i) => (
          <ScrollReveal key={c.who} delay={i * 0.15}>
            <div className="text-center">
              <h3 className="font-serif-display text-xl font-medium">{c.who}</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{c.benefit}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default UseCases;

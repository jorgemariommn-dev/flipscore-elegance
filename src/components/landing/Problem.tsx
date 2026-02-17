import ScrollReveal from "./ScrollReveal";

const problems = [
  { title: "Lost in the Score", description: "Players lose track mid-rally, interrupting the flow of the game." },
  { title: "Constant Interruptions", description: "Matches pause repeatedly as players debate the current score." },
  { title: "Unorganized Courts", description: "Without clear scoring, courts feel chaotic and unprofessional." },
];

const Problem = () => (
  <section className="bg-muted/50 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          The Game Deserves Better.
        </h2>
      </ScrollReveal>
      <div className="mt-16 grid gap-12 md:grid-cols-3">
        {problems.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 0.15}>
            <div className="text-center">
              <h3 className="font-serif-display text-xl font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{p.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;

import ScrollReveal from "./ScrollReveal";
import { Zap, BatteryCharging, Sun, Sparkles } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Instant Score Updates", description: "Flip and display — no delays, no tech." },
  { icon: BatteryCharging, title: "No Batteries Required", description: "Purely mechanical. Always ready to go." },
  { icon: Sun, title: "Built for Outdoor Play", description: "Weather-resistant materials that endure." },
  { icon: Sparkles, title: "Clean Aesthetic", description: "Professional look that elevates every court." },
];

const WhyFlipScore = () => (
  <section className="px-6 py-24 md:py-32">
    <div className="mx-auto max-w-5xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          Why FlipScore.
        </h2>
      </ScrollReveal>
      <div className="mt-16 grid gap-12 sm:grid-cols-2 md:grid-cols-4">
        {reasons.map((r, i) => (
          <ScrollReveal key={r.title} delay={i * 0.1}>
            <div className="text-center">
              <r.icon className="mx-auto h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wider">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{r.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyFlipScore;

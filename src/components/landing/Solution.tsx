import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";
import productImage from "@/assets/flipscore-render.png";

const features = [
  "Magnetic mounting system",
  "Weather-resistant materials",
  "Clear, bold numbers",
  "Designed for padel courts",
];

const Solution = () => (
  <section className="px-6 py-24 md:py-32">
    <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
      <ScrollReveal>
        <img
          src={productImage}
          alt="FlipScore magnetic scoreboard product render"
          className="w-full rounded-sm"
          loading="lazy"
        />
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div>
          <h2 className="font-serif-display text-3xl font-medium md:text-5xl">
            Introducing FlipScore.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-secondary md:text-lg">
            A magnetic scoreboard crafted for clarity and simplicity.
            <br />
            No apps. No confusion. Just the game.
          </p>
          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-secondary">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-10 rounded-none px-10 py-6 text-base tracking-wide">
            Upgrade Your Court
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default Solution;

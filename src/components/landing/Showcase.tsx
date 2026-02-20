import ScrollReveal from "./ScrollReveal";
import productImage from "@/assets/flipscore-render.png";

const Showcase = () =>
<section className="bg-muted/50 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          Crafted in Every Detail.
        </h2>
      </ScrollReveal>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {[
      { label: "Close-up detail", aspect: "aspect-[4/5]" },
      { label: "Mounted view", aspect: "aspect-square" },
      { label: "Studio shot", aspect: "aspect-[4/5]" }].
      map((item, i) =>
      <ScrollReveal key={item.label} delay={i * 0.15}>
            <div className={`group relative overflow-hidden ${item.aspect} bg-foreground/5`}>
              <img

            alt={`FlipScore ${item.label}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy" src="/lovable-uploads/0fb76732-2f48-4d72-b0b2-a04898acaf82.png" />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/40 to-transparent p-6">
                <span className="text-xs uppercase tracking-widest text-primary-foreground">
                  {item.label}
                </span>
              </div>
            </div>
          </ScrollReveal>
      )}
      </div>
    </div>
  </section>;


export default Showcase;
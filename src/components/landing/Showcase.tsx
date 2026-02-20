import ScrollReveal from "./ScrollReveal";
import closeupImg from "@/assets/showcase-closeup.png";
import studioImg from "@/assets/showcase-studio.png";
import mountedImg from "@/assets/showcase-mounted.png";

const images = [
  { src: closeupImg, alt: "FlipScore close-up detail", aspect: "aspect-[4/5]" },
  { src: studioImg, alt: "FlipScore studio shot", aspect: "aspect-square" },
  { src: mountedImg, alt: "FlipScore mounted view", aspect: "aspect-[4/5]" },
];

const Showcase = () =>
  <section className="bg-muted/50 px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <ScrollReveal>
        <h2 className="font-serif-display text-center text-3xl font-medium md:text-5xl">
          Crafted in Every Detail.
        </h2>
      </ScrollReveal>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {images.map((item, i) =>
          <ScrollReveal key={item.alt} delay={i * 0.15}>
            <div className={`group relative overflow-hidden ${item.aspect} bg-foreground/5`}>
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  </section>;

export default Showcase;

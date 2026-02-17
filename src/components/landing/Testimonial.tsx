import ScrollReveal from "./ScrollReveal";

const Testimonial = () => (
  <section className="px-6 py-28 md:py-36">
    <ScrollReveal>
      <div className="mx-auto max-w-2xl text-center">
        <span className="font-serif-display text-5xl leading-none text-accent">"</span>
        <blockquote className="font-serif-display -mt-4 text-2xl italic leading-relaxed md:text-3xl">
          A simple detail that completely changes the experience.
        </blockquote>
        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-secondary">— Club Director</p>
      </div>
    </ScrollReveal>
  </section>
);

export default Testimonial;

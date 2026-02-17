import ScrollReveal from "./ScrollReveal";
import { Button } from "@/components/ui/button";

const FinalCTA = () => (
  <section className="bg-primary px-6 py-28 md:py-36">
    <ScrollReveal>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-serif-display text-3xl font-medium text-primary-foreground md:text-5xl">
          Elevate Your Court.
        </h2>
        <p className="mt-4 text-base text-primary-foreground/70">
          Pre-order FlipScore today.
        </p>
        <Button
          size="lg"
          variant="outline"
          className="mt-10 rounded-none border-primary-foreground/30 bg-primary-foreground px-10 py-6 text-base tracking-wide text-primary hover:bg-primary-foreground/90"
        >
          Pre-Order Now
        </Button>
      </div>
    </ScrollReveal>
  </section>
);

export default FinalCTA;

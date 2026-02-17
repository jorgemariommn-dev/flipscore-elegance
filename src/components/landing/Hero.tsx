import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/flipscore-logo.png";

const Hero = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24">
    <motion.img
      src={logo}
      alt="FlipScore logo"
      className="mb-10 h-12 w-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.h1
      className="font-serif-display max-w-3xl text-center text-5xl font-medium leading-tight tracking-tight md:text-7xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      Effortless Padel Scoring.
    </motion.h1>
    <motion.p
      className="mt-6 max-w-lg text-center text-lg leading-relaxed text-secondary md:text-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      A refined scoreboard designed for modern courts.
      <br />
      Keep every match clear, elegant, and uninterrupted.
    </motion.p>
    <motion.div
      className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Button size="lg" className="rounded-none px-10 py-6 text-base tracking-wide">
        Pre-Order Now
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="rounded-none border-foreground/30 px-10 py-6 text-base tracking-wide hover:bg-foreground/5"
      >
        View Product
      </Button>
    </motion.div>
  </section>
);

export default Hero;

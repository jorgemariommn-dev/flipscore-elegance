import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/flipscore-logo-transparent-green.png";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pause the video initially — scroll will drive it
    video.pause();

    const handleScroll = () => {
      if (!video || !video.duration) return;
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight; // one viewport height of scroll drives full video
      const progress = Math.min(scrollY / maxScroll, 1);
      video.currentTime = progress * video.duration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 overflow-hidden">
      {/* Scroll-driven video background */}
      <video
        ref={videoRef}
        src="/hero-bg.mov"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlay so text stays readable */}
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-3xl">
        <motion.img
          src={logo}
          alt="FlipScore logo"
          className="mb-10 w-full max-w-3xl h-auto mix-blend-multiply"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="font-serif-display w-full text-center text-5xl font-medium leading-tight tracking-tight md:text-7xl"
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
      </div>
    </section>
  );
};

export default Hero;

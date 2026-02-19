import { Instagram, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/flipscore-logo.png";

const Footer = () => (
  <footer className="border-t border-border/50 px-6 py-16">
    <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row md:justify-between">
      <div className="flex flex-col items-center gap-4 md:items-start">
        <img src={logo} alt="FlipScore" className="h-8 w-auto" />
        <p className="text-xs text-secondary">© {new Date().getFullYear()} FlipScore. All rights reserved.</p>
      </div>

      <div className="flex items-center gap-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary transition-colors hover:text-foreground">
          <Instagram className="h-5 w-5" strokeWidth={1.5} />
        </a>
        <a href="mailto:flipscorepadel@gmail.com" aria-label="Email" className="text-secondary transition-colors hover:text-foreground">
          <Mail className="h-5 w-5" strokeWidth={1.5} />
        </a>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email"
          className="h-10 w-48 rounded-none border-foreground/20 bg-transparent text-sm placeholder:text-secondary"
        />
        <Button className="h-10 rounded-none px-5 text-sm tracking-wide">Subscribe</Button>
      </form>
    </div>
  </footer>
);

export default Footer;

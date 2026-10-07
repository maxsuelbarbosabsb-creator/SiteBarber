import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Scissors, X } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
  { id: "servicos", label: "Serviços & Preços" },
  { id: "agendar", label: "Agendar" },
  { id: "galeria", label: "Galeria" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];

export const LogoMark = ({ className = "h-9 w-9" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="dhow-logo-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F3CE63" />
        <stop offset="1" stopColor="#8C7326" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="#0B0C0E" />
    <rect x="1.5" y="1.5" width="61" height="61" rx="12.5" fill="none" stroke="#D4AF37" strokeOpacity="0.4" />
    <path d="M20 14h13c11 0 19 8 19 18s-8 18-19 18H20V14zm8 7v22h5c6.5 0 11-4.6 11-11s-4.5-11-11-11h-5z" fill="url(#dhow-logo-g)" />
    <path d="M14 50 50 14" stroke="#F3CE63" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled ? "border-b border-[#D4AF37]/15 bg-[#0B0C0E]/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <button
          data-testid="nav-logo-button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3"
        >
          <LogoMark />
          <span className="text-left leading-none">
            <span className="font-heading block text-xl font-bold tracking-wide text-cream">DHOW</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">Barbearia</span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              data-testid={`nav-link-${link.id}`}
              onClick={() => go(link.id)}
              className="text-sm text-cream-muted transition-colors duration-300 hover:text-gold-bright"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="nav-cta-button"
            onClick={() => go("agendar")}
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#F3CE63] to-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#0B0C0E] shadow-[0_8px_24px_rgba(212,175,55,0.25)] transition-transform duration-300 hover:scale-105 active:scale-95 sm:flex"
          >
            <Scissors className="h-4 w-4" />
            Agendar Horário
          </button>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-[#D4AF37]/25 p-2.5 text-cream lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="nav-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[#D4AF37]/15 bg-[#0B0C0E]/95 px-6 py-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {LINKS.map((link) => (
                <button
                  key={link.id}
                  data-testid={`nav-mobile-link-${link.id}`}
                  onClick={() => go(link.id)}
                  className="text-left font-heading text-2xl text-cream transition-colors hover:text-gold-bright"
                >
                  {link.label}
                </button>
              ))}
              <button
                data-testid="nav-mobile-cta-button"
                onClick={() => go("agendar")}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F3CE63] to-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#0B0C0E]"
              >
                <Scissors className="h-4 w-4" />
                Agendar Horário
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

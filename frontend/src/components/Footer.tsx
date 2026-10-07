import { MessageCircle, Scissors } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import { waLink } from "@/lib/constants";
import { LogoMark } from "./Navbar";

export const Footer = () => (
  <footer data-testid="footer" className="relative overflow-hidden border-t border-[#D4AF37]/15 pt-20">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col items-start justify-between gap-10 pb-16 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <LogoMark className="h-12 w-12" />
          <div>
            <p className="font-heading text-2xl font-bold text-cream">Dhow Barbearia</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">Corte de respeito desde a primeira navalhada</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            data-testid="footer-book-button"
            onClick={() => scrollToId("agendar")}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F3CE63] to-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B0C0E] transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <Scissors className="h-4 w-4" />
            Agendar horário
          </button>
          <a
            data-testid="footer-whatsapp-button"
            href={waLink("Olá, Dhow! Vim pelo site.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-[#25D366]/40 px-6 py-3 text-sm font-semibold text-[#25D366] transition-colors duration-300 hover:bg-[#25D366]/10"
          >
            <MessageCircle className="h-4 w-4" />
            Chamar no zap
          </a>
        </div>
      </div>
    </div>

    <div className="pointer-events-none select-none overflow-hidden" aria-hidden="true">
      <p className="gold-outline-text font-heading -mb-[0.23em] text-center text-[26vw] leading-none font-bold tracking-tight">
        DHOW
      </p>
    </div>

    <div className="border-t border-[#D4AF37]/10 bg-[#0B0C0E]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Dhow Barbearia — Goiânia, GO</p>
        <p className="font-mono uppercase tracking-[0.2em]">Feito com tradição & navalha afiada</p>
      </div>
    </div>
  </footer>
);

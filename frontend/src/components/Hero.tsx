import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MessageCircle, Star } from "lucide-react";
import { scrollToId } from "@/lib/scroll";
import { waLink } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const LINES = ["ESTILO NÃO", "SE NEGOCIA.", "NAVALHA DE MESTRE."];
const HERO_IMG =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxiZWFyZCUyMHRyaW0lMjBiYXJiZXIlMjBzdHJhaWdodCUyMHJhem9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzg4NzEyMDc4fDA&ixlib=rb-4.1.0&q=85";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 3]);

  return (
    <section id="hero" ref={ref} data-testid="hero-section" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="pointer-events-none absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[380px] w-[380px] rounded-full bg-[#844E28]/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-12 px-5 sm:px-8">
        <div className="col-span-12 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-gold"
            data-testid="hero-overline"
          >
            <Star className="h-3.5 w-3.5 fill-[#D4AF37]" />
            Barbearia clássica & contemporânea — Goiânia
          </motion.p>

          <h1 className="font-heading text-5xl leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl" data-testid="hero-title">
            {LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 2 ? "gold-text italic" : ""}`}
                  initial={{ y: "112%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 0.25 + i * 0.15, duration: 0.9, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg"
            data-testid="hero-subtitle"
          >
            Corte por <span className="font-semibold text-gold-bright">R$ 25</span>, barba por{" "}
            <span className="font-semibold text-gold-bright">R$ 15</span> e combo completo por{" "}
            <span className="font-semibold text-gold-bright">R$ 35</span>. Agendamento instantâneo no WhatsApp,
            sem fila e sem burocracia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-book-button"
              onClick={() => scrollToId("agendar")}
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-[#F3CE63] to-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#0B0C0E] shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              Agendar agora
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              data-testid="hero-whatsapp-button"
              href={waLink("Olá, Dhow! Quero saber mais sobre os horários disponíveis.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#25D366]/40 px-7 py-3.5 text-sm font-semibold text-[#25D366] transition-colors duration-300 hover:bg-[#25D366]/10"
            >
              <MessageCircle className="h-4 w-4" />
              Chamar no zap
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/20 bg-[#14161B]/80 px-4 py-2"
            data-testid="hero-status-pill"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22C55E] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
            </span>
            <span className="text-xs text-cream-muted">Seg a Sáb · 09h às 20h — agende e chegue no seu horário</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: EASE }}
          className="col-span-12 lg:col-span-5"
        >
          <motion.div style={{ y, rotate }} className="relative" data-testid="hero-visual-card">
            <div className="absolute -inset-3 rotate-2 rounded-3xl border border-[#D4AF37]/30" />
            <div className="absolute -inset-3 -rotate-1 rounded-3xl border border-[#D4AF37]/10" />
            <div className="relative overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
              <img
                src={HERO_IMG}
                alt="Cliente na cadeira da Dhow Barbearia durante atendimento"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/85 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">A partir de</p>
                  <p className="font-heading text-4xl font-bold text-cream">R$ 15</p>
                </div>
                <div className="rounded-full border border-[#D4AF37]/30 bg-[#0B0C0E]/70 px-4 py-2 backdrop-blur-md">
                  <p className="text-xs text-cream">Toalha quente & navalha</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

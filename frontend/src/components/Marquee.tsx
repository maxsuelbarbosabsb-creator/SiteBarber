const ITEMS = [
  "CORTE MASCULINO R$ 25",
  "BARBA COM TOALHA QUENTE R$ 15",
  "COMBO COMPLETO R$ 35",
  "NAVALHA DESCARTÁVEL & HIGIENE TOTAL",
  "CAFÉ EXPRESSO & BEBIDA GELADA",
  "SEM FILAS — AGENDAMENTO RÁPIDO NO WHATSAPP",
  "DHOW BARBEARIA",
];

export const Marquee = () => (
  <div data-testid="editorial-marquee" className="overflow-hidden border-y border-[#D4AF37]/15 bg-[#14161B]/60 py-5">
    <div className="animate-marquee flex w-max whitespace-nowrap">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
          {ITEMS.map((item) => (
            <span key={`${copy}-${item}`} className="flex items-center">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream-muted">{item}</span>
              <span className="mx-8 text-gold">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

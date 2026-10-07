import { motion } from "motion/react";
import { Check, Scissors, Star } from "lucide-react";
import { SERVICES } from "@/lib/constants";

interface ServicesProps {
  onBook: (serviceId: string) => void;
}

export const Services = ({ onBook }: ServicesProps) => (
  <section id="servicos" data-testid="services-section" className="relative py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mb-14 max-w-2xl"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">Serviços & Preços</p>
        <h2 className="font-heading text-4xl tracking-tight text-cream sm:text-5xl">
          Preço justo, <span className="gold-text italic">acabamento de mestre</span>
        </h2>
        <p className="mt-4 text-base text-cream-muted sm:text-lg">
          Sem taxa escondida, sem surpresa na hora de pagar. Você escolhe, a gente executa.
        </p>
      </motion.div>

      <div className="grid grid-cols-12 gap-6">
        {SERVICES.map((service, i) => (
          <motion.article
            key={service.id}
            data-testid={`service-card-${service.id}`}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className={`group relative col-span-12 flex flex-col overflow-hidden rounded-2xl border bg-[#181B22] transition-[border-color,box-shadow] duration-500 md:col-span-4 ${
              service.highlight
                ? "border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.12)]"
                : "border-[#282C37] hover:border-[#D4AF37]/40 hover:shadow-[0_0_25px_rgba(212,175,55,0.1)]"
            }`}
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={service.image}
                alt={service.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181B22] via-transparent to-transparent" />
              <span className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-[#0B0C0E]/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-bright backdrop-blur-md">
                {service.highlight && <Star className="h-3 w-3 fill-[#F3CE63] text-[#F3CE63]" />}
                {service.badge}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-heading text-2xl text-cream">{service.name}</h3>
                <div className="text-right">
                  <p className="font-heading text-3xl font-bold text-gold-bright" data-testid={`service-price-${service.id}`}>
                    R$ {service.price}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-cream-muted">{service.duration}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-cream-muted">{service.description}</p>
              <ul className="mt-5 space-y-2">
                {service.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-sm text-cream-muted">
                    <Check className="h-3.5 w-3.5 text-gold" />
                    {perk}
                  </li>
                ))}
              </ul>
              <button
                data-testid={`service-book-${service.id}`}
                onClick={() => onBook(service.id)}
                className={`mt-6 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-transform duration-300 hover:scale-[1.03] active:scale-95 ${
                  service.highlight
                    ? "bg-gradient-to-r from-[#F3CE63] to-[#D4AF37] text-[#0B0C0E]"
                    : "border border-[#D4AF37]/35 text-gold-bright hover:bg-[#D4AF37]/10"
                }`}
              >
                <Scissors className="h-4 w-4" />
                Agendar este
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

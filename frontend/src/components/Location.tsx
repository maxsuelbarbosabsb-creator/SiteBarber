import { motion } from "motion/react";
import { Clock, Copy, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { WHATSAPP_DISPLAY, waLink } from "@/lib/constants";

const HOURS = [
  { day: "Segunda a Sexta", time: "09h — 20h" },
  { day: "Sábado", time: "09h — 20h" },
  { day: "Domingo", time: "Fechado" },
];

export const Location = () => {
  const copyPhone = () => {
    navigator.clipboard.writeText(WHATSAPP_DISPLAY).catch(() => {});
    toast.success("Número copiado!");
  };

  return (
    <section id="contato" data-testid="location-section" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">Horários & Contato</p>
          <h2 className="font-heading text-4xl tracking-tight text-cream sm:text-5xl">
            Passa aqui que a <span className="gold-text italic">cadeira é sua</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#282C37] bg-[#14161B] p-7"
            data-testid="location-hours-card"
          >
            <Clock className="mb-4 h-6 w-6 text-gold" />
            <h3 className="font-heading text-2xl text-cream">Funcionamento</h3>
            <ul className="mt-5 space-y-3">
              {HOURS.map((h) => (
                <li key={h.day} className="flex items-center justify-between border-b border-dashed border-[#282C37] pb-3 text-sm last:border-0">
                  <span className="text-cream-muted">{h.day}</span>
                  <span className={h.time === "Fechado" ? "font-mono text-[#EF4444]" : "font-mono text-gold-bright"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-[#282C37] bg-[#14161B] p-7"
            data-testid="location-address-card"
          >
            <MapPin className="mb-4 h-6 w-6 text-gold" />
            <h3 className="font-heading text-2xl text-cream">Onde estamos</h3>
            <p className="mt-5 text-sm leading-relaxed text-cream-muted">
              Goiânia — GO
              <br />
              Atendimento com agendamento prévio,
              <br />
              sem fila e sem espera.
            </p>
            <p className="mt-4 font-mono text-xs text-cream-muted">
              O endereço exato é confirmado no WhatsApp na hora do agendamento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col rounded-2xl border border-[#D4AF37]/30 bg-[#2A2312]/40 p-7"
            data-testid="location-whatsapp-card"
          >
            <Phone className="mb-4 h-6 w-6 text-gold-bright" />
            <h3 className="font-heading text-2xl text-cream">Fala com a gente</h3>
            <button
              data-testid="location-copy-phone-button"
              onClick={copyPhone}
              className="mt-5 flex items-center gap-2 text-left font-mono text-lg text-gold-bright transition-colors hover:text-cream"
            >
              {WHATSAPP_DISPLAY}
              <Copy className="h-4 w-4" />
            </button>
            <a
              data-testid="location-whatsapp-button"
              href={waLink("Olá, Dhow! Vim pelo site e quero agendar um horário.")}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#0B0C0E] shadow-[0_10px_25px_rgba(37,211,102,0.3)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

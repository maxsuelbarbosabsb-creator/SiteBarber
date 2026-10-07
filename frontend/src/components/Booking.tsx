import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { CalendarDays, Clock, MessageCircle, Pencil, User } from "lucide-react";
import { apiPost } from "@/lib/api";
import {
  BARBERS,
  SERVICES,
  TIME_SLOTS,
  WHATSAPP_DISPLAY,
  formatDateBR,
  isSlotBusy,
  isSunday,
  todayISO,
  tomorrowISO,
  waLink,
} from "@/lib/constants";

interface BookingProps {
  service: string;
  onServiceChange: (id: string) => void;
}

export const Booking = ({ service, onServiceChange }: BookingProps) => {
  const [barber, setBarber] = useState(BARBERS[0]);
  const [date, setDate] = useState(todayISO());
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  const svc = SERVICES.find((s) => s.id === service) ?? SERVICES[2];
  const sunday = isSunday(date);

  const handleConfirm = () => {
    if (!name.trim()) {
      toast.error("Diz seu nome pra gente te atender direito!");
      return;
    }
    if (sunday) {
      toast.error("Domingo a casa fecha. Escolha outro dia.");
      return;
    }
    if (!time) {
      toast.error("Escolha um horário disponível.");
      return;
    }
    const message = [
      "Olá, Dhow! Quero agendar um horário:",
      "",
      `*Cliente:* ${name.trim()}`,
      `*Serviço:* ${svc.name} (R$ ${svc.price})`,
      `*Barbeiro:* ${barber}`,
      `*Data:* ${formatDateBR(date)}`,
      `*Horário:* ${time}`,
      notes.trim() ? `*Obs:* ${notes.trim()}` : "",
      "",
      "Posso confirmar?",
    ]
      .filter(Boolean)
      .join("\n");

    apiPost("/bookings", {
      name: name.trim(),
      service: svc.name,
      price: svc.price,
      barber,
      date,
      time,
      notes: notes.trim(),
    }).catch(() => {});

    window.open(waLink(message), "_blank");
    toast.success("Abrindo o WhatsApp pra confirmar seu agendamento...");
  };

  return (
    <section id="agendar" data-testid="booking-section" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#D4AF37]/8 blur-[160px]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">Agendamento</p>
          <h2 className="font-heading text-4xl tracking-tight text-cream sm:text-5xl">
            Escolha, confirme e <span className="gold-text italic">chame no zap</span>
          </h2>
          <p className="mt-4 text-base text-cream-muted sm:text-lg">
            Monte seu horário em segundos. O pedido chega pronto no nosso WhatsApp {WHATSAPP_DISPLAY}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-[#D4AF37]/20 bg-[#14161B]/95 p-6 backdrop-blur-2xl sm:p-8 lg:col-span-3"
          >
            <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
              01 · Serviço
            </p>
            <div className="grid grid-cols-3 gap-2" data-testid="booking-service-selector">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  data-testid={`booking-service-${s.id}`}
                  onClick={() => onServiceChange(s.id)}
                  className={`relative rounded-xl border px-3 py-3.5 text-sm font-semibold transition-colors duration-300 ${
                    service === s.id
                      ? "border-[#D4AF37] bg-[#2A2312] text-gold-bright"
                      : "border-[#282C37] text-cream-muted hover:border-[#D4AF37]/40"
                  }`}
                >
                  {s.short}
                  <span className="block font-mono text-[10px] font-normal tracking-widest opacity-80">R$ {s.price}</span>
                </button>
              ))}
            </div>

            <p className="mt-8 mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
              02 · Barbeiro
            </p>
            <div className="grid grid-cols-2 gap-2" data-testid="booking-barber-selector">
              {BARBERS.map((b) => (
                <button
                  key={b}
                  data-testid={`booking-barber-${b === BARBERS[0] ? "dhow" : "lucas"}`}
                  onClick={() => setBarber(b)}
                  className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-colors duration-300 ${
                    barber === b
                      ? "border-[#D4AF37] bg-[#2A2312] text-gold-bright"
                      : "border-[#282C37] text-cream-muted hover:border-[#D4AF37]/40"
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>

            <p className="mt-8 mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
              <CalendarDays className="h-3.5 w-3.5" /> 03 · Data
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                data-testid="booking-date-today"
                onClick={() => setDate(todayISO())}
                className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                  date === todayISO() ? "border-[#D4AF37] bg-[#2A2312] text-gold-bright" : "border-[#282C37] text-cream-muted hover:border-[#D4AF37]/40"
                }`}
              >
                Hoje
              </button>
              <button
                data-testid="booking-date-tomorrow"
                onClick={() => setDate(tomorrowISO())}
                className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                  date === tomorrowISO() ? "border-[#D4AF37] bg-[#2A2312] text-gold-bright" : "border-[#282C37] text-cream-muted hover:border-[#D4AF37]/40"
                }`}
              >
                Amanhã
              </button>
              <input
                data-testid="booking-date-input"
                type="date"
                value={date}
                min={todayISO()}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-full border border-[#282C37] bg-[#0B0C0E] px-4 py-2 text-sm text-cream [color-scheme:dark] focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            {sunday && (
              <p className="mt-2 text-xs text-[#EF4444]" data-testid="booking-sunday-warning">
                Domingo a barbearia fecha — escolha outro dia.
              </p>
            )}

            <p className="mt-8 mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
              <Clock className="h-3.5 w-3.5" /> 04 · Horário
            </p>
            <div className="grid grid-cols-4 gap-2 sm:grid-cols-6" data-testid="booking-time-grid">
              {TIME_SLOTS.map((slot) => {
                const busy = isSlotBusy(date, slot);
                const selected = time === slot;
                return (
                  <button
                    key={slot}
                    data-testid={`booking-slot-${slot.replace(":", "")}`}
                    disabled={busy}
                    onClick={() => setTime(slot)}
                    className={`rounded-lg border py-2 font-mono text-xs transition-colors duration-300 ${
                      busy
                        ? "cursor-not-allowed border-[#282C37]/50 text-cream-muted/30 line-through"
                        : selected
                          ? "border-[#D4AF37] bg-gradient-to-r from-[#F3CE63] to-[#D4AF37] font-bold text-[#0B0C0E]"
                          : "border-[#282C37] text-cream-muted hover:border-[#D4AF37]/50 hover:text-cream"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>

            <p className="mt-8 mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
              <User className="h-3.5 w-3.5" /> 05 · Seus dados
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                data-testid="booking-name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className="rounded-xl border border-[#282C37] bg-[#0B0C0E] px-4 py-3 text-sm text-cream placeholder:text-cream-muted/50 focus:border-[#D4AF37] focus:outline-none"
              />
              <div className="relative">
                <Pencil className="absolute top-3.5 left-4 h-4 w-4 text-cream-muted/50" />
                <input
                  data-testid="booking-notes-input"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Obs: degradê, barba só alinhada..."
                  className="w-full rounded-xl border border-[#282C37] bg-[#0B0C0E] py-3 pr-4 pl-11 text-sm text-cream placeholder:text-cream-muted/50 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 rounded-2xl border border-[#D4AF37]/25 bg-[#181B22] p-6 sm:p-8" data-testid="booking-summary-card">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">Resumo do agendamento</p>
              <div className="mt-5 space-y-3 border-b border-dashed border-[#D4AF37]/25 pb-5 font-mono text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-cream-muted">Serviço</span>
                  <span className="text-right text-cream">{svc.name}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-cream-muted">Barbeiro</span>
                  <span className="text-right text-cream">{barber.split(" — ")[0]}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-cream-muted">Data</span>
                  <span className="text-right text-cream capitalize">{formatDateBR(date)}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-cream-muted">Horário</span>
                  <span className="text-cream">{time ?? "—"}</span>
                </div>
              </div>
              <div className="mt-5 flex items-end justify-between">
                <span className="text-sm text-cream-muted">Total</span>
                <span className="font-heading text-4xl font-bold text-gold-bright" data-testid="booking-total-price">
                  R$ {svc.price}
                </span>
              </div>
              <button
                data-testid="booking-confirm-button"
                onClick={handleConfirm}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-[#0B0C0E] shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                Confirmar no WhatsApp
              </button>
              <p className="mt-3 text-center text-xs text-cream-muted">
                Cai direto no {WHATSAPP_DISPLAY} com tudo preenchido
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

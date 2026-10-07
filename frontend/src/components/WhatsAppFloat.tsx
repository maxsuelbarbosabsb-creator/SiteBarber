import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/constants";

export const WhatsAppFloat = () => (
  <motion.a
    data-testid="whatsapp-float-button"
    href={waLink("Olá, Dhow! Quero agendar um horário.")}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 18 }}
    className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-semibold text-[#0B0C0E] shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-105 active:scale-95 sm:right-6 sm:bottom-6"
    aria-label="Chamar no WhatsApp"
  >
    <span className="relative flex h-6 w-6 items-center justify-center">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
      <MessageCircle className="relative h-6 w-6" />
    </span>
    <span className="hidden text-sm sm:block">Chamar no zap</span>
  </motion.a>
);

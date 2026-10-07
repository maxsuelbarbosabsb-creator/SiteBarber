export const WHATSAPP_NUMBER = "5562982564548";
export const WHATSAPP_DISPLAY = "(62) 98256-4548";

export interface Service {
  id: string;
  name: string;
  short: string;
  price: number;
  duration: string;
  description: string;
  perks: string[];
  image: string;
  imageAlt: string;
  highlight?: boolean;
  badge: string;
}

export const SERVICES: Service[] = [
  {
    id: "corte",
    name: "Corte Masculino",
    short: "Corte",
    price: 25,
    duration: "30 min",
    description:
      "Degradê impecável, navalhado ou tesoura clássica. Finalização com pomada modeladora e alinhamento milimétrico dos fios.",
    perks: ["Degradê / Fade", "Tesoura clássica", "Lavagem & finalização", "Pomada matte ou brilho"],
    image:
      "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW0lMjBiYXJiZXIlMjBzdHJhaWdodCUyMHJhem9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzg4NzEyMDc4fDA&ixlib=rb-4.1.0&q=85",
    imageAlt: "Barbeiro finalizando corte masculino na tesoura",
    badge: "Mais pedido no dia a dia",
  },
  {
    id: "barba",
    name: "Barba Terapia & Navalha",
    short: "Barba",
    price: 15,
    duration: "25 min",
    description:
      "Desenho e alinhamento com toalha quente aromatizada, hidratação com óleo artesanal e navalha descartável.",
    perks: ["Toalha quente", "Óleo hidratante", "Alinhamento no navalhete", "Pós-barba refrescante"],
    image:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxiZWFyZCUyMHRyaW0lMjBiYXJiZXIlMjBzdHJhaWdodCUyMHJhem9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzg4NzEyMDc4fDA&ixlib=rb-4.1.0&q=85",
    imageAlt: "Alinhamento de barba na navalha em preto e branco",
    badge: "Tradição & toalha quente",
  },
  {
    id: "combo",
    name: "Combo Dhow (Corte + Barba)",
    short: "Combo",
    price: 35,
    duration: "50 min",
    description:
      "A experiência completa: corte na tesoura ou máquina + barba com toalha quente e pomada premium. Economia de R$ 5.",
    perks: ["Corte completo + barboterapia", "Economia direta no bolso", "Finalização premium", "Bebida cortesia"],
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxiZWFyZCUyMHRyaW0lMjBiYXJiZXIlMjBzdHJhaWdodCUyMHJhem9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzg4NzEyMDc4fDA&ixlib=rb-4.1.0&q=85",
    imageAlt: "Barbeiro tatuado alinhando corte com navalha",
    highlight: true,
    badge: "Mais escolhido da casa",
  },
];

export const BARBERS = ["Dhow — Mestre da Casa", "Lucas Navalha"];

export const TIME_SLOTS: string[] = (() => {
  const slots: string[] = [];
  for (let h = 9; h < 20; h++) {
    slots.push(`${String(h).padStart(2, "0")}:00`);
    slots.push(`${String(h).padStart(2, "0")}:30`);
  }
  return slots;
})();

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const toISO = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export const todayISO = () => toISO(new Date());

export const tomorrowISO = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return toISO(d);
};

export const isSunday = (iso: string) => new Date(`${iso}T12:00:00`).getDay() === 0;

export const formatDateBR = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

export const isSlotBusy = (dateISO: string, time: string) => {
  const s = dateISO + time;
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % 4 === 0;
};

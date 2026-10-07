import { motion } from "motion/react";
import { Star } from "lucide-react";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMHRyaW0lMjBiYXJiZXIlMjBzdHJhaWdodCUyMHJhem9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzg4NzEyMDc4fDA&ixlib=rb-4.1.0&q=85",
    caption: "Tesoura & precisão",
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxiZWFyZCUyMHRyaW0lMjBiYXJiZXIlMjBzdHJhaWdodCUyMHJhem9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzg4NzEyMDc4fDA&ixlib=rb-4.1.0&q=85",
    caption: "Navalha no alinhamento",
  },
  {
    src: "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxiZWFyZCUyMHRyaW0lMjBiYXJiZXIlMjBzdHJhaWdodCUyMHJhem9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzg4NzEyMDc4fDA&ixlib=rb-4.1.0&q=85",
    caption: "Barba no navalhete",
  },
  {
    src: "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBjaGFpciUyMG1pcnJvciUyMHZpbnRhZ2V8ZW58MHx8fHwxNzg4NDQ3NzIwfDA&ixlib=rb-4.1.0&q=85",
    caption: "O espaço Dhow",
  },
  {
    src: "https://images.unsplash.com/photo-1614010966237-74489a16848b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxiYXJiZXJzaG9wJTIwZGFyayUyMG1vb2R5JTIwaGFpcmN1dCUyMGJhcmJlcnxlbnwwfHx8fDE3OTEzODg2Njh8MA&ixlib=rb-4.1.0&q=85",
    caption: "Estilo pronto",
  },
  {
    src: "https://images.unsplash.com/photo-1629881544138-c45fc917eb81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBjaGFpciUyMG1pcnJvciUyMHZpbnRhZ2V8ZW58MHx8fHwxNzg4NDQ3NzIwfDA&ixlib=rb-4.1.0&q=85",
    caption: "Cadeira do mestre",
  },
];

const QUOTES = [
  { text: "Melhor custo-benefício de Goiânia. Corte impecável por 25 conto, sem enrolação.", author: "Rafael M." },
  { text: "A toalha quente da barba virou ritual de sexta-feira. Não troco por nada.", author: "Diego A." },
  { text: "Agendei no zap, cheguei, sentei e saí outro homem. Sem fila nenhuma.", author: "Caio H." },
];

export const Gallery = () => (
  <section id="galeria" data-testid="gallery-section" className="py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mb-14 max-w-2xl"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">Galeria & Atmosfera</p>
        <h2 className="font-heading text-4xl tracking-tight text-cream sm:text-5xl">
          O trabalho <span className="gold-text italic">fala por si</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {PHOTOS.map((photo, i) => (
          <motion.figure
            key={photo.caption}
            data-testid={`gallery-item-${i}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-[#282C37]"
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              className="h-56 w-full object-cover grayscale-[35%] sepia-[15%] transition-[transform,filter] duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:sepia-0 sm:h-64"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0C0E]/90 to-transparent p-4 pt-10">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-bright">{photo.caption}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {QUOTES.map((quote, i) => (
          <motion.blockquote
            key={quote.author}
            data-testid={`quote-card-${i}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl border border-[#282C37] bg-[#14161B] p-6"
          >
            <div className="mb-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-cream-muted">"{quote.text}"</p>
            <footer className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-gold">— {quote.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
);

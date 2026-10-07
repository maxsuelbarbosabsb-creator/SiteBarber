import { motion } from "motion/react";

const STATS = [
  { value: "10+", label: "anos de navalha" },
  { value: "5.000+", label: "cortes entregues" },
  { value: "4.9", label: "nota média dos clientes" },
];

export const About = () => (
  <section id="sobre" data-testid="about-section" className="py-24 sm:py-32">
    <div className="mx-auto grid max-w-7xl grid-cols-12 items-center gap-12 px-5 sm:px-8">
      <motion.div
        initial={{ opacity: 0, x: -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative col-span-12 lg:col-span-5"
      >
        <div className="absolute -inset-3 -rotate-2 rounded-3xl border border-[#D4AF37]/25" />
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1592647420148-bfcc177e2117?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBjaGFpciUyMG1pcnJvciUyMHZpbnRhZ2V8ZW58MHx8fHwxNzg4NDQ3NzIwfDA&ixlib=rb-4.1.0&q=85"
            alt="Interior clássico da Dhow Barbearia com cadeira de couro"
            loading="lazy"
            className="h-[420px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C0E]/70 via-transparent to-transparent" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="col-span-12 lg:col-span-7"
      >
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-gold">O Espaço & os Barbeiros</p>
        <h2 className="font-heading text-4xl tracking-tight text-cream sm:text-5xl">
          A Dhow nasceu da obsessão pela <span className="gold-text italic">arte da barbearia</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-muted sm:text-lg">
          Aqui, cada cliente tem atenção individual, pontualidade britânica e o melhor custo-benefício de Goiás.
          Ambiente climatizado, som de bom gosto, café passado na hora e bebida trincando enquanto você espera —
          se é que espera.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream-muted">
          Navalha descartável a cada atendimento, bancada esterilizada e aquele acabamento que só quem vive o ofício
          entrega. Tradição de barbearia clássica com a precisão que o seu estilo pede.
        </p>
        <div className="mt-10 grid grid-cols-3 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} data-testid={`about-stat-${stat.label.split(" ")[0]}`}>
              <p className="font-heading text-4xl font-bold text-gold-bright sm:text-5xl">{stat.value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

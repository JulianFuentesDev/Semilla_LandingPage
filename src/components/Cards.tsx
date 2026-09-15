"use client";

import { Layers, Maximize2, Sparkles, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  hoverCard,
  sectionReveal,
  springHover,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

const CARDS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: Sparkles,
    title: "Bordado Premium",
    body: "Personaje 'Semilla' bordado en formato pequeño (8-10cm). Divertido, sofisticado. Sin exagerar.",
  },
  {
    icon: Layers,
    title: "Heavyweight 220-260 g/m²",
    body: "Algodón peinado de alto gramaje. Caída perfecta. Estructura que dura.",
  },
  {
    icon: Maximize2,
    title: "Oversized con horma",
    body: "Amplio de cuerpo, con el hombro en su sitio y buena caída. Holgura medida, no una silueta sin forma.",
  },
];

export function Cards() {
  return (
    <section id="specs" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-[#ededed]">
            Hecho diferente.
          </h2>
          <p className="mt-3 text-base text-neutral-400">
            Cada decisión tiene una razón.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                variants={staggerItem}
                whileHover={hoverCard}
                transition={springHover}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
              >
                <Icon
                  className="mb-6 h-5 w-5 text-[#f5f0e8]"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <h3 className="text-lg font-semibold tracking-tight text-[#ededed]">
                  {card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-400">
                  {card.body}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

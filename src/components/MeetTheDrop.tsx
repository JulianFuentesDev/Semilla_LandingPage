"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  comingSoonBadge,
  comingSoonCard,
  easeOut,
  viewportHalf,
  viewportOnce,
} from "@/lib/motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
} as const;

export function MeetTheDrop() {
  return (
    <section id="meet-the-drop" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest text-neutral-400 uppercase mb-4">
            Drop 01 — El personaje
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#ededed] mb-4">
            Conoce al protagonista.
          </h2>
          <p className="text-neutral-400 text-base">
            Cada prenda tiene una historia.
          </p>
        </motion.div>

        {/* Character Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Card 1: Semilla Spidi */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ededed]">
              Semilla Spidi
            </h3>

            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="my-8"
            >
              <Image
                src="/characters/character-left.png"
                alt="Semilla Spidi"
                width={500}
                height={500}
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </motion.div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Tiene el traje, tiene el barrio y tiene más problemas de los que
              pidió. No tiene el apartamento, ni la novia, ni el reconocimiento.
              Es el vecino que llega tarde a todo porque siempre está salvando a
              alguien. Semilla Spidi no eligió esto — pero tampoco lo cambiaría.
            </p>
          </motion.div>

          {/* Card 2: Semilla Ing — sin revelar.
              `whileHover` por etiqueta para que el estado llegue al badge;
              el velo de la imagen es CSS puro (group-hover), que Tailwind
              encierra en @media (hover: hover) y por tanto nunca se queda
              pegado tras un tap en móvil. */}
          <motion.div
            variants={comingSoonCard}
            initial="hidden"
            whileInView="visible"
            whileHover="hovered"
            viewport={viewportHalf}
            role="group"
            aria-label="Semilla Ing — próximamente"
            className="group rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col items-center text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-[#ededed]">
              Semilla Ing
            </h3>

            <div className="relative my-8">
              <motion.div
                animate={{ rotate: [2, -2, 2] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Image
                  src="/characters/semilla-usb.png"
                  alt="Silueta difuminada de Semilla Ing, el segundo personaje del universo Semilla, todavía sin revelar"
                  width={512}
                  height={512}
                  className="w-48 h-48 md:w-64 md:h-64 object-contain blur-md opacity-60 saturate-50 transition-[filter,opacity] duration-500 group-hover:blur-sm group-hover:opacity-70"
                />
              </motion.div>

              <motion.span
                variants={comingSoonBadge}
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-[#ededed] backdrop-blur-md"
              >
                Próximamente
              </motion.span>
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Segundo personaje del universo Semilla.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import type { Transition, Variants } from "framer-motion";

export const easeOut = "easeOut" as const;

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const heroWordContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const heroSubhead: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 0.7, ease: easeOut },
  },
};

export const heroCtas: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.7, duration: 0.7, ease: easeOut },
  },
};

export const viewportOnce = { once: true } as const;

/** Medio visible antes de disparar: en móvil el scroll basta para activarlo. */
export const viewportHalf = { once: true, amount: 0.5 } as const;

/**
 * Card de personaje sin revelar.
 *
 * El estado `hovered` se activa por etiqueta desde la propia card, de modo que
 * Framer Motion lo propaga a sus hijos con variantes — así el badge reacciona
 * al cursor sobre toda la card y no solo sobre sí mismo. El gesto de hover de
 * Framer Motion ignora los eventos táctiles, de manera que en móvil nunca se
 * dispara sin necesidad de detectar el dispositivo.
 */
export const comingSoonCard: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
  hovered: { scale: 1.02, y: -4, transition: { type: "spring", stiffness: 250 } },
};

/**
 * Badge "PRÓXIMAMENTE" sobre la imagen velada. Al entrar solo anima opacidad
 * y `y`, así que con `reducedMotion="user"` Framer Motion descarta el
 * desplazamiento y el badge simplemente aparece.
 */
export const comingSoonBadge: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: 0.2, ease: easeOut },
  },
  hovered: { scale: 1.04, transition: { type: "spring", stiffness: 250 } },
};

export const floatTransition: Transition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut",
};

export const floatAnimate = { y: [0, -8, 0] };

export const springHover: Transition = {
  type: "spring",
  stiffness: 300,
};

export const hoverCard = { scale: 1.03 };
export const hoverCta = { scale: 1.05 };

export const hoverCtaGlow = {
  scale: 1.05,
  boxShadow: "0 0 40px rgba(245,240,232,0.3)",
};

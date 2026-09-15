/**
 * Precio de venta del Drop 01. Única fuente de verdad: si cambia el precio,
 * se cambia aquí y en ningún otro sitio.
 */
export const PRICE_COP = 89900;

/**
 * Formatea un valor en pesos colombianos: 89900 -> "$89.900".
 *
 * El separador de miles se aplica a mano en vez de con `toLocaleString`
 * para que el servidor y el cliente produzcan exactamente la misma cadena
 * sin depender del ICU disponible en cada entorno.
 */
export function formatPriceCOP(value: number = PRICE_COP): string {
  const withSeparators = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return `$${withSeparators}`;
}

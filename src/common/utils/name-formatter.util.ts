/**
 * Utilidad para normalizar y formatear nombres y apellidos
 * Aplica trim y proper case, considerando casos especiales en apellidos españoles
 */

// Palabras que deben permanecer en minúscula en apellidos (partículas, preposiciones, conjunciones)
const LOWERCASE_PARTICLES = [
  'de',
  'del',
  'de la',
  'de las',
  'de los',
  'del carmen',
  'y',
  'e',
  'van',
  'von',
  'der',
  'den',
  'la',
  'las',
  'los',
  'el',
];

/**
 * Convierte la primera letra de cada palabra a mayúscula y el resto a minúscula
 * @param word Palabra a capitalizar
 * @returns Palabra capitalizada
 */
function capitalizeWord(word: string): string {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Normaliza un nombre o apellido aplicando trim y proper case
 * Considera casos especiales como "de", "del", "de la", etc.
 *
 * @param text Texto a normalizar
 * @param isLastName Si es apellido (true) o nombre (false) - afecta el tratamiento de partículas
 * @returns Texto normalizado
 *
 * @example
 * normalizeName('  juan   carlos  ') → 'Juan Carlos'
 * normalizeName('MARIA  JOSE') → 'Maria Jose'
 * normalizeName('garcia de la torre', true) → 'Garcia de la Torre'
 * normalizeName('  DEL   CARMEN  ', true) → 'del Carmen'
 */
export function normalizeName(text: string, isLastName: boolean = false): string {
  if (!text || typeof text !== 'string') {
    return text;
  }

  // 1. Trim y normalizar espacios múltiples a uno solo
  let normalized = text.trim().replace(/\s+/g, ' ');

  // 2. Convertir a minúsculas para comparación
  const lowerText = normalized.toLowerCase();

  // 3. Si es apellido, verificar si es una partícula completa
  if (isLastName) {
    // Verificar si el apellido completo es una partícula (ej: "del Carmen")
    if (LOWERCASE_PARTICLES.includes(lowerText)) {
      // Si es "del carmen" específicamente, capitalizar "Carmen"
      if (lowerText === 'del carmen') {
        return 'del Carmen';
      }
      // Otras partículas permanecen en minúscula
      return lowerText;
    }
  }

  // 4. Dividir en palabras y procesar cada una
  const words = normalized.split(' ');
  const processedWords = words.map((word, index) => {
    const lowerWord = word.toLowerCase();

    // Si es apellido y la palabra es una partícula (pero no es la primera palabra)
    if (isLastName && index > 0 && LOWERCASE_PARTICLES.includes(lowerWord)) {
      return lowerWord;
    }

    // Capitalizar la palabra
    return capitalizeWord(word);
  });

  // 5. Unir las palabras procesadas
  return processedWords.join(' ');
}

/**
 * Normaliza un nombre completo (nombre + apellido)
 *
 * @param firstName Nombre(s)
 * @param lastName Apellido(s)
 * @returns Objeto con nombre y apellido normalizados
 *
 * @example
 * normalizeFullName('  juan   carlos  ', 'garcia DE LA torre')
 * → { firstName: 'Juan Carlos', lastName: 'Garcia de la Torre' }
 */
export function normalizeFullName(firstName: string, lastName: string): {
  firstName: string;
  lastName: string;
} {
  return {
    firstName: normalizeName(firstName, false),
    lastName: normalizeName(lastName, true),
  };
}

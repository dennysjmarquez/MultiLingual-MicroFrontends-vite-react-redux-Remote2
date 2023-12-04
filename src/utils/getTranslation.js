import i18n from '../i18n.js'

/**
 * Añade recursos a i18n para cada idioma proporcionado.
 *
 * @param {Object} langs - Un objeto donde las claves son códigos de idioma y los valores son los datos del idioma.
 * @param {string} resourceName - El nombre del recurso que se añadirá a i18n.
 */
export const addResourcesToI18n = (langs, resourceName) => {
	// Para cada idioma en el objeto `langs`
	for (const [lang, data] of Object.entries(langs)) {
		// Añade los datos del idioma a `i18n` con el nombre y la clave del recurso proporcionados
		i18n.addResourceBundle(lang, resourceName, data, true)
	}
}

import { addResourcesToI18n } from '@/utils/getTranslation.js'

// Importa los datos de idioma
import en from './en.json'
import es from './es.json'

// Constantes para los nombres de los recursos
const RESOURCE_NAME = 'components_series'

// Diccionario de idiomas
const langs = { en, es }

// Uso de la función
addResourcesToI18n(langs, RESOURCE_NAME)

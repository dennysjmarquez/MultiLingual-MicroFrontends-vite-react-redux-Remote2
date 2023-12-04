import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {},
	lng: 'es', // idioma por defecto: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
	fallbackLng: 'es', // idioma a utilizar si no se encuentra la traducción en el idioma actual
	ns: ['common'], // namespace (puedes tener varios archivos de traducción)
	defaultNS: 'common', // namespace por defecto
	backend: {
		loadPath: '/locales/{{lng}}/{{ns}}.json' // ruta para cargar los archivos de traducción
	},
	interpolation: {
		escapeValue: false // react already safes from xss
	}
})

export default i18n

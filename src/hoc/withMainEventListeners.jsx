import i18n from 'i18next'
import { useEffect } from 'react'

export const withMainEventListeners = Component => {
	// eslint-disable-next-line react/display-name
	return props => {
		useEffect(() => {
			// eslint-disable-next-line react/prop-types
			const lang = props?.lang ?? i18n.language
			const eventLangChange = ({ detail }) => i18n.changeLanguage(detail.lang)
			window.addEventListener('eventLangChange', eventLangChange)
			i18n.changeLanguage(lang).then()

			return () => {
				window.removeEventListener('eventLangChange', eventLangChange)
			}
		}, [props])

		return <Component {...props} />
	}
}

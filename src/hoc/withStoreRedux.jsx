import { Provider } from 'react-redux'
import { store } from '@/store/index.js'

export const WithStoreRedux = Component => {
	// eslint-disable-next-line react/display-name
	return props => {
		return (
			<Provider store={store}>
				<Component {...props} />
			</Provider>
		)
	}
}

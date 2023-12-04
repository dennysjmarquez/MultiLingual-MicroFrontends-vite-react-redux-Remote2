import movieListReducer from '@/store/reducers/movieList/movieListReducer.js'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		movieList: movieListReducer
	},
	devTools: import.meta.env.MODE !== 'production' // Habilita Redux DevTools en modo de desarrollo
})

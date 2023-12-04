import { MOVIES_DATA } from '@/store/reducers/movieList/movieListActions.js'

const preInitialState = {
	serie: null
}
export default function movieListReducer(state = preInitialState, action) {
	switch (action.type) {
		case MOVIES_DATA:
			return {
				...state,
				serie: action.payload.data['serie']
			}
		default:
			return state
	}
}

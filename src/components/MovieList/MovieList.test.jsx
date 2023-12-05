import * as React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import * as reactRedux from 'react-redux'
import { afterEach, beforeEach, describe, expect, test } from '@jest/globals'
import i18next from 'i18next'
import i18n from 'i18next'
import { getMovies } from '@/store/reducers/movieList/movieListActions.js'
import { MovieList } from '@/components/MovieList/MovieList.jsx'
import { act } from 'react-dom/test-utils'

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn()
}))

jest.mock('@/store/reducers/movieList/movieListActions.js', () => ({
	getMovies: jest.fn().mockImplementation(lang => async dispatch => {})
}))

describe('MovieList', () => {
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
	const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

	beforeEach(() => {
		useSelectorMock.mockClear()
		useDispatchMock.mockClear()
	})

	afterEach(() => {
		useSelectorMock.mockRestore()
		useDispatchMock.mockRestore()
	})

	test('Verifica que MovieList muestra correctamente los datos procesados por un reducer', () => {
		const mockDetailsSerie = {
			serie: 'Rick and Morty',
			year: '2023',
			genre: 'Action • Adventure • Science • Fiction',
			score: 7,
			description: '-description-',
			image: 'image.jpg',
			cast: [
				{
					name: 'Rick Sanchez',
					description:
						'A genius scientist but an alcoholic and sociopath who frequently embarks on dangerous and extravagant adventures with his grandson Morty.'
				},
				{
					name: 'Morty Smith',
					description:
						"Rick's grandson, who is dragged into his grandfather's dangerous adventures. Morty is nervous and easily manipulable."
				}
			]
		}

		useSelectorMock.mockReturnValue(mockDetailsSerie)

		render(<MovieList />)

		// Assert that the movie details card is rendered with the correct data
		expect(screen.queryAllByText(mockDetailsSerie.serie)).not.toHaveLength(0)
		expect(screen.queryAllByText(mockDetailsSerie.year)).not.toHaveLength(0)
		expect(screen.queryAllByText(mockDetailsSerie.genre)).not.toHaveLength(0)
		expect(
			screen.queryAllByText(
				`${'⭐'.repeat(mockDetailsSerie.score)} ${mockDetailsSerie.score}/10`
			)
		).not.toHaveLength(0)
		expect(
			screen.queryAllByText(mockDetailsSerie.description)
		).not.toHaveLength(0)
		expect(screen.queryAllByText('Reparto principal')).not.toHaveLength(0)
		expect(
			screen.queryAllByText(mockDetailsSerie.cast[0].name)
		).not.toHaveLength(0)
		expect(
			screen.queryAllByText(mockDetailsSerie.cast[0].description)
		).not.toHaveLength(0)
		expect(
			screen.queryAllByText(mockDetailsSerie.cast[1].name)
		).not.toHaveLength(0)
		expect(
			screen.queryAllByText(mockDetailsSerie.cast[1].description)
		).not.toHaveLength(0)
	})

	test('Verificar que getMovies se llame al montar MovieList con el idioma correcto', () => {
		render(<MovieList />)
		expect(getMovies).toHaveBeenCalledWith(i18next.language)
	})

	test('Verifica si getMovies se invoca al cambiar el idioma', () => {
		render(<MovieList />)

		// Simulate a language change event
		act(() => {
			i18n.changeLanguage('en')
		})

		expect(getMovies).toHaveBeenCalledWith('en')
	})

	test('Verifica que no se renderiza nada cuando detailsSerie no tiene un valor válido', () => {
		const { container } = render(<MovieList />)

		useSelectorMock.mockReturnValueOnce({})
		expect(container.firstChild).toBeNull()

		useSelectorMock.mockReturnValueOnce(null)
		expect(container.firstChild).toBeNull()

		useSelectorMock.mockReturnValueOnce(undefined)
		expect(container.firstChild).toBeNull()

		useSelectorMock.mockReturnValueOnce('')
		expect(container.firstChild).toBeNull()
	})
})

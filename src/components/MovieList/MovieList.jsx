import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import i18n from '@/i18n.js'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import { getMovies } from '@/store/reducers/movieList/movieListActions.js'
import { withMainEventListeners } from '@/hoc/withMainEventListeners.jsx'
import { WithStoreRedux } from '@/hoc/withStoreRedux.jsx'

// Estilos
import { MovieListStyles } from '@/components/MovieList/styles/movieListStyles.js'

// Textos
import './lang'

const MovieListComponent = () => {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const detailsSerie = useSelector(state => state.movieList.serie)

	useEffect(() => {
		if (!detailsSerie) {
			dispatch(getMovies(i18n.language))
		}
	}, [dispatch, detailsSerie])

	useEffect(() => {
		const handleLanguageChange = lang => {
			dispatch(getMovies(lang))
		}

		i18next.on('languageChanged', handleLanguageChange)

		// Limpiar el evento al desmontar el componente
		return () => {
			i18next.off('languageChanged', handleLanguageChange)
		}
	}, []) // Pasar un array vacío para que se ejecute solo una vez

	if (!detailsSerie?.serie) return null

	const { image, description, serie, year, genre, score, cast } = detailsSerie

	return (
		<>
			<MovieListStyles>
				<div className="card">
					<div className="card__tooltip">
						<p>{t('components_series:promotion.text1')}</p>
						<p>{t('components_series:promotion.text2')}</p>
					</div>
					<div className="card__block1">
						<img className="block1__image" src={image} alt={serie} />
						<div className="block1__details">
							<div className="details__title">
								<h3>{serie}</h3>
							</div>
							<div>{year}</div>
							<div>{genre}</div>
							<div>
								{'⭐'.repeat(score)} {score}/10
							</div>
						</div>
					</div>
					<div className="card__description">{description}</div>
					<div className="card__block2">
						<div className="block2__title">Reparto principal</div>

						<div className="block2__wrap">
							<ul>
								{cast.map(({ name, description }) => (
									<li key={name}>
										<div className="wrap__cast">
											<div className="cast__title">{name}</div>
											<div className="cast__description">{description}</div>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</MovieListStyles>
		</>
	)
}

MovieListComponent.propTypes = {
	lang: PropTypes.string
}

export const MovieList = withMainEventListeners(
	WithStoreRedux(React.memo(MovieListComponent))
)

export const MOVIES_DATA = 'MOVIES_DATA'

/**
 *
 * Esta función despacha una acción al store de Redux con los datos de las series
 * en el idioma seleccionado y requiere el idioma (lang) como parámetro.
 *
 * @param {string} lang - El idioma en el que se deben cargar los datos.
 * @returns {(function(*): Promise<void>)|*}
 */
export const getMovies = lang => async dispatcher => {
	try {
		// Datos de muestra para la serie, disponibles en español e inglés.
		// Estos datos pueden ser reemplazados por datos reales en el futuro.
		const series = {
			es: {
				serie: 'Harry Potter',
				year: '2001-2011',
				genre: 'Fantasía • Aventura • Familia',
				score: 7.6,
				description:
					'“Harry Potter” es una serie de películas basada en los libros de J.K. Rowling que sigue las aventuras de Harry Potter, un joven mago, y sus amigos Hermione Granger y Ron Weasley, todos ellos estudiantes en la Escuela Hogwarts de Magia y Hechicería. La historia principal se centra en la lucha de Harry contra el malvado mago Lord Voldemort, quien busca volverse inmortal y conquistar el mundo mágico.',
				image:
					'https://m.media-amazon.com/images/M/MV5BMzFiZjhjODUtMWJhZi00ZDk5LThjY2ItZjNjYjc0OGVjY2FmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR9,0,380,562_.jpg',
				cast: [
					{
						name: 'Harry Potter',
						description:
							'Interpretado por Daniel Radcliffe, es un mago huérfano que descubre su herencia mágica al cumplir once años. Es conocido en el mundo mágico por ser el único sobreviviente de la maldición asesina de Voldemort.'
					},
					{
						name: 'Hermione Granger',
						description:
							'Interpretada por Emma Watson, es una maga nacida de padres muggles con una gran habilidad para la magia y un agudo intelecto. Es la mejor amiga de Harry y Ron.'
					},
					{
						name: 'Ron Weasley',
						description:
							'Interpretado por Rupert Grint, es el mejor amigo de Harry y Hermione. Proviene de una familia de magos de sangre pura y es conocido por su lealtad y su sentido del humor.'
					}
				]
			},
			en: {
				serie: 'Harry Potter',
				year: '2001-2011',
				genre: 'Fantasy • Adventure • Family',
				score: 7.6,
				description:
					"“Harry Potter” is a film series based on the books by J.K. Rowling that follows the adventures of Harry Potter, a young wizard, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story focuses on Harry's fight against the evil wizard Lord Voldemort, who seeks to become immortal and conquer the magical world.",
				image:
					'https://m.media-amazon.com/images/M/MV5BMzFiZjhjODUtMWJhZi00ZDk5LThjY2ItZjNjYjc0OGVjY2FmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_QL75_UY562_CR9,0,380,562_.jpg',
				cast: [
					{
						name: 'Harry Potter',
						description:
							"Played by Daniel Radcliffe, he is an orphaned wizard who discovers his magical heritage at the age of eleven. He is known in the magical world for being the only survivor of Voldemort's killing curse."
					},
					{
						name: 'Hermione Granger',
						description:
							"Played by Emma Watson, she is a witch born to muggle parents with a great aptitude for magic and a sharp intellect. She is Harry and Ron's best friend."
					},
					{
						name: 'Ron Weasley',
						description:
							"Played by Rupert Grint, he is Harry and Hermione's best friend. He comes from a pure-blood wizard family and is known for his loyalty and sense of humor."
					}
				]
			}
		}

		dispatcher({
			type: MOVIES_DATA,
			payload: { data: { serie: series[lang] || [] } }
		})
	} catch (error) {
		/* empty */
	}
}

import styled, { css } from 'styled-components'

const movieListStyles = css`
  .card {
    /* Estilos para la tarjeta */

    & .card__tooltip {
      
      margin-bottom: 20px;
      color: rgb(255, 255, 255);
      border-radius: 12px;
      box-shadow: none;
      background-image: none;
      transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      background-color: rgb(16, 20, 24);
      display: block;
      padding: 12px;
      border: 2px solid rgb(51, 153, 255);
    }

    & .card__block1 {
      display: flex;
      margin-bottom: 12px;

      & .block1__image {
        max-width: 72px;
      }

      & .block1__details {
        display: flex;
        padding-left: 12px;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;

        & .details__title {
          font-weight: 600;
          color: #ffffff;

          & h3 {
            font-size: 24px;
            margin: 0;
          }
        }
      }
    }

    .card__description {
      margin-bottom: 12px;
      color: #ffffff;
    }

    .card__block2 {
      & .block2__title {
        color: #fff;
        font-weight: bold;
      }

      & .block2__wrap {
        margin: 12px 0;

        & .wrap__cast {
          margin-bottom: 20px;

          & .cast__title {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`

export const MovieListStyles = styled.div`
	box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
		0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
	border-radius: 5px;
	padding: 1.5rem;
	background-color: #1f1f1f;
	color: rgba(255, 255, 255, 0.7);
	font-family: Roboto, Helvetica, Arial, sans-serif;

	${movieListStyles}
`

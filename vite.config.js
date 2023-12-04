import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname) // Define la ruta del directorio raíz del proyecto.

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(projectRootDir, `src`) // Define un alias para la ruta del directorio src.
		}
	},
	plugins: [
		react(),
		federation({
			// Configura el plugin de Module Federation.
			name: 'remoteMovieList2', // Define el nombre del remoto.
			filename: 'remoteEntry.js', // Define el nombre del archivo de entrada remoto.
			exposes: {
				// Define los módulos que se exponen.
				'./MovieList': './src/components/MovieList'
			},
			shared: ['react', 'react-dom', 'react-redux'] // Define los módulos compartidos.
		})
	],
	build: {
		// Configura las opciones de construcción.
		modulePreload: false, // Deshabilita la precarga de módulos.
		target: 'esnext', // Establece el objetivo de compilación en esnext.
		minify: false, // Deshabilita la minificación.
		cssCodeSplit: false // Deshabilita la división de código CSS.
	}
})

// src/main.js
import { SearchBar } from './components/SearchBar.js'
import { Gallery, renderImages } from './components/Gallery.js'
import { fetchImages } from './components/fetchImages.js'
import { clearErrorMessage, showErrorMessage } from './components/messages.js'

// Contenedor principal donde se insertarán los componentes
const app = document.getElementById('app')

// Agrega el buscador y la galería al DOM
app.appendChild(SearchBar(handleSearch))
app.appendChild(Gallery())

/**
 * Función principal que se ejecuta al realizar una búsqueda.
 * Realiza la petición a la API y maneja la respuesta.
 * @param {string} query - Término de búsqueda ingresado.
 */
async function handleSearch(query) {
  clearErrorMessage()
  try {
    const data = await fetchImages(query)

    // Si no hay resultados se muestra mensaje y se realiza una búsqueda por defecto
    if (!data.results || data.results.length === 0) {
      showErrorMessage(
        'No se encontraron imágenes. Buscando imágenes por defecto.'
      )
      const defaultData = await fetchImages('default')
      renderImages(defaultData.results)
    } else {
      renderImages(data.results)
    }
  } catch (error) {
    showErrorMessage('Hubo un error al realizar la búsqueda.')
  }
}

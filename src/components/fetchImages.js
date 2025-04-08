// src/components/fetchImages.js
import { createApi } from 'unsplash-js'

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
})

/**
 * Realiza la petición a Unsplash para buscar imágenes.
 * @param {string} query - Término de búsqueda.
 * @returns {Promise<Object>} - Objeto con la respuesta de la API.
 */
export async function fetchImages(query) {
  try {
    // Realiza la búsqueda usando unsplash-js
    const result = await unsplash.search.getPhotos({
      query,
      perPage: 10 // Puedes ajustar este valor
    })

    if (result.errors && result.errors.length > 0) {
      console.error('Error en la búsqueda:', result.errors[0])
      return { results: [] }
    }

    return result.response
  } catch (error) {
    console.error('Error al obtener imágenes:', error)
    return { results: [] }
  }
}

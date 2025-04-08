// src/components/Gallery.js

/**
 * Crea y retorna el contenedor de la galería de imágenes.
 * @returns {HTMLElement} Contenedor de la galería.
 */
export function Gallery() {
  const galleryContainer = document.createElement('div')
  galleryContainer.id = 'gallery'
  return galleryContainer
}

/**
 * Renderiza las imágenes en la galería.
 * @param {Array} images Array de imágenes obtenido de la API.
 */
export function renderImages(images) {
  const gallery = document.getElementById('gallery')
  gallery.innerHTML = '' // Limpia la galería antes de agregar nuevas imágenes

  images.forEach((image) => {
    const container = document.createElement('div')
    container.classList.add('image-container')

    const imgElement = document.createElement('img')
    // Para la API de Unsplash, se suele usar image.urls.small
    imgElement.src = image.urls?.small || ''

    // Efecto hover invertido (muestra información al pasar el cursor)
    const infoOverlay = document.createElement('div')
    infoOverlay.classList.add('image-info')
    infoOverlay.textContent =
      image.description || image.alt_description || 'Sin descripción'

    container.appendChild(imgElement)
    container.appendChild(infoOverlay)

    gallery.appendChild(container)
  })
}

/**
 * Limpia el mensaje de error del DOM.
 */
export function clearErrorMessage() {
  const errorDiv = document.getElementById('error-message')
  if (errorDiv) errorDiv.textContent = ''
}

/**
 * Muestra un mensaje de error en el DOM.
 * @param {string} msg - Mensaje de error a mostrar.
 */
export function showErrorMessage(msg) {
  const errorDiv = document.getElementById('error-message')
  if (errorDiv) errorDiv.textContent = msg
}

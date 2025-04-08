// SearchBar.js
export function SearchBar({ onSearch }) {
  const input = document.createElement('input')
  input.type = 'text'
  input.id = 'search-input'

  const button = document.createElement('button')
  button.innerText = 'Buscar'

  button.addEventListener('click', () => {
    onSearch(input.value)
    input.value = '' // Limpia el input
  })

  const container = document.createElement('div')
  container.appendChild(input)
  container.appendChild(button)

  return container
}

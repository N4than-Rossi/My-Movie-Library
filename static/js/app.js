const themeToggleButton = document.querySelector('#theme-toggle-button');
const body = document.querySelector('body');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggleButton.textContent = '☀️';
}

themeToggleButton.addEventListener('click', () => {
  // Alterna a classe no body
  body.classList.toggle('dark-mode');

  // Verifica o estado atual para saber qual ícone mostrar e o que salvar
  const isDarkMode = body.classList.contains('dark-mode');
  themeToggleButton.textContent = isDarkMode ? '☀️' : '🌙';

  // Salva a preferência do usuário no localStorage
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});


//Barra de pesquisa: -------------------------------------------------------
const searchInput = document.querySelector('#search-input');
const movieLinks = document.querySelectorAll('.movie-card-link');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  movieLinks.forEach(link => {
    const movieTitle = link.querySelector('h3').textContent.toLowerCase();

    // Verifica se o título do filme inclui o termo da busca
    if (movieTitle.includes(searchTerm)) {
      link.style.display = 'block'; // Mostra o card
    } else {
      link.style.display = 'none'; // Esconde o card
    }
  });
});
// https://www.omdbapi.com/?apikey=980b547b&s=fast

async function main(filter) {
  const movies = await fetch('https://www.omdbapi.com/?apikey=980b547b&s=fast');
  const moviesData = await movies.json();
  const moviesEl = document.querySelector('.movies')
  const searchInput = document.getElementsByClassName('search-bar--input')
  const dropdown = document.getElementById('dropdown')

  searchInput.addEventListener('input', () => {
    
})

  console.log(moviesData.Search)
  moviesEl.innerHTML = moviesData.Search
    .map(
      (movie) => `<div class="movie">
    <div class="movie__wrapper">
      <img class="movie__img" src="${movie.Poster}" alt="">
      <div class="movie__description">
        <div class="movie__title">${movie.Title}</div>
        <div class="space-between">
          <div class="movie__year">${movie.Year}</div>
          <div class="imdbID">${movie.imdbID}</div>
        </div>
      </div>
    </div>
  </div>`
    ).join('')
}



main();



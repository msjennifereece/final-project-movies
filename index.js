// https://www.omdbapi.com/?apikey=3adaf1af&s=fast

async function main() {
  const movies = await fetch('https://www.omdbapi.com/?apikey=3adaf1af&s=fast')
  const moviesData = await movies.json()
  const moviesEl = document.querySelector('.movies')
  moviesEl.innerHTML = moviesData.Search.map(movie => movieHTML(movie)).join('')
}

main()

function showMovie(movie) {
  console.log(movie)
}

function movieHTML(movie) {
  return `<div class="movie" onclick="showMovie(${movie.Poster})">
    <div class="movie__wrapper">
      <img class="movie__img" src="${movie.Poster}" alt="">
      <div class="movie__description">
        <div class="movie__title">${movie.title}</div>
        <div class="space-between">
          <div class="movie__year">${movie.year}</div>
          <div class="imdbID">${movie.imdbID}</div>
        </div>
      </div>
    </div>
  </div>`
}

// const buttonSearch = document.getElementById('search-result');
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputMovies = document.getElementById('movie');
  searchMoive(inputMovies.value, (error, movies) => {
    if (error) {
      console.log('errr',error);
      // alert("Couldn't get data!");
    } else {
      // console.log('data',movies);
      updateMovies(movies);
    }
  });
});

var updateMovies = function (movieList) {
  const listSection = document.getElementById('search-result');
  while (listSection.firstChild) {
    listSection.removeChild(listSection.firstChild);
  }
  movieList.forEach((movie) => {
    listSection.appendChild(createHtmlItem(movie));
  });
};


var createHtmlItem = function (movie) {
console.log('sssssss',movie);
  var moviess = document.createElement('div');
  console.log( movie.image_link);
  moviess.setAttribute('class', 'moviess');
  var imagelink = document.createElement('div');
  imagelink.setAttribute('class', 'image');
  var image = document.createElement('img');
  image.setAttribute('src', movie.image_link);
  image.setAttribute('class', 'resultImg');
  imagelink.appendChild(image);
  moviess.appendChild(imagelink);


  var paragraphDiv = document.createElement('div');
  paragraphDiv.setAttribute('class', 'paragraph');
  var movieTitle = document.createElement('h4');
  movieTitle.innerText = 'title: ' + movie.title;
  var yearH4 = document.createElement('h4');
  yearH4.innerText = 'year: ' + movie.year;
  var movieRank  = document.createElement('h4');
  movieRank.innerText = 'movieRank: ' + movie.movie_rank;
  console.log( 'movieRank',movie.moive_rank);
  var movieLink  = document.createElement('h4');
  movieLink.innerText = 'movieLink: ' + movie.movie_link;
  var directorName  = document.createElement('h4');
  directorName.innerText = 'directorName: ' + movie.director_name;
  var actorName  = document.createElement('h4');
  actorName.innerText = 'actorName: ' + movie.actor_name;

  var movieIdInput = document.createElement('input');
  movieIdInput .setAttribute('type', 'hidden');
  paragraphDiv.appendChild(movieTitle);
  paragraphDiv.appendChild(yearH4);
  paragraphDiv.appendChild(movieRank);
  paragraphDiv.appendChild(movieLink);
  paragraphDiv.appendChild(directorName);
  paragraphDiv.appendChild(actorName);
  paragraphDiv.appendChild(movieIdInput);

  moviess.appendChild(paragraphDiv);
  return moviess;

};

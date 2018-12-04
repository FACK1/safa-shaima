
const handlers = require('./handlers');


const router = (request, response) => {
  if (request.method === 'GET') {
    if (request.url === '/') {
      handlers.homeHandler(request, response);
    } else if (request.url.includes('/search?value=')) {
      handlers.searchMoviesHandler(request, response);
    } else if (request.url.includes('/getMovies?id=')) {
      handlers.getMoviesHandler(request, response);
    } else if (request.url.split('.')[1]) {
      handlers.publicHandler(request, response);
    } else {
      handlers.errorHandler(request, response);
    }
  }
  else if (request.method === 'POST') {
  if (request.url.includes('/PostMovies?id=')) {
      handlers.postMoviesHandler(request, response);
    }else {
      handlers.errorHandler(request, response);
    }

  }
};


module.exports = router;

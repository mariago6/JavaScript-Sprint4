// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(item => item.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  if (!director) {
    return [];
  }
  let directorFilter = array.filter(item => item.director.toLowerCase() === director.toLowerCase()); 
  return directorFilter; 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  if (!array.length) {
    return 0;
  }
  let films = getMoviesFromDirector(array, director); 
  if (!films.length) {
    return 0; 
  }
  let scoresArray = films.map(item => item.score); 
  return Number((scoresArray.reduce((a, b) => (a + b)) / scoresArray.length).toFixed(2)); 
}

function moviesAverage(array) {
  if (!array.length) {
    return 0; 
  }
  let scoresArray = array.map(item => item.score); 
  return Number((scoresArray.reduce((a, b) => (a + b)) / scoresArray.length).toFixed(2));  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let filmsTitle = array.map(film => film.title); 
  filmsTitle.sort(); 
  return filmsTitle.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {   
  let newArray = [];

  if (!array.length) {
    return newArray; 
  }

  newArray = array.sort((a, b) => {
    if (a.year < b.year) {
      return -1; 
    }
    if (a.year > b.year) {
      return 1; 
    }
    if (a.title < b.title) {
      return -1; 
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0; 
  });
  
  return newArray; 
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let genreFilter = array
    .filter(item => item.score)
    .filter(item => item.genre.map(i => i.toLowerCase()).includes(genre.toLowerCase())); 
  return moviesAverage(genreFilter);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  return array.map(item => {
    let newDuration  = item.duration.split(' ');

    let hours = 0; 
    if (newDuration[0]) {
      hours = Number(newDuration[0].charAt(0));
    }

    let minutes = 0;
    if (newDuration[1]) {
      minutes = Number(newDuration[1].slice(0, -3));
    }

    return {
      ...item,
      duration: Number(minutes + (hours * 60))
    }; 
  });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let bestFilm; 
  let newArray = array
    .filter(item => item.year === year)
    .filter(item => item.score)
    .forEach(element => {
      if (!bestFilm) {
        bestFilm = element; 
      }
      if (bestFilm.score < element.score) {
        bestFilm.score = element.score; 
      }
    }) 
return [bestFilm]; 
}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(item => item.director)
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
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


}

// Exercise 5: Order by year, ascending
function orderByYear(array) {   
  
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {

  
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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

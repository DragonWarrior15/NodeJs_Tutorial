var movies = require("./movies");

var user2Movies = movies();
user2Movies.favMovies = "Lights Out";

console.log("user2Movies", user2Movies.favMovies);
var movies = require("./movies");

var user1Movies = movies();
user1Movies.favMovies = "Conjuring";

console.log("user1Movies", user1Movies.favMovies);
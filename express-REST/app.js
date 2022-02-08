const express = require("express");
const app = express();
app.use(express.json());

const movies = [
  { id: 1, name: "Shutter island" },
  { id: 2, name: "Back to the future" },
  { id: 3, name: "Spider-man" },
  { id: 4, name: "Matrix" },
];

function getMaxMovieId(movies) {
  let max = 0;
  for (let i = 0; i < movies.length - 1; i++) {
    if (movies[i + 1].id > movies[i].id) {
      max = movies[i + 1].id;
    }
  }
  return max;
}
function findMovieByMovieId(movies, id) {
  let rightMovie;
  movies.forEach((movie) => {
    if (movie.id == id) {
      rightMovie = movie;
    }
  });
  return rightMovie;
}
function deleteMovieByMovieId(movies, id) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      movies.splice(i, 1);
      break;
    }
  }
}

app.get("/", (req, res) => {
  res.send(movies);
});
app.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const movie = findMovieByMovieId(movies, movieId);
  res.send(movie);
});
app.post("/", (req, res) => {
  // If we create new movie, the program creates movie with max id that exists + 1

  const newMovie = {
    id: getMaxMovieId(movies) + 1,
    name: req.body.name,
  };
  res.send(newMovie);
  movies.push(newMovie);
});
app.put("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const movie = findMovieByMovieId(movies, movieId);
  movie.name = req.body.name;
  res.send(movie);
});
app.delete("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  deleteMovieByMovieId(movies, movieId);
  res.send({ message: "successfully deleted movie with id: " + movieId });
});

app.listen(8080);

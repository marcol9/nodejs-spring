const express = require("express");
const app = express();
app.use(express.json()); //we say that our api will recieve json objects

let movies = [
  { id: 1, name: "Shutter island" },
  { id: 2, name: "Back to the future" },
  { id: 3, name: "Spider-man" },
  { id: 4, name: "Matrix" },
];
CURRENT_ID = 4;

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
  //res.send(movies); should be corrected, because it sends it like an array
  res.send({ data: movies });
});

app.get("/:movieId", (req, res) => {
  //const movieId = req.params.movieId;
  //const movie = findMovieByMovieId(movies, movieId);
  //res.send(movie);
  const foundMovie = movies.find((movie) => movie.id === Number(req.params.movieId));
  foundMovie ? res.send({ data: foundMovie }) /* exists case */ : res.status(404).send({}); /*undefined case*/
});

app.post("/", (req, res) => {
  // If we create new movie, the program creates movie with max id that exists + 1
  const movieToCreate = req.body;
  movieToCreate.id = ++CURRENT_ID;
  movies.push(movieToCreate);
  res.send({ data: movieToCreate });

  /*const newMovie = {
    id: getMaxMovieId(movies) + 1,
    name: req.body.name,
  };
  res.send(newMovie);
  movies.push(newMovie);
  */
});

app.put("/:movieId", (req, res) => {
  const foundMovie = movies.find((movie) => movie.id === Number(req.params.movieId));
  foundMovie.name = req.body.name;
  res.send(foundMovie);

  /*
  const movieId = req.params.movieId;
  const movie = findMovieByMovieId(movies, movieId);
  movie.name = req.body.name;
  res.send(movie);
  */
});

app.patch("/:movieId", (req, res) => {
  const foundMovieIndex = movies.findIndex((movie) => movie.id === Number(req.params.movieId));
  if (foundMovieIndex != -1) {
    const foundMovie = movies[foundMovieIndex];
    const movieToUpdateWith = { ...foundMovie, ...req.body, id: foundMovie.id };
    movies[foundMovieId] = movieToUpdateWith;
    res.send({ data: movieToUpdateWith });
  } else {
    res.status(404).send({});
  }
});

app.delete("/:movieId", (req, res) => {
  //const movieId = req.params.movieId;
  //deleteMovieByMovieId(movies, movieId);
  //res.send({ message: "successfully deleted movie with id: " + movieId });
  const foundMovieIndex = movies.findIndex((movie) => movie.id === Number(req.params.movieId));
  if (foundMovieIndex != -1) {
    movies.splice(foundMovieIndex, 1);
    res.send({});
  } else {
    res.status(404).send({});
  }
});

app.listen(8080, () => {
  console.log("Server is running on port", 8080);
});

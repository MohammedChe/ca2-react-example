const router = require('express').Router();

let Movie = require('../models/Movie');

router.route('/').get((req, res) => {
  Movie.find()
       .then(movies => res.json(movies))
       .catch(err => res.status(400).json('Error: ' + err));

  // res.json({message: "You are trying to see a list of movies"});
});

router.route("/:id").get((req, res) => {
  const movieId = req.params.id;
  // const movie = data.find(currentMovie => currentMovie.id === movieId);
  res.json({message: "You are trying to get a movie: ", movieId});
  // if (movie) {
  //   // res.json(movie);
  // }
  // else {
  //   // res.json({ message: `movie ${movieId} doesn't exist` });
  // }
});

router.route("/").post((req, res) => {
  const movie = req.body;
  //validate movie
  console.log('Adding new movie: ', movie);

  const newMovie = new Movie(movie);

  newMovie.save()
          .then(() => {
            res.json('Movie added!');
          })
          .catch(err => res.status(400).json('Error: ' + err));

  // res.json({message: "You are trying to post a movie: ", movie});
  //return updated list
  // res.json(data);
});

router.route("/:id").put((req, res) => {
  const movieId = req.params.id;
  const movie = req.body;

  console.log("Editing movie: ", movieId, " to be ", movie);
  res.json({message: "You are trying to edit a movie: ", movieId});
  // res.json(data);

});

router.route("/:id").delete((req, res) => {
  const movieId = req.params.id;

  console.log("Deleting movie with id: ", movieId);
  res.json({message: "You are trying to delete a movie: ", movieId});

  // res.json(data);
});


module.exports = router;

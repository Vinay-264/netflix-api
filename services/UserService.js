const User = require("../models/UserModel");

module.exports.fetchLikedMovies = async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });
  if (user) {
    return res.json({ msg: "success", movies: user.likedMovies });
  } else {
    return res.json({ msg: "User with given email not found." });
  }
};

module.exports.addToLikedMovies = async (req, res) => {
  // Check if email exists in the database
  // {"email": "xyz8998@gmail.com","data": {"id": 2,"genres":["comedy"],
  //"image":"./background.jpg","name":"pankaj"}}
  const { email, data } = req.body;
  const existingMovie = await User.findOne({ email });

  if (existingMovie) {
    // If email exists, append likedMovies
    const { likedMovies } = existingMovie;
    const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
    if (!movieAlreadyLiked) {
      await User.findByIdAndUpdate(
        existingMovie._id,
        {
          likedMovies: [...existingMovie.likedMovies, data],
        },
        { new: true }
      );
    } else {
      await existingMovie.save();
      return res.json({ msg: "Movie already added to the liked list." });
    }
  } else {
    // If email does not exist, create a new movie document
    movie = await User.create({ email, data });
  }
  return res.json({ msg: "Movie added to the liked list." });
};

module.exports.removedLikedMovies = async (req, res) => {
  const { email, movieId } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const movies = user.likedMovies;
    const movieIndex = movies.findIndex(({ id }) => id === Number(movieId));
    if (movieIndex) {
      return res.status(400).send({ msg: "Movie not found." });
    }
    movies.splice(movieIndex, 1);
    await User.findByIdAndUpdate(
      user._id,
      {
        likedMovies: movies,
      },
      { new: true }
    );
    return res.json({ msg: "Movie successfully removed.", movies });
  } else return res.json({ msg: "User with given email not found." });
};

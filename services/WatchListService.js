const User = require("../models/watchlistmodel"); 

module.exports.fetchWatchList = async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });
  if (user) {
    return res.status(200).json({ msg: "success", movies: user.watchListMovies });
  } else {
    return res.status(400).json({ msg: "User with given email not found." });
  }
};

module.exports.addWatchList = async (req, res) => {
  // Check if email exists in the database
  // {"email": "xyz8998@gmail.com","watchlist": {"id": 2,"genres":["comedy"],
  //"name":"xxxxxxx"}}
  const { email, watchlist } = req.body;
  const existingMovieList = await User.findOne({ email });

  if (existingMovieList) {
    // If email exists, append watch list Movies
    const { watchListMovies } = existingMovieList;
    const movieAlreadyWatchlist = watchListMovies.find(({ id }) => id === watchlist.id);
    if (!movieAlreadyWatchlist) {
      await User.findByIdAndUpdate(
        existingMovieList._id,
        {
            watchListMovies: [...existingMovieList.watchListMovies, watchlist],
        },
        { new: true }
      );
    } else {
      await existingMovieList.save();
      return res.status(200).json({ msg: "Movie already added to the watch list." });
    }
  } else {
    // If email does not exist, create a new movie document
    movie = await User.create({ email, watchlist });
  }
  return res.status(200).json({ msg: "Movie added to the watch list." });
};

module.exports.removeWatchList = async (req, res) => {
  const { email, movieId } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    const movies = user.watchListMovies;
    const movieIndex = movies.findIndex(({ id }) => id === Number(movieId));
    if (movieIndex) {
      return res.status(400).send({ msg: "Movie not found." });
    }
    movies.splice(movieIndex, 1);
    await User.findByIdAndUpdate(
      user._id,
      {
        watchListMovies: movies,
      },
      { new: true }
    );
    return res.status(200).json({ msg: "Movie successfully removed from watch list.", movies });
  } else return res.status(400).json({ msg: "User with given email not found." });
};

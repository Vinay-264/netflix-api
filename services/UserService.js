const User = require("../models/usermodel");
const UserPref = require("../models/userpreferences");
const https = require('https');
const axios = require('axios').create({
  //keepAlive pools and reuses TCP connections, so it's faster
  //httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: false }),
});
const { API_KEY, TMDB_BASE_URL, IMG_PATH_PREFIX } = require('../utils/constants');

module.exports.fetchLikedMovies = async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email });
  if (user) {
    return res.status(200).json({ msg: "success", movies: user.likedMovies });
  } else {
    return res.status(400).json({ msg: "User with given email not found." });
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
      return res.status(200).json({ msg: "Movie already added to the liked list." });
    }
  } else {
    // If email does not exist, create a new movie document
    movie = await User.create({ email, data });
  }
  return res.status(200).json({ msg: "Movie added to the liked list." });
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
    return res.status(200).json({ msg: "Movie successfully removed.", movies });
  } else return res.status(400).json({ msg: "User with given email not found." });
};

module.exports.getUserPreferences = async (req, res) => {
  const { email } = req.params;

  const userPref = await UserPref.findOne({ email });
  if (userPref) {
    return res.status(200).json({ msg: "success", genres: userPref.preferredGenres });
  } else {
    return res.status(400).json({ msg: "User with given email not found." });
  }
};

module.exports.saveUserPreferences = async (req, res) => {
  const userPrefData = req.body;
  const userPref = new UserPref(userPrefData);
  await userPref.save();  
  return res.status(200).json({ msg: "Genre added to the preferred list." });
};

module.exports.modifyUserPreferences = async (req, res) => {
  const email = req.params.email;
  const newPref = req.body.preferredGenres;
  await UserPref.findOneAndUpdate({ email }, { $set: { preferredGenres: newPref } }) 
  return res.status(200).json({ msg: "Genre updated in the user preferred list." });
};

module.exports.getRecommendedContent = async (req, res) => {
  const { email, category } = req.params;
  
  //Fetch Genres based on user preferences
  const userPref = await UserPref.findOne({ email });
  if(userPref){
  const userPrefGenres = userPref.preferredGenres;

  //Need to implement fetching recommendations based on watchlist. Below hardcoded array will be replaced.
  const watchListGenres = [12, 80, 99];
  const uniqueGenres = [...new Set([...userPrefGenres, ...watchListGenres]) ];
  const genres = uniqueGenres.join('%7C');
  const response = await axios.get(`${TMDB_BASE_URL}/discover/${category}?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genres}`);
  const resultData = {
    urlPrefix: IMG_PATH_PREFIX,
    data: response.data.results
  }
  return res.json(resultData);
}
return res.status(400).json({message : "User with given email not found"})
};

module.exports.getContentNotification = async (req, res) => {
  const { category } = req.params;
  const today = new Date();
  const fromDate = today.setDate(today.getDate() - 7);  
  const response = await axios.get(`${TMDB_BASE_URL}/discover/${category}?api_key=${API_KEY}&include_adult=false&release_date.gte=${fromDate}&sort_by=popularity.desc`);
  const resultData = {
    urlPrefix: IMG_PATH_PREFIX,
    data: response.data.results
  }
  return res.status(200).json(resultData);
};

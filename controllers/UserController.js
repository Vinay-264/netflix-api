const User = require("../models/UserModel");


module.exports.getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params;
    const user =  await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", movies: user.likedMovies });
    } else {
      return res.json({ msg: "User with given email not found." });
    }
  } 
  catch (error) {
    return res.json({ msg: "Error fetching liked movies." });
  }
};

module.exports.addToLikedMovies = async (req, res) => {
  try {
        const { email, data } = req.body;
        // Check if email exists in the database
        // {"email": "xyz8998@gmail.com","data": {"id": 2,"genres":["comedy"],
        //"image":"./background.jpg","name":"pankaj"}}
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
        return res.json({ msg: "Movie added to the liked list."});
        
  } catch (error) {
    return res.status(500).json({ msg: "Error adding movie to the liked list" });
  }
};

module.exports.removeFromLikedMovies = async (req, res) => {
  try {
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
  } catch (error) {
    return res.json({ msg: "Error removing movie to the liked list" });
  }
};

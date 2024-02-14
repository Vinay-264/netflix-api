const {getGenres, getTrendingMovies, getPopularMovies, fetchDataByGenre, searchMovieorTVShows,
  getMovieById, getShowById, getMovieReviewsById, getShowReviewsById
} = require('../services/NetflixService');


module.exports.getGenres = async (req, res) => {
  try {
      await getGenres(req,res);
  } catch (error) {
    return res.json({ msg: "Error fetching genere." });
  }
};

module.exports.getTrendingMovies = async (req, res) => {
  try {
      await getTrendingMovies(req,res);
  } catch (error) {
    return res.json({ msg: "Error fetching genere." });
  }
}

module.exports.getPopularMovies = async(req,res) => {

  try {
    await getPopularMovies(req,res);
 } catch (error) {
   return res.json({ msg: "Error fetching popular movies." });
 }
  
}

module.exports.fetchDataByGenre = async (req, res) => {
  try {
      await fetchDataByGenre(req,res);
  } catch (error) {
    return res.json({ msg: "Error fetching movie/tv having genre." });
  }
}

module.exports.searchMovieorTVShows = async(req,res) => {

  try {
      await searchMovieorTVShows(req,res);
 } catch (error) {
   return res.json({ msg: "Error searching movies." });
 }
}

  const getRawData = async (api, genres, paging = false) => {
    const moviesArray = [];
    for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
      const {
        data: { results },
      } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
      createArrayFromRawData(results, moviesArray, genres);
    }
    return moviesArray;
  };

  const createArrayFromRawData = (array, moviesArray, genres) => {
    array.forEach((movie) => {
      const movieGenres = [];
      movie.genre_ids.forEach((genre) => {
        const name = genres.find(({ id }) => id === genre);
        if (name) movieGenres.push(name.name);
      });
      if (movie.backdrop_path)
        moviesArray.push({
          id: movie.id,
          name: movie?.original_name ? movie.original_name : movie.original_title,
          image: movie.backdrop_path,
          genres: movieGenres.slice(0, 3),
        });
    });
  };


  module.exports.getMovieById = async (req, res) => {
    try {
        await getMovieById(req,res);
    } catch (error) {
      return res.json({ msg: "Error fetching movie." });
    }
  };

  module.exports.getShowById = async (req, res) => {
    try {
        await getShowById(req,res);
    } catch (error) {
      return res.json({ msg: "Error fetching tv show." });
    }
  };

  module.exports.getMovieReviewsById = async (req, res) => {
    try {
        await getMovieReviewsById(req,res);
    } catch (error) {
      return res.json({ msg: "Error fetching movie reviews." });
    }
  };

  module.exports.getShowReviewsById = async (req, res) => {
    try {
        await getShowReviewsById(req,res);
    } catch (error) {
      return res.json({ msg: "Error fetching tv show reviews." });
    }
  };
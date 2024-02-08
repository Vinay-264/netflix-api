const axios = require('axios'); // Import Axios library
const { API_KEY, TMDB_BASE_URL } = require('../utils/constants');

module.exports.getGenres = async (req, res) => {
  try {
    // Make a GET request to a third-party API
    const response = await axios.get(`${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        
    // Extract data from the response
    const apiData = response.data;

    // Send the data as the API response
    res.json(apiData);
  } catch (error) {
    return res.json({ msg: "Error fetching genere." });
  }
};

module.exports.getTrendingMovies = async (req, res) => {
  try {
    const { category,time_window }= req.params;
    // Make a GET request to a third-party API
    //http://localhost:5000/api/trending/all/day
    //TRENDING CATEGORY - ALL, MOVIES, TV, PEOPLE
    // TRENDING time_window - day(default), week
    const response = await axios.get(`${TMDB_BASE_URL}/trending/${category}/${time_window}?api_key=${API_KEY}`);
        
    // Extract data from the response
    const apiData = response.data.results;

    // Send the data as the API response
    res.json(apiData);
  } catch (error) {
    return res.json({ msg: "Error fetching genere." });
  }
}

module.exports.getPopularMovies = async(req,res) => {

  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}`);

   // Extract data from the response
   const apiData = response.data.results;

   // Send the data as the API response
   res.json(apiData);
 } catch (error) {
   return res.json({ msg: "Error fetching popular movies." });
 }
  
}


module.exports.fetchDataByGenre = async (req, res) => {
  try {
    const { type }= req.params;
    const { genre }= req.query;
    // Make a GET request to a third-party API
    //http://localhost:5000/api/netflix/genre/movie?genre=18
    //type - MOVIE, TV
    // genre - 18
    const response = await axios.get(`${TMDB_BASE_URL}/discover/${type}?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&with_genres=${genre}`);
        
    // Extract data from the response
    const apiData = response.data.results;

    // Send the data as the API response
    res.json(apiData);
  } catch (error) {
    return res.json({ msg: "Error fetching movie/tv having genre." });
  }
}

module.exports.searchMovies = async(req,res) => {

  try {
    const keyword = req.query;
    const response = await axios.get(`${TMDB_BASE_URL}/search/keyword?query=${keyword}`, {
      params: {
        api_key: API_KEY,
      },
    });

   // Extract data from the response
   const movies = response.data.results;

   // Send the data as the API response
   res.json(movies);
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
      const { movie_id }= req.params;
      // Make a GET request to a third-party API
      //http://localhost:5000/api/netflix/movie/157336
      const response = await axios.get(`${TMDB_BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`);
          
      // Extract data from the response
      const apiData = response.data;
  
      // Send the data as the API response
      res.json(apiData);
    } catch (error) {
      return res.json({ msg: "Error fetching movie." });
    }
  };

  module.exports.getShowById = async (req, res) => {
    try {
      const { series_id }= req.params;
      // Make a GET request to a third-party API
      //http://localhost:5000/api/netflix/tvshow/1396
      const response = await axios.get(`${TMDB_BASE_URL}/tv/${series_id}?api_key=${API_KEY}&language=en-US`);
          
      // Extract data from the response
      const apiData = response.data;
  
      // Send the data as the API response
      res.json(apiData);
    } catch (error) {
      return res.json({ msg: "Error fetching tv show." });
    }
  };
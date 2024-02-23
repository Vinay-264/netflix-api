const axios = require('axios');
const data = {
  "genres": [{
    "id": 28,
    "name": 'Action'
  },
  {
    "id": 12,
    "name": "Adventure",
  }
  ]
};
jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(()=> Promise.resolve({data}))
  }))
}));

const { getGenres, getTrendingMovies, getPopularMovies, fetchDataByGenre, searchMovieorTVShows, getMovieById, getShowById, getMovieReviewsById, getShowReviewsById } = require('./NetflixService');

describe("getGenres", () => {

  it("should return data", async () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };

    await getGenres(req, res);
    expect(axios.create).toHaveBeenCalledWith({ httpsAgent: expect.any(Object) });
    expect(res.json).toHaveBeenCalledWith(data);
  });
});
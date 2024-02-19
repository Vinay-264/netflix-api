const { getWatchListMovies, addToWatchListMovies, removeFromWatchListMovies} = require("./WatchListController");

const watchListService = require("../services/WatchListService");

jest.mock("../services/WatchListService");



describe("getWatchListMovies", () => {
  it("should Invoke service layer", async () => {

    // Mocking request and response objects
    const req = { params: { email: "test@abc.com" } };
   
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    // Calling the getLikedMovies function
    await getWatchListMovies(req, res);

    // Assertions
    expect(watchListService.fetchWatchList).toHaveBeenCalled();

  });

});


describe("addToWatchListMovies", () => {
    it("should Invoke service layer", async () => {
  
      // Mocking request and response objects
      const req = { body: {"email": "xyz8998@gmail.com","data": {"id": 2,"genres":["comedy"],
      "image":"./background.jpg","name":"pankaj"}} };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the addToWatchListMovies function
      await addToWatchListMovies(req, res);
  
      // Assertions
      expect(watchListService.addWatchList).toHaveBeenCalled();
  
    });
  
  });


  describe("removeFromWatchListMovies", () => {
    it("should Invoke service layer", async () => {
  
      // Mocking request and response objects
      const req = { body: { email: "test@abc.com", movieId:123 } };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the addToWatchListMovies function
      await removeFromWatchListMovies(req, res);
  
      // Assertions
      expect(watchListService.removeWatchList).toHaveBeenCalled();
  
    });
  
  });
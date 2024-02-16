const { getLikedMovies } = require("./UserController");

const UserService = require("../services/UserService");

jest.mock("../services/UserService");



describe("getLikedMovies", () => {
  it("should Invoke service layer", async () => {

    const req = { params: { email: "test@abc.com" } };
    //UserService.fetchLikedMovies.mockResolvedValue(req);
   
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };

    // Calling the getLikedMovies function
    await getLikedMovies(req, res);

    // Assertions
    expect(UserService.fetchLikedMovies).toHaveBeenCalled();

  });




});

const { fetchWatchList, addWatchList, removeWatchList } = require("../services/WatchListService");

const Users = require("../models/watchlistmodel");
jest.mock("../models/watchlistmodel"); // Mock the Users model

describe("fetchWatchList function", () => {
    it("should return success", async () => {

        const emailId = { email: 'movie@gmail.com' };

        const mockUserData = {
            msg: "success",
            movies: [{
                id: 1,
                genres: 'Adventure',
                image: '',
                name: 'Halo'
            }]
        };

        const req = { params: emailId };
        const res = {
            json: jest.fn(),
        };

        Users.findOne = jest.fn().mockReturnValue(mockUserData);

        const result = await fetchWatchList(req, res);


        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('success');
    });

    it("should not return success", async () => {

        const emailId = { email: 'movie@gmail.com' };
        const mockUserData = {
            msg: "User with given email not found.",
            movies: []
        };

        const req = { params: emailId };
        const res = {
            json: jest.fn(),
        };

        Users.findOne = jest.fn().mockReturnValue();

        const result = await fetchWatchList(req, res);


        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('User with given email not found.');
    });

});

describe("addWatchList function", () => {
    it("should add movie to the list", async () => {

        const emailId = { email: 'movie@gmail.com' };

        const mockUserData = {
            msg: "Movie already added to the watch list."
        };

        const existingMovies = {
            movies: [{
                id: 2,
                genres: ['Adventure'],
                image: '',
                name: 'Halo'
            }]
        };
        const mockUserRequest = {
            "data": {
                "id": 2, "genres": ["comedy"],
                "image": "./background.jpg", "name": "pankaj"
            }
        };

        const req = { body: { email: emailId, watchlist: mockUserRequest } };
        const res = {
            json: jest.fn(),
        };

        const likedMovies = await Users.findOne(emailId);
        //const {likedMovies} = existingMovies;
        //test.find=jest.fn();
        Users.findByIdAndUpdate = jest.fn().mockResolvedValue(mockUserData);
        await addWatchList(req, res);


        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('Movie added to the watch list.');
    });
});

describe("removeWatchList function", () => {
    it("should add movie to the list", async () => {

        const emailId = { email: 'movie@gmail.com' };

        const mockUserData = {
            msg: "Movie already added to the liked list."
        };

        const existingMovies = {
            movies: [{
                id: 2,
                genres: ['Adventure'],
                image: '',
                name: 'Halo'
            }]
        };
        const mockUserRequest = {
            "data": {
                "id": 2, "genres": ["comedy"],
                "image": "./background.jpg", "name": "pankaj"
            }
        };

        const req = { body: { email: emailId, movieId: 1 } };
        const res = {
            json: jest.fn(),
        };

        const likedMovies = await Users.findOne(emailId);
        Users.findByIdAndUpdate = jest.fn().mockResolvedValue(mockUserData);
        await removeWatchList(req, res);


        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('User with given email not found.');
    });
});

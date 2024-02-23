const axios = require('axios');
const { createUser, fetchLikedMovies, addToLikedMovies, removedLikedMovies, getUserPreferences, saveUserPreferences,
    modifyUserPreferences, getContentNotification } = require("../services/UserService");

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
        get: jest.fn(() => Promise.resolve({ data }))
    }))
}));
const Users = require("../models/usermodel");
const UserPref = require("../models/userpreferences");
jest.mock("../models/userModel"); // Mock the Users model
jest.mock("../models/userpreferences");

describe("fetchLikedMovies function", () => {
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
            status:jest.fn().mockReturnThis(),
            json: jest.fn()
            
        };

        Users.findOne = jest.fn().mockReturnValue(mockUserData);

        const result = await fetchLikedMovies(req, res);

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
            status:jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        Users.findOne = jest.fn().mockReturnValue();

        const result = await fetchLikedMovies(req, res);

        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('User with given email not found.');
    });

});

describe("addToLikedMovies function", () => {
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

        const req = { body: { email: emailId, data: mockUserRequest } };
        const res = {
            status:jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const likedMovies = await Users.findOne(emailId);
        Users.findByIdAndUpdate = jest.fn().mockResolvedValue(mockUserData);
        await addToLikedMovies(req, res);

        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('Movie added to the liked list.');
    });
});

describe("removedLikedMovies function", () => {
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
            status:jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        const likedMovies = await Users.findOne(emailId);
        Users.findByIdAndUpdate = jest.fn().mockResolvedValue(mockUserData);
        await removedLikedMovies(req, res);

        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('User with given email not found.');
    });
});

describe("getUserPreferences function", () => {
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
            status:jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        UserPref.findOne = jest.fn().mockReturnValue(mockUserData);

        const result = await getUserPreferences(req, res);
        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('success');
    });

});

describe("saveUserPreferences function", () => {
    it("should return success", async () => {

        const emailId = { email: 'movie@gmail.com' };

        const req = {
            body: {
                email: emailId,
                preferredGenres: [1]
            }
        };

        const res = {
            status:jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        UserPref.Save = jest.fn().mockReturnValue();
        const result = await saveUserPreferences(req, res);
        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('Genre added to the preferred list.');
    });
});

describe("modifyUserPreferences function", () => {
    it("should return success", async () => {

        const req = { params: { email: 'movie@gmail.com' }, body: { preferredGenres: [1] } };
        const res = {
            status:jest.fn().mockReturnThis(),
            json: jest.fn()
        };

        UserPref.findOneAndUpdate = jest.fn().mockReturnValue();

        const result = await modifyUserPreferences(req, res);
        // Assert
        expect(res.json.mock.calls[0][0].msg).toEqual('Genre updated in the user preferred list.');
    });
});

describe("getContentNotification function", () => {

    it("should return success", async () => {

        const req = { params: { category: 'Adventure' } };
        const res = {
            status:jest.fn().mockReturnThis(),
            json: jest.fn()
        };
        const result = await getContentNotification(req, res);
        // Call the Axios method in your test
        expect(axios.create).toHaveBeenCalledWith({ httpsAgent: expect.any(Object) });
    });
});


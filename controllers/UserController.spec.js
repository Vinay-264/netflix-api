const { getLikedMovies, addToLikedMovies, 
    removeFromLikedMovies, getUserPreferences, 
    saveUserPreferences, modifyUserPreferences,
    getRecommendedContent, getContentNotification } = require("./UserController");

const UserService = require("../services/UserService");

jest.mock("../services/UserService");



describe("getLikedMovies", () => {
  it("should Invoke service layer", async () => {

    // Mocking request and response objects
    const req = { params: { email: "test@abc.com" } };
   
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

  describe("addToLikedMovies", () => {
    it("should Invoke service layer", async () => {
  
    // Mocking request and response objects

      const req = { body: {"email": "xyz8998@gmail.com","data": {"id": 2,"genres":["comedy"],
      "image":"./background.jpg","name":"pankaj"}} };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the addToLikedMovies function
      await addToLikedMovies(req, res);
  
      // Assertions
      expect(UserService.addToLikedMovies).toHaveBeenCalled();
  
    });

  });

  describe("removeFromLikedMovies", () => {
    it("should Invoke service layer", async () => {
  
        // Mocking request and response objects
      const req = { body: { email: "test@abc.com", movieId:123 } };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the removeFromLikedMovies function
      await removeFromLikedMovies(req, res);
  
      // Assertions
      expect(UserService.removedLikedMovies).toHaveBeenCalled();
  
    });
  });


  describe("getUserPreferences", () => {
    it("should Invoke service layer", async () => {
  
        // Mocking request and response objects
      const req = { params: { email: "test@abc.com"} };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the getUserPreferences function
      await getUserPreferences(req, res);
  
      // Assertions
      expect(UserService.getUserPreferences).toHaveBeenCalled();
  
    });
  });

  describe("saveUserPreferences", () => {
    it("should Invoke service layer", async () => {
  
        // Mocking request and response objects
      const req = { body: { email: "test@abc.com", preferredGenres:123} };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the saveUserPreferences function
      await saveUserPreferences(req, res);
  
      // Assertions
      expect(UserService.saveUserPreferences).toHaveBeenCalled();
  
    });
  });

  describe("modifyUserPreferences", () => {
    it("should Invoke service layer", async () => {
  
        // Mocking request and response objects
      const req = { param: { email: "test@abc.com"}, body:{preferredGenres:[123]} };
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the modifyUserPreferences function
      await modifyUserPreferences(req, res);
  
      // Assertions
      expect(UserService.modifyUserPreferences).toHaveBeenCalled();
  
    });
  });

  describe("getRecommendedContent", () => {
    it("should Invoke service layer", async () => {
  
        // Mocking request and response objects
      const req = { param: { email: "test@abc.com", category:123}};
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the getRecommendedContent function
      await getRecommendedContent(req, res);
  
      // Assertions
      expect(UserService.getRecommendedContent).toHaveBeenCalled();
  
    });
  });

  describe("getContentNotification", () => {
    it("should Invoke service layer", async () => {
  
        // Mocking request and response objects
      const req = { param: { category:123}};
     
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      };
  
      // Calling the getContentNotification function
      await getContentNotification(req, res);
  
      // Assertions
      expect(UserService.getContentNotification).toHaveBeenCalled();
  
    });
  });
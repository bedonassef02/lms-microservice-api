const userService = require('../src/services/user.service');

describe('User Service', () => {
  // Generate a unique username for each test run
  const testUsername = `testuser_${Date.now()}`;

  // Test for create function
  describe('create', () => {
    it('should create a new user', async () => {
      const newUser = await userService.create({
        username: testUsername,
        password: 'testpassword',
      });
      expect(newUser).toHaveProperty('id');
      expect(newUser.username).toBe(testUsername);
    });
  });

  // Test for findOne function
  describe('findOne', () => {
    it('should find a user by username', async () => {
      const user = await userService.findOne(testUsername);
      expect(user).toBeDefined();
      expect(user.username).toBe(testUsername);
    });

    it('should return null if user not found', async () => {
      const user = await userService.findOne('nonexistentuser');
      expect(user).toBeNull();
    });
  });

  // Test for findById function
  describe('findById', () => {
    it('should find a user by id', async () => {
      // Assuming there is a user with id 1 in the database
      const user = await userService.findById(1);
      expect(user).toBeDefined();
      expect(user.id).toBe(1);
    });

    it('should return null if user not found', async () => {
      // Assuming there is no user with id 1000 in the database
      const user = await userService.findById(1000);
      expect(user).toBeNull();
    });
  });
});

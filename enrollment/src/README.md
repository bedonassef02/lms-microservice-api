# Enrollment System

This Node.js application provides functionality for enrolling users in courses and managing enrollments. It utilizes Express.js for handling HTTP requests, Sequelize for database operations, and JWT for authentication.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BedoNassef71/lms-microservice-api.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   JWT_SECRET_KEY=<your_secret_key>
   ```

   Replace `<your_secret_key>` with your desired secret key for JWT token encryption.

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running on port 3003 by default.

## Usage

### Authentication

- To authenticate requests, include a JWT token in the `Authorization` header of the request.

### Endpoints

- **POST /enrollment**: Enroll a user in a course.
  - Requires role: STUDENT
  - Request body:
    ```json
    {
      "courseId": 1
    }
    ```

- **GET /enrollment**: Get all enrollments for the authenticated user.
  - Requires role: STUDENT

- **GET /enrollment/:courseId**: Get all enrollments for a specific course.
  - Requires role: INSTRUCTOR

- **DELETE /enrollment/:courseId/:userId**: Remove a user's enrollment from a course.
  - Requires role: ADMIN

## Validation

- The application validates the course ID provided during enrollment to ensure it's a number.
- It also checks if the user has already registered for the course before allowing enrollment.

## Dependencies

- [Express.js](https://expressjs.com/): Web framework for Node.js.
- [Sequelize](https://sequelize.org/): Promise-based ORM for Node.js.
- [JWT](https://jwt.io/): JSON Web Token for authentication.
- [express-validator](https://express-validator.github.io/docs/): Middleware for input validation in Express.js applications.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
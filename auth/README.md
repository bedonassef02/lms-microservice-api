# User Authentication System

This Node.js application implements a user authentication system using Express.js and Passport.js. The system allows users to register, login, and authenticate using both local credentials (username and password) and JSON Web Tokens (JWT).

## Features

- **User Registration**: Users can register by providing a unique username and a password.
- **User Login**: Registered users can log in using their username and password.
- **Local Authentication**: Authentication is performed using a local strategy, where usernames and passwords are verified against those stored in the database.
- **JWT Authentication**: JSON Web Tokens (JWT) are used for authentication. Upon successful login, a JWT token is generated and provided to the client for subsequent authenticated requests.
- **Session Management**: Sessions are managed using `express-session` middleware, enabling persistent login sessions.
- **Validation**: Input validation is implemented using `express-validator` middleware to ensure that usernames and passwords meet certain criteria (e.g., minimum length) and to check for username uniqueness during registration.

## Project Structure

The project consists of the following main components:

- **Controllers**: Responsible for handling incoming requests and returning appropriate responses. Located in the `controllers` directory.
- **Services**: Contains business logic related to user management, password hashing, token generation, and database operations. Located in the `services` directory.
- **Middleware**: Includes validation middleware for request body validation. Located in the `middlewares` directory.
- **Routes**: Defines API routes for user authentication. Located in the `routes` directory.
- **Helpers**: Contains helper functions, such as checking username uniqueness. Located in the `helpers` directory.
- **Configuration**: Configures Express middleware, session management, and Passport.js strategies. Located in the `app.js` file.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BedoNassef71/lms-microservice-api.git
   ```

2. Install dependencies:

   ```bash
   cd lms-microservice-api/auth
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and define the following variables:

   ```plaintext
   PORT=3001
   JWT_SECRET_KEY=<your-secret-key>
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Usage

- **Register Endpoint**: `POST /auth/register`
  - Request Body:
    ```json
    {
      "username": "<username>",
      "password": "<password>"
    }
    ```
  - Response: Registered user object or validation errors.

- **Login Endpoint**: `POST /auth/login`
  - Request Body:
    ```json
    {
      "username": "<username>",
      "password": "<password>"
    }
    ```
  - Response: JWT token or authentication errors.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
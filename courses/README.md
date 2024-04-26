# Course Management System

This is a simple RESTful API for managing courses, built with Express.js and TypeORM. It allows users to perform CRUD operations on courses, with authentication, authorization, and validation.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete (CRUD) operations on courses
- Role-based authorization (admin role required for certain operations)
- JWT-based authentication
- Request validation using express-validator
- Logging HTTP requests with Morgan
- Database synchronization with TypeORM

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MySQL database

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BedoNassef71/lms-microservice-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lms-microservice-api/courses
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory:

   ```env
   PORT=3002
   JWT_SECRET_KEY=your_secret_key
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=your_database_password
   DB_NAME=lms-courses
   ```

2. Update the values according to your environment.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will be running at `http://localhost:3002`.

## API Endpoints

- `GET /courses`: Get all courses
- `GET /courses/:id`: Get a course by ID
- `POST /courses`: Create a new course (admin only)
- `PATCH /courses/:id`: Update a course (admin only)
- `DELETE /courses/:id`: Delete a course (admin only)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
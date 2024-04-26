# Proxy Server Setup with Express

This repository contains the code for setting up a proxy server using Express, along with middleware for logging, security, rate limiting, and error handling. The server is designed to forward requests to different backend services based on the request URL.

## Features

- **Logging**: Uses `morgan` for logging HTTP requests.
- **Security**: Applies security headers using `helmet`.
- **Rate Limiting**: Implements rate limiting to protect against brute-force attacks.
- **Error Handling**: Provides basic error handling to catch and log errors.
- **Proxy Configuration**: Forwards requests to different backend services based on the request URL.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/BedoNassef71/lms-microservice-api
   ```

2. Navigate to the project directory:

   ```bash
   cd gateway
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Server

To start the proxy server, run:

```bash
npm start
```

The server will start on port 3000.

## Code Structure

The project is structured into separate files for better organization and maintainability:

- `app.js`: Sets up the Express application.
- `middleware.js`: Configures middleware for logging, security, and rate limiting.
- `proxy.js`: Handles the proxy configuration to forward requests to different backend services.
- `errorHandling.js`: Provides error handling middleware.
- `server.js`: Initializes the server, combining all configurations.

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express](https://expressjs.com/) for the web application framework.
- [http-proxy](https://www.npmjs.com/package/http-proxy) for proxying HTTP requests.
- [morgan](https://www.npmjs.com/package/morgan) for HTTP request logging.
- [helmet](https://helmetjs.github.io/) for securing Express apps.
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) for rate limiting.
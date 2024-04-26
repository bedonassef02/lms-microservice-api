process.loadEnvFile(".env");
const app = require("./app");
const connectToDatabase = require("./config/database.config");

const port = process.env.PORT || 3004;

const startApplicationServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

const initializeServer = async () => {
  try {
    await connectToDatabase();
    startApplicationServer();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  }
};

initializeServer();

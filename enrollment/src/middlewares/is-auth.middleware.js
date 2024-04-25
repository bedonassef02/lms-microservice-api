const tokenService = require("../services/token.service");

const isAuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }
  try {
    req.user = tokenService.verify(token);

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = isAuthMiddleware;

const roleGuard = (roles) => (req, res, next) => {
  const role = req.user.role;
  if (!roles.includes(role)) {
    res.status(401).json({ message: `you are not authorized` });
  } else {
    next();
  }
};

module.exports = roleGuard;
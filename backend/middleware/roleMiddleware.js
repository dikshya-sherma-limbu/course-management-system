const roleMiddleware = (requiredRole) => {
  return (req, res, next) => {
    if (!req.role) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (req.role !== requiredRole) {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  };
};

module.exports = roleMiddleware;

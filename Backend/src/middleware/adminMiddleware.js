const adminMiddleware = (req, res, next) => {
    // Ensure req.user is populated by the authentication middleware
    if (!req.user) {
      return res.status(401).json({ message: 'Unauthorized. Please log in.' });
    }
  
    // Check if the user is an admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  
    // If the user is an admin, proceed to the next middleware or route handler
    next();
  };
  
  module.exports = adminMiddleware;
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//if user is loggedin
exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);
  if (!token) {
    return next(
      res.status(401).json({
        success: false,
        message: "Please Login to access this resource",
      })
    );
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        res.status(403).json({
          success: false,
          message: `Role: ${req.user.role} is not allowed to access this resource`,
        })
      );
      // res.json(`Role: ${req.user.role}Please Login to access this resource`);
    }
    next();
  };
};

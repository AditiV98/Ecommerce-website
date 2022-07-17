const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
//register user

exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
  });
  console.log(user);
  sendToken(user, 201, res);
  // const token = user.getJWTToken();
  // res.status(201).json({
  //   success: true,
  //   token,
  // });
};

//login user

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  //check if user has valid password and email

  if (!email || !password) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please enter valid Email and Password",
      })
    );
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(
      res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      })
    );
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(
      res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      })
    );
  }
  sendToken(user, 200, res);
  // const token = user.getJWTToken();
  // res.status(200).json({
  //   success: true,
  //   token,
  // });
};

//logout user

exports.logout = async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
};

//get user details

exports.getUserDetails = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
};

//update user password
exports.updatePassword = async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(
      res.status(400).json({
        success: false,
        message: "Old Password is incorrect",
      })
    );
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(
      res.status(400).json({
        success: false,
        message: "Password does not match",
      })
    );
  }

  user.password = req.body.newPassword;
  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
};

//update user profile
exports.updateProfile = async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
};

//get all users (for admin)

exports.getAllUser = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
};

//get single user's details (for admin)

exports.getSingelUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      res.status(400).json({
        success: false,
        message: `user does not exist with ID: ${req.params.id}`,
      })
    );
  }
  res.status(200).json({
    success: true,
    user,
  });
};

//update user role
exports.updateUserRole = async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
};

//delete user
exports.deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      res.status(400).json({
        success: false,
        message: `user does not exist with ID: ${req.params.id}`,
      })
    );
  }

  await user.remove();

  res.status(200).json({
    success: true,
  });
};

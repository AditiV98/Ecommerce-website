const Order = require("../models/orderModel");
const Product = require("../models/productModel");

//create new order
exports.newOrder = async (req, res, next) => {
  const { shippingInfo, orderItems } = req.body;
  const order = await Order.create({
    shippingInfo,
    orderItems,
    user: req.user._id,
  });
  res.status(201).json({
    success: true,
    order,
  });
};

//get single order--for admin(in every order you can check name and email of user who has ordered)
exports.getSingleOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(
      res.status(404).json({
        success: false,
        message: "Order not found with this id",
      })
    );
  }

  res.status(200).json({
    success: true,
    order,
  });
};

//get logged in users order(my orders)
exports.myOrders = async (req, res, next) => {
  const order = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    order,
  });
};

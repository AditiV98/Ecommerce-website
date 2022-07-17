const Product = require("../models/productModel");
const ApiFeatures = require("../utils/apifeatures");

exports.createProduct = async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

exports.getAllProducts = async (req, res) => {
  const apiFeature = new ApiFeatures(Product.find(), req.query).search();
  //   res.status(200).json({ message: "Route is working fine" });
  try {
    const allProducts = await apiFeature.query; //Product.find({});
    res.status(200).json(allProducts);
  } catch (err) {
    res.json(err);
  }
};
exports.getProduct = async (req, res) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    res.status(200).json(getProduct);
    console.log(getProduct);
  } catch (err) {
    res.json(err);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id);
    res.status(200).json(updateProduct);
  } catch (err) {
    res.json(err);
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product deleted");
  } catch (err) {
    res.json(err);
  }
};

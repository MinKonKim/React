const productModel = require("../models/product.model");

async function createProduct(req, res, next) {
  try {
    const createdProduct = await productModel.create(req.body);
    res.status(201).json(createdProduct);
  } catch (e) {
    next(e);
  }
}

async function getProducts(req, res, next) {
  try {
    const allProducts = await productModel.find({});
  } catch (error) {
    next(error);
  }
}

async function getProductsById(req, res, next) {
  try {
    const product = await productModel.findById(req.params.productId);
  } catch (error) {}
}

module.exports = {
  createProduct,
};

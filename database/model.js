const db = require('./index.js');
const mongoose = require('mongoose');

let productDetailSchema = new mongoose.Schema({
  productCategoryId: Number,
  productCategory: String,
  productName: String,
  price: String,
  brandName: String,
  onlineExclusive: Boolean,
  reviewStarCount: String,
  reviewStarImages: [String],
  colors: [String],
  colorImages: [String],
  fit: [String],
  sizes: [String],
  sizesUnavailable: String,
  image: [String]
})

let ProductDetail = mongoose.model('ProductDetail', productDetailSchema)

module.exports = ProductDetail;

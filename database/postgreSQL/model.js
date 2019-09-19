const Sequelize = require('sequelize');
const db = require('./index.js');

const Product = db.define('product', {
  productCategoryId: Sequelize.INTEGER,
  productCategory: Sequelize.STRING,
  price: Sequelize.STRING,
  productName: Sequelize.STRING,
  brandName: Sequelize.STRING,
  onlineExclusive: Sequelize.BOOLEAN,
  reviewStarCount: Sequelize.STRING,
  reviewCount: Sequelize.INTEGER,
  colors: Sequelize.ARRAY(Sequelize.STRING),
  colorImages: Sequelize.ARRAY(Sequelize.STRING),
  fit: Sequelize.ARRAY(Sequelize.STRING),
  sizeStandard: Sequelize.ARRAY(Sequelize.STRING),
  sizePetite: Sequelize.ARRAY(Sequelize.STRING),
  sizePlus: Sequelize.ARRAY(Sequelize.STRING),
  sizesUnavailable: Sequelize.STRING,
  sizePetiteUnavailable: Sequelize.STRING,
  sizePlusUnavailable: Sequelize.STRING,
  image: Sequelize.ARRAY(Sequelize.STRING)

}, {
  timestamps: false
})

Product
  .sync()
  .then(() => console.log('Products table has been created.'))
  .catch((err) => console.error('Products table could not be created.', err));

module.exports = Product;
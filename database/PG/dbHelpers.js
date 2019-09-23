const pool = require('./index.js');

const dbHelpers = {
  getting: (id) => {
    return pool.query(`SELECT * FROM products WHERE "productCategoryId"=${id}`);
  }
  // gettingAll: () => {
  //   return Product.findAll().limit(100)
  // },
  // posting: (productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image) => {
  //   return Product.create({
  //     productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image
  //   })
  // },
  // updating: (id, productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image) => {
  //   return Product.update({ productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image }, {
  //     where: { id }
  //   })
  // },
  // deleting: (id) => {
  //   return Product.destroy({
  //     where: { id }
  //   })
  // }
}

module.exports = dbHelpers;
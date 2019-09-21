const Product = require('./model.js')

const dbHelpers = {
  getting: (productCategoryId) => {
    return Product.findOne({
      where: { productCategoryId }
    })
  },
  gettingAll: () => {
    return Product.findAll().limit(100)
  },
  posting: (productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image) => {
    return Product.create({
      productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image
    })
  },
  updating: (id, productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image) => {
    return Product.update({ productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image }, {
      where: { id }
    })
  },
  deleting: (id) => {
    return Product.destroy({
      where: { id }
    })
  }
}




module.exports = dbHelpers;
const ProductDetail = require('./model.js');

const dbHelpers = {
  getting: (productCategoryId) => {
    return ProductDetail.findOne({
      productCategoryId
    })
  },
  gettingAll: () => {
    return ProductDetail.find().limit(100)
  },
  posting: (productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image) => {
    return ProductDetail.create({
      productCategoryId, productCategory, productName, price, brandName, onlineExclusive,
      reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus,
      sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image
    })
  },
  updating: (productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image) => {
    return ProductDetail.update({ productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image }, {
      where: { productCategoryId }
    })
  },
  deleting: (productCategoryId) => {
    return ProductDetail.deleteOne({
      productCategoryId
    })
  }
}




module.exports = dbHelpers;
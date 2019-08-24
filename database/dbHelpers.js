const ProductDetail = require('./model.js');

const dbHelpers = {
  getById: (productCategoryId) => {
    return ProductDetail.findOne({
      productCategoryId
    })
  }
}

module.exports = dbHelpers;
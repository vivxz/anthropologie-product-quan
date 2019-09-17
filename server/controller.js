const { getting, posting, updating, deleting, gettingAll } = require('../database/mongoDB/model.js');

const controller = {
  get: (req, res) => {
    let { id } = req.params;
    getting(id)
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err))
  },
  getAll: (req, res) =>{
    gettingAll()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err))
  },
  post: (req, res) => {
    let { productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image } = req.body;
    posting(productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image)
      .then((data) => res.status(201).send('POSTED'))
      .catch((err) => res.status(400).send(err))
  },
  put: (req, res) => {
    let { productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image } = req.body;
    let { id } = req.params;
    updating(id, productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image)
      .then((data) => res.status(202).send('UPDATED'))
      .catch((err) => res.status(404).send(err))
  },
  delete: (req, res) => {
    let { id } = req.params;
    deleting(id)
      .then((data) => res.status(203).send('DELETED'))
      .catch((err) => res.status(400).send(err))
  }
}

module.exports = controller;












/*

  delete: (req, res) => {
    let { _id } = req.params;
    Orders.findByIdAndDelete(_id)
      .then(() => res.status(203).send('DELETED'))
      .catch((err) => res.status(404).send(err))
  }

*/
// const { getting, posting, updating, deleting, gettingAll } = require('../database/mongoDB/dbHelpers.js');
// const { getting, posting, updating, deleting, gettingAll } = require('../database/postgreSQL/dbHelpers.js');
const { getting } = require('../database/PG/dbHelpers.js');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const controller = {
  // PG: 
  get: (req, res) => {
    let { id } = req.params;
    getting(id)
      .then((data) => res.status(200).send(data.rows))
      .catch((err) => res.status(400).send(err.stack))
  },

  getRandom: (req, res) => {
    let id = getRandomInt(9000000, 10000000)
    getting(id)
      .then((data) => res.status(200).send(data.rows))
      .catch((err) => res.status(400).send(err.stack))
  }

  // ------------------------------------------------

  // get: (req, res) => {
  //   let { id } = req.params;
  //   getting(id)
  //     .then((data) => res.status(200).send(data))
  //     .catch((err) => res.status(400).send(err))
  // },
  // getRandom: (req, res) => {
  //   let num = getRandomInt(9000000, 10000000)
  //   getting(num)
  //     .then((data) => res.status(200).send(data))
  //     .catch((err) => res.status(400).send(err))
  // },
  // getAll: (req, res) => {
  //   gettingAll()
  //     .then((data) => res.status(200).send(data))
  //     .catch((err) => res.status(404).send(err))
  // },
  // post: (req, res) => {
  //   let { productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image } = req.body;
  //   posting(productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image)
  //     .then((data) => res.status(201).send(data))
  //     .catch(err => res.status(401).send(err));
  // },
  // put: (req, res) => {
  //   let { id } = req.params;
  //   let { productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image } = req.body;
  //   // MONGO:
  //   // updating(productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image)
  //   // PSQL:
  //   updating(id, productCategoryId, productCategory, productName, price, brandName, onlineExclusive, reviewStarCount, reviewCount, colors, colorImages, fit, sizeStandard, sizePetite, sizePlus, sizesUnavailable, sizePetiteUnavailable, sizePlusUnavailable, image)
  //     .then((data) => res.status(202).send('UPDATED'))
  //     .catch((err) => res.status(402).send(err));
  // },
  // delete: (req, res) => {
  //   let { id } = req.params;
  //   deleting(id)
  //     .then((data) => res.status(203).send('DELETED'))
  //     .catch((err) => res.status(400).send(err))
  // }
}

module.exports = controller;
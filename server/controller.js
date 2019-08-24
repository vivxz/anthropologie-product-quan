const { getById } = require('../database/dbHelpers.js');

const controller = {
  get: (req, res) => {
    let { id } = req.params;
    console.log('what is id', id)
    getById(id)
    .then((data) => {
      res.status(200).send(data)})
    .catch((err) => res.status(400).send(err))
  }
}

module.exports = controller;
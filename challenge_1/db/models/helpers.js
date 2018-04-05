const mongoose = require('mongoose');
const model = require('../index.js');

const findAll = function (callback) {
  model.find({},callback)
}
const insertOne = function (date, price,callback) {
	let wombo = new model();
	wombo.price = price;
	wombo.date = date;
  wombo.save(callback)
  // console.log(model.insertOne)
}


module.exports.findAll = findAll
module.exports.insertOne = insertOne
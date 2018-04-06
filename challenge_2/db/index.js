const mongoose = require("mongoose");

//connect to database 
mongoose.connect("mongodb://localhost/crypto");

const Schema = mongoose.Schema
//design schema for database
const cryptoSchema = new Schema({
  date: Date,
  price: Number  
})
//create model
const coins = mongoose.model("Coins", cryptoSchema);


module.exports = coins
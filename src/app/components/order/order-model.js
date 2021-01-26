const mongoose = require('mongoose');
const { Schema } = mongoose;

const Product = new Schema({
  name: {type: String, required: true},
  quantity: {type: Number, required: true},
  price: {type: Number, required: true}
}, {autoIndex: false});

const Order = new Schema({
  products: [Product],
  total: {type: Number, required: true}
}, {autoIndex: false});

Order.index({name: 1}, {unique: true});

module.exports = mongoose.model('order', Order);
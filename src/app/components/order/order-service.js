const order = require('./order-model');

const getOrders = async () => {
  const data = await order.find();
  console.log(data);
  return data;
};

const getOrderById = async (id) => {
  
};

const createOrder = async (newsletter) => {
  
};

const updateOrder = async (newsletter, id) => {
  
};

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder
};
const Product = require('./product-model');

const getProducts = async () => {
  // await 
};

const getProductById = async (id) => {
  await res.send(`FODA-SE: ${req.params.id}\n`);
};

const createProduct = async (product) => {
  return await Product.create(product);
};

const updateProduct = async (product, id) => {
  await res.send(`FODA-SE update: ${req.params.id}\n`);
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct
};
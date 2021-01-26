const service = require('./product-service');
//logger here

const getProducts = async (req, res) => {
  try {
    const products = await service.getProducts();
    
    res.send(`FODA-SE: ${req.context.traceId}\n`);
  } catch (error) {
    //Error handling here
  }
};


const getProductByName = async (req, res) => {
  await res.json({
    'name': 'Brazil nut',
    'price': 5.16,
    'quantity': 5
  });
};

const createProduct = async (req, res) => {
  const data = await service.createProduct(req.body);
  res.send(data);
};

module.exports = { 
  getProducts,
  getProductByName,
  createProduct
};
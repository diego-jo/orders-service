const service = require('./order-service');

const getOrders = async (req, res) => {
  /**
   * 
   * 
   *  
   * {
        "orders": [
            {
              "id": "123",
              "products": [
                {
                  "name": "Watermelon",
                  "quantity": 2,
                  "price": 5.47
                }
              ],
              "total": 10.94
          }
        ]
      }
   */
  // await res.send(`FODA-SE: ${req.context.traceId}\n`);
  res.send(await service.getOrders());
};

const getOrderById = async (req, res) => {
  /**
   * 
   * {
        "id": "456",
        "products": [
          {
            "name": "Coffee",
            "quantity": 3,
            "price": 2.43
          }
        ],
        "total": 7.29
      }
   */
  await res.send(`FODA-SE: ${req.params.id}\n`);
};

const createOrder = async (req, res) => {

  /**
   * 
   * ## Body
   *  {
        `"products": [
          {
            "name": "Kiwi",
            "quantity": 1
          }
        ]
      }`

    ## Response
      {
        "id": "42",
        "products": [
          {
            "name": "Kiwi",
            "quantity": 1,
            "price": 9.21
          }
        ],
        "total": 9.21
      }
   */
  req.body.traceId = req.context.traceId;
  res.send(req.body);
};

module.exports = { 
  getOrders,
  getOrderById,
  createOrder
};
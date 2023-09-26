const { ProductCart } = require('../models');

const productCartData = [
  {
    product_id: 1,
    cart_id: 1,
  },
  {
    product_id: 2,
    cart_id: 1,
  },
  {
    product_id: 3,
    cart_id: 1,
  },
  {
    product_id: 4,
    cart_id: 1,
  },
];

const seedProductCarts = () => ProductCart.bulkCreate(productCartData);

module.exports = seedProductCarts;
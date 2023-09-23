const { Cart } = require('../models');

const cartData = [
    {
        id: 1,
        user_id: 1
    }
]

const seedCarts = () => Cart.bulkCreate(cartData);

module.exports = seedCarts;
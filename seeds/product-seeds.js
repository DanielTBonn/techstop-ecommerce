const { Product } = require('../models');

const productData = [
    {
        id: 1,
        product_name: 'Brown Shoes',
        price: 1.00,
        description: "Some shoes that are brown.",
        image: "https://theblacktux.com/_next/image?url=https%3A%2F%2Fstatic.theblacktux.com%2Fproducts%2Fshoes%2Fbrown-leather-shoes%2FBrownLeatherShoes_1_1812x1875.jpg%3Fcrop%3D500%3A667&w=3840&q=75",
        category_id: 1,
    },
]

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
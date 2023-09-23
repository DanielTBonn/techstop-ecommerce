const { Category } = require('../models');

const categoryData = [
    {
        id: 1,
        category_name: 'Phones',
    },
    {
        id: 2,
        category_name: 'Computers',
    },
    {
        id: 3,
        category_name: 'Gadgets',
    },
    {
        id: 4,
        category_name: 'Laptops',
    },{
        id: 5,
        category_name: 'TVs',
    },
    {
        id: 6,
        category_name: 'Computer Monitors',
    },{
        id: 7,
        category_name: 'Accessories',
    },
    {
        id: 8,
        category_name: 'Consoles',
    }
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
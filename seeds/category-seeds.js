const { Category } = require('../models');

const categoryData = [
    {
        id: 1,
        category_name: 'Tech',
    }
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
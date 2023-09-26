const { Review } = require('../models');

const reviewData = [
    {
        id: 1,
        content: 'This is a great product!',
        username: 'lernatio',
        user_id: 2,
        product_id: 1
    },
    {
        id: 2,
        content: `Well it works I guess.`,
        username: 'torretaylor',
        user_id: 3,
        product_id: 1
    },
    {
        id: 3,
        content: 'I want my money back.',
        username: 'DanielTBonn',
        user_id: 1,
        product_id: 1
    },
]

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
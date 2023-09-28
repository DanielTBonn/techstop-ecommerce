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
    {
        id: 4,
        content: `This TV isn't big enough`,
        username: 'chrisD',
        user_id: 6,
        product_id: 35
    },
    {
        content: `This is crazy useful, thanks Belkin!`,
        username: 'chrisD',
        user_id: 6,
        product_id: 20
    },
    {
        content: `I use this all the time`,
        username: 'chrisD',
        user_id: 6,
        product_id: 53
    },
    {
        content: `I couldn't ask for a more useful USB C hub! It even works with 4k!`,
        username: 'ericV',
        user_id: 4,
        product_id: 53
    },
    {
        content: `Best docker on the market!`,
        username: 'abdulAl',
        user_id: 5,
        product_id: 53
    },
    {
        content: `RGB on this is way too cool!`,
        username: 'abdulAl',
        user_id: 5,
        product_id: 54
    },
    {
        content: `Light up keys go brr.`,
        username: 'DanielTBonn',
        user_id: 1,
        product_id: 54
    },
]

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
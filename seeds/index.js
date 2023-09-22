const seedUsers = require('./user-seeds.js');
const seedCategories = require('./category-seeds.js');
const seedProducts = require('./product-seeds.js');
const seedReviews = require('./review-seeds.js');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SYNCED -----\n');
    await seedProducts();
    console.log('\n----- PRODUCTS SYNCED -----\n');
    await seedReviews();
    console.log('\n----- REVIEWS SYNCED -----\n');

    process.exit(0);
}

seedAll();
const seedUsers = require('./user-seeds.js');
const seedCategories = require('./category-seeds.js');
const seedProducts = require('./product-seeds.js');
const seedReviews = require('./review-seeds.js');
const seedCarts = require('./cart-seeds.js');
const seedProductCarts = require('./product-cart-seeds.js');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SYNCED -----\n');
    await seedCarts();
    console.log('\n----- CARTS SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SYNCED -----\n');
    await seedProducts();
    console.log('\n----- PRODUCTS SYNCED -----\n');
    await seedProductCarts();
    console.log('\n----- PRODUCTCARTS SYNCED -----\n');
    await seedReviews();
    console.log('\n----- REVIEWS SYNCED -----\n');

    process.exit(0);
}

seedAll();
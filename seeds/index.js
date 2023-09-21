const seedReviews = require('./review-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedReviews();
    console.log('\n----- REVIEWS SYNCED -----\n');

    process.exit(0);
}

seedAll();
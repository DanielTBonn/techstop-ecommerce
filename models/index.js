const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Review = require('./Review');


// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});
  
// Categories have many Products
Category.hasMany(Product, {
foreignKey: 'category_id',
onDelete: 'CASCADE',
});

// User has many reviews
User.hasMany(Review, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


// Review belongs to user
Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blogpost has many comments
Product.hasMany(Review, {
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});


module.exports = { 
    User,
    Product,
    Category,
    Review 
}
const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Review = require('./Review');
const Cart = require('./Cart');
const ProductCart = require('./ProductCart');


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

// User will have only one cart
User.hasOne(Cart, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Cart belogns to a user
Cart.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Cart will contain many products
Cart.belongsToMany(Product, {
    through: ProductCart,
    foreignKey: 'cart_id',
    onDelete: 'CASCADE'
});

Product.belongsToMany(Cart, { 
    through: ProductCart,
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

module.exports = { 
    User,
    Product,
    Category,
    Review,
    Cart,
    ProductCart
}
const router = require('express').Router();
const userRoutes = require('./user-routes');
const cartRoutes = require('./cart-routes');
const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');
const reviewRoutes = require('./review-routes');

router.use('/users', userRoutes);
router.use('/carts', cartRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/reviews', reviewRoutes);


module.exports = router;
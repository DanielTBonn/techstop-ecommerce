const router = require('express').Router();
const { Category, Product, Review, Cart } = require('../models');
// const withAuth  = require('../utils/auth')

// GET all blogpost for homepage
router.get('/', async (req, res) => {
  try {


    const productData = await Product.findAll();
    const products = productData.map((product) =>
    product.get({ plain: true})
    );
    // console.log(products)

    res.render('homepage',{
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all blogpost for homepage
router.get('/category/:id', async (req, res) => {
  try {

    const productData = await Product.findAll({
      where: {
        category_id: req.params.id
      }
    });
    const products = productData.map((product) =>
    product.get({ plain: true})
    );
    // console.log(products)

    res.render('homepage',{
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a product by id and output it to the product page ending with its respective id
router.get('/product/:id', async (req, res) => {

  try {

    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: Category },
        { model: Review }
      ]
    });

    const product = productData.get({ plain: true});
    
    console.log("PRODUCT DATA: ", product)
    
    const reviewData = await Review.findAll();
    
    const reviews = reviewData.map((review) =>
      review.get({ plain: true})
    );
    
    console.log("REVIEW DATA: ", reviews)
    
    
    res.render('product',{
      product,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log("There was an error")
    console.log(err);
    res.status(500).json(err);
  }
});

// GET Reviews by user_id
router.get('/user/reviews/:id', async (req, res) => {

  try {
    const reviewData = await Review.findAll({
      where: {
        user_id: req.params.id,
        logged_in: req.session.logged_in
      }
    });

    const reviews = reviewData.map((review) =>
      review.get({ plain: true})
    );

    
    res.render('userreviews', { 
      reviews,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log("There was an error")
    console.log(err);
    res.status(500).json(err);
  }
    
})

// GET user cart
router.get('/user/cart/:id', async (req,res) => {
  
  try {
    req.session.id = req.params.id
    const cartData = await Cart.findOne({include: {model: Product}, where: {user_id: req.session.id}})
    console.log(cartData)
    const cart = cartData.get({ plain: true});
    console.log(cart)

    res.render('cart', {
      cart,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log("There was an error")
    console.log(err);
    res.status(500).json(err);
  }
});

// GET login page route
router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// GET signup page route
router.get('/signup', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
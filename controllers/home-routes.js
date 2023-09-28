const router = require('express').Router();
const { Category, Product, Review, Cart } = require('../models');
const withAuth = require('../utils/auth');
// const withAuth  = require('../utils/auth')

// GET products for homepage
router.get('/', async (req, res) => {
  try {

 // GET category 1 product data
 const productData1 = await Product.findAll({
  include: [ {model: Category} ],
  where: {
    category_id: 1
  }
});

const products1 = productData1.map((product) =>
  product.get({ plain: true})
);

 // GET category 2 product data
 const productData2 = await Product.findAll({
  include: [ {model: Category} ],
  where: {
    category_id: 2
  }
});

const products2 = productData2.map((product) =>
  product.get({ plain: true})
);

 // GET category 3 product data
 const productData3 = await Product.findAll({
  include: [ {model: Category} ],
  where: {
    category_id: 3
  }
});

const products3 = productData3.map((product) =>
  product.get({ plain: true})
);

 // GET category 4 product data
 const productData4 = await Product.findAll({
  include: [ {model: Category} ],
  where: {
    category_id: 4
  }
});

const products4 = productData4.map((product) =>
  product.get({ plain: true})
);

 // GET category 5 product data
 const productData5 = await Product.findAll({
  include: [ {model: Category} ],
  where: {
    category_id: 5
  }
});

const products5 = productData5.map((product) =>
  product.get({ plain: true})
);

 // GET category 6 product data
 const productData6 = await Product.findAll({
  include: [ {model: Category} ],
  where: {
    category_id: 6
  }
});

const products6 = productData6.map((product) =>
  product.get({ plain: true})
);

    // GET category 7 product data
    const productData7 = await Product.findAll({
      include: [ {model: Category} ],
      where: {
        category_id: 7
      }
    });

    const products7 = productData7.map((product) =>
      product.get({ plain: true})
    );


    // GET category 8 product data
    const productData8 = await Product.findAll({
      include: [ {model: Category} ],
      where: {
        category_id: 8
      }
    });

    const products8 = productData8.map((product) =>
      product.get({ plain: true})
    );

    res.render('homepage', {
      products1,
      products2,
      products3,
      products4,
      products5,
      products6,
      products7,
      products8,
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

    res.render('categories',{
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
      }
    });

    const reviews = reviewData.map((review) =>
      review.get({ plain: true})
    );

    console.log(reviews)
    
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
router.get('/user/cart/', withAuth, async (req,res) => {
  
  try {
    // THIS LINE NEEDS TO CHANGE FOR
    // req.session.id = req.params.id 
    // 
    const cartData = await Cart.findOne({include: {model: Product}, where: 
      {
        user_id: req.session.user_id
      }
    });
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
const router = require('express').Router();
const { Review } = require('../models');
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
      products
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/product', async (req, res) => {

  try {

    const reviewData = await Review.findAll();
    console.log(reviewData)

    const reviews = reviewData.map((review) =>
    review.get({ plain: true})
    );

    
    
    res.render('product',{
      reviews
    });
  } catch (err) {
    console.log("There was an error")
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
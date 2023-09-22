const router = require('express').Router();
const { Category, Product, Review } = require('../models');
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
      product
    });
  } catch (err) {
    console.log("There was an error")
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
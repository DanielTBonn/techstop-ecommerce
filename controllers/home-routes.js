const router = require('express').Router();
// const { User} = require('../models');
// const withAuth  = require('../utils/auth')

// GET all blogpost for homepage
router.get('/', async (req, res) => {
  try {


    const products = 
      {
        product:{
          name: "Example Product Name",
          price: 6000
        } 
      };
      console.log(products)

    res.render('homepage',{
      products
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
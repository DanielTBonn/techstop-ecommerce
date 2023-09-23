const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    // find all products
    const productData = await Product.findAll({
      // be sure to include its associated Category and Tag data
      include: [
        { model: Category },
        // { model: Tag }
    ]
    });

    if (!productData) {
      res.status(404).json({"message": "No products found." });
    } else {
      console.log("Success!")
      res.status(200).json(productData);
    }

  } catch (err) {
    res.status(500).json(err);
    console.log("Error occured");
    console.log(err);
  }
});

// get one product
router.get('/:id', async (req, res) => {
  try {
    // find all products
    const productData = await Product.findByPk(req.params.id, {
      // be sure to include its associated Category and Tag data
      include: [
        { model: Category }
      // , { model: Tag }
    ]
    });

    if (!productData) {
      res.status(404).json({"message": "No products with this id." });
    } else {
      console.log("Success!")
      res.status(200).json(productData);
    }
    
  } catch (err) {
    res.status(500).json(err);
    console.log("Error occured");
    console.log(err);
  }
});

// create new product
router.post('/', (req, res) => {

  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// router.put('/addtocart/:id', async (req, res) => {
//   try {
//     const productData = await Product.update({
//       cart_id: req.session.cart_id
//     },
//     {
//       where: {
//         id: req.body.id
//       }
//     });
    
//   } catch (err) {
//     res.status(500).json(err);
//     console.log("Error occured");
//     console.log(err);
//   }

// });

module.exports = router;
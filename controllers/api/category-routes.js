const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get route for all categories
router.get('/',  async (req, res) => {
  try {
    // find all categories
    const categoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({message: "No categories found"})
      return;
    }

    console.log("Success!")
    res.status(200).json(categoryData);
    
  } catch (err) {
    res.status(500).json(err);
    console.log("Error occured");
    console.log(err);
  }
});

// get route for a single category
router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({"message": "No categories with this id."});
      return;
    } 
    
    console.log("Success!")
    res.status(200).json(categoryData);

  } catch (err) {
    res.status(500).json(err);
    console.log("Error occured");
    console.log(err);
  }
});

// post route for adding a new category
router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    console.log("Successfully posted!")
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
    console.log("Error occured");
    console.log(err);
  }
});

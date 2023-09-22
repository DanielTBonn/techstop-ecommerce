const router = require('express').Router();
const { User, Review } = require('../../models');

// GET route for user and user reviews
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {model: Review}
            ],
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
        console.log('An Error Occured.');
        console.log(err);
    } 
});

module.exports = router;
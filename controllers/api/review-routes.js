const router = requre('express').Router();
const { Review } = require('../../models');

router.get('/', async (req, res) => {
    try { 
        const reviewData = await Review.findAll();
        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
        console.log('An Error Occured.');
        console.log(err);
        console.log(req.body);
    }
}).

module.exports = router;
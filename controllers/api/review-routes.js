const router = require('express').Router();
const { User, Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try { 
        const reviewData = await Review.findAll({
            include: [
                { 
                    model: User,
                    attributes: [
                        'username'
                    ] 
                }
            ]
        });
        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
        console.log('An Error Occured.');
        console.log(err);
        console.log(req.body);
    }
});

router.post('/', withAuth, async (req, res) => {
    try { 


        const reviewData = await Review.create({
                content: req.body.content,
                username: req.session.username,
                user_id: req.session.user_id,
                product_id: req.body.product_id
            }
        );

        res.status(200).json(reviewData);
    } catch (err) {
        res.status(500).json(err);
        console.log('An Error Occured.');
        console.log(err);
        console.log(req.body);
    }
});

module.exports = router;
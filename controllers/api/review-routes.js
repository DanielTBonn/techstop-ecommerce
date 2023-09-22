const router = require('express').Router();
const { User, Review } = require('../../models');

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

router.post('/', async (req, res) => {
    try { 

        req.session.save(() => {
            req.session.user_id = 1;
            
          });

        const reviewData = await Review.create({
                id: req.session.user_id,
                content: req.body.content,
                username: req.body.username,
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
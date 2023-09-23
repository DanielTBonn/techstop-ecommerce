const router = require('express').Router();
const { User, Cart, Product } = require('../../models');


router.get('/:id', async (req, res) => {
    try {
        const cartData = await Cart.findByPk(req.params.id, {
            include: [
                {model: Product}
            ]
        });
        console.log(cartData)
        res.status(200).send(cartData)
    } catch (err) {
        res.status(500).json(err);
        console.log('An Error Occured.');
        console.log(err);
    }
});

module.exports = router;
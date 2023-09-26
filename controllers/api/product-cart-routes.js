const router = require('express').Router();
const { ProductCart, Cart, Product } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const productCartData = await ProductCart.findAll();
        console.log(productCartData);
        res.status(200).send(productCartData);

    } catch (err) {
        res.status(500).json(err);
        console.log("Error occured");
        console.log(err);
    }

})

router.post('/', withAuth, async (req, res) => {
    try {
        const productCartCheck = await ProductCart.findOne({
            where: {
                product_id: req.body.product_id,
                cart_id: req.session.cart_id
            }
        });

        if (productCartCheck) {
            console.log("Item already exists in cart");
            return;
        }

        const productCartData = await ProductCart.create({
            product_id: req.body.product_id,
            cart_id: req.session.cart_id
        });
        console.log(productCartData);
        res.status(200).send(productCartData);
    } catch (err) {
        res.status(500).json(err);
        console.log("Error occured");
        console.log(err);
    }
})

router.delete('/', withAuth, async (req, res) => {
    try {
        const productCartData = await ProductCart.destroy({
            where: {
            product_id: req.body.product_id,
            cart_id: req.session.cart_id
        }
        });

        if (!productCartData) {
            res.status(404).json({"message": "No product-carts with this id." });
            return;
        }
        console.log("Successfully Deleted!");
        res.status(200).json(productCartData);

    } catch (err) {
        res.status(500).json(err);
        console.log("Error occured");
        console.log(err);
    }

})

module.exports = router;
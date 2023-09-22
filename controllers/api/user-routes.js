const router = require('express').Router();
const { User } = require('../../utils/auth');

// 
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        // const users = userData.get({ plain: true});
        // console.log(users);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
        console.log('An Error Occured.');
        console.log(err);
    } 
});

module.exports = router;
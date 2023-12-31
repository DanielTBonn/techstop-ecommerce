const router = require('express').Router();
const { User, Review, Cart } = require('../../models');

// GET route for user and user reviews
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [
                {model: Review},
                {model: Cart}
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

router.post('/login', async (req, res) => {
    try {
      // TODO: Add a comment describing the functionality of this expression
      // retrieves the user with a unique email in the database
      const userData = await User.findOne({ include: {model: Cart}, where: { username: req.body.username } });
  
      // console.log(userData);
      // console.log(userData.username)
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password, please try again' });
        return;
      }
  
      // TODO: Add a comment describing the functionality of this expression
      // checks the password inputted by the user against the actual password in the database
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
  
      // TODO: Add a comment describing the functionality of this method
      // saves the data to session storage to be used for further functionality
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.username = userData.username;
        req.session.cart_id = userData.cart.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });

      console.log(userData);
  
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        console.log(req.body)
        console.log(`Succesfully created user ${req.params.username}!`);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
        console.log('An Error Occured.');
        console.log(err);
    }
})

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Ends the current session
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
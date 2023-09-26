const withAuth = (req, res, next) => {
  // checks to see if logged_in is set to true in the session and redirects if otherwise
  if (!req.session.logged_in) {
    console.log(req.session.logged_in)
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;

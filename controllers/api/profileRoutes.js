const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.get('/profile', withAuth, async (req, res) => {
  try {
    res.render('profile', {logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

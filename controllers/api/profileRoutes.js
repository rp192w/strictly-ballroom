const router = require('express').Router();
const { getProjectData } = require('../../utils/helpers');
const withAuth = require('../../utils/auth');

router.get('/profile', withAuth, async (req, res) => {
  try {
    const projects = await getProjectData(req.session.user_id);
    res.render('profile', { projects, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

const router = require('express').Router();
const { Project } = require('../models');
const withAuth = require('../utils/auth'); // Assuming you have a middleware to check authentication

// Render the profile page with user's projects
router.get('/profile', withAuth, async (req, res) => {
  try {
    const projectData = await Project.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const projects = projectData.map((project) => project.get({ plain: true }));

    res.render('profile', { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

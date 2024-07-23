const router = require('express').Router();
const { Project } = require('../models');

// Render the homepage with all projects
router.get('/', async (req, res) => {
  try {
    const projectData = await Project.findAll();
    const projects = projectData.map((project) => project.get({ plain: true }));
    res.render('homepage', { projects, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

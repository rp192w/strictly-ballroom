const router = require('express').Router();
const instagramRoutes = require('../instagramController');

// Home page route
router.get('/', async (req, res) => {
  try {
    res.render('about', { title: 'About Us', logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// About page route
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us', logged_in: req.session.logged_in });
});

// Calendar page route
router.get('/calendar', (req, res) => {
  res.render('calendar', { title: 'Calendar', logged_in: req.session.logged_in });
});

// Contact page route
router.get('/contact', (req, res) => {
  res.render('contact', {
    studioName: "Strictly Ballroom - Utah’s #1 Dance Studio",
    description: "Home of National Champions, World Champions, British Open Finalists, DWTS Pros, DWTS Junior Pros, and SYTYCD winners & finalists!",
    address: "569 N 1200 W, Orem, Utah 84057",
    phone: "555-555-5555",
    email: "dance@strictlyballroomutah.com"
});
});

// FAQ page route
router.get('/faq', (req, res) => {
  res.render('faq', { title: 'FAQ', logged_in: req.session.logged_in });
});

// Rent Space page route
router.get('/rentspace', (req, res) => {
  res.render('rentspace', { title: 'Rent Space', logged_in: req.session.logged_in });
});

// Instagram page route
router.get('/instagram', instagramRoutes.getInstagramPhotos);

module.exports = router;

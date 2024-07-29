const router = require('express').Router();
// const { getInstagramMedia } = require('../instagramcontroller');

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
  res.render('contact', { title: 'Contact Us', logged_in: req.session.logged_in });
});

// FAQ page route
router.get('/faq', (req, res) => {
  res.render('faq', { title: 'FAQ', logged_in: req.session.logged_in });
});

// Rent Space page route
router.get('/rentspace', (req, res) => {
  res.render('rentspace', { title: 'Rent Space', logged_in: req.session.logged_in });
});

// // Instagram page route
// router.get('/instagram', async (req, res) => {
//   try {
//     const media = await getInstagramMedia();
//     res.render('instagram', { title: 'Instagram', media, logged_in: req.session.logged_in });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to fetch Instagram media' });
//   }
// });

module.exports = router;

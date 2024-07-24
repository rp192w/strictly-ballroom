
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const profileRoutes = require('./profileRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/', homeRoutes);
router.use('/', profileRoutes);

module.exports = router;

const router = require('express').Router();
const itemRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const historyRoutes = require('./historyRoutes');
const itemRoutes = require('./itemRoutes');

router.use('/items', itemRoutes);
router.use('/users', userRoutes);
router.use('/history', historyRoutes);

module.exports = router;
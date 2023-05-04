const router = require('express').Router();
const itemRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/items', itemRoutes);
router.use('/users', userRoutes);

module.exports = router;
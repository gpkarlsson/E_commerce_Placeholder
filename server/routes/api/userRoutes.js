const router = require('express').Router();
const {
    createUser,
    login,
    getSingleUser,
    putItemInCart,
    removeItemInCart,
    emptyCart,
    getUserHistory,
    getUserItems,
  
} = require('../../controllers/userController.js');

const { authMiddleware } = require('../../utils/auth');

//add user routes
router.route('/').post(createUser);

router.route('/login').post(login);

router.route()

module.exports = router;
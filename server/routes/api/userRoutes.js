const router = require('express').Router();
const {

    getUserHistory,
    getUserItems,
    getUserCart,
  
} = require('../../controllers/userController.js');

const { authMiddleware } = require('../../utils/auth');

//add user routes
router.route('/api/users').post(signup);

router.route('/api/users/login').post(login);

router.route('/mypage').get(authMiddleware, getSingleUser);

router.route('/mypage/items').get(authMiddleware, getUserItems);

router.route('/mypage/history').get(authMiddleware, getUserHistory);

router.route('/mypage/cart').get(authMiddleware, getUserCart).delete(authMiddleware, emptyCart);

router.route('/mypage/cart/:itemId').delete(authMiddleware, removeItemInCart);

router.route('/:userId/:itemId').post(authMiddleware, putItemInCart);

module.exports = router;
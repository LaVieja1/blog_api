const express = require('express');
const router = express.Router();

// Controller modules
const nonUser_controller = require('../controllers/nonUserController');
const auth_controller = require('../controllers/authController');

// NON USER ROUTES //

// GET ALL PUBLISHED POSTS
router.get('/published', nonUser_controller.all_published_posts_get);

// GET ALL COMMENTS
router.get('/comments/', nonUser_controller.all_comments_get);

// GET COMMENTS FOR SPECIFIC POST
router.get('/comments/:postId', nonUser_controller.post_comments_get);

// ADD COMMENT TO POST
router.post('/comments/', nonUser_controller.comments_create);

// LOGIN
router.post('/login/', auth_controller.log_in);

// LOGOUT
router.post('/logout/', auth_controller.log_out);

module.exports = router;
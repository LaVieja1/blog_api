const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/usersController');

// USER ROUTES //

// GET ALL POSTS
router.get('/posts/', user_controller.all_posts_get);

// GET REQUEST FOR SINGLE POST
router.get('/posts/:postId', user_controller.single_post_get);

// POST NEW POST
router.post('/posts/', user_controller.create_post);

// DELETE POST
router.delete('/posts/:postId', user_controller.delete_post);

// PUT PUBLISH POST
router.put('/publish/:postId', user_controller.publish_post);

// PUT EDIT POST
router.put('/edit/:postId', user_controller.edit_post);

// DELETE COMMENT
router.delete('/comments/:commentId', user_controller.comments_delete);

// ADD IMAGE FILE
router.post('/image/:postId', user_controller.image_post);

// DELETE IMAGE
router.delete('/image/:postId', user_controller.image_delete);

module.exports = router;

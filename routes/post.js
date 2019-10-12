const express = require('express');
const { getPosts, createPost } = require('../controllers/post');
const validator = require('../validator/index');

const router = express.Router();

router.get('/', getPosts);
router.post('/post', validator.createPostValidator, createPost);

// exports.getPosts = (req, res) => {
//     // res.send('Hello World from Node Js');

// };

module.exports = router;

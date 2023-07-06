const express = require("express");
const router = express.Router();

const postRouter = require('./routers/post.route')

router.use('/post', postRouter)

module.exports = router;
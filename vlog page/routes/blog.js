const express =require("express");
const router = express.Router();
//import controller
const {creatComment} = require("../controllers/CommentController")
const{createPost,getAllPosts} = require("../controllers/postController");
const{likePost,unlikePost } = require("../controllers/likeController")

// mapping create

router.post("/comments/create",creatComment);
router.post("/posts/create", createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost );


module.exports =router;
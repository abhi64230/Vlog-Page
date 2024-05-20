const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


exports.creatComment = async (req,res) => {
       try{
            
         //fetch data from req 
         const{post, user, body} = req.body;
         //creat a comment object
         const comment =new Comment({
              post,user,body
         });

         //save the new comment into the database

       const savedComment = await comment.save();

       // find the post by id add the new comments array
       const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})// upadate doc return
       .populate("comments") // populate the comments array with comment documents
        .exec(); //execute


        res.json({
          post:updatedPost,
        });


       }

       catch(error){
        return res.status(500).json({
          error:"Error while Creating comment",
        });

       }
}
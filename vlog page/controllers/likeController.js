const Post = require ("../models/postModel");
const Like = require ("../models/likeModel");

exports. likePost =async(req,res) =>{
       try {
             const {post,user}  = req.body
             const like = new Like({
              post, user,
             });
             const savedLike = await like.save();

             // update the post collection basis on this
             const updatePost = await Post.findByIdAndUpdate(post, {$push:{likes:savedLike._id}},{new:true})
             .populate("likes").exec();

             res.json({
              post:updatePost,
             })

       } catch (error) {
              return res.status(500).json({
                     error:"Error while Likeing comment",
                   });   
       }
}

//unlike post
exports.unlikePost = async (req,res) =>{
       try {
            const{post,like} = req.body;
            //find and delet the like collection me se
            const deletedLike = await Like.findByIdAndDelete({post:post, _id:like});
            //update the post collection
            const updatedPost =await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

            res.json({
              post:updatedPost

            });
       } catch (error) {
              return res.status(500).json({
                     error:"Error while Unlikeing comment",
                   });  
              
       }
}



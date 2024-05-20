const Todo = require("../models/Todo");

exports. createTodo = async(req, res) =>{
       try {
              const {title, description} = req.body;
              const response = await Todo.create({title, description});
              res.status(200).json(
                     {
                         success:true,
                         data: response,
                         message:  'Entry Created Sucessfully'
                     }
              );
       } catch ( err) {
              console.error(err);
              console.log(err);
              res. status(500)
              .json({
                     success:false,
                     data:"internal server  error",
                     message: err.message
              })
              
       }
} 



exports. getTodo = async(req, res) =>{
       try {

               const todos = await Todo.find({});

               res.status(200)
               .json({
                     success:true,
                     data:todos,
                     message:"Entire  Todo Data is fetched",
               });
         }
          catch ( err) {
              console.error(err);
       
              res. status(500)
              .json({
                     success:false,
                     error: err.message,
                     message:'server Error'
              });
              
       }
} 


//  get by id use method

exports.getTodoById = async(req, res) => {
       try {
              // extract todo items basis on id 
              const id = req. params.id;
              const todo = await Todo.findById({_id: id})

              // data fogiven id  not found
                if (!todo) {
                     return res.status(404).json({
                            success:false,
                            message:"no data found woth given id",
                     })
                }
                res. status(200).json({
                     success: true,
                     data: todo,
                     message: `todo ${id} data successfully fetched`,
                })


       } catch (err) {
              console.error(err);
       
              res. status(500)
              .json({
                     success:false,
                     error: err.message,
                     message:'server Error'
              });
       }
}

// update

exports. updateTodo = async(req, res) =>{
       try {
             const {id} =req.params;
             const {title, description} = req.body;
             const todo = await Todo.findByIdAndUpdate(
              {_id:id},
              {title, description, updatedAt: Date.now()},
             )
              res.status(200).json({
                     success: true,
                     data:todo,
                     message: "updated Successfully",
              })
       } catch ( err) {
              console.error(err);
       
              res. status(500)
              .json({
                     success:false,
                     error: err.message,
                     message:'server Error'
              });
              
       }
} 
// delete
exports. deleteTodo = async(req, res) =>{
       try {
              const {id} =req.params;
              await Todo.findByIdAndDelete(id);
              res.json({
                     success: true,
                     message: "Todo Deleted",
              })
       } catch ( err) {
              console.error(err);
       
              res. status(500)
              .json({
                     success:false,
                     error: err.message,
                     message:'server Error'
              });
              
       }
} 

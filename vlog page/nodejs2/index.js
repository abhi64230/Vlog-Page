const  express = require("express");
const app = express();

 require("dotenv") .config();
 const PORT = process.env.PORT ||4000;

 app.use (express.json());

 const todoRoutes = require("./routes/todos");

 app.use("/api/v1", todoRoutes); 

app.listen(PORT, () =>{
       console.log (`sever started successfully at ${PORT}`);
})

  const dbConnect = require("./config/database");
  dbConnect();

  app.get("/", (req, res ) =>{
       res.status(200).send (`<h1> this is home page baby</h1>`)
  })




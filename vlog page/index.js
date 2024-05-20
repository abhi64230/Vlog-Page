const  express = require("express");
const app = express();

 require("dotenv") .config();
 const PORT = process.env.PORT ||5080;

//middleware
 app.use (express.json());

 const blog  = require("./routes/blog");

 app.use("/api/v1",blog ); 

app.listen(PORT, () =>{
       console.log (`sever started successfully at ${PORT}`);
})

  const connectwithDb = require("./config/database");
  connectwithDb();

  app.get("/", (req, res ) =>{
       res.status(200).send (`<h1> this is home page baby</h1>`)
  })

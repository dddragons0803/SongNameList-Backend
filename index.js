
const express= require("express")
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);
const bodyParser = require("body-parser")
const port = 5000 || process.env.PORT;

require('dotenv/config');
const crudRoutes = require("./routes/crud") 
const index= express();
//using middleware
index.use(bodyParser.json())

//importing routes
index.get("/",(req,res)=>{
    res.json({message:"hloppp"})
})
index.use("/crud",crudRoutes)

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.lmqs7ye.mongodb.net/rest?retryWrites=true&w=majority" ,
    ()=> console.log("connecbteed to db")
    )


index.listen(port,()=>{
    console.log("server is running on port ", port)
})
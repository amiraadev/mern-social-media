import express from "express";
import  bodyParser from "body-parser";
import  mongoose from "mongoose";
import  cors from "cors";
import  connectToDB from "./config-db.js";
import posteRoutes from "./router.js";

const app = express()
const port = process.env.PORT || 5001

app.use(cors({origin:"*"}));
app.use('/posts',posteRoutes);

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));






connectToDB()
.then(() => { 
    app.listen(port,() => {console.log(`server is listening on port ${port}`);})
   })
.catch((err) => {
   console.log(err);
});
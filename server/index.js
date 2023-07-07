import express from "express";
import  bodyParser from "body-parser";
import  cors from "cors";
import  connectToDB from "./config-db.js";
import postRoutes from "./postRouter.js";
import userRoutes from "./userRouter.js";

const app = express()
const port = process.env.PORT || 5001

app.use(cors({origin:"*"}));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

app.use('/posts',postRoutes);
app.use('/users',userRoutes);

connectToDB()
.then(() => { 
    app.listen(port,() => {console.log(`server is listening on port ${port}`);})
   })
.catch((err) => {
   console.log(err);
});
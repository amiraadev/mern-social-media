
import  mongoose from "mongoose";

const User = new mongoose.Schema({
    firsName : {type:String,required:true},
    lastName : {type:String,required:true},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true},
}
)

const userModel = mongoose.model('userData', User);
export default userModel;

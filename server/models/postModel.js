
import  mongoose from "mongoose";

const Post = new mongoose.Schema({
    title : {type:String,required:true},
    message : {type:String},
    creator : {type:String},
    tags : [String],
    selectedFile : {type:String},
    likes :{
                type : [String],
                default:[]
            },
    createdAt:{
                type:Date,
                default: new Date()
                    }
}
// ,{collection:'social-media-app'}
)

const postModel = mongoose.model('PostData', Post);
export default postModel;

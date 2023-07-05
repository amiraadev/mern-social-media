import postModel from "../models/postModel.js"

export const getPosts = async (req,res) => {
try {
    const postMessages = await PostMessage.find()
    res.status(200).json({postMessages})
} catch (error) {
    res.status(400).json({message:error.message})
}
}


export const createPost = async (req,res) => {
  const newPost = req.body ;
  // console.log(newPost);
  try {
      //adding the post to the DB
      const post = await postModel.create(newPost)
      return res.status(201).json({
                  message : "post has been added",
                  _id: post.id,
                  title: post.title,
                  message: post.message,
                  creator: post.creator,
                  tags: post.tags,
                  selectedFile: post.selectedFile,
                  likeCount: post.likeCount,
                  createdAt: post.createdAt,
              })
  } catch (error) {
       return res.status(409).json({error:error.message})
  }
}


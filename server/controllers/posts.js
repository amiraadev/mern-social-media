import mongoose from "mongoose"
import postModel from "../models/postModel.js"

export const getPosts = async (req,res) => {
try {
    const postMessages = await postModel.find()
    // res.status(200).json({postMessages})
    res.status(200).json(postMessages)
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

export const updatePost = async (req,res) => {
  const {id:_id} = req.params ;
  const post = req.body ;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

  try {
    const updatedPost = await postModel.findByIdAndUpdate(_id,post,{new:true})
      return res.status(201).json({
                  message : "post has been updated",
                  _id: updatedPost.id,
                  title: updatedPost.title,
                  message: updatedPost.message,
                  creator: updatedPost.creator,
                  tags: updatedPost.tags,
                  selectedFile: updatedPost.selectedFile,
                  likeCount: updatedPost.likeCount,
                  createdAt: updatedPost.createdAt,
              })
  } catch (error) {
       return res.status(409).json({error:error.message})
  }
}


export const deletePost = async (req,res) => {
  const {id:_id} = req.params ;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

  try {
    const deletedPost = await postModel.findByIdAndDelete(_id)
      return res.status(200).json({
                  Message : "post has been removed",
                  _id: deletedPost.id,
                  title: deletedPost.title,
                  message: deletedPost.message,
                  creator: deletedPost.creator,
                  tags: deletedPost.tags,
                  selectedFile: deletedPost.selectedFile,
                  likeCount: deletedPost.likeCount,
                  createdAt: deletedPost.createdAt,
              })
  } catch (error) {
       return res.status(409).json({error:error.message})
  }
}


export const likePost = async (req,res) => {
  const {id} = req.params ;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')

  try {
    const post = await postModel.findByIdAndUpdate(id)
    const updatedPost = await postModel.findByIdAndUpdate(id,{likeCount:post.likeCount + 1},{new:true})
      return res.status(201).json({
                  Message : "post has been liked",
                  _id: updatedPost.id,
                  title: updatedPost.title,
                  message: updatedPost.message,
                  creator: updatedPost.creator,
                  tags: updatedPost.tags,
                  likeCount: updatedPost.likeCount,
                  createdAt: updatedPost.createdAt,
                  selectedFile: updatedPost.selectedFile,
              })
  } catch (error) {
       return res.status(409).json({error:error.message})
  }
}
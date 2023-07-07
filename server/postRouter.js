import express from "express";
import { getPosts , createPost,updatePost, deletePost,likePost } from "./controllers/posts.js";

const postRoutes = express.Router();

postRoutes.get('/',getPosts)
postRoutes.post('/', createPost)
postRoutes.patch('/:id', updatePost)
postRoutes.delete('/:id', deletePost)
postRoutes.patch('/:id/likePost', likePost)

export default postRoutes;
import express from "express";
import { getPosts , createPost,updatePost, deletePost,likePost } from "./controllers/posts.js";

const posteRoutes = express.Router();

posteRoutes.get('/',getPosts)
posteRoutes.post('/', createPost)
posteRoutes.patch('/:id', updatePost)
posteRoutes.delete('/:id', deletePost)
posteRoutes.patch('/:id/likePost', likePost)

export default posteRoutes;
import express from "express";
import { getPosts , createPost,updatePost } from "./controllers/posts.js";

const posteRoutes = express.Router();

posteRoutes.get('/',getPosts)
posteRoutes.post('/', createPost)
posteRoutes.patch('/:id', updatePost)

export default posteRoutes;
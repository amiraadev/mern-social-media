import express from "express";
import { getPosts , createPost } from "./controllers/posts.js";

const posteRoutes = express.Router();

posteRoutes.get('/',getPosts)
posteRoutes.post('/', createPost)

export default posteRoutes;
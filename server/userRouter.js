import express from "express";
import registerUser from "./controllers/register.js";
import loginUser from "./controllers/login.js";

const userRoutes = express.Router();

userRoutes.post('/register', registerUser)
 userRoutes.post('/login',loginUser)
// userRoutes.patch('/:id', updatePost)
// userRoutes.delete('/:id', deletePost)
// userRoutes.patch('/:id/likePost', likePost)

export default userRoutes;
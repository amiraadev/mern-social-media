

import mongoose from "mongoose"
import postModel from "../models/postModel.js"
import userModel from "../models/userModel.js"
import {generateToken} from "../config-token.js"
import bcryptjs from "bcryptjs";
import Joi from "@hapi/joi";



const regiterValidate = Joi.object({
    firstName : Joi.string().min(4).required(),     
    lastName : Joi.string().min(4).required(),     
    email : Joi.string().min(6).required().email(),     
    password : Joi.string().min(6).required(),   
    confirmPassword : Joi.string().min(6).required()   
})

  async function registerUser(req,res) {
    const {firstName,lastName,email,password,confirmPassword} = req.body ;
    try {
      const {error} = await regiterValidate.validateAsync(req.body)
      // if(error)
      // res.status(422).json({ error})

      if(password !== confirmPassword){
          return res.status(422).json({ error: "Password Confirmation Failed: The password and confirm password entries do not match." });
      }
      
      const salt = await bcryptjs.genSalt(5);
      const hashedPassword = await bcryptjs.hash(password,salt)
       const user = await userModel.create({firstName,email,lastName,password:hashedPassword})
      
       return res.status(201).json({
       message : "user has been added",
      _id: user.id,
        name: user.firstName +" "+ user.lastName,
        email: user.email,
        token: generateToken(user.email)
       })

    } catch (error) {
      if(error.details)
      res.status(422).json({error:error.details[0].message})
       else
       res.status(409).json({error:"Email address is already registered. Please use a different email."})

    }
  }


export default registerUser







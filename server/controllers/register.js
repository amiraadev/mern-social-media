

import mongoose from "mongoose"
import postModel from "../models/postModel.js"
import userModel from "../models/userModel.js"
import {generateToken} from "../config-token.js"
import bcrypt from "bcrypt";
import Joi from "@hapi/joi";



const regiterValidate = Joi.object({
    firsName : Joi.string().min(4).required(),     
    lastName : Joi.string().min(4).required(),     
    email : Joi.string().min(6).required().email(),     
    password : Joi.string().min(6).required()   
})

const findWord = (sentence, word) => {
    const stringSentence = String(sentence)
    const index = stringSentence.indexOf(word);
    if (index === -1) {
      return false;
    } else {
      return true;
    }
  };

async function registerUser(req,res) {
    const {firsName,lastName,email,password} = req.body ;

    try {
        const {error, details} = regiterValidate.validateAsync(req.body)
        if (error) {
            if (details.length > 0) {
              return res.status(401).json({ error: details[0].message });
            } else {
              return res.status(402).json({ error: error.message });
            }
          }

          const salt = await bcrypt.genSalt(5);
          const hashedPassword = await bcrypt.hash(password,salt)

          const user = await userModel.create({firsName,email,lastName,password:hashedPassword})

          return res.status(201).json({
            message : "user has been added",
            _id: user.id,
            firsName: user.firsName,
            lastName: user.lastName,
            email: user.email,
            token: generateToken(user.email)
        })

    } catch (error) {
        if(findWord(error,"duplicate "))
        {
        return res.status(409).json({error:"Email belongs to an existing user"})
        }
            else
                return res.status(409).json({error:error.message})
            // return res.status(409).json({error:"Email belongs to an existing user"})
        }   
  }

export default registerUser







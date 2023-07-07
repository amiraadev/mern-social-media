import { generateToken } from "../config-token.js";
import userModel from "../models/userModel.js"
import bcrypt from "bcrypt";
import Joi from "@hapi/joi";

const loginValidate = Joi.object({   
    email : Joi.string().min(6).required().email(),     
    password : Joi.string().min(6).required()   
})


async function loginUser(req,res) {
  const {email,password} = req.body;
  const {error, details} = loginValidate.validateAsync(req.body)
  if (error) {
      if (details.length > 0) {
        return res.status(401).json({ error: details[0].message });
      } else {
        return res.status(402).json({ error: error.message });
      }
    }

  try {
    const user  = await userModel.findOne({email})
    if (!user)
    {
        return res.status(404).json({ error: "Email Validation Error: The email address you provided does not match any existing accounts in our system" });
    }

    const passwordMatch = bcrypt.compare(password, user.password);
    if (!passwordMatch){
        return res.status(404).json({error:"Invalid email or password "})
    }

    return res.status(200).json({
        message:"successfully logged in :)",                  
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user.email)
    })

  } catch (error) {
    return res.status(404).json({error:error.message})
  }
    
}

export default loginUser

import jwt from "jsonwebtoken"


export const generateToken = (email) => {
    return jwt.sign({email},process.env.TOKEN_SECRET,{expiresIn:"3h"})
}

export const verifyToken = (token,email) => {
    return jwt.verify(token,process.env.TOKEN_SECRET,{email})
}
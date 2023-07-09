import jwt from "jsonwebtoken"

const auth = async(req,res,next) =>{
    try {
       
        // console.log(req.headers.authorization)
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token);
        const isCustomAuth = token.length < 500;
        let decodedData ;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token,process.env.TOKEN_SECRET)
            req.userEmail =decodedData?.email
            // console.log(req.userEmail);
        } else {
            decodedData = jwt.decode(token)
            req.userEmail =decodedData?.sub
            // console.log(req.userEmail);
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth ;
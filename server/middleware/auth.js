import jwt from "jsonwebtoken"

const auth = async(req,res,next) =>{
    try {
        // const token = req.headers.authorization.split(" ")[1];
     //   console.log(req.headers.authorization.split(" ")[1]);
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData ;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token,process.env.TOKEN_SECRET)
            console.log(decodedData);
            req.userId =decodedData?.id
        } else {
            decodedData = jwt.decode(token)
            req.userId =decodedData?.sub
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth ;
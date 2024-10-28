import { userExistOrNot } from '../service/userService.js';
import { verifJwt } from '../utils/jwt.js';


export const isAuthenticated = async (req,res,next) => {

    const token = req.headers["access-token"];

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Token is required!"
        })
    }

    
    // check if user exist or not
    
    try{
        
        const response = verifJwt(token);
        const doesUserExist = await userExistOrNot(response.email);
        if(!doesUserExist){
            return res.status(400).json({
                success: false,
                message: "User does not exist!"
            })
        }

        req.user = response;
        next();


    }catch(error){
        return res.status(402).json({
            success: false,
            message: "Invalid Token!"
        })
    }
}
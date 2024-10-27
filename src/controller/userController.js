import { createUserService } from "../service/userService.js";

export async function createUser (req,res){
    try{

        

        const User = await createUserService({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        return res.status(200).json({
            success: true,
            message: "User Created Successfully! ",
            data: User
        })

    }catch(error){
        console.log(error);
        return res.status(501).json({
            success: false,
            message: "Failed to create User! ",
            error: error.Errors
        })
    }
}
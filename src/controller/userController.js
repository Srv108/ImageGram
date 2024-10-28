import { createUserService, signinUserService } from "../service/userService.js";



export async function createUser (req,res){
    try{
        const User = await createUserService(req.body);

        return res.status(200).json({
            success: true,
            message: "User Created Successfully! ",
            data: User
        })

    }catch(error){
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
                
        return res.status(501).json({
            success: false,
            message: "Failed to create User! ",
            error: error.Errors
        })
    }
}


export async function signin (req,res){
    try{
        const response = await signinUserService(req.body);
        return res.status(200).json({
            success: true,
            message: "Signed in Successfully!",
            data: response
        });
    }catch(error){
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}


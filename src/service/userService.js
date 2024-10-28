import { createUser, findUserByEmail } from "../repositories/userRepository.js";
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/jwt.js";

export const createUserService = async (user) => {
    try{
        const User = await createUser(user);
        return User;

    }catch(error){
        console.log(error);
        if(error.code === 11000){
            throw {
                status: 400,
                message: "Email Already Registered!"
            }
        }
        throw error;
    }
}


export const signinUserService = async (userDetails) => {
    try{
        const user = await findUserByEmail(userDetails.email);
        if(!user){
            throw{
                status: 401,
                message: "User not found"
            }
            throw error;
        }

        const isPasswordValid = bcrypt.compareSync(userDetails.password,user.password);

        if(!isPasswordValid){
            throw{
                status: 400,
                message: "Invalid Password! Try Again!"
            }
            throw error;
        }

        const token = generateToken({email: userDetails.email,username: user.username,_id: user._id});
        
        return token;
        
    }catch(error){
        throw error;
    }
    
}

export const userExistOrNot = async (email) => {
    try{
        const user = await findUserByEmail(email);
        return user;
    }catch(error){
        throw error;
    }
}
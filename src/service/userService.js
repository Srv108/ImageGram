import { createUser, findUserByEmail } from "../repositories/userRepository.js";

export const createUserService = async (user) => {
    try{
        const User = await createUser(user);
        return User;

    }catch(error){
        if(error.code === 11000){
            throw {
                status: 400,
                message: "Email Already Registered!"
            }
        }
        throw error;
    }
}


export const findUserServiceByEmail = async (email) => {
    try{
        const user = await findUserByEmail(email);
        return user;
    }catch(error){
        console.log(error);
    }
    
}
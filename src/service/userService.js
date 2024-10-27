import { createUser, findUserByEmail } from "../repositories/userRepository.js";

export const createUserService = async (userObject) => {
    
    const username = userObject.username;
    const email = userObject.email;
    const password = userObject.password;
    
    const User = await createUser(username,email,password);
    return User;
}


export const findUserServiceByEmail = async (email) => {
    const existingUser = await findUserByEmail(email);
    if(existingUser){
        return {
            success: false,
            message: "Email already registered !",
            data: existingUser
        }
    }
}
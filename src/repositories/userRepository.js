import User from "../schema/user.js";

export const createUser = async(username,email,password) => {
    try{
        const user = await User.create({username,email,password});
        return user;
    }catch(error){
        console.log(error);
    }
}

export const findUserByEmail = async (email) => {
    try{
        const user = await User.findOne( {email} );
        return user;
    }catch(error){
        console.log(error);
    }
}

export const findAllUsers = async () => {
    try{
        const users = await User.find();
        return users;
    }catch(error){
        console.log(error);
    }
}

export const findUserByUsername = async (username) => {
    try{
        const user = await User.findOne({username});
    }catch(error){
        console.log(error);
    }
}
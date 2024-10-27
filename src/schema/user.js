import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: 5

    },
    email: {
        type: String,
        required: true,
        unique: true,
        
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
},{timestamps : true});

const user = mongoose.model('User',userSchema); // make a new collection with name User

export default user;
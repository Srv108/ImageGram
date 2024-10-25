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
        validate: {
            validator: function(emailValue) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);
            },
            message : ("Invalid Email Format")
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
},{timestamps : true});

const user = mongoose.model('User',userSchema); // make a new collection with name User

export default user;
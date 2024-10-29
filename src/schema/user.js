import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
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
    role: {
        type: String,
        default: "user",
        enum: ["user","admin"]
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    }
},{timestamps : true});

userSchema.pre('save',function modifyPassWord(next){
    const SALT = 9;
    const password = this.password;
    const newPassword = bcrypt.hashSync(password,SALT);

    this.password = newPassword;
    next();
})


const user = mongoose.model('User',userSchema); // make a new collection with name User

export default user;
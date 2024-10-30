import mongoose from "mongoose";
import { number } from "zod";

const commentSchema = new mongoose.Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },
    likes:{
        type: Number,
        default: 0
    },
    replies:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",

    }]
},{timestamps: true});

const comment = mongoose.model("Comment",commentSchema);

export default comment;


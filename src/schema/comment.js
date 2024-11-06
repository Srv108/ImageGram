import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
        minLength: 1
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    onModel: {
        type: String,
        required: true,
        enum: ["Comment","Post"]
    },
    commentableId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "onModel"
    },
    replies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Likes"
        }
    ]


},{timestamps: true});

const comment = mongoose.model("Comment",commentSchema);

export default comment;


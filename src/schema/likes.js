import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // References the User model
        required: true,
    },
    resource: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        type: {
            type: String,
            required: true,
            enum: ['Post', 'Comment'], // Define the type of resource being liked
        },
    },
},{timestamps: true});

const likes = mongoose.model("Likes",likeSchema);

export default likes;
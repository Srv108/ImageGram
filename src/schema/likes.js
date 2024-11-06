import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        required: true,
        enum : ["Post","Comment"],
    },
    likableId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: onModel,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

},{timestamps: true});

const likes = mongoose.model("Likes",likeSchema);

export default likes;
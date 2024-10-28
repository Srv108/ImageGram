import Post from "../schema/post.js";

export const createPost = async (caption,image,user) => {
    try{
        const newPost = await Post.create({ caption,image,user });
        // const newPost = new Post({ caption,image,user });
        // await newPost.save();
        return newPost;
    }catch(error){
        console.log(error);
    }
}

export const findAllPost = async (offset,limit) => {
    try{
        const posts = await Post.find().sort({created: -1}).skip(offset).limit(limit).populate('user','username email _id');
        return posts;
    }catch(error){
        console.log(error);
    }
}

export const countAllPost = async () => {
    try{
        const totalDocuments = await Post.countDocuments();
        return totalDocuments;

    }catch(error){
        console.log(error);
    }
}

export const postById = async (id) => {
    try{
        const post = await Post.findById(id);
        return post;
    }catch(error){
        console.log(error);
    }
}

export const deletePostById = async (id) => {
    try{
        const post = await Post.findByIdAndDelete(id);
        return post;
    }catch(error){
        console.log(error);
    }
}
export const updatePostById = async (id,updateObject) => {
    try{
        const post = await Post.findByIdAndUpdate(id,updateObject,{ new: true });
        return post;
    }catch(error){
        console.log(error);
    }
}
import Post from "../schema/post";

export const createPost = async (caption,image,user) => {
    try{
        const newPost = Post.create({ caption,image,user });
        // const newPost = new Post({ caption,image,user });
        // await newPost.save();
        return newPost;
    }catch(error){
        console.log(error);
    }
}

export const findAllPost = async () => {
    try{
        const posts = await Post.find();
        return posts;
    }catch(error){
        console.log(error);
    }
}

export const postById = async (id) => {
    try{
        const post = Post.findById({id});
        return post;
    }catch(error){
        console.log(error);
    }
}

export const deletePostById = async (id) => {
    try{
        const post = Post.findByIdAndDelete(id);
        return post;
    }catch(error){
        console.log(error);
    }
}
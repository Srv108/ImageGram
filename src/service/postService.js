import { countAllPost, createPost, postById, deletePostById, findAllPost, updatePostById } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;
    const user = createPostObject.user;
    const post = await createPost(caption,image,user);

    return post;
}

export const getAllPostService = async (offset,limit) => {
    const post = await findAllPost(offset,limit);

    const totalDocuments = await countAllPost();
    const totalPage = Math.ceil(totalDocuments/limit);

    const currentPage = (offset/limit) + 1;


    return {
        post,totalDocuments,totalPage,currentPage
    };
}

export const deletePostService = async (postId,user) => {

    const post = await postById(postId);

    console.log("Post is ",post);
    console.log("User id ", user);

    if(post.user != user){
        return {
            status: 400,
            message: "You are not admin of this post"
        }
    }
    
    const response = await deletePostById(postId);

    return response;
    
}

export const updatePostService = async (id,updateObject) => {
    const response = await updatePostById(id,updateObject);

    return response;
}
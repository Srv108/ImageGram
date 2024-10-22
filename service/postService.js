import { createPost, findAllPost } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;
    // const user = createPostObject.user;
    const post = await createPost(caption,image);

    return post;
}

export const getAllPostService = async () => {
    const post = await findAllPost();

    return post;
}

export const deletePostService = async (postId) => {
    
}

export const updatePostService = async () => {

}
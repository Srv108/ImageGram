import { countAllPost, createPost, findAllPost } from "../repositories/postRepository.js";

export const createPostService = async (createPostObject) => {
    const caption = createPostObject.caption?.trim();
    const image = createPostObject.image;
    // const user = createPostObject.user;
    const post = await createPost(caption,image);

    return post;
}

export const getAllPostService = async (offset,limit) => {
    const post = await findAllPost(offset,limit);

    const totalDocuments = await countAllPost();
    const totalPage = Math.ceil(totalDocuments/limit);

    const currentPage = (offset/limit) + 1;


    return {
        post,totalPage,currentPage
    };
}

export const deletePostService = async (postId) => {
    
}

export const updatePostService = async () => {

}
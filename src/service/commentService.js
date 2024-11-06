import { createComment, findCommentById } from "../repositories/commentRepository.js";
import { postById } from "../repositories/postRepository.js";

export const createCommentService = async (content,userId,onModel,commentableId) => {
    try{

        const parent = await fetchCommentParent (onModel,commentableId);
        if(!parent){
            throw{
                meassage: `${onModel} Not Found`,
                status: 404
            }
        }

        const newComment = await createComment(content,userId,onModel,commentableId);

        await addChildToParent(parent,onModel,newComment);
        
        return newComment;
    }catch{
        console.log(error);
        throw error;
    }
}

export const getCommentByIdService = async (id) => {
    try{
        const comment = await findCommentById(id);
        return comment;

    }catch(error){
        console.log(error);
        throw error;
    }
}


const fetchCommentParent = async (onModel,commentableId) => {
    try{
        let parent;
        if(onModel === "Post"){
            parent = await postById(commentableId);
        }else if(onModel === "Comment"){
            parent = await findCommentById(commentableId);
        }

        return parent;

    }catch(error){
        console.log(error);
        throw error;
    }
}

const addChildToParent = async (parent,onModel,newComment) => {
    try{
        if(onModel === "Post"){
            parent.comments.push(newComment);
        }else if(onModel === "Comment"){
            parent.replies.push(newComment);
        }

        await parent.save();

    }catch(error){
        console.log(error);
        throw error;
    }
}



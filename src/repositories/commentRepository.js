import Comment from '../schema/comment.js';

export const createComment = async (content,userId,onModel,commentableId) => {
    try{

        const newComment = await Comment.create({content,userId,onModel,commentableId,
            replies: [],likes: []
        });

        return newComment;

    }catch(error){
        console.log(error);
        throw error;
    }
}

export const findCommentById = async (id) => {
    try{
        
        const comment = Comment.findById(id).populate('replies');
        return comment;

    }catch(error){
        console.log(error);
        throw error;

    }
}

// export const findUserIdByCommentId = async (commentId) => {

// }


// export const findAllRepliesOfComment = async (commentId) => {

// }
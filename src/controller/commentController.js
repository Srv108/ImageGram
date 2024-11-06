import { createCommentService, getCommentByIdService } from "../service/commentService.js";

export async function createComment (req,res) {
    try{

        const {content, onModel, commentableId} = req.body;
        const userId = req.user._id;

        const response = await createCommentService(content, userId, onModel, commentableId);
        
        return res.status(202).json({
            success: true,
            message: "Comment made successfully",
            data: response
        })

    }catch(error){
        console.log(error);
        if(error.status){
            return res.status(402).json({
                success: false,
                message: error.message
            })
        }
        return res.status(403).json({
            success: false,
            message: "Internal Server Error"
        })
        
    }
}

export async function getCommentById(req,res){
    try{

        const response = await getCommentByIdService(req.params.id);
        return res.status(203).json({
            success: true,
            message: "Comment fetched successfully",
            data: response
        })
    }catch(error){
        console.log(error);
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                success: false,
                message: error.message
            })
        }
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}
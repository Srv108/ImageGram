import { createPostService, deletePostService, getAllPostService, updatePostService } from "../service/postService.js";

export async function createPost (req,res){
    console.log(req.file);
    // call the service layer -> repository layer -> database schema 

    const post = await createPostService({
        caption: req.body.caption,
        image: req.file.location
    });
    return res.status(201).json({
        success: true,
        message: "Post created Successfully !",
        Data: post
    });
}

export async function getAllPost (req,res){

    try{
        const limit = req.query.limit || 10;
        const offset = req.query.offset || 0;
        const paginatedPost = await getAllPostService(offset,limit);


        return res.status(201).json({
            success: true,
            message: "All post fetched successfully! Hui Hui!",
            data: paginatedPost,
        })
    }catch(error){
        console.log(error);
        return res.status(501).json({
            success: false,
            message: "Internal Server Error! "
        })
    }
}


export async function deletePost (req,res) {
    try{
        const postId = req.params.id;
        const response = await deletePostService(postId);

        if(!response){
            return res.status(401).json({
                success: false,
                message: "Post Doesn't Exist"
            })
        }

        return res.status(201).json({
            success: true,
            message: "Post Deleted Successfully! Hui Hui",
            data: response
        })

    }catch(error){
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Failed to delete post",
        })
    }
}

export async function updatePost (req,res) {
    try{
        console.log("Req File: ",req.file);
        const updateObject = req.body;
        
        if(req.file){
            updateObject.image = req.file.location;
        }
        const postId = req.params.id;
        const response = await updatePostService(postId,updateObject);

        return res.status(200).json({
            success: true,
            message: "Post Updated Successfully! Hui Hui",
            data: response
        })

    }catch(error){
        console.log(error);
        res.status(501).json({
            success: false,
            message: "Failed to update the post",
        })
    }
}
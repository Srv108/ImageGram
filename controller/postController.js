import { createPostService, getAllPostService } from "../service/postService.js";

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
        return res.status(500).json({
            success: false,
            message: "Internal Server Error! "
        })
    }
}


export async function deletePostByid (req,res) {
    try{
        const post = await deletePostById();

        return post;
        
    }catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}
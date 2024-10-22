import { createPostService, getAllPostService } from "../service/postService.js";

export async function createPost (req,res){
    console.log(req.file);
    // call the service layer -> repository layer -> database schema 

    const post = await createPostService({
        caption: req.body.caption,
        image: req.file.location
    });
    res.status(201).json({
        success: true,
        message: "Post created Successfully !",
        Data: post
    });
}

export async function getAllPost (req,res){
    console.log(req.file);

    const post = await getAllPostService();
}
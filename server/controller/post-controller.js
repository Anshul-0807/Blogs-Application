import { response } from "express";
import Post from "../model/post.js";



export const createPost = async (request, response) => {
   try{
    const post =  await new Post(request.body);
    post.save();

    return response.status(200).json('post saved successfully');
   } catch(error){
    return response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) => {
    try{
        let posts = await Post.find({});

        return response.status(200).json(posts);
    } catch( error ) {
     return response.status(500).json({msg: error.message});
    }
}
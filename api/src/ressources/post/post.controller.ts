import { Router } from "express";
import PostService from "./post.service";

const PostController = Router()
const postService = new PostService()

const endPoint = "/posts"

PostController.get(endPoint, async (req, res) => {
    const postsList = await postService.findAll()
    res.send(postsList);
})

PostController.post(endPoint, async (req, res) => {
    const post = await postService.create(req.body)
    res.send(post);
})

// get One
// delete
// update

export default PostController;
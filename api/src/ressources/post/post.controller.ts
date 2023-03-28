import { Router } from "express";
import { NotFoundException } from "../../utils/exception";
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

PostController.get(`${endPoint}/:id`, async (req, res, next) => {
    try {
        const post = await postService.findOne(+req.params.id)
        if (!post) {
            throw new NotFoundException("Post not found")
        }
        return res.send(post);
    } catch (error) {
        next(error)
    }
})

PostController.delete(`${endPoint}/:id`, async (req, res, next) => {
    try {
        const post = await postService.delete(+req.params.id)
        if (!post) {
            throw new NotFoundException("Post not found")
        }
        res.send(post);
    } catch (error) {
        next(error)
    }
})

PostController.put(`${endPoint}/:id`, async (req, res, next) => {
    try {
        const post = await postService.update(+req.params.id, req.body)
        if (!post) {
            throw new NotFoundException("Post not found")
        }
        res.send(post);
    } catch (error) {
        next(error)
    }
})

export default PostController;
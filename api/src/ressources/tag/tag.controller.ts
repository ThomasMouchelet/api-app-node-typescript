import { Router } from "express";
import { NotFoundException } from "../../utils/exception";
import TagService from "./tag.service";

const TagController = Router()
const tagService = new TagService()

const endPoint = "/tags"

TagController.get(endPoint, async (req, res) => {
    const tagsList = await tagService.findAll()
    res.send(tagsList);
})

TagController.post(endPoint, async (req, res) => {
    const tag = await tagService.create(req.body)
    res.send(tag);
})

TagController.get(`${endPoint}/:id`, async (req, res, next) => {
    try {
        const tag = await tagService.findOne(+req.params.id)
        if (!tag) {
            throw new NotFoundException("Tag not found")
        }
        return res.send(tag);
    } catch (error) {
        next(error)
    }
})

TagController.delete(`${endPoint}/:id`, async (req, res, next) => {
    try {
        const tag = await tagService.delete(+req.params.id)
        if (!tag) {
            throw new NotFoundException("Category not found")
        }
        res.send(tag);
    } catch (error) {
        next(error)
    }
})

TagController.put(`${endPoint}/:id`, async (req, res, next) => {
    try {
        const tag = await tagService.update(+req.params.id, req.body)
        if (!tag) {
            throw new NotFoundException("Category not found")
        }
        res.send(tag);
    } catch (error) {
        next(error)
    }
})

export default TagController;
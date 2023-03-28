import { Router } from "express";
import { NotFoundException } from "../../utils/exception";
import CategoryService from "./category.service";

const CategoryController = Router()
const categoryService = new CategoryService()

const endPoint = "/categories"

CategoryController.get(endPoint, async (req, res) => {
    const categoriesList = await categoryService.findAll()
    res.send(categoriesList);
})

CategoryController.post(endPoint, async (req, res) => {
    const category = await categoryService.create(req.body)
    res.send(category);
})

CategoryController.get(`${endPoint}/:id`, async (req, res, next) => {
    try {
        const category = await categoryService.findOne(+req.params.id)
        if (!category) {
            throw new NotFoundException("Category not found")
        }
        return res.send(category);
    } catch (error) {
        next(error)
    }
})

CategoryController.delete(`${endPoint}/:id`, async (req, res, next) => {
    try {
        const category = await categoryService.delete(+req.params.id)
        if (!category) {
            throw new NotFoundException("Category not found")
        }
        res.send(category);
    } catch (error) {
        next(error)
    }
})

CategoryController.put(`${endPoint}/:id`, async (req, res, next) => {
    try {
        const category = await categoryService.update(+req.params.id, req.body)
        if (!category) {
            throw new NotFoundException("Category not found")
        }
        res.send(category);
    } catch (error) {
        next(error)
    }
})

export default CategoryController;
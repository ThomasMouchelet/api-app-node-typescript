import connectDB from "../../config/database.config"
import { CategoryCreateDTO, CategoryUpdateDTO } from "../../types/category.type"
import { CategoryEntity } from "./category.entity"

class CategoryService {
    constructor(
        private categoryRepository = connectDB.getRepository(CategoryEntity)
    ) {}

    async findAll() {
        return await this.categoryRepository.find()
    }

    async create(category: CategoryCreateDTO) {
        return await this.categoryRepository.save(category)
    }

    async findOne(id: number) {
        const category = await this.categoryRepository.findOneBy({ id })
        return category
    }

    async delete(id: number) {
        return await this.categoryRepository.softDelete(id) 
    }

    async update(id: number, category: CategoryUpdateDTO) {
        return await this.categoryRepository.update(id, category)
    }
}

export default CategoryService


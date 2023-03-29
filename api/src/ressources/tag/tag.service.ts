import connectDB from "../../config/database.config"
import { TagCreateDTO, TagUpdateDTO } from "../../types/tag.type"
import { TagEntity } from "./tag.entity"

class TagService {
    constructor(
        private tagRepository = connectDB.getRepository(TagEntity)
    ) {}

    async findAll() {
        return await this.tagRepository.find()
    }

    async create(tag: TagCreateDTO) {
        return await this.tagRepository.save(tag)
    }

    async findOne(id: number) {
        return await this.tagRepository.findOneBy({ id })
    }

    async delete(id: number) {
        return await this.tagRepository.softDelete(id) 
    }

    async update(id: number, tag: TagUpdateDTO) {
        return await this.tagRepository.update(id, tag)
    }
}

export default TagService
import connectDB from "../../config/database.config"
import { PostCreateDTO, PostUpdateDTO } from "../../types/post.type"
import { PostEntity } from "./post.entity"

class PostService {
    constructor(
        private postRepository = connectDB.getRepository(PostEntity)
    ) {}

    async findAll() {
        return await this.postRepository.find()
    }

    async create(post: PostCreateDTO) {
        return await this.postRepository.save(post)
    }

    async findOne(id: number) {
        const post = await this.postRepository.findOneBy({ id })
        return post
    }

    async delete(id: number) {
        return await this.postRepository.softDelete(id) 
    }

    async update(id: number, post: PostUpdateDTO) {
        return await this.postRepository.update(id, post)
    }
}

export default PostService


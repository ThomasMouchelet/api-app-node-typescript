import connectDB from "../../config/database.config"
import { PostCreateDTO } from "../../types/post.type"
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
}

export default PostService


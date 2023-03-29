import connectDB from "../../config/database.config"
import { PostCreateDTO, PostUpdateDTO } from "../../types/post.type"
import { QueryType } from "../../types/query.type"
import { PostEntity } from "./post.entity"

class PostService {
    constructor(
        private postRepository = connectDB.getRepository(PostEntity)
    ) {}

    async findAll(query: QueryType) {
        let limit = query.limit || 2
        let offset = query.offset || 0
        let page = query.page || 1
        let order = query.order || "DESC"
        
        if(page > 1) offset = (page - 1) * limit

        const queryBuilder = await this.postRepository.createQueryBuilder("post")
            .leftJoinAndSelect("post.category", "category")
            
        if (query.category) {
            await queryBuilder.where("category.name = :category", { category: query.category })
        }

        const [data, count] = await queryBuilder
                .orderBy("post.createdAt", order)
                .offset(offset)
                .limit(limit)
                .getManyAndCount()

        return {
            data,
            total: count,
            totalPage: Math.ceil(count / limit),
            currentPage: Math.ceil(offset / limit) + 1,
        }
    }

    async create(post: PostCreateDTO) {
        return await this.postRepository.save(post)
    }

    async findOne(id: number) {
        return await this.postRepository.createQueryBuilder("post")
            .leftJoinAndSelect("post.category", "category")
            .where("post.id = :id", { id })
            .getOne()
    }

    async delete(id: number) {
        return await this.postRepository.softDelete(id) 
    }

    async update(id: number, post: PostUpdateDTO) {
        return await this.postRepository.update(id, post)
    }
}

export default PostService


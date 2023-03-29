import { CategoryUpdateDTO } from "./category.type"
import { TagUpdateDTO } from "./tag.type"

export type PostCreateDTO = {
    title: string
    content?: string
    category?: CategoryUpdateDTO,
    tags?: TagUpdateDTO[]
}

export type PostUpdateDTO = {
    id?: number
    title?: string
    content?: string,
    category?: CategoryUpdateDTO,
    tags?: TagUpdateDTO[]
}
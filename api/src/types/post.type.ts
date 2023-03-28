export type PostCreateDTO = {
    title: string
    content?: string
}

export type PostUpdateDTO = {
    id?: number
    title?: string
    content?: string
}
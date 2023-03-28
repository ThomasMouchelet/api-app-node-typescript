import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("post")
export class PostEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        nullable: false,
    })
    title!: string

    @Column({
        nullable: true,
    })
    content!: string
}
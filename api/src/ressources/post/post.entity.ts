import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { CategoryEntity } from "../category/category.entity";
import { TimestampEntity } from "../Generic/timestamp.entity";
import { TagEntity } from "../tag/tag.entity";

@Entity("post")
export class PostEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        nullable: false,
    })
    title!: string

    @Column({
        nullable: true,
    })
    content!: string;

    @ManyToOne(() => CategoryEntity, category => category.posts, {
        cascade: ["insert", "update"],
    })
    category!: CategoryEntity;

    @ManyToMany(() => TagEntity, tag => tag.posts, {
        cascade: ["insert", "update"],
    })
    @JoinTable()
    tags!: TagEntity[];
}
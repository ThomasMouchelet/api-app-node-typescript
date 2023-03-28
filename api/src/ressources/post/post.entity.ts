import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { CategoryEntity } from "../category/category.entity";
import { TimestampEntity } from "../Generic/timestamp.entity";

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
}
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TimestampEntity } from "../Generic/timestamp.entity";
import { PostEntity } from "../post/post.entity";

@Entity('category')
export class CategoryEntity extends TimestampEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true,
    })
    name!: string;

    @OneToMany(() => PostEntity, post => post.category)
    posts!: PostEntity[];
}
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { TimestampEntity } from "../Generic/timestamp.entity";
import { PostEntity } from "../post/post.entity";

@Entity("tag")
export class TagEntity extends TimestampEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    unique: true,
  })
  name!: string;

  @ManyToMany(() => PostEntity, post => post.tags)
  posts!: PostEntity[];
}
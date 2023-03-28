import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
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
}
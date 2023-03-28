import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TimestampEntity } from "../Generic/timestamp.entity";

@Entity('category')
export class CategoryEntity extends TimestampEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
}
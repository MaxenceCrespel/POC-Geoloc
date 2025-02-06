import { ObjectId } from "mongodb";
import { Entity, ObjectIdColumn, Column, CreateDateColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column({ type: 'string', nullable: false })
    name: string;

    @CreateDateColumn()
    createdAt: Date;
}

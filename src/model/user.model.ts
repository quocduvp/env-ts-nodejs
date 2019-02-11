import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class User{
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    username: string

    @Column()
    password: string

    // constructor(username: string,  password: string){
    //     this.password = username
    //     this.password = password
    // }
}
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
export class User {
    
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;
    
    @Column()
    phone: number;

    @Column()
    email: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }
}
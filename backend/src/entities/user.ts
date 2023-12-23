import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "User" })
class User {
    @PrimaryGeneratedColumn("uuid")
    user_id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    logged_in: boolean;
}

export default User;
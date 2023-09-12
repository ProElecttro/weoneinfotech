import {Entity , PrimaryGeneratedColumn , Column } from "typeorm";

@Entity({name: "Products"})
export class Product{
    @PrimaryGeneratedColumn("uuid")
    product_id: string

    @Column()
    name: string

    @Column()
    category: string

    @Column()
    price: string

    @Column()
    sales_price: string

    @Column()
    stock: string

    @Column()
    status: string
}
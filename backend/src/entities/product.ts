import {Entity , PrimaryGeneratedColumn , Column } from "typeorm";

@Entity({name: "Products"})
class Product{
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

    @Column()
    description: string
}

export default Product
import express from "express";
import "reflect-metadata"
import AppDataSource from "./config";
import { Product } from "./entities/product";

const app = express();
app.use(express.json())

app.post('/test',(req,res)=>{
    res.send("Hello the route is now working")
})

app.post('/addproduct', async (req, res) => {
    const productRepo = AppDataSource.getRepository(Product);
    let newproduct = new Product();
    newproduct.name = "HP FlashDrive 64GB";
    newproduct.category = "USB";
    newproduct.price = "1250";
    newproduct.sales_price = "600";
    newproduct.status = "Available";
    newproduct.stock = "65";
    
    try {
        const saved_product = await productRepo.save(newproduct);
        res.json(saved_product);
    } catch (error) {
        // Handle any errors that occur during the save operation.
        console.error("Error saving product:", error);
        res.status(500).json({ error: "Failed to save product" });
    }
});


const port = 3002;

AppDataSource.initialize().then(() => {
    console.log('Database connected successfully');
    app.listen(port, ()=>{
        console.log(`running on port ${port}`);
    })
}).catch((err) => {
    console.log(`Error`, err);
});

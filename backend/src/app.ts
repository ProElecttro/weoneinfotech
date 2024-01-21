import express from "express";
import "reflect-metadata"

import AppDataSource from "./config";
import Product from "./entities/product";
import User from "./entities/user";

import dotenv from "dotenv";
dotenv.config()

import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { validate } from "class-validator";
import bodyParser from 'body-parser';

const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(
    cors({
        origin: '*'
    })
);

app.post('/addproduct', async (req, res) => {
    try {
        console.log(req.body)
        const productRepo = AppDataSource.getRepository(Product);

        let newProduct = { ...req.body };
        newProduct.status = (parseInt(newProduct.stock) > 0) ? "Available" : "Out of Stock";
        const savedProduct = await productRepo.save(newProduct);
        return res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to save product" });
    }
});

app.get('/fetchProductDetails', async (req, res) => {
    try {
        const productRepo = AppDataSource.getRepository(Product);

        const products = await productRepo.find();

        if (products.length === 0) {
            return res.status(204).json({ message: 'No products found' });
        }

        res.status(200).json(products);
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/productbycategory/:category', async (req, res) => {
    const productRepo = AppDataSource.getRepository(Product);
    try {
        const products = await productRepo.find({
            where: { category: req.params.category }
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/deleteProduct/:product_id', async (req, res) => {
    const productRepo = AppDataSource.getRepository(Product);
    try {
        const product = await productRepo.findOne({
            where: { product_id: req.params.product_id }
        })
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        await productRepo.remove(product);

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/////////////JWT Token////////////
const generateAccessToken = (user: User) => {
    const id = user.user_id
    return jwt.sign(
        { id },
        process.env.TOKEN_SECRET || "",
        { expiresIn: "2h" },
    );
};

const generateRefreshToken = (user: User) => {
    const id = user.user_id
    return jwt.sign(
        { id },
        process.env.TOKEN_SECRET || "",
    );
};

export const verifyJwt = (token: string) => {
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET || "")
        return decoded;
    } catch (error) {
        console.error('JWT verification failed:', error);
        return null;
    }
};


/////////user////////////////
app.post('/login', async (req, res) => {
    console.log(req.body);
    const userRepo = AppDataSource.getRepository(User);
    const user = await userRepo.findOne({
        where: { email: req.body.email }
    });
    console.log(user);
    if (!user) {
        console.log("user not found");
        return res.send({ message: "User not found, Please Registered!" })
    }

    try {
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.send({ message: "Invalid Credentials!, Please try again." });
        }

        const id = user.user_id;
        const secret = process.env.TOKEN_SECRET;
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        // res.cookie('accesstoken', accessToken, { httpOnly: true });
        res.setHeader('signin', `accesstoken=${accessToken}`)
        const accessT = req.cookies.accesstoken;
        console.log(req.cookies);
        return res.status(200).json({
            accessToken,
            refreshToken,
            message: "User Logged In Successfully"
        });
    } catch (error) {
        console.error("Error comparing passwords:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});


app.post('/register', async (req, res) => {
    const userRepo = AppDataSource.getRepository(User);
    const emailCheck = await userRepo.findOne({
        where: { email: req.body.email },
    });
    if (emailCheck) {
        return res.status(400).json({ message: 'User already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        let user: User = new User();
        user = { ...req.body };
        user.password = hashedPassword;

        let userInserted = await userRepo.save(user);
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.cookie('accesstoken', accessToken, { httpOnly: true });
        
        return res.status(200).json({
            accessToken,
            refreshToken,
            message: "User Registered Successfully"
        });
    } catch (error) {
        console.error('Error saving user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.get('/getusers', async (req, res) => {
    const userRepo = AppDataSource.getRepository(User)
    const users = await userRepo.find()
    res.json(users)
})



const port = 3002;

AppDataSource.initialize().then(() => {
    console.log('Database connected successfully');
    app.listen(port, () => {
        console.log(`running on port ${port}`);
    })
}).catch((err) => {
    console.log(`Error`, err);
});


// import nodemailer from "nodemailer";
// import { google } from "googleapis";

// // Create an OAuth2 client
// const oauth2Client = new google.auth.OAuth2(
//     "312653798379-3qkj8tfu93qr7jn0k34uhtvc0d7h9g0p.apps.googleusercontent.com",
//     "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",
//     "http://localhost:5173"
// );

// // Generate an OAuth2 token
// const getOAuthAccessToken = () => {
//     return new Promise<string>((resolve, reject) => {
//         oauth2Client.getToken("YOUR_REFRESH_TOKEN", (err, token) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 // resolve(token.access_token);
//             }
//         });
//     });
// };


// // Send email using OAuth2
// const sendTokenToUserEmail = async (userEmail: string, token: string, callback: (error: Error | null) => void) => {
//     const accessToken = await getOAuthAccessToken();

//     const transporter = nodemailer.createTransport({
//         service: "Gmail",
//         auth: {
//             type: "OAuth2",
//             user: "vikimsuryawanshi@gmail.com",
//             accessToken: accessToken,
//         },
//     });

//     const mailOptions = {
//         from: "vikimsuryawanshi@gmail.com",
//         to: userEmail,
//         subject: "Your JWT Token",
//         text: `Your JWT token is: ${token}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error("Error sending email:", error);
//             callback(error);
//         } else {
//             console.log("Email sent successfully");
//             callback(null);
//         }
//     });
// };

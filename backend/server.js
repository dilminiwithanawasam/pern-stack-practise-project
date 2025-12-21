import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { sql } from "./config/db.js";
import { aj } from "./lib/arcjet.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());//cors is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(helmet());//helmet is a security middleware that helps you protect your app by setting various HTTP headers.
app.use(morgan("dev"));//morgan is a HTTP request logger middleware for node.js
const PORT = process.env.PORT || 5000;
//apply arcjet rate-limit ti all routes
app.use(async(req,res,next)=>{
    try{
        const decision = await aj.protect(req, {
            requested:1//specifies that each request consumes 1 token
        })
        if(decision.isDenied()){
            if(decision.reason.isRateLimit()){
                res.status(429).json({
                    error:"Too Many Requests",
                })
            }
        }
       
    }catch{
        res.status(500).json({message:"Internal Server Error"});

    }
})
app.use("/api/products", productRoutes);

async function initDB(){
    try {
      await sql`
        CREATE TABLE IF NOT EXISTS products (
          id SERIAL PRIMARY KEY,
          name VARCHAR(100) NOT NULL,
          image VARCHAR(255) NOT NULL,
          price DECIMAL(10, 2) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `; 
        console.log("Database connected and ensured products table exists."); 
    } catch (error) {
        console.error("Database connection failed:", error);
        
    }
}
initDB().then(() => {
    console.log("Server is running on port", PORT);
    app.listen(PORT);
});
import { sql } from '../config/db.js';
export const getAllProducts = async (req,res) => {
    try{
       const product = await sql`SELECT * FROM products ORDER BY created_at DESC`;
       console.log(product);
       res.status(200).json({success:true,data:product});
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
export const createProduct = async (req,res) => {
    try{
        const {name,image,price} = req.body;
        if(!name || !image || !price){
            return res.status(400).json({message:"Please provide name, image and price"});
        }else if(isNaN(price)){
            return res.status(400).json({message:"Price must be a number"});
        }else{
            const product = await sql`INSERT INTO products (name,image,price) VALUES (${name},${image},${price}) RETURNING *`;
             res.status(201).json({success:true,data:product});
             console.log(product);
             console.log("Product created successfully");
        }
       
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
export const getProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const product = await sql`SELECT * FROM products WHERE id=${id}`;   
        if(product.length === 0){
            return res.status(404).json({message:"Product not found"});
        }
        res.status(200).json({success:true,data:product[0]});
    }catch(error){
        res.status(500).json({message: error.message});
    }   

};
export const updateProduct = async (req,res) => {
    const {id} = req.params;
    const {name,image,price} = req.body;
    try{
        const existingProduct = await sql`SELECT * FROM products WHERE id=${id}`;
        if(existingProduct.length === 0){
            return res.status(404).json({message:"Product not found"});
        }   
        const updatedProduct = await sql`UPDATE products SET name=${name || existingProduct[0].name}, image=${image || existingProduct[0].image}, price=${price || existingProduct[0].price} WHERE id=${id} RETURNING *`;
        res.status(200).json({success:true,data:updatedProduct});
    }catch(error){
        res.status(500).json({message: error.message});
    }

};
export const deleteProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const existingProduct = await sql`SELECT * FROM products WHERE id=${id}`;   
        if(existingProduct.length === 0){
            return res.status(404).json({message:"Product not found"});
        }
        await sql`DELETE FROM products WHERE id=${id}`;
        res.status(200).json({success:true,message:"Product deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }

};
 
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!! First Full Stack Application");
});

app.post("/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).send("Please fill in all fields");
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
  } catch (error) {}
});

app.listen(port, () => {
  connectDB();
  console.log(`server is running on port http://localhost:${port}`);
});

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const port = 5173;

app.use(express.json()); //allows us to accept json data from req body

app.use("/api/products", productRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`server is running on port http://localhost:${port}`);
});

// import express from "express";

// const productRouter = express.Router();

// productRouter.get("/", (req, res) => {
//     res.send("Product GET request");
// });

// productRouter.post("/", (req, res) => {
//     res.send("Product POST request");
// });

// export default productRouter;

import express from "express"
import { addProduct,getProducts } from "../controllers/productController.js"
const productRouter = express.Router()
productRouter.get("/",getProducts)
productRouter.post("/",addProduct)
export default productRouter
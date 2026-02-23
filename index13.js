import express from "express";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";

const app = express();
app.use(express.json());

// Mount routers
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(8080, () => {
    console.log("Server Started......");
});
import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    res.send("User GET request");
});

userRouter.post("/", (req, res) => {
    res.send("User POST request");
});

export default userRouter;
// import express from "express";

// const userRouter = express.Router();

// userRouter.get("/", (req, res) => {
//     res.send("User GET request");
// });

// userRouter.post("/", (req, res) => {
//     res.send("User POST request");
// });

// export default userRouter;


import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";
const userRouter = express.Router();
// userRouter.use()
userRouter.get("/", getUsers);
userRouter.post("/", createUser);
export default userRouter;
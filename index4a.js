// import express from "express";

// const app = express();

// app.get("/:num1/:num2", (req, res) => {
//     const num1 = Number(req.params.num1);
//     const num2 = Number(req.params.num2);
//     const sum = num1 + num2;
//     // console.log(sum)
//     res.send(`Sum is ${sum}`);
// });

// app.listen(8080, () => {
//     console.log("Server started at http://localhost:8080");
// });

// http://localhost:8080/4/5
// http://localhost:8080/x/y
// http://localhost:8080/x/4/
// http://localhost:8080/4/5
// http://localhost:8080/4/5
// http://localhost:8080/a/b/c/d
import express from "express";

const app = express();

app.get("/:a/:b/:c/:d", (req, res) => {
    res.send("hello");
});

app.listen(8080, () => {
    console.log("Server started at http://localhost:8080");
});

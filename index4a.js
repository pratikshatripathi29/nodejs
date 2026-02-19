import express from "express";

const app = express();

app.get("/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    const sum = num1 + num2;
    // console.log(sum)

    res.send(`Sum is ${sum}`);
});

app.listen(8080, () => {
    console.log("Server started at http://localhost:8080");
});

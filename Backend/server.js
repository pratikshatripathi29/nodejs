import express from "express"
const app = express();

const PORT = 8000;

app.get("/baka", (req,res)=>{
    res.send("Hello Pratiksha is BAKAyaro")
})
app.get("/", (req,res)=>{
    res.send(`
        <h4> Pratiksha Pagal haii</h4>
        `)
})

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT} `);
} )
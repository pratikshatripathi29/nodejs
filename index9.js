import express from 'express'
const app=express()
app.listen(8080)
const logger=(req,res,next)=>{
    req.message="This is message"
    next()
}
app.get("/",logger,(req,res)=>{
    // app.use(logger);
    // res.end();
    req.json(req.url)
    console.log(req.message)

    // res.json({name:"John","age":21});
    // res.send({name:"John","age":21});


})
app.get("/home",(req,res)=>{
    // console.log(req.message)
    req.json(req.url)
    console.log(req.message)

})


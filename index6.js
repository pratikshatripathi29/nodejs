import express from 'express'
const app=express()
app.listen(8080)
app.get("",(req,res)=>
{
    res.send("hell"+req.query.name+req.query.age)  //http://localhost:8080/?name=ki&age=43
})


// import express from 'express'
// const app=express()
// app.listen(8080)
// app.get("",(req,res)=>
// {
//     res.send("hell"+req.query.name)  //http://localhost:8080/?name=ki
// })


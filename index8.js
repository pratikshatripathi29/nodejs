import express from 'express'

const app = express()

app.listen(8080, () => {
    console.log("Server started at http://localhost:8080")
})

app.get("/", (req, res) => {
    const users = [
        {
            name: "John",
            email: "john@gmail.com",
            role: "student"
        },
        {
            name: "Cathy",
            email: "cathy@gmail.com",
            role: "student"
        },
        {
            name: "Admin",
            email: "admin@gmail.com",
            role: "admin"
        }
    ]

    res.send(users)
})


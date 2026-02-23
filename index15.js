import express from "express";
import jwt from "jsonwebtoken";
const app=express()
const SECRET ="lpu";
const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDE2NSwiZXhwIjoxNzcxODM3NzY1fQ.41E1Q7ftnKnpGWGe9Eq2YhL1HvJEg_if3ID_7LX1ysI"
const user=jwt.verify(token,SECRET)
console.log(user)
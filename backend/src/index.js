import express from "express"
import dotenv from 'dotenv'
import authRoutes from "./routes/auth.route.js";
dotenv.config()

import {connectDB} from './lib/db.js'

const PORT = process.env.PORT 
const MONGODB_URI = process.env.MONGODB_URI

const app = express();

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>{
    console.log("Server is running on  Port : "+PORT)
    connectDB()
})      
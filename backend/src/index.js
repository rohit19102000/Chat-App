import express from "express"
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
dotenv.config()


import {connectDB} from './lib/db.js'

const PORT = process.env.PORT 
const MONGODB_URI = process.env.MONGODB_URI

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.listen(PORT,()=>{
    console.log("Server is running on  Port : "+PORT)
    connectDB()
})      
import express from "express";
import cors from "cors"
import accountRoute from "./routes/account.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
const app = express()
const port = 3001
dotenv.config()


//middlewares
app.use(cors({
    credentials:true,
    origin: "http://localhost:3000",
}))
app.use(express.json())
app.use(cookieParser())
app.use('/Account', accountRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.response.status || 500;
    const errorMessage = err.response.data.message || "Something went wrong";
    
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(port, ()=>{
    console.log("App connected, listening to port 3001")
})

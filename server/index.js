import express from "express";
import cors from "cors"
import accountRoute from "./routes/account.js"
const app = express()
const port = 3001


//middlewares
app.use(cors())
app.use(express.json())
app.use('/Account', accountRoute)

app.use((err,req,res,next)=>{
    const errorStatus = err.response.status || 500;
    const errorMessage = err.response.data.message || "Something went wrong";
    
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    })
})

app.listen(port, ()=>{
    console.log("App connected, listening to port 3001")
})

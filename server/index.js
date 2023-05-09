import express  from "express";
import cors from "cors"
const app = express()
const port = 3001


//middlewares
app.use(cors())
app.use('/Account/', accountRoute)

app.listen(port, ()=>{
    console.log("App connected, listening to port 3001")
})
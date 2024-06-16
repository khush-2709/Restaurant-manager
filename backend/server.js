import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import cartRouter from "./routes/cartRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import orderRouter from "./routes/orderRoute.js"




//app config
const app=express()
const port = 4000

//middleware
//req from frontend to backend is parsed using this
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

//mount the uploads folder at this endpoint
app.use("/images",express.static("uploads"))

app.use("/api/user",userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req,res)=>{
    res.send("API Working")
})

//run express server
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

//mongodb+srv://khush0704:V0qYSdvRMhrDMNbx@cluster0.38rr8nu.mongodb.net/?



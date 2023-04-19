const express=require("express")
const cors=require("cors")
require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
   return res.send("Api is running")
})
const port=process.env.port||8080
app.listen(port,()=>{
    console.log(`server started on ${process.env.test_server_url}`)
})

const express=require("express")
const app=new express()
const rateLimiter=require("express-rate-limit")
const helmet=require("helmet")
const hpp=require("hpp")
const cors=require("cors")
const router=require("./src/Router/api")
const mongoose = require("mongoose");

app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(express.json({limit:"20mb"}))
app.use(express.urlencoded({extended:true}))

let limiter=rateLimiter({windowMs:15*60*100,max:3000})
app.use(limiter)

let URL="mongodb+srv://nimul:nahid123@cluster0.631m7xq.mongodb.net/FoodApis";
let OPTION={user:'nimul',pass:'nahid123',autoIndex:true};

mongoose.connect(URL,OPTION).then((res)=>{
    console.log("Database Connection Success")
}).catch((err)=>{
    console.log(err)
})

app.set('etag',false)
app.use("/api",router)
app.use(express.static('vite-project/dist'))
app.get('*',function (req,res){
    req.sendFile(__dirname,'vite-project','dist','index.html')
})
module.exports=app;
import express from "express";
const app = express();


app.get("/", (req,res, next)=>{
    res.send("tour booking api");
})


app.listen(process.env.PORT || 8091 , ()=> {console.log("Server started ...")});
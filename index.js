import express from "express";

const app = express();
const PORT = 5000;


app.get('/',function(req,res){
    res.send("💖💖💖💖💖💖💖💖Welcome to express 💖💖💖💖💖💖💖💖");
})

app.listen(PORT,()=>{

    console.log(`Server is running on port ${PORT}`);
})
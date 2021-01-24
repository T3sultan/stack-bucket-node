const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Hello React Native Dev</h1>");
})

app.listen(8080, ()=>{
    console.log("Server listenin on port 8080");
})
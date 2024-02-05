require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 634;
const products_routes = require("./routes/products");
const connectDB = require("./db/connect");
const { configDotenv } = require("dotenv");
app.get("/",(req,res)=>{
    res.send("Hey guys welcome to my series of rest api development ");
})

app.use("/api/products", products_routes);


const start = async() =>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
           console.log(PORT,'Yes is connected');
           
        });
    } catch (error) {

        console.log(error);
    }
}
start();

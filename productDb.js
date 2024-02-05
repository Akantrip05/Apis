require("dotenv").config();
const Product = require("./models/product");
const database = require("./db/connect");
const proJson = require("./product.json");

const start = async()=>{
    try {
       await database(process.env.database_URL);
       await Product.create(proJson);
       await Product.deleteMany();
       console.log("successfull");
    } catch (error) {
        console.log(error);
    }
};
start();
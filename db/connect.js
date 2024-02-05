const mongoose = require("mongoose");

const url = process.env.database_URL;
const connectDB = () => {
    return mongoose.connect(url);
};
module.exports = connectDB;

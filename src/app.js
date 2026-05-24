const express = require('express');
const app = express();
const connectDB =  require("./config/database");
//require("./config/database");

const {adminAuth} = require('./utils/auth.js');

connectDB().
    then(() =>{
        console.log("Database connected succesfully!!!!!");
        app.listen(7777, () =>{
            console.log("server is  successfully listening to port 7777..") 
        })
    })
    .catch((err) => {
        console.error("Data base Connection not established"+err);
    });


const express = require('express');
const app = express();
const connectDB =  require("./config/database");
const {adminAuth} = require('./utils/auth.js');
const User = require("./models/user.js");

app.post("/signup", async(req, res) =>{
 const userObj = {
    firstName: "Rahul",
    lastName: "Anand",
    emailId: "ajghf@jkjdb.com",
    password: "123456",
    age: 24,   
    gender: "Male" 
 }

 const user = new User(userObj);
 try {
    await user.save();
 } catch (err) {
    res.status(500).send("Error signing up user" + err.message);
 }
 
 res.send("User signed up successfully");
});


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


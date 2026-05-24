const express = require('express');
const app =express();

app.use("/hello",(req,res) => {
res.send("Hello Hello Hello1")
})

app.get("/user",(req,res) =>{
    res.send({"firstName":"Rahul","lastName":"Anand"});
});


app.post("/user",(req,res) =>{
    res.send("Data Saved successfully");
})

app.delete("/user",(req,res) =>{
res.send("Data Deleted successfully");
})


/* app.use("/",(req, res) =>{
    res.send("Hello from server")
}); */


app.listen(7777, () =>{
    console.log("server is  successfully listening to port 7777..")
})
